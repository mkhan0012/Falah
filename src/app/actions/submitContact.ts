"use server";

import nodemailer from "nodemailer";
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
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
        name: rawInput.get("name")?.toString() || "",
        email: rawInput.get("email")?.toString() || "",
        phone: rawInput.get("phone")?.toString() || undefined,
        company: rawInput.get("company")?.toString() || undefined,
        website: rawInput.get("website")?.toString() || undefined,
        needs: needsRaw ? needsRaw.split(",").map((s) => s.trim()) : [],
        budget: rawInput.get("budget")?.toString() || undefined,
        timeline: rawInput.get("timeline")?.toString() || undefined,
        message: rawInput.get("message")?.toString() || "",
        honeypot: rawInput.get("honeypot")?.toString() || undefined,
      };
    } else {
      data = rawInput;
    }

    // 1. Honeypot check (Spam Protection)
    if (data.honeypot) {
      return { success: false, error: "Spam detected." };
    }

    // 2. Basic validation
    if (!data.name || !data.email || !data.message) {
      return { success: false, error: "Missing required fields." };
    }

    // 3. Email validation
    if (!isValidEmail(data.email)) {
      return { success: false, error: "Please enter a valid email address." };
    }

    // 4. Rate Limiting
    const rl = rateLimit(data.email, 3, 60000);
    if (!rl.success) {
      return { success: false, error: "Too many requests. Please try again later.", rateLimited: true };
    }

    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = process.env.SMTP_PORT || 587;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (!SMTP_USER || !SMTP_PASS) {
      console.log('--- NEW CONTACT SUBMISSION ---');
      console.log(data);
      console.log('------------------------------');
      console.log('Note: To actually send emails, add SMTP_USER and SMTP_PASS to your .env.local file.');
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
        from: `"Vyoma Media Website" <${SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || 'hello@vyomamedia.com',
        replyTo: data.email,
        subject: `New Lead from ${escapeHtml(data.name)} | Vyoma Media`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
        html: `
          <h3>New Project Inquiry — Vyoma Media</h3>
          <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(data.phone || 'N/A')}</p>
          <p><strong>Company:</strong> ${escapeHtml(data.company || 'N/A')}</p>
          <p><strong>Website:</strong> ${escapeHtml(data.website || 'N/A')}</p>
          <p><strong>Needs:</strong> ${escapeHtml(data.needs.join(', ') || 'N/A')}</p>
          <p><strong>Budget:</strong> ${escapeHtml(data.budget || 'N/A')}</p>
          <p><strong>Timeline:</strong> ${escapeHtml(data.timeline || 'N/A')}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(data.message).replace(/\n/g, '<br/>')}</p>
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error("SMTP Error:", emailError);
        
        // 5. Fallback Storage
        await saveFailedSubmission('contact', data);
        
        // Still return success to user so they aren't blocked
        return { success: true, fallback: true };
      }
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to process submission:", error);
    return { success: false, error: "Internal server error." };
  }
}
