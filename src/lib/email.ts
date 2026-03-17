import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendBookingConfirmation(params: {
  to: string;
  name: string;
  date: string;
  time: string;
  meetLink: string;
  company: string;
}) {
  if (!resend) {
    console.log("[Email Mock] Booking confirmation would be sent to:", params.to);
    return { success: true, mock: true };
  }

  const formattedDate = new Date(params.date).toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  await resend.emails.send({
    from: process.env.EMAIL_FROM || "Up To Marketing <hola@uptomarketing.com>",
    to: params.to,
    subject: `Tu reunión con Up To Marketing está confirmada — ${formattedDate}`,
    html: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1A1A2E;">
        <div style="background: #0F3D6B; padding: 32px; text-align: center;">
          <h1 style="color: white; font-size: 20px; margin: 0;">UP <span style="color: #4A9FE5; font-weight: 300; font-style: italic;">to</span> MARKETING</h1>
        </div>

        <div style="padding: 32px;">
          <h2 style="color: #185FA5; font-size: 24px;">Hola ${params.name},</h2>

          <p style="font-size: 16px; line-height: 1.6;">
            Tu reunión ha sido confirmada. Aquí tienes los detalles:
          </p>

          <div style="background: #F5F6F8; border-left: 4px solid #C17832; padding: 20px; border-radius: 8px; margin: 24px 0;">
            <p style="margin: 0 0 8px 0;"><strong>Fecha:</strong> ${formattedDate}</p>
            <p style="margin: 0 0 8px 0;"><strong>Hora:</strong> ${params.time}h (hora España)</p>
            <p style="margin: 0 0 8px 0;"><strong>Duración:</strong> 30 minutos</p>
            <p style="margin: 0;"><strong>Enlace Google Meet:</strong> <a href="${params.meetLink}" style="color: #185FA5;">${params.meetLink}</a></p>
          </div>

          <h3 style="color: #185FA5; margin-top: 32px;">Para preparar la reunión</h3>

          <p style="font-size: 16px; line-height: 1.6;">
            Para aprovechar al máximo los 30 minutos, sería útil que nos compartas:
          </p>

          <ul style="font-size: 16px; line-height: 1.8; color: #6B7280;">
            <li>La URL de la web de tu despacho (si tienes)</li>
            <li>¿Estás invirtiendo actualmente en publicidad digital? ¿Cuánto aproximadamente?</li>
            <li>¿Usas algún CRM o herramienta de gestión de clientes?</li>
            <li>¿Cuál es tu objetivo principal a 6 meses? (más clientes, mejor posicionamiento, automatizar procesos...)</li>
          </ul>

          <p style="font-size: 16px; line-height: 1.6;">
            Puedes responder directamente a este email con la información. No es obligatorio, pero nos permite preparar la reunión mejor.
          </p>

          <div style="text-align: center; margin: 32px 0;">
            <a href="${params.meetLink}" style="display: inline-block; background: #C17832; color: white; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
              Acceder a la reunión
            </a>
          </div>

          <p style="font-size: 14px; color: #6B7280; line-height: 1.6;">
            Si necesitas cambiar la hora o cancelar la reunión, responde a este email y lo gestionamos.
          </p>
        </div>

        <div style="background: #F5F6F8; padding: 24px; text-align: center; border-top: 1px solid #E5E7EB;">
          <p style="font-size: 12px; color: #6B7280; margin: 0;">
            Up To Marketing · Marketing digital para despachos profesionales<br>
            hola@uptomarketing.com · uptomarketing.com
          </p>
        </div>
      </div>
    `,
  });

  return { success: true };
}
