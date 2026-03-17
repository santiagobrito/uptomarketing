import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Users,
  Mail,
  BarChart3,
  Clock,
  RefreshCw,
  Bell,
  Settings,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Automatizacion de Marketing para Asesorias y Empresas B2B",
  description:
    "Automatizamos la captacion, nutricion y seguimiento de leads para asesorias y empresas de servicios. Menos tareas manuales, mas clientes. Descubre como.",
};

export default function AutomatizacionesMarketing() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-800 to-blue-700 text-white py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Tu marketing deberia trabajar mientras tu te dedicas a tus
              clientes.
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Automatizamos los procesos de captacion, nutricion y seguimiento
              de leads para que tu asesoria o empresa de servicios escale sin
              multiplicar el equipo.
            </p>
            <Button href="/contacto" variant="primary" size="lg">
              Agendar reunión
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
              Tu equipo tiene el dia lleno de tareas repetitivas que consumen
              horas y no generan valor directo.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Users,
                  title: "Seguimiento manual de leads",
                  text: "Alguien tiene que acordarse de enviar ese email de seguimiento tres dias despues de la reunión. A veces se acuerda. A veces no.",
                },
                {
                  icon: Mail,
                  title: "Nutricion inexistente",
                  text: "Un potencial cliente descarga tu guia o rellena un formulario. Le llamas una vez, no contesta, y ese lead desaparece para siempre.",
                },
                {
                  icon: Clock,
                  title: "Emails uno a uno",
                  text: "Cada newsletter, cada comunicacion a clientes, cada recordatorio se envia de forma manual. O peor: no se envia.",
                },
                {
                  icon: RefreshCw,
                  title: "Datos que no se actualizan solos",
                  text: "Cuando un lead cambia de fase, alguien tiene que actualizarlo en el CRM, avisar al comercial, mover la tarea... y eso no siempre ocurre.",
                },
                {
                  icon: Settings,
                  title: "Procesos que dependen de personas",
                  text: "Si la persona que gestiona el marketing esta de vacaciones o se va, el proceso se para en seco.",
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
              El resultado: leads que se enfrian, oportunidades que se pierden y
              un equipo que dedica mas tiempo a tareas operativas que a lo que
              realmente importa.
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
              Disenamos e implementamos flujos de automatizacion que cubren todo
              el ciclo de vida del lead: desde que te encuentra hasta que se
              convierte en cliente. Y despues, para fidelizarlo.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Captacion de leads",
                  items: [
                    "Formularios inteligentes conectados a tu CRM",
                    "Lead scoring automatico segun comportamiento e interes",
                    "Asignacion automatica de leads al comercial adecuado",
                    "Notificaciones en tiempo real cuando entra un lead cualificado",
                  ],
                },
                {
                  icon: Mail,
                  title: "Nutricion de leads",
                  items: [
                    "Secuencias de email automatizadas segun servicio de interes",
                    "Contenido personalizado segun la fase del funnel",
                    "Triggers de comportamiento: aperturas, visitas, descargas",
                    "Reactivacion automatica de leads frios",
                  ],
                },
                {
                  icon: Bell,
                  title: "Seguimiento comercial",
                  items: [
                    "Recordatorios automaticos de seguimiento al equipo comercial",
                    "Emails de follow-up programados tras reuniones o propuestas",
                    "Alertas cuando un lead muestra senales de compra",
                    "Escalado automatico de leads sin actividad",
                  ],
                },
                {
                  icon: Users,
                  title: "Onboarding de clientes",
                  items: [
                    "Secuencia de bienvenida automatizada al firmar un nuevo cliente",
                    "Envio automatico de documentacion, accesos y primeros pasos",
                    "Encuestas de satisfaccion programadas",
                  ],
                },
                {
                  icon: BarChart3,
                  title: "Reporting y alertas",
                  items: [
                    "Informes automaticos semanales o mensuales al equipo directivo",
                    "Alertas cuando una metrica clave se desvia del objetivo",
                    "Dashboards actualizados en tiempo real",
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

            <div className="mt-12 bg-white border border-border rounded-xl p-8">
              <h3 className="font-semibold text-text-primary mb-4">
                Herramientas que utilizamos
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                Trabajamos con las plataformas que mejor se adapten a tu
                situacion:
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "HubSpot",
                  "ActiveCampaign",
                  "Make (Integromat)",
                  "Zapier",
                  "n8n",
                  "Desarrollos a medida",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-md text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
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
                  title: "Mapeamos tus procesos actuales",
                  text: "Identificamos que tareas se hacen manualmente, cuales son repetitivas y cuales tienen mas impacto si se automatizan.",
                },
                {
                  step: "02",
                  title: "Disenamos los flujos",
                  text: "Diagramamos cada automatizacion antes de implementarla. Tu la apruebas.",
                },
                {
                  step: "03",
                  title: "Implementamos y conectamos",
                  text: "Configuramos las automatizaciones, las integramos con tu CRM y tus herramientas, y las probamos a fondo.",
                },
                {
                  step: "04",
                  title: "Lanzamiento y monitorizacion",
                  text: "Activamos los flujos y los monitorizamos durante las primeras semanas para ajustar.",
                },
                {
                  step: "05",
                  title: "Iteracion",
                  text: "Revisamos resultados y optimizamos. Las automatizaciones evolucionan con tu negocio.",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-6">
                  <span className="font-mono text-2xl font-bold text-copper-500 shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      {item.title}
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
                  title: "Escala sin contratar",
                  text: "Puedes gestionar el doble de leads con el mismo equipo. Las automatizaciones hacen el trabajo repetitivo.",
                },
                {
                  title: "Ningun lead se pierde",
                  text: "Cada contacto recibe seguimiento automatico, independientemente de la carga de trabajo de tu equipo.",
                },
                {
                  title: "Ciclo de venta mas corto",
                  text: "Los leads llegan mas cualificados y mejor informados al momento de la reunión comercial, porque han recibido contenido relevante de forma automatica.",
                },
                {
                  title: "Proceso replicable y predecible",
                  text: "No depende de que alguien se acuerde. El sistema funciona 24/7, fines de semana y vacaciones incluidos.",
                },
                {
                  title: "Mas tiempo para lo que importa",
                  text: "Tu equipo deja de hacer tareas operativas y se centra en cerrar clientes y dar buen servicio.",
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
                  title:
                    "Programamos las automatizaciones, no solo las configuramos",
                  text: "La mayoria de proveedores se limitan a usar Zapier o los workflows basicos de HubSpot. Nosotros, ademas, podemos desarrollar automatizaciones a medida con codigo cuando la herramienta estandar no llega.",
                },
                {
                  title:
                    "Pensamos en el proceso completo, no en piezas sueltas",
                  text: "No automatizamos tareas aisladas. Disenamos el flujo completo de captacion, nutricion y conversion como un sistema integrado.",
                },
                {
                  title: "Integramos con lo que ya tienes",
                  text: "No te obligamos a cambiar todas tus herramientas. Conectamos las automatizaciones con tu CRM, tu web, tu email y tu software de gestion actual.",
                },
                {
                  title: "Experiencia real en servicios profesionales",
                  text: "Sabemos que en una asesoria la nutricion de un lead no es enviar descuentos. Es demostrar expertise, generar confianza y estar presente cuando el cliente necesita el servicio. Disenamos las automatizaciones con esa logica.",
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
              Deja que la tecnologia haga el trabajo repetitivo por ti.
            </h2>
            <p className="text-lg text-blue-100 mb-10">
              Cuentanos que procesos de marketing y ventas te gustaria
              automatizar. Te propondremos una solucion concreta en una reunión
              de 30 minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto" variant="primary" size="lg">
                Agendar reunión
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/contacto" variant="outline" size="lg">
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
