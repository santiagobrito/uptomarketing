import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const calendar = google.calendar({ version: "v3", auth: oauth2Client });

// Genera slots de 30 min entre start y end
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

// Verifica si un slot se superpone con slots ocupados
function isOverlapping(slot: { start: Date; end: Date }, busySlots: { start?: string | null; end?: string | null }[]) {
  return busySlots.some((busy) => {
    if (!busy.start || !busy.end) return false;
    const busyStart = new Date(busy.start);
    const busyEnd = new Date(busy.end);
    return slot.start < busyEnd && slot.end > busyStart;
  });
}

export async function getAvailableSlots(date: string) {
  const startOfDay = new Date(`${date}T09:00:00+02:00`); // Hora España
  const endOfDay = new Date(`${date}T18:00:00+02:00`);

  console.log("[Calendar] GOOGLE_CLIENT_ID set:", !!process.env.GOOGLE_CLIENT_ID);
  console.log("[Calendar] GOOGLE_REFRESH_TOKEN set:", !!process.env.GOOGLE_REFRESH_TOKEN);

  // Si las credenciales no están configuradas, devolver slots mock
  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_REFRESH_TOKEN) {
    console.log("[Calendar] Using MOCK slots (no credentials)");
    const mockSlots = generateTimeSlots(startOfDay, endOfDay, 30);
    // Simular algunos slots ocupados (aleatoriamente quitar algunos)
    return mockSlots
      .filter((_, i) => i % 3 !== 1) // quitar 1 de cada 3
      .map((slot) => ({
        time: slot.start.toTimeString().slice(0, 5),
        available: true,
      }));
  }

  const response = await calendar.freebusy.query({
    requestBody: {
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      items: [{ id: process.env.GOOGLE_CALENDAR_ID || "primary" }],
    },
  });

  const busySlots = response.data.calendars?.[process.env.GOOGLE_CALENDAR_ID || "primary"]?.busy || [];
  const allSlots = generateTimeSlots(startOfDay, endOfDay, 30);

  return allSlots
    .filter((slot) => !isOverlapping(slot, busySlots))
    .map((slot) => ({
      time: slot.start.toTimeString().slice(0, 5),
      available: true,
    }));
}

export async function createBooking(params: {
  date: string;
  time: string;
  name: string;
  email: string;
  company: string;
  topic: string;
}) {
  // Si no hay credenciales, devolver datos mock
  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_REFRESH_TOKEN) {
    console.log("[Calendar] Using MOCK booking (no credentials)");
    return {
      eventId: `mock-${Date.now()}`,
      meetLink: "https://meet.google.com/mock-meeting",
    };
  }

  console.log("[Calendar] Creating REAL booking for", params.name, params.date, params.time);

  const start = new Date(`${params.date}T${params.time}:00+02:00`);
  const end = new Date(start.getTime() + 30 * 60 * 1000);

  const event = await calendar.events.insert({
    calendarId: process.env.GOOGLE_CALENDAR_ID || "primary",
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

  return {
    eventId: event.data.id,
    meetLink: event.data.hangoutLink,
  };
}
