import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetEmail = searchParams.get("to") || process.env.CONTACT_EMAIL || "info@vyomamedia.co.in";

  // Allow dynamic host/port override via query param for real-time testing
  const host = searchParams.get("host") || process.env.SMTP_HOST || "smtp.titan.email";
  const port = Number(searchParams.get("port") || process.env.SMTP_PORT || 465);
  const isSecure = searchParams.get("secure") ? searchParams.get("secure") === "true" : (process.env.SMTP_SECURE === "true" || port === 465);

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  const diagnostics = {
    testedHost: host,
    testedPort: port,
    isSecure,
    hasUser: !!user,
    userPreview: user ? `${user.substring(0, 3)}***@${user.split("@")[1] || "unknown"}` : "NOT SET (Missing in Vercel)",
    hasPass: !!pass,
    passLength: pass ? pass.length : 0,
    targetRecipient: targetEmail,
  };

  // 1. Check if environment variables are present
  if (!user || !pass) {
    return NextResponse.json(
      {
        status: "FAILED_MISSING_CREDENTIALS",
        message: "SMTP_USER or SMTP_PASS is missing in Vercel. Make sure you added them in Vercel Settings -> Environment Variables and clicked REDEPLOY.",
        diagnostics,
      },
      { status: 400 }
    );
  }

  // 2. Initialize Nodemailer
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: isSecure,
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2",
    },
    connectionTimeout: 15000,
  });

  try {
    // 3. Test verification with Titan Mail
    await transporter.verify();

    // 4. Send actual test email
    const info = await transporter.sendMail({
      from: `"Vyoma Media System" <${user}>`,
      to: targetEmail,
      subject: "⚡ Live Test Email: Titan Mail is Working!",
      text: `Hello! If you received this email in your inbox, your Titan Mail configuration for Vyoma Media is 100% active and working.\n\nServer: ${host}\nPort: ${port}\nSent at: ${new Date().toISOString()}`,
      html: `
        <div style="font-family: sans-serif; color: #172B3A; max-width: 500px; padding: 24px; border: 1px solid #7899B0; border-radius: 12px;">
          <h2 style="color: #172B3A; margin-top: 0;">⚡ Titan Mail Verified!</h2>
          <p>If you are reading this email in your Titan inbox, your website intake configuration is <strong>100% active and functional</strong>.</p>
          <p style="font-size: 13px; color: #7899B0; font-family: monospace;">Server: ${host} | Port: ${port} | User: ${user}</p>
        </div>
      `,
    });

    return NextResponse.json({
      status: "SUCCESS",
      message: `Test email sent successfully to ${targetEmail}! Message ID: ${info.messageId}`,
      diagnostics,
    });
  } catch (err: unknown) {
    const error = err as { code?: string; response?: string; message?: string; command?: string };
    
    let advice = "Unknown error occurred.";
    if (error.code === "EAUTH" || (error.response && error.response.includes("535"))) {
      advice = "Authentication Failed (535): Titan rejected this password. If your webmail is at secureserver.titan.email (GoDaddy Titan), make sure you use your exact Titan password, or generate an App Password in Titan Settings > Preferences > Security (2FA) if Two-Factor Authentication is active.";
    } else if (error.code === "ETIMEDOUT" || error.code === "ECONNREFUSED") {
      advice = "Connection Timed Out: Try testing with ?port=587&secure=false";
    }

    return NextResponse.json(
      {
        status: "FAILED_SMTP_ERROR",
        errorMessage: error.message || String(err),
        errorCode: error.code,
        smtpResponse: error.response,
        command: error.command,
        diagnostics,
        solution: advice,
        tryAlso: [
          `https://vyomamedia.co.in/api/test-email?host=smtpout.secureserver.net`,
          `https://vyomamedia.co.in/api/test-email?host=smtp.titan.email&port=587&secure=false`,
        ],
      },
      { status: 500 }
    );
  }
}
