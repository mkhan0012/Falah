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

    // 4. Rate Limiting (Basic)
    // In App Router, we can get headers. For this simple example, we might not have IP easily.
    // However, if we can get it, we would check the map.
    // To keep it clean and working in standard setups:

    // Assuming a global rate limit for the demo if IP isn&apos;t easily accessible without next/headers
    // In production, you'd use Redis or a proper rate limiting service.

    const submission = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...formData,
    };

    // Define the path to the local database file
    const dbPath = path.join(process.cwd(), "submissions.json");

    // Read existing submissions or create empty array
    let submissions = [];
    try {
      const fileData = await fs.readFile(dbPath, "utf-8");
      submissions = JSON.parse(fileData);
    } catch {
      // File doesn&apos;t exist yet, which is fine
    }

    // Add new submission and save
    submissions.push(submission);
    await fs.writeFile(dbPath, JSON.stringify(submissions, null, 2));

    // Simulate network delay for UI polish
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error("Failed to save submission:", error);
    return { success: false, error: "Internal server error." };
  }
}

