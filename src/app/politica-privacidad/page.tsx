import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Up To Marketing. Información sobre el tratamiento de datos personales conforme al RGPD.",
};

export default function PoliticaPrivacidad() {
  return (
    <>
      <Header />
      <main className="bg-white py-16 lg:py-24">
        <article className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-8">
            Política de Privacidad
          </h1>
          <p className="text-text-secondary text-sm mb-12">
            Última actualización: marzo de 2026
          </p>

          <div className="space-y-10 text-text-primary leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-4">
                1. Responsable del tratamiento
              </h2>
              <ul className="space-y-1 text-text-secondary">
                <li>
                  <strong className="text-text-primary">Identidad:</strong> Up
                  To Marketing
                </li>
                <li>
                  <strong className="text-text-primary">
                    Correo electrónico:
                  </strong>{" "}
                  hola@uptomarketing.com
                </li>
                <li>
                  <strong className="text-text-primary">Actividad:</strong>{" "}
                  Consultoría de marketing digital
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                2. Datos personales que recogemos
              </h2>
              <p className="text-text-secondary mb-4">
                Recogemos los datos personales que nos proporcionas
                voluntariamente a través de los formularios de contacto,
                solicitudes de diagnóstico y suscripciones de nuestra web. Estos
                datos pueden incluir:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>Nombre y apellidos</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Nombre de la empresa o despacho</li>
                <li>Cargo profesional</li>
                <li>Dirección IP y datos de navegación (mediante cookies)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                3. Finalidad del tratamiento
              </h2>
              <p className="text-text-secondary mb-4">
                Los datos personales recogidos se utilizan para las siguientes
                finalidades:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>
                  Gestionar las solicitudes de contacto y consultas recibidas
                </li>
                <li>
                  Elaborar y enviar diagnósticos digitales personalizados
                </li>
                <li>
                  Enviar comunicaciones comerciales relacionadas con nuestros
                  servicios, siempre que exista consentimiento previo
                </li>
                <li>
                  Analizar el uso de la web para mejorar nuestros servicios y
                  contenidos
                </li>
                <li>Cumplir con las obligaciones legales aplicables</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                4. Base legal del tratamiento
              </h2>
              <p className="text-text-secondary mb-4">
                La base legal para el tratamiento de tus datos depende de la
                finalidad:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>
                  <strong className="text-text-primary">Consentimiento:</strong>{" "}
                  para el envío de comunicaciones comerciales y el uso de cookies
                  analíticas
                </li>
                <li>
                  <strong className="text-text-primary">
                    Ejecución de un contrato o medidas precontractuales:
                  </strong>{" "}
                  para la gestión de solicitudes de diagnóstico y propuestas de
                  servicios
                </li>
                <li>
                  <strong className="text-text-primary">
                    Interés legítimo:
                  </strong>{" "}
                  para el análisis y mejora de nuestra web y servicios
                </li>
                <li>
                  <strong className="text-text-primary">
                    Obligación legal:
                  </strong>{" "}
                  para el cumplimiento de las obligaciones fiscales y mercantiles
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                5. Plazo de conservación
              </h2>
              <p className="text-text-secondary">
                Los datos personales se conservarán durante el tiempo necesario
                para cumplir con la finalidad para la que fueron recogidos y
                para determinar las posibles responsabilidades que se pudieran
                derivar de dicha finalidad. En el caso de datos de contacto
                comercial, se conservarán mientras exista un interés mutuo o
                hasta que solicites su supresión.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                6. Destinatarios de los datos
              </h2>
              <p className="text-text-secondary">
                No se cederán datos personales a terceros salvo obligación
                legal. Utilizamos proveedores de servicios (hosting, correo
                electrónico, analítica web) que pueden tener acceso a datos
                personales en calidad de encargados del tratamiento, con los que
                se han firmado los correspondientes acuerdos de tratamiento de
                datos conforme al RGPD.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                7. Derechos del interesado
              </h2>
              <p className="text-text-secondary mb-4">
                Puedes ejercer los siguientes derechos en relación con tus datos
                personales:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>
                  <strong className="text-text-primary">Acceso:</strong>{" "}
                  solicitar confirmación de si tratamos tus datos y acceder a
                  ellos
                </li>
                <li>
                  <strong className="text-text-primary">Rectificación:</strong>{" "}
                  solicitar la corrección de datos inexactos o incompletos
                </li>
                <li>
                  <strong className="text-text-primary">Supresión:</strong>{" "}
                  solicitar la eliminación de tus datos cuando ya no sean
                  necesarios
                </li>
                <li>
                  <strong className="text-text-primary">
                    Limitación del tratamiento:
                  </strong>{" "}
                  solicitar la limitación del tratamiento en determinadas
                  circunstancias
                </li>
                <li>
                  <strong className="text-text-primary">
                    Portabilidad:
                  </strong>{" "}
                  recibir tus datos en un formato estructurado y de uso común
                </li>
                <li>
                  <strong className="text-text-primary">Oposición:</strong>{" "}
                  oponerte al tratamiento de tus datos en determinadas
                  circunstancias
                </li>
              </ul>
              <p className="text-text-secondary mt-4">
                Para ejercer cualquiera de estos derechos, puedes contactarnos
                en{" "}
                <a
                  href="mailto:hola@uptomarketing.com"
                  className="text-blue-600 hover:underline"
                >
                  hola@uptomarketing.com
                </a>
                . Responderemos a tu solicitud en un plazo máximo de 30 días.
              </p>
              <p className="text-text-secondary mt-4">
                Si consideras que el tratamiento de tus datos no se ajusta a la
                normativa vigente, puedes presentar una reclamación ante la
                Agencia Española de Protección de Datos (
                <a
                  href="https://www.aepd.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  www.aepd.es
                </a>
                ).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">8. Cookies</h2>
              <p className="text-text-secondary">
                Este sitio web utiliza cookies propias y de terceros. Puedes
                consultar toda la información sobre las cookies que utilizamos
                en nuestra{" "}
                <a
                  href="/politica-cookies"
                  className="text-blue-600 hover:underline"
                >
                  Política de Cookies
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                9. Seguridad de los datos
              </h2>
              <p className="text-text-secondary">
                Hemos adoptado las medidas técnicas y organizativas necesarias
                para garantizar la seguridad de tus datos personales y evitar
                su alteración, pérdida, tratamiento o acceso no autorizado,
                habida cuenta del estado de la tecnología, la naturaleza de los
                datos almacenados y los riesgos a que están expuestos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                10. Modificaciones de esta política
              </h2>
              <p className="text-text-secondary">
                Nos reservamos el derecho a modificar esta Política de
                Privacidad para adaptarla a novedades legislativas o
                jurisprudenciales. En caso de cambios significativos, te lo
                comunicaremos a través de nuestra web.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
