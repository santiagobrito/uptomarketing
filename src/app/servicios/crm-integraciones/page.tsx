import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Database,
  Inbox,
  FileSpreadsheet,
  BarChart3,
  Users,
  Unplug,
  CheckCircle2,
  Search,
  Settings,
  Globe,
  Megaphone,
  Mail,
  Calendar,
  Receipt,
  Code2,
  LayoutDashboard,
  GraduationCap,
  Target,
  Eye,
  TrendingUp,
  Shield,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "CRM para Asesorías y Despachos Profesionales | Implementación e Integraciones",
  description:
    "Implementamos y conectamos tu CRM con tu web, campañas y herramientas de marketing. Para asesorías y empresas B2B que quieren dejar de perder leads. Agenda tu consulta.",
};

const painPoints = [
  {
    icon: Inbox,
    title: "Los leads llegan por todas partes",
    description:
      "Formulario de la web, email, teléfono, LinkedIn, referidos. Cada uno en un sitio diferente.",
  },
  {
    icon: FileSpreadsheet,
    title: "Nadie hace seguimiento sistemático",
    description:
      "Un lead entra, alguien lo apunta en un Excel (o no), y si no contrata en la primera llamada, se pierde.",
  },
  {
    icon: BarChart3,
    title: "No sabes qué campaña genera clientes",
    description:
      "Inviertes en Google Ads, en contenido, en networking. Pero no puedes decir con certeza de dónde viene cada cliente ni cuánto te costó captarlo.",
  },
  {
    icon: Users,
    title: "El equipo comercial trabaja a ciegas",
    description:
      "Sin un historial de interacciones, sin tareas programadas, sin visibilidad del pipeline. Cada persona gestiona sus contactos a su manera.",
  },
  {
    icon: Unplug,
    title: "Herramientas desconectadas",
    description:
      "Tu web no habla con tu email marketing, que no habla con tu gestor de tareas, que no habla con tu facturación. Datos duplicados, información perdida.",
  },
];

