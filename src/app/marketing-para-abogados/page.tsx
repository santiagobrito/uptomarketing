import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  ArrowRight,
  FileText,
  BookOpen,
  BarChart2,
  UserX,
  PenTool,
  Linkedin,
  Workflow,
  Database,
  ClipboardCheck,
  BarChart3,
  Rocket,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Marketing para Abogados de Empresa | Marketing Jurídico Digital",
  description:
    "Posiciona tu despacho de abogados como referente en tu especialidad y atrae clientes de mayor valor. Marketing digital con la seriedad que tu sector exige.",
  openGraph: {
    title:
      "Marketing para Abogados de Empresa | Marketing Jurídico Digital",
    description:
      "Posiciona tu despacho como referente en tu especialidad y atrae clientes de mayor valor. Con la seriedad que tu sector exige.",
  },
};

const painPoints = [
  {
    icon: FileText,
    title: "Tu web no genera consultas",
    description:
      "Tu web tiene un diseño correcto y transmite seriedad, pero no convierte visitas en solicitudes de consulta. No está diseñada para captar clientes.",
  },
  {
    icon: BookOpen,
    title: "Tu contenido solo lo leen otros abogados",
    description:
      "Publicas artículos técnicamente impecables, pero tu cliente objetivo no los encuentra ni los entiende. El contenido no está orientado a captación.",
  },
  {
    icon: BarChart2,
    title: "No mides el retorno de tus acciones",
    description:
      "No sabes cuánto te cuesta captar un cliente nuevo ni qué canal funciona mejor. Inviertes en marketing sin datos que respalden las decisiones.",
  },
  {
    icon: UserX,
    title: "Pierdes oportunidades por falta de seguimiento",
    description:
      "Consultas que llegan y se quedan sin respuesta a tiempo. Potenciales clientes que se enfrían porque no hay un proceso de seguimiento comercial definido.",
  },
];

const services = [
  {
    icon: PenTool,
    title: "Contenido y SEO",
    description:
      "Contenido jurídico orientado a captación, no a impresionar a colegas. Artículos que responden a las dudas que buscan tus potenciales clientes en Google.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn profesional",
    description:
      "Estrategia de posicionamiento en LinkedIn para los socios y el despacho. Visibilidad ante directivos y empresarios que necesitan asesoramiento legal.",
  },
  {
    icon: Workflow,
    title: "Automatización de seguimiento",
    description:
      "Sistemas para que ninguna consulta se pierda. Respuestas automáticas, secuencias de seguimiento y alertas para el equipo comercial.",
  },
  {
    icon: Database,
    title: "CRM jurídico",
    description:
      "Implementación y configuración de un CRM adaptado al flujo de trabajo de un despacho. Gestión de oportunidades desde la primera consulta hasta la contratación.",
  },
];

const results = [
  { value: "+220%", label: "Incremento medio en consultas desde la web" },
  { value: "72h", label: "Tiempo medio de respuesta con automatización" },
  { value: "4.2x", label: "Retorno medio sobre inversión en marketing" },
  { value: "40%", label: "Reducción del ciclo de conversión comercial" },
];

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Análisis del despacho",
    description:
      "Estudiamos tu especialidad, tu competencia y tu posicionamiento actual. Identificamos las oportunidades de captación más rentables para tu perfil de cliente ideal.",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Plan estratégico",
    description:
      "Diseñamos un plan de marketing adaptado a la realidad de un despacho jurídico. Canales, mensajes, presupuesto y calendario de ejecución.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Implementación",
    description:
      "Ejecutamos las acciones definidas: optimización web, contenidos, campañas y automatizaciones. Todo con la rigurosidad que el sector legal exige.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Medición y mejora",
    description:
      "Informes mensuales con métricas claras: consultas generadas, coste por consulta, tasa de conversión a cliente. Ajustes continuos basados en datos.",
  },
];

export default function MarketingParaAbogados() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-blue-800 to-blue-700 py-24 lg:py-32 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='white'/%3E%3C/svg%3E")`,
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block bg-white/10 text-white/80 text-sm rounded-full px-4 py-1 mb-6">
              Marketing jurídico digital
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Marketing digital para despachos de abogados
            </h1>
            <p className="text-lg lg:text-xl text-blue-200 mb-10 leading-relaxed max-w-3xl mx-auto">
              Posiciona tu despacho como referente en tu especialidad y atrae
              clientes de mayor valor. Con la seriedad que tu sector exige.
            </p>
            <Button href="#diagnostico" variant="primary" size="lg">
              Solicitar diagnóstico gratuito
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-white/60 text-sm mt-6">
              Sin compromiso. En 48h recibes un informe con recomendaciones
              accionables.
            </p>
          </div>
        </section>

        {/* Pain Points */}
        <section className="bg-bg-primary py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                Los retos de marketing de un despacho jurídico
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                El sector legal tiene particularidades que requieren un
                tratamiento diferente. Estos son los problemas más frecuentes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {painPoints.map((point) => (
                <div
                  key={point.title}
                  className="bg-white rounded-xl p-8 border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <point.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">
                        {point.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-bg-secondary py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                Qué hacemos para tu despacho
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Servicios adaptados a las necesidades y la naturaleza de los
                despachos de abogados. Marketing que respeta la imagen de tu
                firma.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-xl p-8 border border-border"
                >
                  <div className="w-12 h-12 bg-copper-50 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-copper-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results / KPIs */}
        <section className="bg-blue-800 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Resultados que puedes esperar
              </h2>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                Datos reales de despachos de abogados que han trabajado con
                nosotros. Métricas de negocio, no métricas de vanidad.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result) => (
                <div key={result.label} className="text-center">
                  <p className="font-mono text-3xl lg:text-4xl font-bold text-copper-500 mb-2">
                    {result.value}
                  </p>
                  <p className="text-blue-200 text-sm">{result.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-bg-primary py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                Cómo trabajamos
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Un proceso estructurado y transparente. Sin sorpresas ni
                improvisaciones.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  <span className="font-mono text-5xl font-bold text-blue-100 mb-4 block">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="diagnostico"
          className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 py-20"
        >
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Descubre cómo mejorar la captación digital de tu despacho
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Solicita tu Diagnóstico Digital Express gratuito. En 48 horas
              recibirás un informe personalizado con los puntos críticos de tu
              presencia digital y las primeras acciones recomendadas.
            </p>
            <Button href="/diagnostico" variant="primary" size="lg">
              Solicitar diagnóstico gratuito
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-white/70 text-sm mt-6">
              Sin compromiso. Diagnóstico personalizado para despachos
              jurídicos.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
