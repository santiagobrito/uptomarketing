import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  ArrowRight,
  SearchX,
  Users,
  TrendingDown,
  HelpCircle,
  Search,
  MousePointerClick,
  Globe,
  Database,
  ClipboardCheck,
  BarChart3,
  Rocket,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Marketing para Asesorías | Captación Digital para Asesorías Fiscales y Contables",
  description:
    "Posiciona tu asesoría fiscal o contable en Google, capta clientes cualificados y mide cada euro invertido. Consultora especializada en marketing digital para asesorías.",
  openGraph: {
    title:
      "Marketing para Asesorías | Captación Digital para Asesorías Fiscales y Contables",
    description:
      "Posiciona tu asesoría en Google, capta clientes cualificados y mide cada euro invertido. Sin dependencia del boca a boca.",
  },
};

const painPoints = [
  {
    icon: Users,
    title: "Dependes del boca a boca",
    description:
      "Tu crecimiento depende de contactos personales y recomendaciones. Es un modelo que funciona, pero no escala ni es predecible.",
  },
  {
    icon: SearchX,
    title: "Tu web no aparece en Google",
    description:
      'Cuando alguien busca "asesoría fiscal en tu ciudad", encuentran a tu competencia. Estás perdiendo clientes que ya te están buscando.',
  },
  {
    icon: TrendingDown,
    title: "Competencia de asesorías low-cost",
    description:
      "Has perdido clientes ante asesorías online que cobran 39 euros al mes. Necesitas diferenciarte por valor, no por precio.",
  },
  {
    icon: HelpCircle,
    title: "No mides el coste de captación",
    description:
      "No tienes forma de saber cuánto te cuesta captar un cliente nuevo ni qué canal es más rentable. Decides a ciegas.",
  },
];

const services = [
  {
    icon: Search,
    title: "SEO local",
    description:
      "Posicionamos tu asesoría en las búsquedas locales relevantes. Google Maps, fichas de negocio y contenido orientado a tu zona geográfica.",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    description:
      "Campañas de captación directa para que aparezcas cuando potenciales clientes buscan servicios de asesoría fiscal o contable.",
  },
  {
    icon: Globe,
    title: "Web orientada a conversión",
    description:
      "Rediseño o mejora de tu web para que convierta visitas en consultas. Formularios claros, páginas de servicio optimizadas y llamadas a la acción efectivas.",
  },
  {
    icon: Database,
    title: "CRM y seguimiento",
    description:
      "Implementación de un sistema para que ninguna consulta se quede sin respuesta. Automatización de seguimiento y gestión de leads.",
  },
];

const results = [
  { value: "+180%", label: "Incremento medio en consultas orgánicas" },
  { value: "< 35€", label: "Coste por lead cualificado en Google Ads" },
  { value: "3x", label: "Retorno medio sobre inversión publicitaria" },
  { value: "6 meses", label: "Tiempo medio hasta resultados sostenibles" },
];

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Diagnóstico inicial",
    description:
      "Analizamos tu presencia digital actual, tu competencia local y las oportunidades de captación en tu zona. Identificamos qué está funcionando y qué no.",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Estrategia y plan de acción",
    description:
      "Definimos los canales prioritarios, el presupuesto recomendado y los KPIs que mediremos. Todo documentado y con calendario de ejecución.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Ejecución y optimización",
    description:
      "Implementamos las acciones acordadas y optimizamos en base a datos reales. Ajustamos campañas, contenidos y conversión de forma continua.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Reporting y revisión",
    description:
      "Informes mensuales claros con métricas de negocio: leads generados, coste por lead, tasa de conversión. Reuniones de seguimiento periódicas.",
  },
];

export default function MarketingParaAsesorias() {
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
              Especialistas en asesorías fiscales y contables
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Marketing digital para asesorías fiscales y contables
            </h1>
            <p className="text-lg lg:text-xl text-blue-200 mb-10 leading-relaxed max-w-3xl mx-auto">
              Posiciona tu asesoría en Google, capta clientes cualificados y
              mide cada euro invertido. Sin dependencia del boca a boca.
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
                Los retos que frenan el crecimiento de tu asesoría
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Si alguno de estos puntos te resulta familiar, no estás solo. Son
                los problemas más comunes en el sector.
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
                Qué hacemos para tu asesoría
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Servicios diseñados para el sector de las asesorías fiscales y
                contables. Cada acción orientada a generar consultas
                cualificadas.
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
                Datos reales de asesorías que han trabajado con nosotros.
                Resultados medibles, no promesas vacías.
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
                Un proceso claro, sin sorpresas. Sabes qué esperar en cada fase.
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
              Descubre qué está frenando la captación digital de tu asesoría
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
              Sin compromiso. Diagnóstico personalizado para tu asesoría.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
