import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Aviso legal de Up To Marketing. Información sobre el titular del sitio web, condiciones de uso y responsabilidad.",
};

export default function AvisoLegal() {
  return (
    <>
      <Header />
      <main className="bg-white py-16 lg:py-24">
        <article className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-8">
            Aviso Legal
          </h1>
          <p className="text-text-secondary text-sm mb-12">
            Última actualización: marzo de 2026
          </p>

          <div className="space-y-10 text-text-primary leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-4">
                1. Datos identificativos del titular
              </h2>
              <p className="text-text-secondary mb-4">
                En cumplimiento del deber de información establecido en la Ley
                34/2002, de 11 de julio, de servicios de la sociedad de la
                información y de comercio electrónico (LSSI-CE), se facilitan
                los siguientes datos del titular del sitio web:
              </p>
              <ul className="space-y-1 text-text-secondary">
                <li>
                  <strong className="text-text-primary">Titular:</strong> Up To
                  Marketing
                </li>
                <li>
                  <strong className="text-text-primary">Actividad:</strong>{" "}
                  Consultoría de marketing digital
                </li>
                <li>
                  <strong className="text-text-primary">Domicilio:</strong>{" "}
                  [Pendiente de confirmar]
                </li>
                <li>
                  <strong className="text-text-primary">
                    Correo electrónico:
                  </strong>{" "}
                  hola@uptomarketing.com
                </li>
                <li>
                  <strong className="text-text-primary">Sitio web:</strong>{" "}
                  uptomarketing.com
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                2. Objeto y ámbito de aplicación
              </h2>
              <p className="text-text-secondary">
                El presente aviso legal regula el acceso y uso del sitio web
                uptomarketing.com (en adelante, el Sitio Web), que Up To
                Marketing pone a disposición de los usuarios de Internet. El
                acceso al Sitio Web implica la aceptación sin reservas de las
                presentes condiciones de uso.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                3. Condiciones de uso
              </h2>
              <p className="text-text-secondary mb-4">
                El usuario se compromete a utilizar el Sitio Web de conformidad
                con la ley, el presente aviso legal y las buenas costumbres. El
                usuario se obliga a abstenerse de:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>
                  Utilizar el Sitio Web con fines ilícitos o que atenten contra
                  los derechos de terceros
                </li>
                <li>
                  Introducir o difundir virus informáticos o cualquier otro
                  sistema que pueda causar daños en los sistemas informáticos
                  del titular o de terceros
                </li>
                <li>
                  Intentar acceder a áreas restringidas del Sitio Web sin
                  autorización
                </li>
                <li>
                  Reproducir, copiar, distribuir o modificar los contenidos del
                  Sitio Web sin autorización previa y por escrito del titular
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                4. Propiedad intelectual e industrial
              </h2>
              <p className="text-text-secondary">
                Todos los contenidos del Sitio Web, incluyendo textos, imágenes,
                diseño gráfico, código fuente, logotipos, marcas y demás
                elementos, son propiedad de Up To Marketing o de terceros que
                han autorizado su uso, y están protegidos por las leyes
                españolas e internacionales de propiedad intelectual e
                industrial. Queda prohibida su reproducción, distribución,
                comunicación pública o transformación sin autorización expresa
                del titular.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                5. Exclusión de responsabilidad
              </h2>
              <p className="text-text-secondary mb-4">
                Up To Marketing no se hace responsable de:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>
                  Los daños que pudieran derivarse de interferencias, omisiones,
                  interrupciones, virus informáticos o desconexiones en el
                  funcionamiento operativo del sistema
                </li>
                <li>
                  Los daños que pudieran causarse por terceros mediante
                  intromisiones ilegítimas fuera del control del titular
                </li>
                <li>
                  La exactitud, veracidad o actualidad de los contenidos
                  publicados en el Sitio Web, reservándose el derecho a
                  modificarlos sin previo aviso
                </li>
                <li>
                  Los contenidos y opiniones expresados por terceros en
                  comentarios o foros, si los hubiera
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                6. Enlaces a terceros
              </h2>
              <p className="text-text-secondary">
                El Sitio Web puede contener enlaces a sitios de terceros. Up To
                Marketing no asume responsabilidad alguna por los contenidos,
                políticas de privacidad o prácticas de dichos sitios web de
                terceros. La inclusión de enlaces no implica la aprobación o
                asociación con sus operadores.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                7. Protección de datos
              </h2>
              <p className="text-text-secondary">
                En relación con el tratamiento de datos personales, consulta
                nuestra{" "}
                <a
                  href="/politica-privacidad"
                  className="text-blue-600 hover:underline"
                >
                  Política de Privacidad
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                8. Legislación aplicable y jurisdicción
              </h2>
              <p className="text-text-secondary">
                Las presentes condiciones se rigen por la legislación española.
                Para la resolución de cualquier controversia que pudiera
                derivarse del acceso o uso de este Sitio Web, las partes se
                someten a la jurisdicción de los juzgados y tribunales del
                domicilio del titular, salvo que la normativa aplicable
                establezca un fuero distinto.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                9. Modificaciones
              </h2>
              <p className="text-text-secondary">
                Up To Marketing se reserva el derecho a modificar el presente
                aviso legal sin previo aviso. Las modificaciones entrarán en
                vigor desde el momento de su publicación en el Sitio Web. Es
                responsabilidad del usuario revisar periódicamente el aviso
                legal vigente.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
