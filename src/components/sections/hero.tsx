import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-24 lg:py-32 overflow-hidden">
      {/* Decorative dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='white'/%3E%3C/svg%3E")`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Badge / Pill */}
        <span className="inline-block bg-white/10 text-white/80 text-sm rounded-full px-4 py-1 mb-6">
          Marketing digital para despachos profesionales
        </span>

        <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Tu despacho merece un sistema de captación de clientes, no promesas de marketing.
        </h1>
        <p className="text-lg lg:text-xl text-blue-200 mb-10 leading-relaxed">
          Ayudamos a asesorías, despachos de abogados y consultoras de empresas a construir
          un flujo predecible de clientes cualificados. Con estrategia, tecnología y datos
          — con resultados medibles.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button href="#diagnostico" variant="primary" size="lg">
            Solicitar diagnóstico gratuito
          </Button>
          <Button href="#proceso" variant="outline" size="lg">
            Ver cómo trabajamos
          </Button>
        </div>
        <p className="text-white/60 text-sm mb-10">
          Sin compromiso. En 48h tienes tu diagnóstico con recomendaciones accionables.
        </p>

        {/* Sector tags */}
        <div className="flex flex-wrap justify-center gap-2">
          <span className="text-xs text-white/60 mr-2 self-center">SECTORES Y ESPECIALIZACIÓN</span>
          {["Asesorías fiscales", "Despachos contables", "Bufetes de abogados", "Consultoras", "Empresas de servicios B2B"].map((tag) => (
            <span
              key={tag}
              className="bg-white/10 text-white/70 text-xs rounded-full px-3 py-1 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
