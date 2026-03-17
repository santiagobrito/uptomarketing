import { Calculator, Scale, Briefcase, Building2 } from "lucide-react";
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
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
        {/* Secondary audience */}
        <div className="border border-border bg-bg-primary rounded-xl p-6 flex items-center gap-4 max-w-2xl mx-auto">
          <Building2 className="text-blue-600 shrink-0" size={24} />
          <div>
            <h3 className="font-semibold text-text-primary">
              Empresas de servicios B2B
            </h3>
            <p className="text-text-secondary text-sm">
              También trabajamos con empresas de servicios profesionales que necesitan un sistema de captación digital estructurado y medible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
