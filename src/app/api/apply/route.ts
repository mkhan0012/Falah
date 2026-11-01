import { NextResponse } from 'next/server';
import nodemailer, { SendMailOptions } from 'nodemailer';
import { rateLimit } from '@/lib/rateLimit';
import { saveFailedSubmission } from '@/lib/storage';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_MIME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);
const ALLOWED_EXTENSIONS = new Set(['pdf', 'doc', 'docx']);

const escapeHtml = (unsafe: string) => {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const name = (formData.get('name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const role = (formData.get('role') as string)?.trim();
    const portfolioUrl = (formData.get('portfolioUrl') as string)?.trim();
    const linkedinUrl = (formData.get('linkedinUrl') as string)?.trim();
    const coverLetter = (formData.get('coverLetter') as string)?.trim();
    const resume = formData.get('resume') as File | null;

    // 1. Strict Validation
    if (!name || !email || !role || !coverLetter || !linkedinUrl) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (name.length > 100 || role.length > 100) {
      return NextResponse.json({ error: 'Field length exceeds maximum allowed.' }, { status: 400 });
    }

    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    if (coverLetter.length > 10000) {
      return NextResponse.json({ error: 'Cover letter exceeds length limit.' }, { status: 400 });
    }

    // 2. IP & Email Rate Limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const clientIp = forwarded ? forwarded.split(',')[0].trim() : (request.headers.get('x-real-ip') || 'unknown-ip');
    
    if (clientIp !== 'unknown-ip') {
      const ipLimit = rateLimit(`ip_apply:${clientIp}`, 5, 60000);
      if (!ipLimit.success) {
        return NextResponse.json({ error: 'Too many requests from your IP. Please try again later.' }, { status: 429 });
      }
    }

    const emailLimit = rateLimit(`email_apply:${email.toLowerCase()}`, 3, 60000);
    if (!emailLimit.success) {
      return NextResponse.json({ error: 'Too many applications submitted. Please try again later.' }, { status: 429 });
    }

    // 3. File Safety & Validation
    let buffer: Buffer | undefined = undefined;
    if (resume && resume.size > 0) {
      if (resume.size > MAX_FILE_SIZE) {
        return NextResponse.json({ error: 'Resume file size exceeds the 5MB limit.' }, { status: 413 });
      }

      const fileExt = resume.name.split('.').pop()?.toLowerCase() || '';
      if (!ALLOWED_EXTENSIONS.has(fileExt)) {
        return NextResponse.json({ error: 'Only PDF or DOC/DOCX resumes are accepted.' }, { status: 400 });
      }

      if (resume.type && !ALLOWED_MIME_TYPES.has(resume.type)) {
        return NextResponse.json({ error: 'Invalid resume file MIME format.' }, { status: 400 });
      }

      buffer = Buffer.from(await resume.arrayBuffer());
    }

    const payloadData = { name, email, role, portfolioUrl, linkedinUrl, coverLetter, hasResume: !!resume };

    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = process.env.SMTP_PORT || 587;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    const mailOptions: SendMailOptions = {
      from: SMTP_USER ? `"VYOMA Careers" <${SMTP_USER}>` : '"VYOMA Careers" <careers@vyomamedia.com>',
      to: process.env.CAREERS_EMAIL || 'careers@vyomamedia.com',
      replyTo: email,
      subject: `Application: ${escapeHtml(role)} — ${escapeHtml(name)} | VYOMA Media`,
      text: `
Role: ${role}
Name: ${name}
Email: ${email}
Portfolio: ${portfolioUrl || 'N/A'}
LinkedIn: ${linkedinUrl || 'N/A'}

Cover Letter:
${coverLetter}
      `,
      html: `
        <div style="font-family: sans-serif; color: #172B3A; max-width: 600px; line-height: 1.6;">
          <h2 style="color: #172B3A; border-bottom: 2px solid #7899B0; padding-bottom: 8px;">Role Application: ${escapeHtml(role)}</h2>
          <p><strong>Candidate:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p><strong>Portfolio:</strong> ${portfolioUrl ? `<a href="${escapeHtml(portfolioUrl)}">${escapeHtml(portfolioUrl)}</a>` : 'N/A'}</p>
          <p><strong>LinkedIn:</strong> ${linkedinUrl ? `<a href="${escapeHtml(linkedinUrl)}">${escapeHtml(linkedinUrl)}</a>` : 'N/A'}</p>
          <br/>
          <div style="background: #F1F3F1; padding: 16px; border-left: 3px solid #7899B0;">
            <strong>Statement & Experience:</strong>
            <p style="white-space: pre-wrap; margin-top: 8px;">${escapeHtml(coverLetter)}</p>
          </div>
        </div>
      `,
    };

    if (resume && buffer) {
      mailOptions.attachments = [
        {
          filename: resume.name.replace(/[^a-zA-Z0-9._-]/g, '_'),
          content: buffer,
        }
      ];
    }

    if (!SMTP_USER || !SMTP_PASS) {
      console.log('--- NEW JOB APPLICATION (SIMULATED SECURE INTAKE) ---');
      console.log(`Role: ${role} | Candidate: ${name} <${email}>`);
      console.log(`Attachment: ${resume ? resume.name : 'None'}`);
      console.log('-----------------------------------------------------');
      return NextResponse.json({ success: true, message: 'Application logged successfully.' });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: false, 
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('SMTP Error, fallback to secure storage:', emailError);
      await saveFailedSubmission('job_application', payloadData, buffer, resume?.name);
      return NextResponse.json({ success: true, message: 'Application received (archived safely).' });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    );
  }
}
