import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Search,
  Megaphone,
  Database,
  Zap,
  Monitor,
  BarChart3,
  Mail,
  ArrowRight,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Servicios de Marketing Digital para Despachos Profesionales",
  description:
    "Estrategia, SEO, publicidad digital, CRM, automatizaciones y desarrollo web. Servicios de marketing digital especializados en asesorías, despachos y empresas B2B.",
};

const services: {
  title: string;
  description: string;
  icon: LucideIcon;
  metric?: string;
  href: string;
  tags: string[];
}[] = [
  {
    title: "Estrategia de marketing digital",
    description:
      "Auditoría, plan de acción y objetivos medibles. El punto de partida antes de tocar nada.",
    icon: Compass,
    href: "/servicios/estrategia-marketing-digital",
    tags: ["Auditoría digital", "Plan de canales", "KPIs de negocio"],
  },
  {
    title: "SEO y posicionamiento web",
    description:
      "Que te encuentren las empresas que buscan tu servicio en Google. Con contenido técnico que posiciona y convierte.",
    icon: Search,
    metric: "+180% tráfico orgánico medio",
    href: "/servicios/seo-posicionamiento-web",
    tags: ["SEO técnico", "Contenido especializado", "SEO local"],
  },
  {
    title: "Publicidad digital",
    description:
      "Google Ads, Meta Ads, programática. Campañas orientadas a generar consultas cualificadas, no clics vacíos.",
    icon: Megaphone,
    metric: "-45% coste por lead medio",
    href: "/servicios/publicidad-digital",
    tags: ["Google Ads", "Meta Ads", "Programática", "Remarketing"],
  },
  {
    title: "CRM e integraciones",
    description:
      "Configuramos y conectamos tu CRM para que cada lead se registre, se clasifique y se siga de forma automática.",
    icon: Database,
    metric: "0 leads perdidos",
    href: "/servicios/crm-integraciones",
    tags: ["HubSpot", "Pipedrive", "APIs", "Integraciones"],
  },
  {
    title: "Automatizaciones de marketing",
    description:
      "Secuencias de email, scoring de leads, alertas al comercial. Que tu sistema trabaje mientras tú asesoras.",
    icon: Zap,
    metric: "+12h/semana ahorradas",
    href: "/servicios/automatizaciones-marketing",
    tags: ["Email marketing", "Lead scoring", "Workflows", "n8n"],
  },
  {
    title: "Desarrollo web orientado a conversión",
    description:
      "Webs que no solo se ven bien: convierten visitas en consultas. Desarrollo propio, sin plantillas genéricas.",
    icon: Monitor,
    metric: "3x más conversiones",
    href: "/servicios/desarrollo-web-conversion",
    tags: ["Next.js", "Rendimiento", "Conversión", "Analytics"],
  },
  {
    title: "Analítica y reporting",
    description:
      "Cuadros de mando con las métricas que importan: leads, coste de adquisición, retorno real. Sin vanity metrics.",
    icon: BarChart3,
    href: "/servicios/analitica-reporting",
    tags: ["Google Analytics 4", "Dashboards", "Atribución"],
  },
  {
    title: "Email marketing y nurturing",
    description:
      "Secuencias de contenido que nutren al lead desde la primera visita hasta la contratación. Sin spam, con estrategia.",
    icon: Mail,
    href: "/servicios/email-marketing",
    tags: ["Secuencias", "Segmentación", "Contenido de valor"],
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-800 to-blue-700 text-white py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Servicios de marketing digital para despachos profesionales
            </h1>
            <p className="text-blue-100 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              No hacemos de todo para todos. Nos especializamos en lo que genera
              clientes para asesorías, despachos y empresas de servicios B2B.
              Cada servicio está diseñado para integrarse con los demás y formar
              un sistema de captación predecible.
            </p>
          </div>
        </section>

        {/* Grid de servicios */}
        <section className="bg-bg-primary py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition flex flex-col group"
                >
                  <div className="bg-blue-50 p-3 rounded-full mb-4 inline-flex self-start">
                    <service.icon className="text-blue-600" size={24} />
                  </div>
                  <h2 className="font-semibold text-text-primary mb-3 text-lg">
                    {service.title}
                  </h2>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  {service.metric && (
                    <p className="font-mono text-copper-500 text-sm font-semibold mb-4">
                      {service.metric}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-blue-600 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Saber más
                    <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              No sabes por dónde empezar? Te ayudamos a priorizar.
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Solicita una reunión de diagnóstico sin compromiso. Analizaremos tu
              situación actual y te recomendaremos por dónde empezar para obtener
              resultados lo antes posible.
            </p>
            <Button href="/contacto" variant="primary" size="lg">
              Agendar reunión
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
