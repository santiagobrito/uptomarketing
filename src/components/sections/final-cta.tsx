import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
        <Button href="/diagnostico" variant="primary" size="lg">
          Solicitar diagnóstico gratuito
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <p className="text-white/70 text-sm mt-6">
          15 preguntas — Resultado inmediato — Sin compromiso
        </p>
      </div>
    </section>
  );
}
