import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  ArrowRight,
  RefreshCcw,
  ServerCrash,
  GitBranch,
  Unplug,
  Target,
  Users,
  Workflow,
  PenTool,
  ClipboardCheck,
  BarChart3,
  Rocket,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Marketing para Consultoras | Marketing Digital B2B para Consultoría",
  description:
    "Genera oportunidades comerciales cualificadas de forma predecible. Consultora de marketing digital B2B para consultoras de empresas que necesitan resultados medibles.",
  openGraph: {
    title:
      "Marketing para Consultoras | Marketing Digital B2B para Consultoría",
    description:
      "Genera oportunidades comerciales cualificadas de forma predecible. Para consultoras que necesitan un partner que entienda el B2B.",
  },
};

const painPoints = [
  {
    icon: RefreshCcw,
    title: "Has probado proveedores sin resultados",
    description:
      "Has trabajado con 2 o 3 proveedores de marketing que no entendían el B2B. Contenido genérico, leads no cualificados y reuniones que no llevaban a nada.",
  },
  {
    icon: ServerCrash,
    title: "Tu CRM está infrautilizado",
    description:
      "Tienes HubSpot, Salesforce o similar, pero no le sacas partido. Los datos están incompletos, las automatizaciones no funcionan y el equipo no lo usa de forma consistente.",
  },
  {
    icon: GitBranch,
    title: "No puedes medir la atribución",
    description:
      "No sabes qué canal genera los clientes que realmente cierran. La atribución de tus esfuerzos de marketing es opaca y las decisiones se toman por intuición.",
  },
  {
    icon: Unplug,
    title: "Marketing y ventas trabajan desconectados",
    description:
      "El equipo comercial y el de marketing no comparten datos ni objetivos. Los leads que genera marketing no son los que necesita ventas, y nadie tiene visibilidad completa.",
  },
];

const services = [
  {
    icon: Target,
    title: "Demand generation",
    description:
      "Estrategias de generación de demanda B2B: contenido de valor, webinars, lead magnets y nurturing. Orientado a generar pipeline, no solo leads.",
  },
  {
    icon: Users,
    title: "Account-Based Marketing (ABM)",
    description:
      "Campañas dirigidas a cuentas objetivo específicas. Personalización de mensajes, contenido y acciones para las empresas que realmente quieres como clientes.",
  },
  {
    icon: Workflow,
    title: "CRM e integraciones",
    description:
      "Configuración, limpieza y optimización de tu CRM. Integraciones con herramientas de marketing, automatizaciones y reporting unificado entre marketing y ventas.",
  },
  {
    icon: PenTool,
    title: "Contenido B2B",
    description:
      "Casos de estudio, white papers, artículos de thought leadership y contenido para LinkedIn. Material que posiciona a tu consultora como referente en su sector.",
  },
];

const results = [
  { value: "+65%", label: "Incremento medio en pipeline cualificado" },
  { value: "3.8x", label: "Retorno medio sobre inversión en marketing" },
  { value: "-45%", label: "Reducción del ciclo de venta con nurturing" },
  { value: "92%", label: "Adopción de CRM tras implementación" },
];

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Auditoría de marketing y ventas",
    description:
      "Analizamos tu stack tecnológico, procesos comerciales, contenidos existentes y métricas de captación. Identificamos los cuellos de botella y las oportunidades.",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Estrategia de demand generation",
    description:
      "Diseñamos un plan de generación de demanda B2B adaptado a tu ICP, tu ciclo de venta y tus recursos. Con KPIs claros y un modelo de atribución definido.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Ejecución integrada",
    description:
      "Implementamos las acciones de marketing, configuramos las automatizaciones y alineamos los procesos con el equipo comercial. Todo conectado en tu CRM.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Optimización y escalado",
    description:
      "Análisis continuo de resultados, optimización de campañas y escalado de lo que funciona. Reuniones de revisión con marketing y ventas alineados.",
  },
];

export default function MarketingParaConsultoras() {
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
              Marketing digital B2B para consultoría
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Marketing digital para consultoras de empresas
            </h1>
            <p className="text-lg lg:text-xl text-blue-200 mb-10 leading-relaxed max-w-3xl mx-auto">
              Genera oportunidades comerciales cualificadas de forma predecible.
              Para consultoras que necesitan un partner que entienda el B2B de
              verdad.
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
                Los problemas de marketing que frenan a las consultoras
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                El marketing B2B para consultoría tiene complejidades que la
                mayoría de proveedores no entienden. Estos son los retos más
                comunes.
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
                Qué hacemos para tu consultora
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Servicios de marketing B2B diseñados para consultoras con ciclos
                de venta largos y tickets altos. Cada acción orientada a generar
                pipeline.
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
                Datos reales de consultoras B2B que han trabajado con nosotros.
                Métricas de pipeline y negocio, no vanity metrics.
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
                Un proceso pensado para consultoras B2B. Integración real con tu
                equipo comercial y tus herramientas.
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
              Descubre cómo generar pipeline de forma predecible
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Solicita tu Diagnóstico Digital Express gratuito. En 48 horas
              recibirás un informe personalizado con el estado de tu marketing
              B2B y las primeras acciones para mejorar tu captación.
            </p>
            <Button href="/diagnostico" variant="primary" size="lg">
              Solicitar diagnóstico gratuito
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-white/70 text-sm mt-6">
              Sin compromiso. Diagnóstico personalizado para consultoras B2B.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
