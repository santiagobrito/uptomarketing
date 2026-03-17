import type { Metadata } from "next";
import { InlineBooking } from "./inline-booking";

export const metadata: Metadata = {
  title: "Agendar Reunión",
  description:
    "Reserva 30 minutos con nuestro equipo para analizar tu situacion de marketing y encontrar oportunidades de crecimiento para tu despacho.",
};

export default function AgendarReunionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-bg-primary">
      {/* Hero */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block bg-white/10 text-white/80 text-sm rounded-full px-4 py-1 mb-6">
            Reunión gratuita de 30 minutos
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            30 minutos para analizar tu situacion
          </h1>
          <p className="text-lg text-blue-200 leading-relaxed max-w-xl mx-auto">
            Te escuchamos, analizamos tu presencia digital actual y te damos
            recomendaciones accionables. Sin compromiso, sin letra pequena.
          </p>
        </div>
      </section>

      {/* Inline Booking Form */}
      <section className="pb-24 px-6">
        <div className="max-w-lg mx-auto">
          <InlineBooking />
        </div>
      </section>
    </main>
  );
}
