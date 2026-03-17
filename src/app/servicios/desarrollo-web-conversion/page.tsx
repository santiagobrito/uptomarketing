import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Smartphone,
  Search,
  BarChart3,
  Gauge,
  Link2,
  PenTool,
  Code2,
  FileText,
  Activity,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Desarrollo Web para Asesorias y Empresas B2B | Webs que Convierten",
  description:
    "Disenamos y desarrollamos webs para asesorias y empresas de servicios profesionales orientadas a convertir visitas en leads. Rapidas, medibles y optimizadas.",
};

export default function DesarrolloWebConversion() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-800 to-blue-700 text-white py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Tu web no es un escaparate. Es tu mejor comercial.
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Desarrollamos webs para asesorias, despachos profesionales y
              empresas B2B disenadas con un unico objetivo: convertir visitantes
              en leads cualificados.
            </p>
            <Button href="/contacto" variant="primary" size="lg">
              Solicitar analisis web
            </Button>
          </div>
        </section>

        {/* El problema */}
        <section className="py-20 md:py-28 bg-bg-primary">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12 text-center">
              El problema
            </h2>
            <p className="text-lg text-text-secondary mb-10 text-center max-w-3xl mx-auto">
              La web de la mayoria de asesorias y despachos profesionales tiene
              alguno de estos problemas. O todos.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: PenTool,
                  title: "Disenada para gustar, no para convertir",
                  text: "Es bonita, tiene las fotos del equipo y el listado de servicios. Pero no tiene una estructura pensada para que el visitante de el siguiente paso.",
                },
                {
                  icon: Globe,
                  title: "Sin llamadas a la accion claras",
                  text: "El visitante llega, lee y se va. No hay formularios visibles, no hay propuesta de valor clara, no hay motivo urgente para contactar.",
                },
                {
                  icon: Gauge,
                  title: "Lenta y mal optimizada",
                  text: "Carga en 5 segundos, no se ve bien en movil, Google la penaliza. Cada segundo de carga extra es un visitante que se pierde.",
                },
                {
                  icon: Code2,
                  title: "Imposible de actualizar",
                  text: "Fue construida hace anos con un WordPress lleno de plugins obsoletos. Cualquier cambio requiere llamar al desarrollador y esperar semanas.",
                },
                {
                  icon: BarChart3,
                  title: "Sin medicion",
                  text: "No tienes ni idea de cuantas personas visitan tu web, de donde vienen, que paginas ven ni por que se van sin contactar.",
                },
                {
                  icon: Link2,
                  title: "Desconectada de tu marketing",
                  text: "La web va por un lado, tus campanas por otro, tu CRM por otro. No hay un flujo integrado.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-border rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-2.5 rounded-lg shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-text-secondary mt-8 text-center">
              En resumen: tienes una web que te costo dinero pero que no te
              genera negocio.
            </p>
          </div>
        </section>

        {/* Que hacemos */}
        <section className="py-20 md:py-28 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">
              Que hacemos
            </h2>
            <p className="text-lg text-text-secondary mb-14 text-center max-w-3xl mx-auto">
              Disenamos y desarrollamos webs orientadas a conversion. Cada
              pagina, cada seccion, cada boton tiene un proposito dentro de tu
              estrategia de captacion. No hacemos webs para que &quot;queden
              bien&quot;. Hacemos webs para que funcionen.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Search,
                  title: "Estrategia de conversion",
                  items: [
                    "Definicion de los objetivos de negocio de la web",
                    "Mapeo del customer journey del visitante",
                    "Arquitectura de la informacion orientada a la conversion",
                    "Definicion de CTAs primarios y secundarios para cada pagina",
                  ],
                },
                {
                  icon: Smartphone,
                  title: "Diseno UX/UI",
                  items: [
                    "Wireframes y prototipos antes de programar nada",
                    "Diseno visual alineado con tu marca y tu sector",
                    "Priorizacion del contenido que convierte",
                    "Diseno mobile-first (mas del 60% del trafico viene del movil)",
                  ],
                },
                {
                  icon: Code2,
                  title: "Desarrollo tecnico",
                  items: [
                    "Stack moderno, rapido y seguro (Next.js, Astro)",
                    "Core Web Vitals en verde",
                    "SEO tecnico desde el codigo (datos estructurados, meta tags, sitemap)",
                    "Accesibilidad web (WCAG) y certificado SSL",
                  ],
                },
                {
                  icon: FileText,
                  title: "Paginas clave optimizadas",
                  items: [
                    "Home con propuesta de valor clara y CTAs visibles",
                    "Paginas de servicio para posicionar y convencer",
                    "Landing pages especificas para campanas de pago",
                    "Blog con arquitectura SEO (si aplica a la estrategia)",
                  ],
                },
                {
                  icon: Activity,
                  title: "Tracking y medicion",
                  items: [
                    "Google Analytics 4 configurado correctamente",
                    "Google Tag Manager con eventos de conversion",
                    "Seguimiento de formularios, clics en telefono, descargas",
                    "Heatmaps y grabaciones de sesion (Hotjar/Clarity)",
                  ],
                },
                {
                  icon: Link2,
                  title: "Integraciones",
                  items: [
                    "Formularios conectados a tu CRM",
                    "Chat o WhatsApp Business integrado",
                    "Integracion con herramientas de email marketing",
                    "Booking integrado para agendar reuniones desde la web",
                  ],
                },
              ].map((block) => (
                <div
                  key={block.title}
                  className="bg-white border border-border rounded-xl p-6"
                >
                  <div className="bg-blue-50 p-2.5 rounded-lg w-fit mb-4">
                    <block.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-3">
                    {block.title}
                  </h3>
                  <ul className="space-y-2">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <CheckCircle2 className="w-4 h-4 text-copper-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="py-20 md:py-28 bg-bg-primary">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-14 text-center">
              Como funciona
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Brief y estrategia",
                  time: "1 semana",
                  text: "Definimos objetivos, publico, estructura y funcionalidades.",
                },
                {
                  step: "02",
                  title: "Diseno",
                  time: "1-2 semanas",
                  text: "Wireframes, diseno visual, tu aprobacion antes de programar.",
                },
                {
                  step: "03",
                  title: "Desarrollo",
                  time: "2-3 semanas",
                  text: "Maquetacion, programacion, integraciones y testing.",
                },
                {
                  step: "04",
                  title: "Contenidos y SEO",
                  text: "Redactamos o revisamos los textos con criterio SEO y de conversion.",
                },
                {
                  step: "05",
                  title: "Lanzamiento",
                  text: "Migracion, pruebas finales y puesta en produccion.",
                },
                {
                  step: "06",
                  title: "Optimizacion post-lanzamiento",
                  text: "Analizamos datos reales y ajustamos para mejorar conversion.",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-6">
                  <span className="font-mono text-2xl font-bold text-copper-500 shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      {item.title}
                      {item.time && (
                        <span className="font-mono text-sm text-text-secondary font-normal ml-2">
                          ({item.time})
                        </span>
                      )}
                    </h3>
                    <p className="text-text-secondary">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios clave */}
        <section className="py-20 md:py-28 bg-bg-secondary">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12 text-center">
              Beneficios clave
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Una web que genera leads",
                  text: "No un folleto digital. Una herramienta de captacion activa que trabaja las 24 horas del dia.",
                },
                {
                  title: "Velocidad y rendimiento",
                  text: "Tu web carga rapido, se ve perfecta en cualquier dispositivo y Google la premia con mejor posicionamiento.",
                },
                {
                  title: "Autogestionable",
                  text: "Podras actualizar contenidos sin depender de un desarrollador para cada cambio.",
                },
                {
                  title: "Medible desde el dia uno",
                  text: "Sabras cuantas visitas recibes, de donde vienen, que hacen en tu web y cuantas se convierten en leads.",
                },
                {
                  title: "Integrada con tu ecosistema",
                  text: "La web no vive aislada. Esta conectada con tu CRM, tus campanas y tus automatizaciones.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 bg-white border border-border rounded-xl p-6"
                >
                  <CheckCircle2 className="w-5 h-5 text-copper-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Por que Up To Marketing */}
        <section className="py-20 md:py-28 bg-bg-primary">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12 text-center">
              Por que Up To Marketing
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Somos desarrolladores y somos marketers",
                  text: "Esa combinacion es rara y es lo que marca la diferencia. No disenamos webs bonitas que luego necesitan parches tecnicos para funcionar con el marketing. Construimos la web desde el inicio pensando en SEO, en conversion, en tracking y en integracion.",
                },
                {
                  title: "Codigo limpio y tecnologia moderna",
                  text: "No usamos constructores visuales que generan codigo basura y ralentizan la web. Programamos con frameworks actuales que garantizan rendimiento, seguridad y escalabilidad.",
                },
                {
                  title: "Experiencia en el sector servicios",
                  text: "Sabemos que la web de una asesoria necesita transmitir confianza, demostrar expertise y facilitar el contacto. No es lo mismo que una tienda online. La estructura, los textos y los CTAs son completamente distintos.",
                },
                {
                  title: "Desarrollo conectado con la estrategia",
                  text: "No hacemos webs aisladas del resto de tu marketing. La web es una pieza mas del sistema, y la construimos para que encaje con las demas.",
                },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-copper-500 pl-6">
                  <h3 className="font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-gradient-to-b from-blue-800 to-blue-700 text-white py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tu web deberia estar generandote clientes. Si no lo hace,
              hablemos.
            </h2>
            <p className="text-lg text-blue-100 mb-10">
              Analizamos tu web actual sin compromiso y te mostramos que cambios
              concretos mejorarian tu tasa de conversion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto" variant="primary" size="lg">
                Solicitar analisis web
                <ArrowRight className="w-5 h-5 ml-2" />
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
