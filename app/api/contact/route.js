import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "mmd.2007.1385@gmail.com",
      subject: `پیام جدید از ${name}`,
      replyTo: email,
      text: `
نام: ${name}

ایمیل: ${email}

پیام:
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}