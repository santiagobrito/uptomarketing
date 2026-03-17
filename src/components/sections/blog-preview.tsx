const posts = [
  {
    title: "Guía completa de marketing para despachos profesionales en 2026",
    excerpt:
      "Todo lo que necesitas saber para diseñar una estrategia de captación digital adaptada a tu despacho, paso a paso.",
  },
  {
    title:
      "Cómo conseguir clientes para tu asesoría sin depender del boca a boca",
    excerpt:
      "El boca a boca funciona, pero no escala. Descubre cómo construir un canal de captación predecible y medible.",
  },
  {
    title: "CRM para despachos: cuál elegir y cómo implementarlo",
    excerpt:
      "Comparativa práctica de los CRM más usados en servicios profesionales, con criterios reales de selección e implementación.",
  },
];

export function BlogPreview() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-4">
          Últimas publicaciones
        </h2>
        <p className="text-text-secondary text-lg text-center max-w-3xl mx-auto mb-14">
          Ideas prácticas sobre marketing digital para despachos profesionales.
          Sin teoría vacía.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <div
              key={post.title}
              className="bg-white border border-border rounded-xl overflow-hidden"
            >
              <div className="bg-bg-secondary h-48" />
              <div className="p-6">
                <h3 className="font-semibold text-text-primary mb-2">
                  {post.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {post.excerpt}
                </p>
                <a href="#" className="text-blue-600 font-medium text-sm">
                  Leer artículo &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="/blog" className="text-blue-600 font-semibold">
            Ver todas las publicaciones &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
