import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  FileX,
  Gauge,
  FileText,
  MapPin,
  CreditCard,
  Bug,
  KeyRound,
  BookOpen,
  Code2,
  BarChart3,
  TrendingUp,
  Shield,
  Globe,
  Layers,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "SEO para Asesorías y Despachos Profesionales | Posicionamiento Web B2B",
  description:
    "Posicionamos tu asesoría o despacho profesional en Google con una estrategia SEO técnica y de contenidos. Más visibilidad, más leads cualificados. Solicita auditoría gratuita.",
};

const painPoints = [
  {
    icon: FileText,
    title: "Web sin estrategia de contenidos",
    description:
      "Una página corporativa con cuatro secciones que no responde a lo que busca tu cliente ideal en Google.",
  },
  {
    icon: Bug,
    title: "SEO técnico inexistente",
    description:
      "Velocidad de carga lenta, sin estructura de datos, URLs mal organizadas, errores de rastreo. Google no puede indexarte bien aunque quiera.",
  },
  {
    icon: FileX,
    title: "Contenido genérico",
    description:
      "Textos escritos para \"quedar bien\" en lugar de para posicionar. Sin investigación de keywords, sin intención de búsqueda, sin estrategia.",
  },
  {
    icon: MapPin,
    title: "SEO local descuidado",
    description:
      "Tu ficha de Google Business sin optimizar, sin reseñas gestionadas, sin presencia en directorios relevantes.",
  },
  {
    icon: CreditCard,
    title: "Dependencia del PPC",
    description:
      "Si dejas de pagar Google Ads, desapareces. El SEO te da un canal de captación que trabaja las 24 horas sin coste por clic.",
  },
];

