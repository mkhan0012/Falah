"use server";

import { promises as fs } from "fs";
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
}

export async function submitContact(formData: ContactFormData) {
  try {
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return { success: false, error: "Missing required fields." };
    }

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
    } catch (error) {
      // File doesn't exist yet, which is fine
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
