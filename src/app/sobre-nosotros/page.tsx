import type { Metadata } from "next";
import { Shield, Code, Target, Users } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce Up To Marketing: consultora de marketing digital especializada en despachos profesionales. Estrategia, tecnología y resultados medibles.",
};

const valores = [
  {
    icon: Shield,
    title: "Transparencia radical",
    description:
      "Datos reales, informes claros, acceso completo a tus cuentas. Sin métricas de vanidad ni informes maquillados.",
  },
  {
    icon: Code,
    title: "Rigor técnico",
    description:
      "Programamos, automatizamos e integramos internamente. No subcontratamos lo que debería estar bajo control.",
  },
  {
    icon: Target,
    title: "Orientación a resultados",
    description:
      "Medimos en clientes captados, no en likes ni impresiones. Si no genera negocio, no tiene sentido.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "Somos tu equipo de marketing, no un proveedor más. Nos implicamos en tu negocio como si fuera el nuestro.",
  },
];

export default function SobreNosotros() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-blue-800 to-blue-700 py-24 lg:py-32 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='white'/%3E%3C/svg%3E")`,
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Quiénes somos
            </h1>
            <p className="text-lg lg:text-xl text-blue-200 leading-relaxed">
              Una consultora de marketing digital construida desde la
              experiencia real con despachos profesionales. Sin fórmulas
              genéricas, sin promesas vacías.
            </p>
          </div>
        </section>

        {/* Nuestra historia */}
        <section className="bg-bg-primary py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-8">
              Nuestra historia
            </h2>
            <div className="space-y-6 text-text-secondary leading-relaxed text-lg">
              <p>
                Santiago Brito fundó Up To Marketing tras más de 15 años
                trabajando en marketing para servicios profesionales. Durante
                ese tiempo, vio de primera mano cómo la mayoría de despachos
                recibían propuestas de marketing genéricas que no entendían su
                modelo de negocio, sus ciclos comerciales ni la forma en que
                realmente captan clientes.
              </p>
              <p>
                La diferencia de Up To Marketing nace de ahí: Santiago combina
                visión estratégica con un perfil técnico real. Programación,
                inteligencia artificial, automatizaciones, CRMs, analítica
                avanzada. No es un consultor que delega la ejecución: entiende
                lo que se puede construir porque lo construye.
              </p>
              <p>
                Eso permite ofrecer algo que pocos pueden: una estrategia de
                marketing diseñada específicamente para despachos profesionales,
                ejecutada con tecnología propia y medida con datos reales.
                Marketing que se mide en clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Nuestros valores */}
        <section className="bg-bg-secondary py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-12 text-center">
              Nuestros valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {valores.map((valor) => (
                <div
                  key={valor.title}
                  className="bg-white rounded-xl p-8 border border-border"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                      <valor.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary">
                      {valor.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {valor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quién está detrás */}
        <section className="bg-bg-primary py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4 text-center">
              Quién está detrás
            </h2>
            <p className="text-text-secondary text-lg text-center max-w-2xl mx-auto mb-12">
              Up To Marketing nace de la experiencia directa trabajando con despachos profesionales durante más de 15 años.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-10 bg-white border border-border rounded-2xl p-8">
              {/* Foto placeholder */}
              <div className="flex-shrink-0">
                <div className="h-48 w-48 rounded-2xl bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">SB</span>
                </div>
              </div>
              {/* Bio */}
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-1">
                  Santiago Brito
                </h3>
                <p className="text-copper-500 font-semibold mb-4">Fundador</p>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    Más de 15 años de experiencia en marketing digital para
                    servicios profesionales. Especializado en despachos de
                    abogados, asesorías fiscales y consultoras de empresa.
                  </p>
                  <p>
                    Perfil híbrido: estrategia de marketing combinada con
                    capacidad técnica real en programación, inteligencia
                    artificial, automatizaciones y sistemas CRM. Diseña la
                    estrategia y construye las herramientas para ejecutarla.
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/santiagobrito/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium mt-4 hover:text-blue-800 transition-colors"
                >
                  Ver perfil en LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Quieres conocernos mejor?
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Agenda una reunión sin compromiso. Te contamos cómo trabajamos y
              evaluamos si podemos ayudarte.
            </p>
            <Button href="/agendar-reunion" variant="primary" size="lg">
              Agendar una reunión
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
