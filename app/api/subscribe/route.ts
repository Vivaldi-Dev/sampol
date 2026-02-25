import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json(
        { success: false, message: "Email é obrigatório" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "SAMPOOL <onboarding@resend.dev>",
      to: ["nobelavivaldi@gmail.com"], 
      subject: "Nova subscrição no site",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6">
          <h2 style="color:#060B2D">Nova subscrição</h2>
          <p>Um novo utilizador subscreveu a newsletter.</p>
          <hr />
          <p><strong>Email:</strong> ${email}</p>
          <p style="font-size:12px;color:#777">
            Enviado automaticamente pelo website SAMPOOL
          </p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, message: "Erro ao subscrever" },
      { status: 500 }
    );
  }
}