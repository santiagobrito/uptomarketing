import { FadeIn } from "@/components/ui/fade-in";

const kpis = [
  {
    value: "-62%",
    label: "en coste por lead medio tras 90 días de optimización",
  },
  {
    value: "x3,5",
    label: "leads cualificados en el primer trimestre de trabajo",
  },
  {
    value: "94%",
    label: "de clientes continúan tras el primer año",
  },
];

const testimonials = [
  {
    quote:
      "Llevábamos tres años con la misma web y el mismo proveedor. En dos meses con Up To Marketing teníamos un CRM funcionando, campañas que generaban consultas reales y un dashboard donde por fin veíamos los números claros.",
    author: "[Nombre], Director/a, [Asesoría fiscal]",
  },
  {
    quote:
      "Lo que más valoro es que entienden cómo funciona un despacho. No tuve que explicarles qué es un ciclo de venta largo ni por qué un lead en nuestro sector no compra en dos clics.",
    author: "[Nombre], Socio/a, [Despacho de abogados]",
  },
];

export function SocialProof() {
  return (
    <section className="bg-bg-secondary py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-14">
          Resultados que se miden en clientes, no en likes.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          {kpis.map((kpi, index) => (
            <FadeIn key={kpi.value} delay={index * 100}>
              <p className="font-mono text-copper-500 text-5xl font-bold mb-3">
                {kpi.value}
              </p>
              <p className="text-text-secondary">{kpi.label}</p>
            </FadeIn>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.author} delay={index * 100}>
              <div className="bg-white border border-border rounded-xl p-8">
                <p className="italic text-text-primary leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="font-semibold text-sm text-text-secondary">
                  {testimonial.author}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
