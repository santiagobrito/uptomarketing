import { Users, Globe, CloudOff, DatabaseZap } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const painPoints: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Tus clientes llegan por el boca a boca y no controlas cuántos entran cada mes.",
    description:
      "Funciona, hasta que deja de funcionar. Un mes tienes tres encargos, al siguiente ninguno. Sin un sistema, el crecimiento no es predecible.",
    icon: Users,
  },
  {
    title: "Tu web existe, pero no genera ni una consulta al trimestre.",
    description:
      "La mandaste hacer, la pagaste, está ahí. Pero no convierte. Nadie rellena el formulario. Nadie llama. Es un folleto digital que no trabaja para ti.",
    icon: Globe,
  },
  {
    title: "Has probado con algún proveedor de marketing y no viste resultados concretos.",
    description:
      "Te hablaron de impresiones, alcance, seguidores. Pero tú querías clientes. Clientes reales que llaman, piden presupuesto y contratan.",
    icon: CloudOff,
  },
  {
    title: "Tienes un CRM (o algo parecido) que nadie usa.",
    description:
      "Lo contrataste con buena intención. Hoy es un Excel glorificado donde nadie registra nada. Cada lead que entra se gestiona a mano — o se pierde.",
    icon: DatabaseZap,
  },
];

export function PainPoints() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-12">
          ¿Te suena esto?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-bg-primary border border-border rounded-xl p-6"
            >
              <div className="bg-blue-50 p-3 rounded-full mb-4 inline-flex">
                <point.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-text-primary mb-3">
                {point.title}
              </h3>
              <p className="text-text-secondary">{point.description}</p>
            </div>
          ))}
        </div>
        <p className="text-blue-600 text-center font-medium">
          Si has dicho «sí» a dos o más, hablemos. Esto tiene solución, y es más
          concreta de lo que piensas.
        </p>
      </div>
    </section>
  );
}
