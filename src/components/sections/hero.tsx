export function Hero() {
  return (
    <section className="bg-blue-800 py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Tu despacho merece un sistema de captación de clientes, no promesas de marketing.
        </h1>
        <p className="text-lg lg:text-xl text-blue-200 mb-10 leading-relaxed">
          Ayudamos a asesorías, despachos de abogados y consultoras de empresas a construir
          un flujo predecible de clientes cualificados. Con estrategia, tecnología y datos
          — no con humo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="#diagnostico"
            className="bg-copper-500 hover:bg-copper-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
          >
            Solicitar diagnóstico gratuito
          </a>
          <a
            href="#proceso"
            className="border border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition"
          >
            Ver cómo trabajamos
          </a>
        </div>
        <p className="text-white/60 text-sm">
          Sin compromiso. En 48h tienes tu diagnóstico con recomendaciones accionables.
        </p>
      </div>
    </section>
  );
}
