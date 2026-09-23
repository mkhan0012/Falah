import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), '.data');
const FAILED_SUBMISSIONS_DIR = path.join(DATA_DIR, 'failed_submissions');

/**
 * Ensures the data directory exists.
 */
async function ensureDir(dirPath: string) {
  try {
    await fs.access(dirPath);
  } catch {
    await fs.mkdir(dirPath, { recursive: true });
  }
}

/**
 * Saves a failed submission to the local filesystem as a fallback.
 * @param type 'contact' or 'job_application'
 * @param data The JSON data to save
 * @param fileBuffer Optional file buffer (e.g., resume)
 * @param fileName Optional file name for the attachment
 */
export async function saveFailedSubmission(
  type: 'contact' | 'job_application',
  data: unknown,
  fileBuffer?: Buffer,
  fileName?: string
) {
  try {
    await ensureDir(FAILED_SUBMISSIONS_DIR);

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const id = Math.random().toString(36).substring(2, 9);
    
    // Save JSON data
    const jsonFileName = `${timestamp}_${type}_${id}.json`;
    const jsonPath = path.join(FAILED_SUBMISSIONS_DIR, jsonFileName);
    
    // If there's an attachment, save it alongside the JSON and update the JSON with its local path
    if (fileBuffer && fileName) {
      const ext = path.extname(fileName) || '.pdf';
      const safeName = path.basename(fileName, ext).replace(/[^a-z0-9]/gi, '_').toLowerCase();
      const attachmentFileName = `${timestamp}_${type}_${id}_${safeName}${ext}`;
      const attachmentPath = path.join(FAILED_SUBMISSIONS_DIR, attachmentFileName);
      
      await fs.writeFile(attachmentPath, fileBuffer);
      (data as any)._localAttachmentPath = attachmentPath;
    }

    await fs.writeFile(jsonPath, JSON.stringify(data, null, 2), 'utf-8');
    
    console.log(`[Fallback Storage] Saved failed ${type} submission to ${jsonPath}`);
    return true;
  } catch (error) {
    console.error(`[Fallback Storage] Failed to save ${type} submission to disk:`, error);
    return false;
  }
}
