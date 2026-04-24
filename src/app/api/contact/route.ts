import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required." }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
            to: "vaidnyanithakare19@gmail.com",
            replyTo: email,
            subject: `📬 New message from ${name} — Portfolio Contact`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f2223; color: #e2e8f0; border-radius: 12px; overflow: hidden;">
                    <div style="background: linear-gradient(135deg, #00f6ff20, #0f2223); padding: 32px; border-bottom: 1px solid #1a3638;">
                        <h1 style="margin:0; font-size: 22px; color: #00f6ff;">📬 New Portfolio Enquiry</h1>
                        <p style="margin: 8px 0 0; color: #94a3b8; font-size: 14px;">Someone reached out via your portfolio contact form</p>
                    </div>
                    <div style="padding: 32px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1a3638; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; width: 120px;">From</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1a3638; color: #e2e8f0; font-weight: 600;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1a3638; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1a3638;"><a href="mailto:${email}" style="color: #00f6ff; text-decoration: none;">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Message</td>
                                <td style="padding: 12px 0; color: #e2e8f0; line-height: 1.6; white-space: pre-line;">${message}</td>
                            </tr>
                        </table>
                        <div style="margin-top: 24px; padding: 16px; background: #162e2f; border-radius: 8px; border-left: 3px solid #00f6ff;">
                            <p style="margin: 0; color: #64748b; font-size: 12px;">💡 Hit <strong style="color:#00f6ff;">Reply</strong> in Gmail to respond directly to ${name}.</p>
                        </div>
                    </div>
                    <div style="padding: 16px 32px; background: #0a1a1b; border-top: 1px solid #1a3638;">
                        <p style="margin: 0; color: #334155; font-size: 11px;">Sent via Vaidnyani Thakare's Portfolio · vaidnyanithakare19@gmail.com</p>
                    </div>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Email send error:", error);
        return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
    }
}
