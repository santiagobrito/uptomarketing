import { NextResponse } from "next/server";
import { createBooking } from "@/lib/google-calendar";
import { sendBookingConfirmation } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validación básica
    // Support both naming conventions (modal sends Spanish field names)
    const date = body.date;
    const time = body.time;
    const firstName = body.firstName || body.nombre;
    const lastName = body.lastName || body.apellido;
    const email = body.email;
    const company = body.company || body.empresa;
    const activity = body.activity || body.actividad;
    const employees = body.employees || body.empleados;
    const challenge = body.challenge || body.retoMarketing;
    const notes = body.notes || body.notasAdicionales;

    if (!date || !time || !firstName || !lastName || !email || !company || !challenge) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // Validar email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Email no válido" },
        { status: 400 }
      );
    }

    const name = `${firstName} ${lastName}`;
    const topic = [
      activity ? `Actividad: ${activity}` : "",
      employees ? `Empleados: ${employees}` : "",
      `Reto principal: ${challenge}`,
      notes ? `Notas: ${notes}` : "",
    ].filter(Boolean).join("\n");

    // Crear evento en Google Calendar con Meet
    const { eventId, meetLink } = await createBooking({
      date,
      time,
      name,
      email,
      company,
      topic,
    });

    // Enviar email de confirmación
    await sendBookingConfirmation({
      to: email,
      name,
      date,
      time,
      meetLink: meetLink || "",
      company,
    });

    return NextResponse.json({
      success: true,
      eventId,
      meetLink,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Error al crear la reunión" },
      { status: 500 }
    );
  }
}
