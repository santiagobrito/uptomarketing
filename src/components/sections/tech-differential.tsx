import { Code2, Brain, Layers, BarChart3 } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const differentials: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Programamos soluciones a medida.",
    description:
      "Si necesitas una integración entre tu software de gestión y tu CRM, la desarrollamos. No dependemos de plugins ni de terceros.",
    icon: Code2,
  },
  {
    title: "Aplicamos inteligencia artificial de verdad.",
    description:
      "No como buzzword. Usamos IA para analizar datos de campañas, generar contenido técnico supervisado, automatizar tareas repetitivas y detectar oportunidades que a ojo no se ven.",
    icon: Brain,
  },
  {
    title: "Conectamos todo tu stack.",
    description:
      "CRM, web, campañas, email marketing, analytics. Todo habla entre sí. Cada formulario genera un lead en tu CRM, cada lead se puntúa, cada oportunidad se rastrea.",
    icon: Layers,
  },
  {
    title: "Te damos un dashboard con los datos que importan.",
    description:
      "Coste por lead, coste por cliente, ROI por canal, evolución mensual. Datos de negocio actualizados, no informes estáticos que nadie lee.",
    icon: BarChart3,
  },
];

export function TechDifferential() {
  return (
    <section className="bg-blue-800 text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">
          Por qué no somos una consultora más.
        </h2>
        <p className="text-blue-200 text-lg text-center mb-14 leading-relaxed">
          La mayoría de proveedores de marketing para despachos te ofrecen una
          web en WordPress, una campaña en Google y un informe mensual en PDF.
          Nosotros vamos bastante más allá.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentials.map((item) => (
            <div key={item.title}>
              <div className="bg-white/10 p-2 rounded-lg mb-3 inline-flex">
                <item.icon className="text-copper-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-blue-200 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-copper-500 text-xl font-semibold text-center mt-12">
          Donde otros hacen marketing, nosotros construimos sistemas de
          captación.
        </p>
      </div>
    </section>
  );
}