const includes = [
  {
    icon: Search,
    title: "Selección del CRM adecuado",
    items: [
      "Evaluamos tu situación, equipo, presupuesto y necesidades reales",
      "Recomendamos la herramienta que mejor encaja (HubSpot, Pipedrive, Zoho, Salesforce u otras)",
      "No vendemos licencias ni tenemos acuerdos con plataformas. Recomendamos lo que te conviene",
    ],
  },
  {
    icon: Settings,
    title: "Configuración e implementación",
    items: [
      "Diseño del pipeline de ventas adaptado a tu proceso comercial real",
      "Configuración de campos, etapas, probabilidades y automatizaciones",
      "Importación y limpieza de datos existentes",
      "Configuración de permisos y roles del equipo",
    ],
  },
  {
    icon: Unplug,
    title: "Integraciones con tu ecosistema",
    subitems: [
      { label: "Web y formularios", desc: "cada lead va directo al CRM con origen y campaña identificados" },
      { label: "Google Ads y Meta Ads", desc: "conversiones offline sincronizadas para que las plataformas optimicen con datos reales" },
      { label: "Email marketing", desc: "sincronización de contactos y segmentos (Mailchimp, ActiveCampaign, etc.)" },
      { label: "Google Workspace / Microsoft 365", desc: "emails y calendario conectados al historial del contacto" },
      { label: "Facturación", desc: "conexión con tu software de gestión para cerrar el ciclo lead-cliente-factura" },
      { label: "Integraciones personalizadas", desc: "si no existe integración nativa, la desarrollamos" },
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards y reporting",
    items: [
      "Cuadros de mando con las métricas comerciales clave",
      "Visibilidad del pipeline en tiempo real",
      "Informes de atribución: qué canal genera más leads y cuáles convierten mejor",
    ],
  },
  {
    icon: GraduationCap,
    title: "Formación del equipo",
    items: [
      "Sesiones prácticas para que tu equipo use el CRM sin fricción",
      "Documentación personalizada de procesos",
      "Soporte post-implementación durante los primeros meses",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Consulta de diagnóstico",
    description:
      "Entendemos tu proceso comercial actual, tus herramientas y tus puntos de dolor.",
  },
  {
    number: "02",
    title: "Propuesta de solución",
    description:
      "Te presentamos la arquitectura del CRM, las integraciones necesarias y el plan de implementación.",
  },
  {
    number: "03",
    title: "Implementación",
    description:
      "Configuramos, integramos y probamos todo. 2-4 semanas según complejidad.",
  },
  {
    number: "04",
    title: "Formación y puesta en marcha",
    description:
      "Tu equipo empieza a usarlo con acompañamiento.",
  },
  {
    number: "05",
    title: "Ajustes y optimización",
    description:
      "Refinamos flujos y automatizaciones según el uso real. Primer mes incluido.",
  },
];

const benefits = [
  {
    icon: Target,
    title: "Cero leads perdidos",
    description:
      "Cada contacto queda registrado automáticamente con su origen, su historial y sus próximos pasos.",
  },
  {
    icon: Eye,
    title: "Visibilidad total del proceso comercial",
    description:
      "Sabes en todo momento cuántos leads tienes en cada fase, quién los gestiona y cuál es la previsión de cierre.",
  },
  {
    icon: TrendingUp,
    title: "Medición real del ROI de marketing",
    description:
      "Puedes trazar la línea completa desde la campaña que generó el lead hasta la factura del cliente.",
  },
  {
    icon: Users,
    title: "Equipo comercial más eficiente",
    description:
      "Menos tiempo buscando información, más tiempo vendiendo. Tareas automáticas, recordatorios y seguimiento sistematizado.",
  },
  {
    icon: Shield,
    title: "Datos limpios y centralizados",
    description:
      "Una fuente de verdad para toda la organización. Sin duplicados, sin Excel paralelos, sin información contradictoria.",
  },
];

export default function CrmIntegracionesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-800 to-blue-700 text-white py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-white/10 p-3 rounded-full inline-flex mb-6">
              <Database className="text-copper-500" size={28} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Deja de perder leads por tener la información dispersa en cinco
              sitios distintos.
            </h1>
            <p className="text-blue-100 text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Implementamos tu CRM y lo conectamos con tu web, tus campañas, tu
              email y tus herramientas de trabajo. Para que cada lead se
              gestione, se nutra y se convierta en cliente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto" variant="primary" size="lg">
                Agendar consulta CRM
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
              El problema que nadie quiere reconocer
            </h2>
            <p className="text-text-secondary text-lg text-center max-w-3xl mx-auto mb-14">
              En tu asesoría o despacho, la gestión comercial suele funcionar
              así. Y estás dejando dinero en la mesa cada día porque tu proceso
              comercial tiene fugas que ni siquiera puedes ver.
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
              Implementamos un CRM adaptado a la realidad de los servicios
              profesionales y lo integramos con todas las herramientas que ya
              utilizas. El objetivo: que ningún lead se pierda y que puedas
              medir el retorno real de cada acción de marketing.
            </p>
            <div className="space-y-6">
              {includes.map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-border rounded-xl p-6 lg:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-2.5 rounded-full flex-shrink-0">
                      <item.icon className="text-blue-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-primary text-lg mb-3">
                        {item.title}
                      </h3>
                      {"items" in item && item.items && (
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
                      )}
                      {"subitems" in item && item.subitems && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {item.subitems.map((sub) => (
                            <div
                              key={sub.label}
                              className="flex gap-2 items-start text-text-secondary text-sm"
                            >
                              <CheckCircle2
                                className="text-blue-600 flex-shrink-0 mt-0.5"
                                size={14}
                              />
                              <span>
                                <span className="font-medium text-text-primary">
                                  {sub.label}:
                                </span>{" "}
                                {sub.desc}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
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
                  Sabemos de CRM y sabemos de marketing
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  La mayoría de implementaciones de CRM las hacen consultores
                  tecnológicos que no entienden de marketing, o proveedores de
                  marketing que no saben programar integraciones. Nosotros unimos
                  ambos mundos.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Desarrollamos integraciones a medida
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Cuando la integración nativa no existe o no cubre lo que
                  necesitas, la construimos. APIs, webhooks, middleware: tenemos
                  el perfil técnico para resolver cualquier conexión.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Pensamos en el dato desde el origen
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  No implementamos un CRM aislado. Lo diseñamos como pieza
                  central de tu ecosistema de marketing, conectado con tus
                  campañas, tu web y tus automatizaciones para que la información
                  fluya sin intervención manual.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Experiencia en servicios profesionales
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Conocemos el proceso comercial de asesorías y despachos.
                  Sabemos que tu pipeline tiene reuniones de diagnóstico,
                  propuestas, negociación y firma. Configuramos el CRM para
                  reflejar esa realidad, no la de un ecommerce.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Deja de gestionar tus leads con Excel y post-its.
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Cuéntanos cómo funciona tu proceso comercial hoy y te propondremos
              una solución CRM que se adapte a tu equipo y se integre con tus
              herramientas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto" variant="primary" size="lg">
                Agendar consulta CRM
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button href="mailto:info@uptomarketing.com" variant="outline" size="lg">
                Contactar
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
