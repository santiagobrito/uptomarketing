import { NextResponse } from "next/server";
import { getAvailableSlots } from "@/lib/google-calendar";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");

  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json(
      { error: "Parámetro 'date' requerido en formato YYYY-MM-DD" },
      { status: 400 }
    );
  }

  // Verificar que la fecha es un día laborable (lun-vie)
  const dayOfWeek = new Date(date).getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return NextResponse.json({ slots: [] });
  }

  // Verificar que la fecha no es pasada
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (new Date(date) < today) {
    return NextResponse.json({ slots: [] });
  }

  try {
    const slots = await getAvailableSlots(date);
    return NextResponse.json({ slots });
  } catch (error) {
    console.error("Error fetching slots:", error);
    return NextResponse.json(
      { error: "Error al consultar disponibilidad" },
      { status: 500 }
    );
  }
}
