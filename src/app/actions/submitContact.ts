"use server";

import { promises as fs } from "fs";
import path from "path";

interface ContactFormData {
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

export async function submitContact(formData: ContactFormData) {
  try {
    // 1. Honeypot check (Spam Protection)
    if (formData.honeypot) {
      // If the hidden field is filled, it's a bot.
      return { success: false, error: "Spam detected." };
    }

    // 2. Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return { success: false, error: "Missing required fields." };
    }

    // 3. Email validation
    if (!isValidEmail(formData.email)) {
      return { success: false, error: "Please enter a valid email address." };
    }

    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = process.env.SMTP_PORT || 587;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (!SMTP_USER || !SMTP_PASS) {
      console.log('--- NEW CONTACT SUBMISSION ---');
      console.log(formData);
      console.log('------------------------------');
      console.log('Note: To actually send emails, add SMTP_USER and SMTP_PASS to your .env.local file.');
    } else {
      const nodemailer = require('nodemailer');
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
        from: `"Falah Website" <${SMTP_USER}>`,
        to: 'hello@falahbrandhouse.com',
        replyTo: formData.email,
        subject: `New Lead from ${escapeHtml(formData.name)}`,
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
        html: `
          <h3>New Project Inquiry</h3>
          <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(formData.phone || 'N/A')}</p>
          <p><strong>Company:</strong> ${escapeHtml(formData.company || 'N/A')}</p>
          <p><strong>Website:</strong> ${escapeHtml(formData.website || 'N/A')}</p>
          <p><strong>Needs:</strong> ${escapeHtml(formData.needs.join(', ') || 'N/A')}</p>
          <p><strong>Budget:</strong> ${escapeHtml(formData.budget || 'N/A')}</p>
          <p><strong>Timeline:</strong> ${escapeHtml(formData.timeline || 'N/A')}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(formData.message).replace(/\n/g, '<br/>')}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to process submission:", error);
    return { success: false, error: "Internal server error." };
  }
}

