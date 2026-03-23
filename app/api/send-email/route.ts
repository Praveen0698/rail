import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { fromName, fromEmail, replyTo, to, cc, bcc, subject, body } =
      await req.json();

    // --- Validate required fields ---
    if (!to || !Array.isArray(to) || to.length === 0) {
      return NextResponse.json(
        { success: false, message: "At least one recipient (To) is required" },
        { status: 400 },
      );
    }

    if (!subject || !subject.trim()) {
      return NextResponse.json(
        { success: false, message: "Subject is required" },
        { status: 400 },
      );
    }

    if (!body || !body.trim()) {
      return NextResponse.json(
        { success: false, message: "Email body cannot be empty" },
        { status: 400 },
      );
    }

    // --- Create Zoho SMTP transporter ---
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: fromEmail, // your-zoho@zoho.in
        pass: process.env.EMAIL_PASS, // app-specific password
      },
    });

    // --- Build mail options ---
    const senderName = fromName?.trim() || "Sender";
    const senderEmail = fromEmail; // Zoho requires the authenticated user as the from address
    const replyToAddr = replyTo?.trim() || fromEmail?.trim() || senderEmail;

    const mailOptions: nodemailer.SendMailOptions = {
      from: `"${senderName}" <${senderEmail}>`,
      to: to.join(", "),
      replyTo: replyToAddr,
      subject: subject.trim(),
      html: body,
      text: body.replace(/<[^>]*>/g, ""),
    };

    // Add Cc if provided
    if (cc && Array.isArray(cc) && cc.length > 0) {
      mailOptions.cc = cc.join(", ");
    }

    // Add Bcc if provided
    if (bcc && Array.isArray(bcc) && bcc.length > 0) {
      mailOptions.bcc = bcc.join(", ");
    }

    // --- Send the email ---
    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      messageId: info.messageId,
    });
  } catch (error: unknown) {
    console.error("Mail Error:", error);

    const message =
      error instanceof Error ? error.message : "Failed to send email";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
