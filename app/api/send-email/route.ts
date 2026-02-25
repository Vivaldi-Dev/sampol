import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            nome,
            apelido,
            email,
            provincia,
            acabamento,
            tamanho,
            avaliacao,
            projeto,
            finalidade,
        } = body;

        await resend.emails.send({
            from: "SAMPOOL <onboarding@resend.dev>",
            to: ["sampool@gmail.com"],
            subject: "Novo pedido de orçamento – Piscina",
            html: `
  <div style="font-family: Arial, sans-serif; background:#f3f4f6; padding:24px;">
    <div style="
      max-width:600px;
      margin:auto;
      background:#ffffff;
      border-radius:12px;
      padding:24px;
      box-shadow:0 10px 25px rgba(0,0,0,0.08);
    ">

      <h2 style="
        text-align:center;
        color:#0891b2;
        margin-bottom:8px;
      ">
        🏊 Novo Pedido de Orçamento
      </h2>

      <p style="
        text-align:center;
        color:#6b7280;
        margin-bottom:24px;
      ">
        Um novo cliente preencheu o formulário do site
      </p>

      <table style="width:100%; border-collapse:collapse; font-size:14px;">
        <tr>
          <td style="padding:10px; font-weight:bold;">Nome</td>
          <td style="padding:10px;">${nome} ${apelido}</td>
        </tr>
        <tr style="background:#f9fafb;">
          <td style="padding:10px; font-weight:bold;">Email</td>
          <td style="padding:10px;">${email}</td>
        </tr>
        <tr>
          <td style="padding:10px; font-weight:bold;">Província</td>
          <td style="padding:10px;">${provincia}</td>
        </tr>
        <tr style="background:#f9fafb;">
          <td style="padding:10px; font-weight:bold;">Acabamento</td>
          <td style="padding:10px;">${acabamento}</td>
        </tr>
        <tr>
          <td style="padding:10px; font-weight:bold;">Tamanho</td>
          <td style="padding:10px;">${tamanho}</td>
        </tr>
        <tr style="background:#f9fafb;">
          <td style="padding:10px; font-weight:bold;">Avaliação técnica</td>
          <td style="padding:10px;">${avaliacao}</td>
        </tr>
        <tr>
          <td style="padding:10px; font-weight:bold;">Projeto existente</td>
          <td style="padding:10px;">${projeto}</td>
        </tr>
        <tr style="background:#f9fafb;">
          <td style="padding:10px; font-weight:bold;">Finalidade</td>
          <td style="padding:10px;">${finalidade}</td>
        </tr>
      </table>

      <hr style="margin:24px 0;" />

      <p style="
        font-size:12px;
        color:#9ca3af;
        text-align:center;
      ">
        Email enviado automaticamente pelo formulário do site.
      </p>
    </div>
  </div>
`,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error(error);
        return Response.json(
            { success: false, error: "Erro ao enviar email" },
            { status: 500 }
        );
    }
}