import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  Brain,
  FileText,
  BarChart3,
  MessageSquare,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Users,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Consultoria en Inteligencia Artificial Aplicada al Marketing | IA para Empresas B2B",
  description:
    "Aplicamos inteligencia artificial a tu marketing: generacion de contenidos, analisis predictivo, chatbots y automatizacion inteligente. Para asesorias y empresas B2B.",
};

export default function ConsultoriaIA() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-800 to-blue-700 text-white py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              La inteligencia artificial no va a sustituir tu marketing. Pero si
              puede multiplicarlo.
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Te ayudamos a identificar donde la IA aporta valor real en tu
              marketing y a implementarla sin experimentos. Aplicaciones
              practicas, resultados medibles.
            </p>
            <Button href="/contacto" variant="primary" size="lg">
              Agendar sesion de diagnostico IA
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
              La inteligencia artificial esta en todas partes. Cada dia aparece
              una herramienta nueva que promete revolucionar tu marketing. Y tu
              estas en una de estas situaciones:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Lightbulb,
                  title: "Paralisis por sobreinformacion",
                  text: "ChatGPT, Gemini, Claude, Midjourney, Jasper, cien herramientas mas. No sabes por donde empezar ni cuales son relevantes para tu negocio.",
                },
                {
                  icon: Target,
                  title: "Uso superficial",
                  text: "Usas ChatGPT para escribir algun email o post de LinkedIn, pero intuyes que hay aplicaciones mucho mas potentes que no estas aprovechando.",
                },
                {
                  icon: Shield,
                  title: "Miedo a invertir en lo equivocado",
                  text: "Has visto a empresas gastar dinero en proyectos de IA que no han funcionado. No quieres ser la siguiente.",
                },
                {
                  icon: TrendingUp,
                  title: "Tu competencia ya lo esta usando",
                  text: "Mientras tu evaluas, otros despachos y asesorias ya estan automatizando con IA partes de su marketing y su operativa.",
                },
                {
                  icon: Users,
                  title: "Falta de perfil tecnico interno",
                  text: "Tu equipo de marketing no tiene la capacidad tecnica para evaluar, seleccionar e implementar soluciones de IA.",
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
              La realidad es que la IA ya no es el futuro. Es el presente. Y en
              el marketing de servicios profesionales tiene aplicaciones muy
              concretas que generan ventaja competitiva real.
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
              Te acompanamos en todo el proceso: identificamos las oportunidades
              reales de IA para tu marketing, te recomendamos las herramientas
              adecuadas, las implementamos y formamos a tu equipo para que las
              use con autonomia.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FileText,
                  title: "Generacion y optimizacion de contenidos",
                  items: [
                    "Sistemas de generacion de contenido asistida por IA para blog, newsletter y redes",
                    "Flujos que combinan IA + revision humana para mantener calidad y voz de marca",
                    "Optimizacion de textos existentes para SEO con apoyo de IA",
                    "Generacion de variaciones de copys para testing A/B",
                  ],
                },
                {
                  icon: BarChart3,
                  title: "Analisis de datos y prediccion",
                  items: [
                    "Analisis automatico de datos de campanas con insights accionables",
                    "Lead scoring predictivo: la IA identifica leads con mas probabilidad de convertir",
                    "Analisis de sentimiento en resenas, menciones y feedback",
                    "Prevision de tendencias de busqueda en tu sector",
                  ],
                },
                {
                  icon: MessageSquare,
                  title: "Chatbots y asistentes virtuales",
                  items: [
                    "Chatbots inteligentes para tu web que cualifican leads 24/7",
                    "Asistentes de IA para tu equipo interno",
                    "Integracion de chatbots con tu CRM para registro automatico",
                  ],
                },
                {
                  icon: Zap,
                  title: "Automatizacion inteligente",
                  items: [
                    "Flujos de automatizacion potenciados con IA (decisiones dinamicas)",
                    "Clasificacion automatica de leads por intencion y urgencia",
                    "Personalizacion de comunicaciones basada en comportamiento",
                    "Resumenes automaticos de reuniones y generacion de actas",
                  ],
                },
                {
                  icon: Target,
                  title: "Publicidad optimizada con IA",
                  items: [
                    "Uso avanzado de las capacidades de IA de Google Ads (PMax, Smart Bidding)",
                    "Generacion de creatividades con IA para testing",
                    "Analisis automatico de rendimiento de campanas con recomendaciones",
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
                  title: "Diagnostico de oportunidades",
                  text: "Analizamos tu marketing actual e identificamos donde la IA puede generar impacto real. No todo se soluciona con IA, y seremos honestos sobre ello.",
                },
                {
                  step: "02",
                  title: "Hoja de ruta priorizada",
                  text: "Te presentamos las oportunidades ordenadas por impacto, viabilidad y coste de implementacion. Tu decides por donde empezar.",
                },
                {
                  step: "03",
                  title: "Implementacion por fases",
                  text: "Empezamos por las quick wins (alto impacto, baja complejidad) para generar resultados rapidos y confianza.",
                },
                {
                  step: "04",
                  title: "Formacion del equipo",
                  text: "No implementamos y nos vamos. Formamos a tu equipo para que use las herramientas con autonomia.",
                },
                {
                  step: "05",
                  title: "Evolucion continua",
                  text: "El campo de la IA avanza rapido. Te mantenemos actualizado y te proponemos nuevas aplicaciones cuando son relevantes.",
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
                  title: "Productividad multiplicada",
                  text: "Tareas que hoy consumen horas (crear contenidos, analizar datos, cualificar leads) se reducen a minutos con las herramientas y flujos adecuados.",
                },
                {
                  title: "Decisiones mas inteligentes",
                  text: "Datos analizados en profundidad con IA para identificar patrones y oportunidades que el analisis manual no detecta.",
                },
                {
                  title: "Ventaja competitiva real",
                  text: "En un sector donde la mayoria de competidores todavia no usa IA de forma estrategica, hacerlo bien te posiciona un paso por delante.",
                },
                {
                  title: "Inversion con retorno medible",
                  text: "Cada implementacion de IA que proponemos tiene un caso de negocio claro. No experimentamos con tu presupuesto.",
                },
                {
                  title: "Autonomia para tu equipo",
                  text: "No creamos dependencia. Formamos a tu gente para que integre la IA en su dia a dia.",
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
                  title: "Somos tecnicos de verdad",
                  text: "No somos una consultora de marketing que ha aprendido a usar ChatGPT y ahora ofrece servicios de IA. Programamos, integramos APIs, construimos flujos personalizados y entendemos como funcionan estas tecnologias por dentro.",
                },
                {
                  title: "Aplicacion practica, no teoria",
                  text: "No vendemos consultoria estrategica de IA generica. Implementamos soluciones concretas que puedes usar al dia siguiente. Si no aporta valor tangible, no lo recomendamos.",
                },
                {
                  title: "Contexto de marketing de servicios",
                  text: "Sabemos que las necesidades de IA de una asesoria no son las de una marca de consumo. Las aplicaciones que implementamos estan pensadas para tu realidad: ciclos de venta largos, relaciones de confianza, contenido tecnico, clientes empresariales.",
                },
                {
                  title: "Honestidad sobre los limites",
                  text: "La IA no lo resuelve todo. Te diremos con claridad que puede hacer, que no puede hacer y donde el factor humano sigue siendo insustituible. Especialmente en servicios profesionales, donde la confianza personal es clave.",
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
              Descubre que puede hacer la IA por tu marketing. Sin humo.
            </h2>
            <p className="text-lg text-blue-100 mb-10">
              En una sesion de 30 minutos identificamos las 2-3 aplicaciones de
              IA con mayor impacto para tu negocio. Concreto y accionable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto" variant="primary" size="lg">
                Agendar sesion de diagnostico IA
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
