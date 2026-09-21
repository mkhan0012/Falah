import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const role = formData.get('role') as string;
    const portfolioUrl = formData.get('portfolioUrl') as string;
    const linkedinUrl = formData.get('linkedinUrl') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const resume = formData.get('resume') as File | null;

    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = process.env.SMTP_PORT || 587;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    const mailOptions: any = {
      from: SMTP_USER ? `"Falah Careers" <${SMTP_USER}>` : '"Falah Careers" <careers@falahbrandhouse.com>',
      to: 'careers@falahbrandhouse.com',
      replyTo: email,
      subject: `New Application: ${escapeHtml(role)} - ${escapeHtml(name)}`,
      text: `
        New Job Application
        
        Role: ${role}
        Name: ${name}
        Email: ${email}
        Portfolio: ${portfolioUrl || 'N/A'}
        LinkedIn: ${linkedinUrl || 'N/A'}
        
        Cover Letter:
        ${coverLetter}
      `,
      html: `
        <h3>New Job Application: ${escapeHtml(role)}</h3>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Portfolio:</strong> ${portfolioUrl ? `<a href="${escapeHtml(portfolioUrl)}">${escapeHtml(portfolioUrl)}</a>` : 'N/A'}</p>
        <p><strong>LinkedIn:</strong> ${linkedinUrl ? `<a href="${escapeHtml(linkedinUrl)}">${escapeHtml(linkedinUrl)}</a>` : 'N/A'}</p>
        <br/>
        <p><strong>Cover Letter:</strong></p>
        <p>${escapeHtml(coverLetter).replace(/\n/g, '<br/>')}</p>
      `,
    };

    if (resume) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      mailOptions.attachments = [
        {
          filename: resume.name,
          content: buffer,
        }
      ];
    }

    if (!SMTP_USER || !SMTP_PASS) {
      console.log('--- NEW JOB APPLICATION ---');
      console.log(`Role: ${role}, Name: ${name}, Email: ${email}`);
      console.log(`Attached Resume: ${resume ? resume.name : 'None'}`);
      console.log('---------------------------');
      console.log('Note: To actually send emails with attachments, add SMTP_USER and SMTP_PASS to your .env.local file.');
      
      return NextResponse.json({ success: true, message: 'Simulated success (no SMTP credentials found)' });
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

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending application email:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
