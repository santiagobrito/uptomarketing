import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Compass,
  ClipboardCheck,
  Users,
  LayoutDashboard,
  CalendarDays,
  BarChart3,
  Settings,
  CheckCircle2,
  Target,
  TrendingUp,
  Clock,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Estrategia de Marketing Digital para Asesorías y Empresas B2B",
  description:
    "Diseñamos estrategias de marketing digital a medida para asesorías, despachos profesionales y empresas B2B. Plan claro, métricas reales y ejecución técnica. Agenda tu reunión.",
};

const painPoints = [
  {
    icon: ClipboardCheck,
    title: "Propuestas genéricas con mucho PowerPoint y poca sustancia",
    description:
      "Acciones sueltas sin una estrategia que las conecte. Resultados difusos que nadie puede medir.",
  },
  {
    icon: Compass,
    title: "Falta de visión global",
    description:
      "SEO por un lado, redes por otro, la web abandonada. Nadie mira el cuadro completo.",
  },
  {
    icon: BarChart3,
    title: "Cero métricas reales",
    description:
      "Informes llenos de vanity metrics (seguidores, likes) mientras el teléfono no suena.",
  },
  {
    icon: Users,
    title: "Desconocimiento del sector",
    description:
      "Tu proveedor de marketing no entiende que vender servicios profesionales B2B no es como vender zapatillas online.",
  },
];

const includes = [
  {
    icon: ClipboardCheck,
    title: "Auditoría inicial completa",
    description:
      "Analizamos tu presencia digital actual, tu competencia directa, tu posicionamiento en buscadores y la experiencia de tu web. Identificamos qué funciona, qué no y dónde están las oportunidades reales.",
  },
  {
    icon: Users,
    title: "Definición de cliente ideal",
    description:
      "Trabajamos contigo para perfilar a tu buyer persona: quién es, qué problemas tiene, dónde busca soluciones y qué le frena a contratar. Esto es la base de todo lo que viene después.",
  },
  {
    icon: LayoutDashboard,
    title: "Plan de canales y acciones",
    description:
      "Definimos qué canales son relevantes para tu negocio (SEO, Google Ads, LinkedIn, email marketing, contenido) y qué rol juega cada uno en el proceso de captación. Sin dispersión.",
  },
  {
    icon: CalendarDays,
    title: "Hoja de ruta trimestral",
    description:
      "Un calendario de implementación con hitos claros, responsables y plazos. Sabrás exactamente qué se hace cada semana y por qué.",
  },
  {
    icon: BarChart3,
    title: "Cuadro de mando y KPIs",
    description:
      "Definimos las métricas que importan: leads cualificados, coste de adquisición, tasa de conversión, retorno de inversión. Nada de métricas de vanidad.",
  },
  {
    icon: Settings,
    title: "Integración tecnológica",
    description:
      "Evaluamos qué herramientas necesitas (CRM, automatizaciones, analytics) y cómo conectarlas para que los datos fluyan sin fricción.",
  },
];

const steps = [
  {
    number: "01",
    title: "Reunión de diagnóstico",
    description:
      "Escuchamos tu situación, objetivos y recursos disponibles. Sin coste.",
  },
  {
    number: "02",
    title: "Auditoría y análisis",
    description:
      "Investigamos a fondo tu mercado, competencia y presencia digital. 1-2 semanas.",
  },
  {
    number: "03",
    title: "Presentación de estrategia",
    description:
      "Te entregamos el plan completo con recomendaciones priorizadas.",
  },
  {
    number: "04",
    title: "Implementación acompañada",
    description:
      "Puedes ejecutarla con tu equipo, con nosotros o con un modelo mixto. En cualquier caso, te acompañamos.",
  },
];

