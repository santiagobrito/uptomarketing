const differentials = [
  {
    title: "Programamos soluciones a medida.",
    description:
      "Si necesitas una integración entre tu software de gestión y tu CRM, la desarrollamos. No dependemos de plugins ni de terceros.",
  },
  {
    title: "Aplicamos inteligencia artificial de verdad.",
    description:
      "No como buzzword. Usamos IA para analizar datos de campañas, generar contenido técnico supervisado, automatizar tareas repetitivas y detectar oportunidades que a ojo no se ven.",
  },
  {
    title: "Conectamos todo tu stack.",
    description:
      "CRM, web, campañas, email marketing, analytics. Todo habla entre sí. Cada formulario genera un lead en tu CRM, cada lead se puntúa, cada oportunidad se rastrea.",
  },
  {
    title: "Te damos un dashboard con los datos que importan.",
    description:
      "Coste por lead, coste por cliente, ROI por canal, evolución mensual. Datos de negocio actualizados, no informes estáticos que nadie lee.",
  },
];

export function TechDifferential() {
  return (
    <section className="bg-blue-800 text-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">
          Por qué no somos una consultora más.
        </h2>
        <p className="text-blue-200 text-lg text-center mb-14 leading-relaxed">
          La mayoría de proveedores de marketing para despachos te ofrecen una
          web en WordPress, una campaña en Google y un informe mensual en PDF.
          Nosotros vamos bastante más allá.
        </p>
        <div className="flex flex-col gap-8">
          {differentials.map((item) => (
            <div key={item.title}>
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
