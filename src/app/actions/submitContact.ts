"use server";

import nodemailer from "nodemailer";
import { headers } from "next/headers";
import { rateLimit } from "@/lib/rateLimit";
import { saveFailedSubmission } from "@/lib/storage";
import { siteConfig } from "@/config/site";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  needs: string[];
  budget?: string;
  timeline?: string;
  message: string;
  honeypot?: string;
  source?: string;
}

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
};

const sanitizeHeader = (val: string) => {
  return val.replace(/[\r\n]+/g, " ").trim();
};

const escapeHtml = (unsafe: string) => {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export async function submitContact(rawInput: ContactFormData | FormData) {
  try {
    let data: ContactFormData;

    if (rawInput instanceof FormData) {
      const needsRaw = rawInput.get("services")?.toString() || "";
      data = {
        name: rawInput.get("name")?.toString()?.trim() || "",
        email: rawInput.get("email")?.toString()?.trim() || "",
        phone: rawInput.get("phone")?.toString()?.trim() || undefined,
        company: rawInput.get("company")?.toString()?.trim() || undefined,
        website: rawInput.get("website")?.toString()?.trim() || undefined,
        needs: needsRaw ? needsRaw.split(",").map((s) => s.trim().slice(0, 50)).slice(0, 10) : [],
        budget: rawInput.get("budget")?.toString()?.trim() || undefined,
        timeline: rawInput.get("timeline")?.toString()?.trim() || undefined,
        message: rawInput.get("message")?.toString()?.trim() || "",
        honeypot: rawInput.get("honeypot")?.toString() || undefined,
        source: rawInput.get("source")?.toString()?.trim() || undefined,
      };
    } else {
      data = {
        name: rawInput.name?.trim() || "",
        email: rawInput.email?.trim() || "",
        phone: rawInput.phone?.trim(),
        company: rawInput.company?.trim(),
        website: rawInput.website?.trim(),
        needs: Array.isArray(rawInput.needs) ? rawInput.needs.slice(0, 10).map((n) => String(n).trim().slice(0, 50)) : [],
        budget: rawInput.budget?.trim(),
        timeline: rawInput.timeline?.trim(),
        message: rawInput.message?.trim() || "",
        honeypot: rawInput.honeypot,
        source: rawInput.source?.trim(),
      };
    }

    // 1. Honeypot check (Spam Protection)
    if (data.honeypot) {
      return { success: false, error: "Spam detected." };
    }

    // 2. Strict validation & bounds
    if (!data.name || !data.email || !data.message) {
      return { success: false, error: "Missing required fields." };
    }

    if (data.name.length > 100) {
      return { success: false, error: "Name must be under 100 characters." };
    }

    if (!isValidEmail(data.email)) {
      return { success: false, error: "Please enter a valid email address." };
    }

    if (data.message.length > 5000) {
      return { success: false, error: "Message must be under 5,000 characters." };
    }

    if (data.phone && data.phone.length > 50) {
      return { success: false, error: "Phone number is too long." };
    }

    if (data.company && data.company.length > 120) {
      return { success: false, error: "Company name is too long." };
    }

    if (data.website && data.website.length > 250) {
      return { success: false, error: "Website URL is too long." };
    }

    if (data.budget && data.budget.length > 100) {
      return { success: false, error: "Budget field is too long." };
    }

    if (data.timeline && data.timeline.length > 100) {
      return { success: false, error: "Timeline field is too long." };
    }

    // 3. Multi-tier Rate Limiting (IP + Email)
    let clientIp = "unknown-ip";
    try {
      const headerList = await headers();
      const forwarded = headerList.get("x-forwarded-for");
      clientIp = forwarded ? forwarded.split(",")[0].trim() : (headerList.get("x-real-ip") || "unknown-ip");
    } catch {
      // In non-request environments (e.g. tests), ignore headers failure
    }

    if (clientIp !== "unknown-ip") {
      const ipLimit = rateLimit(`ip:${clientIp}`, 5, 60000);
      if (!ipLimit.success) {
        return { success: false, error: "Too many requests from your network. Please try again shortly.", rateLimited: true };
      }
    }

    const emailLimit = rateLimit(`email:${data.email.toLowerCase()}`, 3, 60000);
    if (!emailLimit.success) {
      return { success: false, error: "Too many requests. Please wait a minute before trying again.", rateLimited: true };
    }

    // 4. Official Company Destination Email
    const officialCompanyEmail = process.env.CONTACT_EMAIL || siteConfig.contact.email || "info@vyomamedia.co.in";
    const isRfp = (data.source || "").toLowerCase().includes("rfp") || (data.source || "").toLowerCase().includes("proposal");
    const submissionType = isRfp ? "RFP Proposal Request" : "Start a Project Brief";

    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = process.env.SMTP_PORT || 587;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (!SMTP_USER || !SMTP_PASS) {
      console.warn('⚠️ SMTP credentials not configured (SMTP_USER / SMTP_PASS). Submission logged to fallback storage.');
      console.log(`[${submissionType.toUpperCase()}] From: ${data.name} <${data.email}> | Company: ${data.company || 'N/A'} | Target: ${officialCompanyEmail}`);
      await saveFailedSubmission('contact', { ...data, destinationEmail: officialCompanyEmail, submissionType });
      return { success: true, simulated: true };
    }

    const portNum = Number(SMTP_PORT);
    const isSecure = process.env.SMTP_SECURE === "true" || portNum === 465;

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: portNum,
      secure: isSecure,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2",
      },
      connectionTimeout: 15000,
    });

    const mailOptions = {
      from: `"Vyoma Media Intake" <${SMTP_USER}>`,
      to: officialCompanyEmail,
      replyTo: data.email,
      subject: `[${submissionType.toUpperCase()}] ${sanitizeHeader(data.name)} [${sanitizeHeader(data.company || 'Independent')}]`,
      text: `TYPE: ${submissionType}\n\nClient Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nCompany: ${data.company || 'N/A'}\nWebsite: ${data.website || 'N/A'}\nScope / Services: ${data.needs.join(', ') || 'N/A'}\nBudget / Capital: ${data.budget || 'N/A'}\nTimeline: ${data.timeline || 'N/A'}\n\nStrategic Brief / Message:\n${data.message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #172B3A; max-width: 620px; line-height: 1.6; margin: 0 auto; border: 1px solid #7899B0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #172B3A; color: #F1F3F1; padding: 24px 28px;">
            <span style="font-size: 11px; font-family: monospace; letter-spacing: 0.1em; color: #D3A56C; text-transform: uppercase; font-weight: bold;">
              ${isRfp ? "★ RFP / REQUEST FOR PROPOSAL" : "✦ NEW PROJECT INQUIRY // START A PROJECT"}
            </span>
            <h1 style="margin: 8px 0 0; font-size: 22px; color: #F1F3F1; font-weight: bold; letter-spacing: -0.02em;">
              ${escapeHtml(data.name)} ${data.company ? `— ${escapeHtml(data.company)}` : ""}
            </h1>
          </div>
          
          <div style="padding: 24px 28px; background-color: #FFFFFF;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #7899B0; width: 140px; font-weight: 600;">Client Name:</td>
                <td style="padding: 8px 0; color: #172B3A; font-weight: bold;">${escapeHtml(data.name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #7899B0; font-weight: 600;">Work Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color: #172B3A; font-weight: bold; text-decoration: underline;">${escapeHtml(data.email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #7899B0; font-weight: 600;">Phone / WhatsApp:</td>
                <td style="padding: 8px 0; color: #172B3A;">${escapeHtml(data.phone || 'N/A')}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #7899B0; font-weight: 600;">Company / Brand:</td>
                <td style="padding: 8px 0; color: #172B3A;">${escapeHtml(data.company || 'Independent / Confidential')}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #7899B0; font-weight: 600;">Website URL:</td>
                <td style="padding: 8px 0; color: #172B3A;">${escapeHtml(data.website || 'N/A')}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #7899B0; font-weight: 600;">Target Budget:</td>
                <td style="padding: 8px 0; color: #172B3A; font-weight: bold;">${escapeHtml(data.budget || 'Flexible / Scoping')}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #7899B0; font-weight: 600;">Target Timeline:</td>
                <td style="padding: 8px 0; color: #172B3A;">${escapeHtml(data.timeline || 'Standard')}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #7899B0; font-weight: 600;">Needs / Capabilities:</td>
                <td style="padding: 8px 0; color: #172B3A;">${escapeHtml(data.needs.join(', ') || 'General Growth Strategy')}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding: 18px; background-color: #F1F3F1; border-left: 4px solid #7899B0; border-radius: 6px;">
              <p style="margin: 0 0 6px; font-size: 11px; font-family: monospace; color: #7899B0; text-transform: uppercase; font-weight: bold;">
                Strategic Brief / Goals & Context:
              </p>
              <p style="margin: 0; white-space: pre-wrap; font-size: 14px; color: #172B3A; line-height: 1.6;">
                ${escapeHtml(data.message)}
              </p>
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #DCE6EB; font-size: 12px; color: #7899B0; font-family: monospace;">
              Direct transmission to ${officialCompanyEmail} via VYOMA Media Intake Engine.
            </div>
          </div>
        </div>
      `,
    };

    try {
      const sendResult = await transporter.sendMail(mailOptions);
      console.log(`[SMTP SUCCESS] Dispatched email ID: ${sendResult.messageId} to ${officialCompanyEmail}`);
    } catch (emailError: unknown) {
      const err = emailError as { code?: string; message?: string; response?: string };
      console.error("❌ SMTP Error while sending contact email:", err.message || emailError);
      console.error("❌ Error Code:", err.code, "Response:", err.response);
      await saveFailedSubmission('contact', { ...data, destinationEmail: officialCompanyEmail, submissionType, error: err.message });
      return { success: true, fallback: true };
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to process submission:", error);
    return { success: false, error: "Internal server error." };
  }
}
