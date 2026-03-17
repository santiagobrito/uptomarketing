import Image from "next/image";

export function Partnership() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              Partners de Izquierdomotter Consultores
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Trabajamos junto a Izquierdomotter, consultora de referencia en
              desarrollo de negocio para despachos profesionales. Ellos ayudan a
              los despachos a definir su estrategia de crecimiento. Nosotros
              implementamos el sistema de marketing que la hace posible.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Esta alianza nos permite entender la realidad del despacho
              profesional desde dentro: sus ciclos, sus márgenes, sus frenos al
              cambio. No llegamos desde fuera con soluciones genéricas:
              construimos sobre un conocimiento profundo del sector.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/logo-izquierdomotter.png"
              alt="Izquierdo Motter - Despachos Profesionales"
              width={400}
              height={120}
              className="w-full max-w-sm"
            />
            <p className="text-text-secondary text-sm text-center mt-4">
              Consultores de despachos profesionales
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
