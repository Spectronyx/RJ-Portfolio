import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "rajneesh.sharma2407@gmail.com",
            subject: `New message from ${name}`,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return Response.json({ success: true });
    } catch (error) {
        return Response.json(
            { error: "Failed to send email" },
            { status: 500 },
        );
    }
}
