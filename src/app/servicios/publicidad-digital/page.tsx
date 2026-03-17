import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Megaphone,
  MousePointerClick,
  DollarSign,
  Bot,
  UserX,
  Unplug,
  Radio,
  CheckCircle2,
  Target,
  Gauge,
  BarChart3,
  Users,
  Layers,
  TrendingUp,
  Zap,
  Settings,
  FileBarChart,
  MonitorSmartphone,
  Link2,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Publicidad Digital para Asesorías y Empresas B2B | Google Ads, Meta Ads y LinkedIn Ads",
  description:
    "Campañas de Google Ads, Meta Ads y publicidad LinkedIn Ads para asesorías y empresas de servicios B2B. Captación de leads cualificados con control total del presupuesto. Hablemos.",
};

const painPoints = [
  {
    icon: MousePointerClick,
    title: "Clics que no convierten",
    description:
      "Pagas por tráfico que llega a tu web, mira y se va. Cero formularios, cero llamadas.",
  },
  {
    icon: DollarSign,
    title: "Presupuesto que se evapora",
    description:
      "Inviertes 500, 1.000, 2.000 euros al mes y no sabes con certeza cuántos clientes ha generado.",
  },
  {
    icon: Settings,
    title: "Campañas en piloto automático",
    description:
      "Tu proveedor montó las campañas hace meses y nadie las ha tocado desde entonces. Mientras tanto, el coste por clic sube.",
  },
  {
    icon: UserX,
    title: "Segmentación genérica",
    description:
      "Tus anuncios llegan a particulares cuando tú vendes a empresas. O a estudiantes cuando buscas directores financieros.",
  },
  {
    icon: Unplug,
    title: "Sin conexión con tu CRM",
    description:
      "Los leads llegan por un lado, tu equipo comercial trabaja por otro, y nadie sabe qué campaña generó qué cliente.",
  },
  {
    icon: Radio,
    title: "Desconocimiento de la LinkedIn Ads",
    description:
      "Existe un mundo más allá de Google y Meta que te permite llegar a tu público en miles de sitios web con precisión quirúrgica.",
  },
];

const channels = [
  {
    title: "Google Ads",
    items: [
      "Search (campañas de búsqueda con intención comercial alta)",
      "Performance Max (campañas automatizadas con IA de Google)",
      "Display (remarketing y notoriedad)",
      "YouTube Ads (cuando el formato vídeo encaja en tu estrategia)",
    ],
  },
  {
    title: "Meta Ads (Facebook e Instagram)",
    items: [
      "Campañas de generación de leads",
      "Remarketing para decisores B2B",
      "Formatos de contenido patrocinado",
    ],
  },
  {
    title: "Publicidad LinkedIn Ads",
    items: [
      "Compra de medios automatizada en miles de sitios web",
      "Segmentación por datos de intención, comportamiento y contexto",
      "Acceso a inventario premium fuera de Google y Meta",
      "Alcanzar perfiles profesionales específicos en su contexto de trabajo",
    ],
  },
];

const includes = [
  {
    icon: Target,
    title: "Estrategia de medios",
    description:
      "Definimos qué canales utilizar, con qué presupuesto y qué objetivo tiene cada uno dentro de tu funnel de captación.",
  },
  {
    icon: Users,
    title: "Investigación y segmentación",
    description:
      "Análisis de keywords comerciales, audiencias, segmentos profesionales y señales de intención. Nos aseguramos de que tus anuncios lleguen a quien decide la contratación.",
  },
  {
    icon: Megaphone,
    title: "Creación de campañas",
    description:
      "Estructura de campañas, grupos de anuncios, copys, extensiones y creatividades. Todo alineado con tu propuesta de valor.",
  },
  {
    icon: MonitorSmartphone,
    title: "Landing pages optimizadas",
    description:
      "De nada sirve un buen anuncio si la página de destino no convierte. Diseñamos o mejoramos tus landings para maximizar la tasa de conversión.",
  },
  {
    icon: Link2,
    title: "Tracking y atribución",
    description:
      "Configuramos GA4, Google Tag Manager, conversiones offline y la integración con tu CRM. Sabrás exactamente qué campaña generó cada lead y cada cliente.",
  },
  {
    icon: TrendingUp,
    title: "Optimización continua",
    description:
      "Revisamos las campañas semanalmente. Ajustamos pujas, pausamos lo que no funciona, escalamos lo que funciona. Sin piloto automático.",
  },
  {
    icon: FileBarChart,
    title: "Reporting mensual transparente",
    description:
      "Informes con las métricas que importan: leads, coste por lead, conversiones, ROI. Sin jerga innecesaria.",
  },
];

