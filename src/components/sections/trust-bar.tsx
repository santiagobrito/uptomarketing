const metrics = [
  { value: "+15", label: "años en marketing de servicios profesionales" },
  { value: "+200", label: "campañas gestionadas para despachos" },
  { value: "100%", label: "de clientes con datos de coste por cliente real" },
  { value: "0", label: "contratos con permanencia obligatoria" },
];

export function TrustBar() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="font-mono text-copper-500 text-4xl font-bold mb-2">
                {metric.value}
              </p>
              <p className="text-text-secondary text-sm">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
