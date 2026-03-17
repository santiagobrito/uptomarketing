import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const calendar = google.calendar({ version: "v3", auth: oauth2Client });

// === CONFIGURACIÓN DE DISPONIBILIDAD ===
const SLOT_DURATION_MINUTES = 45;
const MIN_ADVANCE_DAYS = 2;
const MAX_ADVANCE_DAYS = 15;
const MAX_BOOKINGS_PER_DAY = 2;

// Horarios por día de la semana (0=dom, 1=lun, 2=mar, 3=mie, 4=jue, 5=vie, 6=sab)
const SCHEDULE: Record<number, { start: number; end: number } | null> = {
  0: null,                    // Domingo: cerrado
  1: { start: 14, end: 19 }, // Lunes: 14:00-19:00
  2: { start: 12, end: 18 }, // Martes: 12:00-18:00
  3: { start: 12, end: 19 }, // Miércoles: 12:00-19:00
  4: { start: 12, end: 19 }, // Jueves: 12:00-19:00
  5: { start: 11, end: 15 }, // Viernes: 11:00-15:00
  6: null,                    // Sábado: cerrado
};

function formatTimeSpain(date: Date): string {
  return date.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/Madrid",
  });
}

function generateTimeSlots(start: Date, end: Date, durationMinutes: number) {
  const slots: { start: Date; end: Date }[] = [];
  let current = new Date(start);
  while (current.getTime() + durationMinutes * 60 * 1000 <= end.getTime()) {
    slots.push({
      start: new Date(current),
      end: new Date(current.getTime() + durationMinutes * 60 * 1000),
    });
    current = new Date(current.getTime() + durationMinutes * 60 * 1000);
  }
  return slots;
}

function isOverlapping(
  slot: { start: Date; end: Date },
  busySlots: { start?: string | null; end?: string | null }[]
) {
  return busySlots.some((busy) => {
    if (!busy.start || !busy.end) return false;
    const busyStart = new Date(busy.start);
    const busyEnd = new Date(busy.end);
    return slot.start < busyEnd && slot.end > busyStart;
  });
}

// Cuenta cuántas reuniones "Consulta:" hay en un día
async function getBookingCountForDate(date: string, calendarId: string): Promise<number> {
  try {
    const startOfDay = new Date(`${date}T00:00:00+02:00`);
    const endOfDay = new Date(`${date}T23:59:59+02:00`);

    const response = await calendar.events.list({
      calendarId,
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      singleEvents: true,
    });

    const bookings = (response.data.items || []).filter(
      (event) => event.summary?.startsWith("Consulta:")
    );
    return bookings.length;
  } catch {
    return 0;
  }
}

export async function getAvailableSlots(date: string) {
  const calendarId = process.env.GOOGLE_CALENDAR_ID || "primary";

  // Verificar día de la semana
  const dateObj = new Date(`${date}T12:00:00+02:00`);
  const dayOfWeek = dateObj.getDay();
  const schedule = SCHEDULE[dayOfWeek];

  // Día cerrado
  if (!schedule) {
    return [];
  }

  // Verificar rango de antelación
  const now = new Date();
  const diffDays = Math.floor((dateObj.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays < MIN_ADVANCE_DAYS || diffDays > MAX_ADVANCE_DAYS) {
    return [];
  }

  const startOfDay = new Date(`${date}T${String(schedule.start).padStart(2, "0")}:00:00+02:00`);
  const endOfDay = new Date(`${date}T${String(schedule.end).padStart(2, "0")}:00:00+02:00`);

  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_REFRESH_TOKEN) {
    const allSlots = generateTimeSlots(startOfDay, endOfDay, SLOT_DURATION_MINUTES);
    return allSlots.map((slot) => ({
      time: formatTimeSpain(slot.start),
      available: true,
    }));
  }

  try {
    // Verificar máximo de reuniones por día
    const bookingCount = await getBookingCountForDate(date, calendarId);
    if (bookingCount >= MAX_BOOKINGS_PER_DAY) {
      return [];
    }

    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin: startOfDay.toISOString(),
        timeMax: endOfDay.toISOString(),
        items: [{ id: calendarId }],
      },
    });

    const busySlots = response.data.calendars?.[calendarId]?.busy || [];
    const allSlots = generateTimeSlots(startOfDay, endOfDay, SLOT_DURATION_MINUTES);

    return allSlots
      .filter((slot) => !isOverlapping(slot, busySlots))
      .map((slot) => ({
        time: formatTimeSpain(slot.start),
        available: true,
      }));
  } catch (error) {
    console.error("[Calendar] Freebusy error:", error);
    const allSlots = generateTimeSlots(startOfDay, endOfDay, SLOT_DURATION_MINUTES);
    return allSlots.map((slot) => ({
      time: formatTimeSpain(slot.start),
      available: true,
    }));
  }
}

export async function createBooking(params: {
  date: string;
  time: string;
  name: string;
  email: string;
  company: string;
  topic: string;
}) {
  const calendarId = process.env.GOOGLE_CALENDAR_ID || "primary";

  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_REFRESH_TOKEN) {
    console.log("[Calendar] Credentials missing - mock booking");
    return {
      eventId: `mock-${Date.now()}`,
      meetLink: "https://meet.google.com/mock-link",
    };
  }

  // Verificar máximo de reuniones
  const bookingCount = await getBookingCountForDate(params.date, calendarId);
  if (bookingCount >= MAX_BOOKINGS_PER_DAY) {
    throw new Error("Se ha alcanzado el máximo de reuniones para este día. Por favor, selecciona otro día.");
  }

  console.log("[Calendar] Creating event for", params.name);

  const start = new Date(`${params.date}T${params.time}:00+02:00`);
  const end = new Date(start.getTime() + SLOT_DURATION_MINUTES * 60 * 1000);

  const event = await calendar.events.insert({
    calendarId,
    sendUpdates: "all",
    requestBody: {
      summary: `Consulta: ${params.name} — ${params.company}`,
      description: `Reunión con ${params.name} (${params.email})\nEmpresa: ${params.company}\nTema: ${params.topic}`,
      start: { dateTime: start.toISOString(), timeZone: "Europe/Madrid" },
      end: { dateTime: end.toISOString(), timeZone: "Europe/Madrid" },
      attendees: [{ email: params.email }],
      conferenceData: {
        createRequest: {
          requestId: `utm-${Date.now()}`,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
    },
    conferenceDataVersion: 1,
  });

  console.log("[Calendar] Created:", event.data.id, "Meet:", event.data.hangoutLink);

  return {
    eventId: event.data.id,
    meetLink: event.data.hangoutLink,
  };
}
