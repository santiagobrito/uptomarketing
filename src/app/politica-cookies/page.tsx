import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Política de cookies de Up To Marketing. Información sobre las cookies utilizadas en nuestro sitio web conforme al RGPD.",
};

export default function PoliticaCookies() {
  return (
    <>
      <Header />
      <main className="bg-white py-16 lg:py-24">
        <article className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-8">
            Política de Cookies
          </h1>
          <p className="text-text-secondary text-sm mb-12">
            Última actualización: marzo de 2026
          </p>

          <div className="space-y-10 text-text-primary leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-4">
                1. ¿Qué son las cookies?
              </h2>
              <p className="text-text-secondary">
                Las cookies son pequeños archivos de texto que los sitios web
                almacenan en tu navegador cuando los visitas. Se utilizan para
                recordar tus preferencias, analizar el uso del sitio web y, en
                algunos casos, personalizar la experiencia de navegación. Las
                cookies no contienen información personal identificable por sí
                mismas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                2. ¿Quién utiliza las cookies?
              </h2>
              <p className="text-text-secondary">
                Las cookies de este sitio web son gestionadas por Up To
                Marketing (cookies propias) y por terceros proveedores de
                servicios de analítica (cookies de terceros), conforme se
                detalla a continuación.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                3. Tipos de cookies que utilizamos
              </h2>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">
                  3.1 Cookies técnicas (necesarias)
                </h3>
                <p className="text-text-secondary mb-4">
                  Son imprescindibles para el correcto funcionamiento del sitio
                  web. Permiten la navegación y el uso de las funciones básicas
                  de la página. No requieren consentimiento.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border border-border rounded-lg">
                    <thead>
                      <tr className="bg-bg-secondary">
                        <th className="px-4 py-3 font-semibold text-text-primary border-b border-border">
                          Cookie
                        </th>
                        <th className="px-4 py-3 font-semibold text-text-primary border-b border-border">
                          Finalidad
                        </th>
                        <th className="px-4 py-3 font-semibold text-text-primary border-b border-border">
                          Duración
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-text-secondary">
                      <tr className="border-b border-border">
                        <td className="px-4 py-3 font-mono text-sm">
                          cookie_consent
                        </td>
                        <td className="px-4 py-3">
                          Almacena las preferencias de cookies del usuario
                        </td>
                        <td className="px-4 py-3">12 meses</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-mono text-sm">
                          session_id
                        </td>
                        <td className="px-4 py-3">
                          Identificador de sesión para la navegación
                        </td>
                        <td className="px-4 py-3">Sesión</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">
                  3.2 Cookies analíticas
                </h3>
                <p className="text-text-secondary mb-4">
                  Permiten analizar el comportamiento de los usuarios en el
                  sitio web para mejorar nuestros contenidos y servicios. Estos
                  datos se recogen de forma agregada y anónima. Requieren
                  consentimiento previo.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border border-border rounded-lg">
                    <thead>
                      <tr className="bg-bg-secondary">
                        <th className="px-4 py-3 font-semibold text-text-primary border-b border-border">
                          Cookie
                        </th>
                        <th className="px-4 py-3 font-semibold text-text-primary border-b border-border">
                          Proveedor
                        </th>
                        <th className="px-4 py-3 font-semibold text-text-primary border-b border-border">
                          Finalidad
                        </th>
                        <th className="px-4 py-3 font-semibold text-text-primary border-b border-border">
                          Duración
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-text-secondary">
                      <tr className="border-b border-border">
                        <td className="px-4 py-3 font-mono text-sm">_ga</td>
                        <td className="px-4 py-3">Google Analytics</td>
                        <td className="px-4 py-3">
                          Distingue usuarios únicos
                        </td>
                        <td className="px-4 py-3">2 años</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-4 py-3 font-mono text-sm">
                          _ga_*
                        </td>
                        <td className="px-4 py-3">Google Analytics</td>
                        <td className="px-4 py-3">
                          Mantiene el estado de la sesión
                        </td>
                        <td className="px-4 py-3">2 años</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-mono text-sm">
                          plausible_*
                        </td>
                        <td className="px-4 py-3">Plausible Analytics</td>
                        <td className="px-4 py-3">
                          Analítica web respetuosa con la privacidad
                        </td>
                        <td className="px-4 py-3">Sin cookies persistentes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                4. ¿Cómo gestionar las cookies?
              </h2>
              <p className="text-text-secondary mb-4">
                Puedes configurar tu navegador para bloquear o eliminar las
                cookies. A continuación, te indicamos cómo hacerlo en los
                navegadores más habituales:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>
                  <strong className="text-text-primary">Google Chrome:</strong>{" "}
                  Configuración &gt; Privacidad y seguridad &gt; Cookies y otros
                  datos de sitios
                </li>
                <li>
                  <strong className="text-text-primary">Mozilla Firefox:</strong>{" "}
                  Opciones &gt; Privacidad y seguridad &gt; Cookies y datos del
                  sitio
                </li>
                <li>
                  <strong className="text-text-primary">Safari:</strong>{" "}
                  Preferencias &gt; Privacidad &gt; Gestionar datos del sitio
                  web
                </li>
                <li>
                  <strong className="text-text-primary">
                    Microsoft Edge:
                  </strong>{" "}
                  Configuración &gt; Cookies y permisos del sitio &gt; Cookies y
                  datos almacenados
                </li>
              </ul>
              <p className="text-text-secondary mt-4">
                Ten en cuenta que el bloqueo de cookies técnicas puede afectar
                al funcionamiento correcto del sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                5. Actualizaciones de esta política
              </h2>
              <p className="text-text-secondary">
                Esta Política de Cookies puede actualizarse periódicamente para
                reflejar cambios en las cookies que utilizamos o por motivos
                legales. Te recomendamos revisarla de forma periódica. La fecha
                de la última actualización aparece al inicio de esta página.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Contacto</h2>
              <p className="text-text-secondary">
                Si tienes cualquier duda sobre nuestra Política de Cookies,
                puedes contactarnos en{" "}
                <a
                  href="mailto:hola@uptomarketing.com"
                  className="text-blue-600 hover:underline"
                >
                  hola@uptomarketing.com
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