const steps = [
  {
    number: "01",
    title: "Diagnóstico inicial",
    description:
      "Analizamos tus campañas actuales (si las hay), tu mercado y tu competencia en el canal de pago.",
  },
  {
    number: "02",
    title: "Propuesta de medios",
    description:
      "Te presentamos el plan con canales, presupuestos recomendados y estimaciones de resultados.",
  },
  {
    number: "03",
    title: "Setup y lanzamiento",
    description:
      "Configuramos tracking, creamos campañas y lanzamos. 1-2 semanas.",
  },
  {
    number: "04",
    title: "Fase de aprendizaje",
    description:
      "Recopilamos datos, optimizamos y ajustamos. 2-4 semanas.",
  },
  {
    number: "05",
    title: "Escala y optimización continua",
    description:
      "Una vez encontrado el modelo que funciona, escalamos con control.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Resultados desde el día uno",
    description:
      "La publicidad digital genera visibilidad y leads inmediatamente. Ideal para acelerar la captación mientras construyes tu posicionamiento orgánico.",
  },
  {
    icon: Gauge,
    title: "Control total del presupuesto",
    description:
      "Tú decides cuánto invertir. Nosotros nos encargamos de que cada euro trabaje al máximo.",
  },
  {
    icon: Target,
    title: "Segmentación precisa para B2B",
    description:
      "Llegamos a directores, gerentes y responsables de área. No a cualquiera que tenga internet.",
  },
  {
    icon: BarChart3,
    title: "Medición real del retorno",
    description:
      "Conectamos las campañas con tu CRM para que sepas no solo cuántos leads generas, sino cuántos se convierten en clientes.",
  },
  {
    icon: Layers,
    title: "Acceso a publicidad LinkedIn Ads",
    description:
      "Un canal que la mayoría de proveedores no ofrece y que puede marcar la diferencia en B2B por su capacidad de segmentación y su coste competitivo.",
  },
];

export default function PublicidadDigitalPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-800 to-blue-700 text-white py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-white/10 p-3 rounded-full inline-flex mb-6">
              <Megaphone className="text-copper-500" size={28} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Publicidad digital que trae clientes, no solo clics.
            </h1>
            <p className="text-blue-100 text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Google Ads, Meta Ads y publicidad LinkedIn Ads para asesorías,
              despachos profesionales y empresas B2B. Campañas optimizadas para
              generar leads cualificados, no impresiones vacías.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto" variant="primary" size="lg">
                Solicitar análisis de campañas
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
              Suena familiar?
            </h2>
            <p className="text-text-secondary text-lg text-center max-w-3xl mx-auto mb-14">
              Has probado Google Ads. Quizá también Facebook o Instagram Ads. Y
              la experiencia ha sido alguna de estas:
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

        {/* Qué hacemos - Canales */}
        <section className="bg-bg-secondary py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-4">
              Qué hacemos
            </h2>
            <p className="text-text-secondary text-lg text-center max-w-3xl mx-auto mb-14">
              Diseñamos, ejecutamos y optimizamos campañas de publicidad digital
              con un enfoque claro: cada euro invertido tiene que acercarte a un
              cliente real. No gestionamos clics, gestionamos resultados de
              negocio.
            </p>

            {/* Canales */}
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              Canales que trabajamos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
              {channels.map((channel) => (
                <div
                  key={channel.title}
                  className="bg-white border border-border rounded-xl p-6"
                >
                  <h4 className="font-semibold text-blue-600 mb-4">
                    {channel.title}
                  </h4>
                  <ul className="space-y-2">
                    {channel.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 items-start text-text-secondary text-sm"
                      >
                        <CheckCircle2
                          className="text-blue-600 flex-shrink-0 mt-0.5"
                          size={14}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Qué incluye */}
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              Qué incluye
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {includes.map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-border rounded-xl p-6"
                >
                  <div className="bg-blue-50 p-2.5 rounded-full inline-flex mb-4">
                    <item.icon className="text-blue-600" size={20} />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">
                    {item.title}
                  </h4>
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
              <div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Gestionamos cuentas reales de Google Ads a diario
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  No somos una consultora que delega la gestión en juniors.
                  Conocemos la plataforma a nivel técnico, incluidas las campañas
                  Performance Max, la automatización de pujas y la integración
                  con datos offline.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Dominamos la publicidad LinkedIn Ads
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Es un canal que la mayoría de proveedores de marketing para
                  pymes ni siquiera contempla. Nosotros lo utilizamos como parte
                  natural de la estrategia de medios cuando el perfil del cliente
                  lo requiere.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Integramos la publicidad con tu stack tecnológico
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Las campañas no viven aisladas. Las conectamos con tu CRM, tus
                  automatizaciones y tu analítica para cerrar el circuito
                  completo: de la impresión al cliente.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Entendemos la venta de servicios B2B
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Sabemos que tu ciclo de venta es largo, que necesitas leads
                  cualificados (no volumen) y que la confianza se construye en
                  múltiples puntos de contacto. Diseñamos las campañas con esa
                  realidad en mente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Deja de quemar presupuesto en campañas que no convierten.
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Analizamos tus campañas actuales sin compromiso y te decimos
              exactamente dónde estás perdiendo dinero y cómo recuperarlo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto" variant="primary" size="lg">
                Solicitar análisis de campañas
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
