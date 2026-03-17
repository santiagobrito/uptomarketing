import { Compass, Search, Megaphone, Database, Zap, Monitor } from "lucide-react";
import { type LucideIcon } from "lucide-react";

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
];

export function Services() {
  return (
    <section className="bg-bg-secondary py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-4">
          Lo que implementamos para tu despacho
        </h2>
        <p className="text-text-secondary text-lg text-center max-w-3xl mx-auto mb-14">
          No hacemos de todo para todos. Nos especializamos en lo que genera
          clientes para servicios profesionales.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition flex flex-col"
            >
              <div className="bg-blue-50 p-3 rounded-full mb-4 inline-flex self-start">
                <service.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary mb-4">{service.description}</p>
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
              <a href={service.href} className="text-blue-600 font-medium text-sm">
                Saber más &rarr;
              </a>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="/servicios" className="text-blue-600 font-semibold">
            Ver todos los servicios &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
