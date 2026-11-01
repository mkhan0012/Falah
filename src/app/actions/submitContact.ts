"use server";

import nodemailer from "nodemailer";
import { headers } from "next/headers";
import { rateLimit } from "@/lib/rateLimit";
import { saveFailedSubmission } from "@/lib/storage";

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
}

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
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

    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = process.env.SMTP_PORT || 587;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (!SMTP_USER || !SMTP_PASS) {
      console.log('--- NEW CONTACT SUBMISSION (SIMULATED SECURE INTAKE) ---');
      console.log(`Lead: ${data.name} <${data.email}> | Company: ${data.company || 'N/A'}`);
      console.log(`Scope: ${data.needs.join(', ') || 'N/A'} | Budget: ${data.budget || 'N/A'}`);
      console.log('-------------------------------------------------------');
    } else {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: false,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"Vyoma Media Intake" <${SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || 'hello@vyomamedia.com',
        replyTo: data.email,
        subject: `New Project Inquiry: ${escapeHtml(data.name)} [${escapeHtml(data.company || 'Independent')}]`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nCompany: ${data.company || 'N/A'}\nWebsite: ${data.website || 'N/A'}\nNeeds: ${data.needs.join(', ') || 'N/A'}\nBudget: ${data.budget || 'N/A'}\nTimeline: ${data.timeline || 'N/A'}\n\nMessage:\n${data.message}`,
        html: `
          <div style="font-family: sans-serif; color: #172B3A; max-width: 600px; line-height: 1.6;">
            <h2 style="color: #172B3A; border-bottom: 2px solid #7899B0; padding-bottom: 8px;">New Project Inquiry — VYOMA Media</h2>
            <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
            <p><strong>Phone:</strong> ${escapeHtml(data.phone || 'N/A')}</p>
            <p><strong>Company:</strong> ${escapeHtml(data.company || 'N/A')}</p>
            <p><strong>Website:</strong> ${escapeHtml(data.website || 'N/A')}</p>
            <p><strong>Capabilities Needed:</strong> ${escapeHtml(data.needs.join(', ') || 'N/A')}</p>
            <p><strong>Capital Range:</strong> ${escapeHtml(data.budget || 'N/A')}</p>
            <p><strong>Target Timeline:</strong> ${escapeHtml(data.timeline || 'N/A')}</p>
            <br/>
            <div style="background: #F1F3F1; padding: 16px; border-left: 3px solid #7899B0;">
              <strong>Strategic Brief / Message:</strong>
              <p style="white-space: pre-wrap; margin-top: 8px;">${escapeHtml(data.message)}</p>
            </div>
          </div>
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error("SMTP Error, invoking safe fallback store:", emailError);
        await saveFailedSubmission('contact', data);
        return { success: true, fallback: true };
      }
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to process submission:", error);
    return { success: false, error: "Internal server error." };
  }
}
