import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, empresa, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    // Log para ahora, después conectar con Resend
    console.log("[Contact] New message from:", nombre, email, empresa);
    console.log("[Contact] Message:", mensaje);

    // TODO: Enviar email con Resend cuando esté configurado

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact] Error:", error);
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 });
  }
}
