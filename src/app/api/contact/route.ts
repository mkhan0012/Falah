import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const { name, email, company, message, type } = data;

    // In a production environment, configure these environment variables
    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = process.env.SMTP_PORT || 587;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (!SMTP_USER || !SMTP_PASS) {
      console.log('--- NEW FORM SUBMISSION ---');
      console.log('Type:', type);
      console.log('Data:', data);
      console.log('---------------------------');
      console.log('Note: To actually send emails, add SMTP_USER and SMTP_PASS to your .env.local file.');
      
      return NextResponse.json({ success: true, message: 'Simulated success (no SMTP credentials found)' });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Falah Website Form" <${SMTP_USER}>`,
      to: 'hello@falahbrandhouse.com', // Change this to the receiver's email
      replyTo: email,
      subject: `New ${type} from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || 'N/A'}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New ${type} Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