const includes = [
  {
    icon: Bug,
    title: "Auditoría SEO técnica",
    items: [
      "Análisis de rastreo e indexación (Screaming Frog, Search Console)",
      "Velocidad de carga y Core Web Vitals",
      "Estructura de URLs y arquitectura de la información",
      "Datos estructurados (Schema markup para servicios profesionales)",
      "Detección de errores críticos y priorización",
    ],
  },
  {
    icon: KeyRound,
    title: "Investigación de keywords",
    items: [
      "Análisis de intención de búsqueda de tu cliente ideal",
      "Mapeo de keywords por servicio y fase del funnel",
      "Análisis de keywords de la competencia directa",
      "Oportunidades long tail con baja competencia y alta intención comercial",
    ],
  },
  {
    icon: BookOpen,
    title: "Estrategia de contenidos",
    items: [
      "Calendario editorial alineado con tus servicios y búsquedas",
      "Redacción de contenidos optimizados (servicios, blog, FAQs)",
      "Estructura de clusters temáticos para construir autoridad",
      "Optimización de contenidos existentes",
    ],
  },
  {
    icon: Code2,
    title: "SEO técnico y on-page",
    items: [
      "Implementación de correcciones técnicas priorizadas",
      "Optimización de titles, metas, headings y estructura",
      "Enlazado interno estratégico",
      "Implementación de datos estructurados",
    ],
  },
  {
    icon: MapPin,
    title: "SEO local",
    items: [
      "Optimización de Google Business Profile",
      "Gestión de citas en directorios sectoriales",
      "Estrategia de reseñas",
      "Posicionamiento en el pack local de Google",
    ],
  },
  {
    icon: BarChart3,
    title: "Monitorización y reporting",
    items: [
      "Seguimiento de posiciones para keywords objetivo",
      "Informes mensuales con métricas de negocio",
      "Análisis de competidores y ajustes continuos",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Auditoría inicial",
    description:
      "Radiografía completa de tu situación SEO actual. 1-2 semanas.",
  },
  {
    number: "02",
    title: "Plan de acción priorizado",
    description:
      "Te presentamos las acciones ordenadas por impacto y esfuerzo.",
  },
  {
    number: "03",
    title: "Implementación por fases",
    description:
      "Primero lo técnico (cimientos), después contenidos (crecimiento), siempre midiendo.",
  },
  {
    number: "04",
    title: "Optimización continua",
    description:
      "El SEO no es un proyecto con fecha de fin. Ajustamos la estrategia según resultados.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Captación orgánica predecible",
    description:
      "Construyes un canal que genera leads cualificados mes a mes sin pagar por cada clic.",
  },
  {
    icon: Search,
    title: "Tráfico con intención comercial",
    description:
      "No buscamos volumen de visitas. Buscamos que te encuentren las personas que están listas para contratar.",
  },
  {
    icon: Shield,
    title: "Autoridad de marca en tu sector",
    description:
      "Aparecer en las primeras posiciones de Google transmite confianza y credibilidad. En servicios profesionales, esto es decisivo.",
  },
  {
    icon: CreditCard,
    title: "Menor dependencia de la publicidad de pago",
    description:
      "El SEO y el PPC se complementan, pero un buen posicionamiento orgánico reduce tu necesidad de invertir en anuncios.",
  },
  {
    icon: Layers,
    title: "Activo digital a largo plazo",
    description:
      "A diferencia de la publicidad, los contenidos posicionados siguen trabajando para ti meses y años después de publicarlos.",
  },
];

export default function SeoPosicionamientoWebPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-800 to-blue-700 text-white py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-white/10 p-3 rounded-full inline-flex mb-6">
              <Search className="text-copper-500" size={28} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Que te encuentren en Google los clientes que ya están buscando lo
              que ofreces.
            </h1>
            <p className="text-blue-100 text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              SEO técnico y de contenidos para asesorías, despachos
              profesionales y empresas de servicios B2B. Posicionamiento que
              genera visitas cualificadas, no solo tráfico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto" variant="primary" size="lg">
                Solicitar auditoría SEO
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button href="/servicios" variant="outline" size="lg">
                Ver todos los servicios
              </Button>
            </div>
          </div>
        </section>

        {/* El problema */}
        <section className="bg-bg-primary py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-4">
              Tu web existe, pero no trabaja para ti
            </h2>
            <p className="text-text-secondary text-lg text-center max-w-3xl mx-auto mb-14">
              Cuando un potencial cliente busca en Google &ldquo;asesoría fiscal
              en tu ciudad&rdquo; o &ldquo;consultoría laboral para
              empresas&rdquo;, aparece tu competencia. Tú no.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {painPoints.map((point) => (
                <div
                  key={point.title}
                  className="bg-white border border-border rounded-xl p-6"
                >
                  <div className="bg-red-50 p-2.5 rounded-full inline-flex mb-4">
                    <point.icon className="text-red-500" size={20} />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">
                    {point.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qué hacemos */}
        <section className="bg-bg-secondary py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-4">
              Qué hacemos
            </h2>
            <p className="text-text-secondary text-lg text-center max-w-3xl mx-auto mb-14">
              Diseñamos e implementamos una estrategia SEO completa, pensada
              para el ciclo de decisión largo y la alta competencia del sector
              servicios profesionales.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {includes.map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-border rounded-xl p-6"
                >
                  <div className="bg-blue-50 p-2.5 rounded-full inline-flex mb-4">
                    <item.icon className="text-blue-600" size={20} />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <ul className="space-y-2">
                    {item.items.map((line) => (
                      <li
                        key={line}
                        className="flex gap-2 items-start text-text-secondary text-sm"
                      >
                        <CheckCircle2
                          className="text-blue-600 flex-shrink-0 mt-0.5"
                          size={14}
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="bg-bg-primary py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-14">
              Cómo funciona
            </h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-mono font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-text-primary text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                    {index < steps.length - 1 && (
                      <div className="w-px h-6 bg-border ml-0 mt-4 hidden md:block" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios clave */}
        <section className="bg-bg-secondary py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-14">
              Beneficios clave
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4 items-start">
                  <div className="bg-copper-500/10 p-2.5 rounded-full flex-shrink-0">
                    <benefit.icon className="text-copper-500" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Por qué Up To Marketing */}
        <section className="bg-bg-primary py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-14">
              Por qué Up To Marketing
            </h2>
            <div className="bg-white border border-border rounded-xl p-8 lg:p-10 space-y-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Perfil técnico real
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  No dependemos de terceros para implementar cambios técnicos en
                  tu web. Programamos, tocamos código, configuramos servidores.
                  Cuando detectamos un problema técnico, lo resolvemos. Sin
                  tickets intermedios ni semanas de espera.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Conocimiento del sector servicios
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Sabemos que el SEO para una asesoría fiscal no funciona igual
                  que para un ecommerce. Los ciclos de decisión son más largos,
                  la confianza pesa más que el precio, y las búsquedas tienen
                  matices que solo se entienden si conoces el sector.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Integración con el resto de tu marketing
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  El SEO no funciona aislado. Lo conectamos con tu CRM para
                  medir leads reales, con tus automatizaciones para nutrir esos
                  leads, y con tu publicidad digital para maximizar el retorno
                  global.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Descubre qué oportunidades estás perdiendo en Google.
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Te hacemos una auditoría SEO inicial sin compromiso. En 30 minutos
              te mostramos dónde estás, dónde está tu competencia y qué puedes
              hacer para superarla.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto" variant="primary" size="lg">
                Solicitar auditoría SEO
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button href="/contacto" variant="outline" size="lg">
                Agendar reunión
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
