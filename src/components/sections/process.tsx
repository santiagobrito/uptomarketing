const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Analizamos tu situación actual: web, posicionamiento, canales, CRM, competencia. Te entregamos un informe con hallazgos concretos y oportunidades priorizadas.",
    duration: "Duración: 1 semana",
  },
  {
    number: "02",
    title: "Estrategia",
    description:
      "Definimos objetivos de negocio, canales prioritarios, presupuesto recomendado y calendario de implementación. Tú apruebas antes de que se ejecute nada.",
    duration: "Duración: 1-2 semanas",
  },
  {
    number: "03",
    title: "Implementación",
    description:
      "Ponemos en marcha: web, campañas, CRM, automatizaciones, contenido. Todo integrado desde el primer día. Sin fases eternas, con entregables concretos.",
    duration: "Duración: 4-6 semanas",
  },
  {
    number: "04",
    title: "Optimización continua",
    description:
      "Medimos, ajustamos y mejoramos cada mes. Reunión mensual con datos reales: qué funciona, qué no, qué cambiamos. Sin permanencias.",
    duration: "Ciclo mensual",
  },
];

export function Process() {
  return (
    <section id="proceso" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-4">
          Cómo trabajamos: de diagnóstico a resultados.
        </h2>
        <p className="text-text-secondary text-lg text-center max-w-3xl mx-auto mb-14">
          Sin sorpresas, sin letra pequeña. Un proceso claro con hitos medibles
          desde el primer día.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number}>
              <p className="font-mono text-copper-500 text-3xl font-bold mb-2">
                {step.number}
              </p>
              <h3 className="font-semibold text-text-primary text-lg mb-3">
                {step.title}
              </h3>
              <p className="text-text-secondary mb-4">{step.description}</p>
              <p className="text-sm text-text-secondary italic">
                {step.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
