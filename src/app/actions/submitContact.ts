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
        subject: `New Lead from ${formData.name}`,
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
        html: `
          <h3>New Project Inquiry</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'N/A'}</p>
          <p><strong>Company:</strong> ${formData.company || 'N/A'}</p>
          <p><strong>Website:</strong> ${formData.website || 'N/A'}</p>
          <p><strong>Needs:</strong> ${formData.needs.join(', ') || 'N/A'}</p>
          <p><strong>Budget:</strong> ${formData.budget || 'N/A'}</p>
          <p><strong>Timeline:</strong> ${formData.timeline || 'N/A'}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br/>')}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
    }

    // Still save to local DB as a backup
    const submission = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...formData,
    };
    
    const dbPath = path.join(process.cwd(), "submissions.json");
    let submissions = [];
    try {
      const fileData = await fs.readFile(dbPath, "utf-8");
      submissions = JSON.parse(fileData);
    } catch {}

    submissions.push(submission);
    await fs.writeFile(dbPath, JSON.stringify(submissions, null, 2));

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error("Failed to process submission:", error);
    return { success: false, error: "Internal server error." };
  }
}

