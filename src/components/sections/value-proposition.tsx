import { Target, Wrench, TrendingDown } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const pillars: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Estrategia con foco en negocio",
    description:
      "Cada acción de marketing responde a un objetivo de negocio concreto. Nada de «a ver qué pasa».",
    icon: Target,
  },
  {
    title: "Implementación técnica real",
    description:
      "Programamos, integramos y automatizamos. Tu CRM, tu web, tus campañas y tus datos, conectados de verdad.",
    icon: Wrench,
  },
  {
    title: "Medición por coste por cliente",
    description:
      "Sabrás exactamente cuánto te cuesta cada cliente nuevo. No impresiones, no clics: clientes.",
    icon: TrendingDown,
  },
];

export function ValueProposition() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">
          Marketing que se mide en clientes.
        </h2>
        <p className="text-blue-100 text-lg text-center max-w-3xl mx-auto mb-14 leading-relaxed">
          No vendemos visibilidad. No vendemos «presencia digital». Vendemos un
          sistema que conecta tu estrategia de marketing con resultados que
          puedes medir en tu cuenta de resultados: cuántos leads entran, cuánto
          cuesta cada uno y cuántos se convierten en clientes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title}>
              <div className="bg-white/10 p-3 rounded-full mb-4 inline-flex">
                <pillar.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-blue-100">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
