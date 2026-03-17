const metrics = [
  { value: "+15", label: "años en marketing de servicios profesionales" },
  { value: "+200", label: "campañas gestionadas para despachos" },
  { value: "100%", label: "de clientes con datos de coste por cliente real" },
  { value: "0", label: "contratos con permanencia obligatoria" },
];

export function TrustBar() {
  return (
    <section className="bg-white py-12 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`text-center animate-fade-in ${
                index < metrics.length - 1
                  ? "lg:border-r lg:border-gray-200"
                  : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <p className="font-mono text-copper-500 text-4xl font-bold mb-2">
                {metric.value}
              </p>
              <div className="mx-auto mb-2 h-0.5 w-10 bg-copper-500/40 rounded-full" />
              <p className="text-text-secondary text-sm">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