const benefits = [
  {
    icon: Target,
    title: "Visión completa de tu marketing digital",
    description:
      "Dejas de apagar fuegos y empiezas a construir un sistema de captación predecible.",
  },
  {
    icon: BarChart3,
    title: "Decisiones basadas en datos, no en intuición",
    description:
      "Cada acción tiene un porqué y una métrica que la valida.",
  },
  {
    icon: Shield,
    title: "Estrategia adaptada a servicios profesionales",
    description:
      "No aplicamos recetas genéricas de ecommerce a tu despacho. Conocemos tu mercado.",
  },
  {
    icon: TrendingUp,
    title: "Hoja de ruta ejecutable",
    description:
      "No te entregamos un documento de 80 páginas que acabará en un cajón. Te damos un plan de acción claro y priorizado.",
  },
  {
    icon: Clock,
    title: "Ahorro de tiempo y presupuesto",
    description:
      "Invertir en lo que funciona desde el día uno en lugar de probar a ciegas.",
  },
];

export default function EstrategiaMarketingDigitalPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-800 to-blue-700 text-white py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-white/10 p-3 rounded-full inline-flex mb-6">
              <Compass className="text-copper-500" size={28} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Tu empresa de servicios necesita una estrategia de marketing que
              funcione, no otra presentación bonita.
            </h1>
            <p className="text-blue-100 text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Diseñamos planes de marketing digital basados en datos, con
              objetivos medibles y una hoja de ruta clara. Para asesorías,
              despachos profesionales y empresas B2B que quieren crecer con
              método.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto" variant="primary" size="lg">
                Agendar reunión de diagnóstico
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
              El problema que conoces bien
            </h2>
            <p className="text-text-secondary text-lg text-center max-w-3xl mx-auto mb-14">
              Muchas asesorías y empresas de servicios profesionales llevan años
              dependiendo del boca a boca y las referencias. Cuando deciden dar
              el salto al marketing digital, se encuentran con esto:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <p className="text-text-secondary leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-text-secondary text-center mt-10 max-w-2xl mx-auto">
              El resultado: presupuesto malgastado, frustración y la sensación
              de que &ldquo;el marketing digital no funciona para
              nosotros&rdquo;.
            </p>
          </div>
        </section>

        {/* Qué hacemos */}
        <section className="bg-bg-secondary py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-4">
              Qué hacemos
            </h2>
            <p className="text-text-secondary text-lg text-center max-w-3xl mx-auto mb-14">
              Creamos tu estrategia de marketing digital desde cero, adaptada a
              la realidad de los servicios profesionales y el B2B. No es una
              plantilla. Es un plan a medida que conecta cada acción con un
              objetivo de negocio.
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
                  <h3 className="font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {item.description}
                  </p>
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
              <p className="text-text-secondary leading-relaxed">
                La mayoría de consultoras de marketing son creativas o son
                técnicas. Rara vez son las dos cosas.
              </p>
              <p className="text-text-secondary leading-relaxed">
                En Up To Marketing combinamos{" "}
                <span className="font-semibold text-text-primary">
                  +15 años de experiencia en marketing de servicios profesionales
                </span>{" "}
                con un perfil técnico que nos permite ir más allá de la
                estrategia: programación, inteligencia artificial, marketing
                programático, CRMs y automatizaciones.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Esto significa que cuando diseñamos tu estrategia, sabemos
                exactamente qué es posible técnicamente, cuánto cuesta
                implementarlo y cómo integrarlo con tus sistemas actuales. No
                prometemos cosas que luego no se pueden hacer.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Trabajamos exclusivamente con asesorías, despachos profesionales
                y empresas B2B. Es nuestro terreno. Entendemos tus ciclos de
                venta largos, la importancia de la confianza, la complejidad de
                tus servicios y las particularidades de tu cliente.
              </p>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Hablemos de tu estrategia.
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Agenda una reunión de 30 minutos sin compromiso. Analizaremos tu
              situación actual y te diremos con honestidad si podemos ayudarte y
              cómo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto" variant="primary" size="lg">
                Agendar reunión
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button href="mailto:info@uptomarketing.com" variant="outline" size="lg">
                Contactar por email
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
