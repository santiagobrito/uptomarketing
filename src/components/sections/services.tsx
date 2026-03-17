const services = [
  {
    title: "Estrategia de marketing digital",
    description:
      "Auditoría, plan de acción y objetivos medibles. El punto de partida antes de tocar nada.",
  },
  {
    title: "SEO y posicionamiento web",
    description:
      "Que te encuentren las empresas que buscan tu servicio en Google. Con contenido técnico que posiciona y convierte.",
  },
  {
    title: "Publicidad digital",
    description:
      "Google Ads, Meta Ads, programática. Campañas orientadas a generar consultas cualificadas, no clics vacíos.",
  },
  {
    title: "CRM e integraciones",
    description:
      "Configuramos y conectamos tu CRM para que cada lead se registre, se clasifique y se siga de forma automática.",
  },
  {
    title: "Automatizaciones de marketing",
    description:
      "Secuencias de email, scoring de leads, alertas al comercial. Que tu sistema trabaje mientras tú asesoras.",
  },
  {
    title: "Desarrollo web orientado a conversión",
    description:
      "Webs que no solo se ven bien: convierten visitas en consultas. Desarrollo propio, sin plantillas genéricas.",
  },
];

export function Services() {
  return (
    <section className="bg-bg-secondary py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-4">
          Lo que implementamos para tu despacho
        </h2>
        <p className="text-text-secondary text-lg text-center max-w-3xl mx-auto mb-14">
          No hacemos de todo para todos. Nos especializamos en lo que genera
          clientes para servicios profesionales.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary mb-4">{service.description}</p>
              <a href="#" className="text-blue-600 font-medium text-sm">
                Saber más &rarr;
              </a>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="/servicios" className="text-blue-600 font-semibold">
            Ver todos los servicios &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
