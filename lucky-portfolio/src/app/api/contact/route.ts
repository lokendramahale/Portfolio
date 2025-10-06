import { z } from "zod";
import nodemailer from "nodemailer";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  const json = await request.json();
  const parse = schema.safeParse(json);
  if (!parse.success) {
    return new Response(JSON.stringify({ error: "Invalid input" }), { status: 400 });
  }

  const { name, email, message } = parse.data;

  try {
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      console.warn("SMTP env not configured; falling back to console log");
      console.log({ name, email, message });
      return new Response(JSON.stringify({ ok: true, fallback: true }), { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `Portfolio <${user}>`,
      to: process.env.CONTACT_TO || user,
      replyTo: email,
      subject: `New message from ${name}`,
      text: message,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send" }), { status: 500 });
  }
}
