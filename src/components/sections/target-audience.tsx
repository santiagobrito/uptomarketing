import { Calculator, Scale, Briefcase } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const audiences: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Asesorías fiscales y contables",
    description:
      "Necesitas diferenciarte en un mercado donde todos ofrecen lo mismo. Te ayudamos a posicionarte, captar empresas que buscan asesor y medir cada euro invertido.",
    icon: Calculator,
  },
  {
    title: "Despachos de abogados de empresa",
    description:
      "Tu web la leen otros abogados, no potenciales clientes. Reenfocamos tu contenido, tu posicionamiento y tu captación para atraer a quien realmente contrata.",
    icon: Scale,
  },
  {
    title: "Consultoras de empresas",
    description:
      "Has probado dos o tres proveedores de marketing y ninguno entendió tu negocio B2B. Nosotros sí entendemos ciclos de venta largos, tickets altos y decisores múltiples.",
    icon: Briefcase,
  },
];

export function TargetAudience() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-4">
          Trabajamos con despachos profesionales que quieren crecer con método.
        </h2>
        <p className="text-text-secondary text-lg text-center max-w-3xl mx-auto mb-14">
          Nuestros clientes comparten algo: están cansados de invertir en
          marketing sin saber qué funciona. Quieren datos, sistema y resultados.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="border-t-4 border-copper-500 bg-bg-primary rounded-xl p-6"
            >
              <audience.icon className="text-copper-500 mb-3" size={28} />
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {audience.title}
              </h3>
              <p className="text-text-secondary">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
