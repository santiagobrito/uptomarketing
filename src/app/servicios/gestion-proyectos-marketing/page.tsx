import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  ClipboardList,
  Users,
  Calendar,
  Eye,
  Wrench,
  FileBarChart,
  AlertTriangle,
  FolderKanban,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Gestion de Proyectos de Marketing Digital | Project Management para B2B",
  description:
    "Gestionamos tus proyectos de marketing digital de principio a fin. Coordinacion de equipos, control de plazos y resultados medibles. Para asesorias y empresas B2B.",
};

export default function GestionProyectosMarketing() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-800 to-blue-700 text-white py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Tienes la estrategia. Lo que te falta es alguien que la ejecute
              sin que se te caigan los platos.
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Gestionamos tus proyectos de marketing digital de principio a fin:
              coordinacion de equipos, control de plazos, seguimiento de
              resultados. Para que las cosas se hagan, bien y a tiempo.
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
              Tienes claro que necesitas en marketing digital. Quiza incluso
              tienes un plan. El problema es la ejecucion.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: FolderKanban,
                  title: "Demasiados frentes abiertos",
                  text: "La web, el SEO, las campanas, el contenido, las redes, el CRM. Todo a la vez, nada avanza al ritmo que deberia.",
                },
                {
                  icon: Users,
                  title: "Proveedores sin coordinacion",
                  text: "El disenador va por su lado, el programador por otro, el equipo de contenidos por otro. Nadie tiene la foto completa. Tu acabas haciendo de coordinador, que no es tu trabajo.",
                },
                {
                  icon: Calendar,
                  title: "Plazos que se incumplen",
                  text: "Los proyectos de marketing se alargan semanas o meses mas de lo previsto. Siempre hay algo que falla, algo que depende de otro, algo que esta casi.",
                },
                {
                  icon: Eye,
                  title: "Falta de visibilidad",
                  text: "No tienes un sitio donde ver de un vistazo en que estado esta cada proyecto, quien es responsable de que y cuales son los proximos pasos.",
                },
                {
                  icon: AlertTriangle,
                  title: "Sin experiencia en gestion de proyectos digitales",
                  text: "Tu equipo sabe de su oficio (contabilidad, asesoria, derecho) pero gestionar un proyecto web o una implementacion de CRM se les queda grande.",
                },
                {
                  icon: ClipboardList,
                  title: "El marketing queda siempre para despues",
                  text: "Entre las urgencias del dia a dia, los proyectos de marketing se posponen indefinidamente. La semana que viene se convierte en meses.",
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
          </div>
        </section>

        {/* Que hacemos */}
        <section className="py-20 md:py-28 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">
              Que hacemos
            </h2>
            <p className="text-lg text-text-secondary mb-14 text-center max-w-3xl mx-auto">
              Asumimos la gestion integral de tus proyectos de marketing
              digital. Actuamos como tu director de proyecto externo: coordinamos
              equipos internos y externos, controlamos plazos y presupuestos, y
              nos aseguramos de que todo se ejecute segun lo planificado.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: ClipboardList,
                  title: "Planificacion del proyecto",
                  items: [
                    "Definicion de alcance, objetivos y entregables",
                    "Desglose de tareas con responsables y plazos (WBS)",
                    "Identificacion de dependencias y riesgos",
                    "Calendario de hitos y revisiones",
                  ],
                },
                {
                  icon: Users,
                  title: "Coordinacion de equipos",
                  items: [
                    "Interlocucion con todos los proveedores implicados",
                    "Briefings claros para cada equipo o profesional",
                    "Reuniones de seguimiento periodicas",
                    "Gestion de cambios de alcance y prioridades",
                  ],
                },
                {
                  icon: Wrench,
                  title: "Control de ejecucion",
                  items: [
                    "Seguimiento diario del avance de tareas",
                    "Deteccion temprana de bloqueos y resolucion proactiva",
                    "Control de calidad de entregables antes de tu aprobacion",
                    "Gestion del presupuesto del proyecto",
                  ],
                },
                {
                  icon: FolderKanban,
                  title: "Herramientas de gestion",
                  items: [
                    "Configuracion del espacio de trabajo (Notion, Asana, Monday)",
                    "Tableros visuales con el estado de cada tarea y proyecto",
                    "Documentacion centralizada y accesible",
                    "Acceso en tiempo real al estado de todo sin preguntar",
                  ],
                },
                {
                  icon: FileBarChart,
                  title: "Reporting y cierre",
                  items: [
                    "Informes de progreso periodicos",
                    "Revision de resultados vs. objetivos al finalizar cada fase",
                    "Documentacion de lecciones aprendidas",
                    "Transicion ordenada a la fase de mantenimiento",
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
                Tipos de proyectos que gestionamos
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Desarrollo o rediseno de web",
                  "Implementacion de CRM",
                  "Lanzamiento de campanas de publicidad digital",
                  "Proyectos de SEO",
                  "Implementacion de automatizaciones",
                  "Migracion de herramientas o plataformas",
                  "Lanzamiento de productos o servicios",
                  "Transformacion digital del area de marketing",
                ].map((type) => (
                  <span
                    key={type}
                    className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-md text-sm font-medium"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-white border border-border rounded-xl p-8">
              <h3 className="font-semibold text-text-primary mb-4">
                Modelos de colaboracion
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-2">
                    Gestion de proyecto puntual
                  </h4>
                  <p className="text-text-secondary text-sm">
                    Para un proyecto concreto con inicio y fin: lanzar la web,
                    implementar el CRM, etc.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">
                    Direccion de marketing externalizada
                  </h4>
                  <p className="text-text-secondary text-sm">
                    Un servicio continuado donde actuamos como tu responsable de
                    marketing externo, gestionando todos tus proyectos e
                    iniciativas de forma permanente.
                  </p>
                </div>
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
                  title: "Reunion de kick-off",
                  text: "Entendemos el proyecto, los objetivos, los plazos y los recursos disponibles.",
                },
                {
                  step: "02",
                  title: "Plan de proyecto",
                  text: "Te entregamos el plan con tareas, responsables, plazos e hitos. Lo revisamos juntos.",
                },
                {
                  step: "03",
                  title: "Ejecucion gestionada",
                  text: "Coordinamos, supervisamos y resolvemos problemas. Tu recibes actualizaciones periodicas sin tener que perseguir a nadie.",
                },
                {
                  step: "04",
                  title: "Entrega y cierre",
                  text: "Validacion final, documentacion y traspaso ordenado.",
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
                  title: "Las cosas se hacen",
                  text: "Con un gestor de proyecto dedicado, los proyectos avanzan a ritmo constante en lugar de quedarse atascados.",
                },
                {
                  title: "Tu te centras en tu negocio",
                  text: "Dejas de ser el coordinador de marketing improvisado y dedicas tu tiempo a lo que realmente aporta valor en tu empresa.",
                },
                {
                  title: "Visibilidad total",
                  text: "En cualquier momento puedes ver en que estado esta cada tarea, quien la tiene y cuando estara lista. Sin llamar a nadie.",
                },
                {
                  title: "Plazos y presupuestos controlados",
                  text: "Un buen gestor de proyecto detecta desviaciones antes de que sean problemas y actua para corregirlas.",
                },
                {
                  title: "Mejor resultado final",
                  text: "La coordinacion entre equipos mejora la calidad de los entregables. Cuando todo el mundo tiene el mismo contexto y los mismos plazos, el resultado es mejor.",
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
                    "Entendemos de marketing digital y de gestion de proyectos",
                  text: "No somos project managers genericos que no distinguen un CRM de un CMS. Conocemos las herramientas, los procesos y los tiempos reales de cada tipo de proyecto digital.",
                },
                {
                  title: "Perfil tecnico",
                  text: "Cuando un desarrollador dice que eso no se puede hacer o que necesita dos semanas mas, sabemos evaluarlo con criterio. No te trasladamos excusas, te trasladamos soluciones.",
                },
                {
                  title: "Experiencia en el sector servicios",
                  text: "Hemos gestionado proyectos de marketing digital para asesorias y empresas de servicios. Conocemos las dinamicas internas, las limitaciones de equipo y las prioridades del sector.",
                },
                {
                  title: "Un solo interlocutor",
                  text: "En lugar de gestionar a cinco proveedores diferentes, hablas con nosotros. Nosotros nos encargamos del resto.",
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
              Tienes proyectos de marketing parados o atascados. Vamos a
              desbloquearlos.
            </h2>
            <p className="text-lg text-blue-100 mb-10">
              Cuentanos que proyectos tienes pendientes y en que estado estan. Te
              propondremos un plan para sacarlos adelante.
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
