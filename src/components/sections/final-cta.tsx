import { Button } from "@/components/ui/button";
import { BookingTrigger } from "@/components/booking/booking-trigger";
import { ArrowRight, Calendar } from "lucide-react";

export function FinalCta() {
  return (
    <section id="diagnostico" className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          ¿Quieres saber qué está fallando en tu marketing antes de invertir un
          euro más?
        </h2>
        <p className="text-blue-100 text-lg mb-10 leading-relaxed">
          Solicita tu Diagnóstico Digital Express gratuito. En 48 horas
          recibirás un informe personalizado con los puntos críticos de tu
          presencia digital y las tres primeras acciones que deberías tomar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/diagnostico" variant="primary" size="lg">
            Solicitar diagnóstico gratuito
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <BookingTrigger className="border border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition inline-flex items-center justify-center gap-2">
            <Calendar className="h-5 w-5" />
            Agendar reunión
          </BookingTrigger>
        </div>
        <p className="text-white/70 text-sm mt-6">
          Sin compromiso — Resultado inmediato
        </p>
      </div>
    </section>
  );
}
