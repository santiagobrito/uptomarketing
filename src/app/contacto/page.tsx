import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Clock, CalendarDays } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Up To Marketing. Cuéntanos tu proyecto y te respondemos en menos de 24 horas.",
};

export default function Contacto() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-blue-800 to-blue-700 py-24 lg:py-32 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='white'/%3E%3C/svg%3E")`,
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Hablemos de tu proyecto
            </h1>
            <p className="text-lg lg:text-xl text-blue-200 leading-relaxed">
              Cuéntanos qué necesitas. Sin compromiso, sin presión comercial.
              Respondemos en menos de 24 horas laborables.
            </p>
          </div>
        </section>

        {/* Formulario + Info */}
        <section className="bg-bg-primary py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Formulario */}
              <div className="lg:col-span-3">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      className="w-full border border-border rounded-lg px-4 py-3 text-text-primary bg-white placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border border-border rounded-lg px-4 py-3 text-text-primary bg-white placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Teléfono{" "}
                      <span className="text-text-secondary font-normal">
                        (opcional)
                      </span>
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      className="w-full border border-border rounded-lg px-4 py-3 text-text-primary bg-white placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                      placeholder="+34 600 000 000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="empresa"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Nombre del despacho / empresa *
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      required
                      className="w-full border border-border rounded-lg px-4 py-3 text-text-primary bg-white placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                      placeholder="Nombre de tu despacho o empresa"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={5}
                      className="w-full border border-border rounded-lg px-4 py-3 text-text-primary bg-white placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors resize-y"
                      placeholder="Cuéntanos brevemente qué necesitas o qué retos tienes con tu marketing actual."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-copper-500 bg-copper-500 text-white hover:bg-copper-600 px-8 py-3 text-lg cursor-pointer w-full sm:w-auto"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>

              {/* Info de contacto */}
              <div className="lg:col-span-2">
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10 flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:hola@uptomarketing.com"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        hola@uptomarketing.com
                      </a>
                    </div>
                  </div>

                  {/* Horario */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10 flex-shrink-0">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary mb-1">
                        Horario
                      </h3>
                      <p className="text-text-secondary">
                        Lunes a viernes, 9:00 - 18:00
                      </p>
                    </div>
                  </div>

                  {/* Agendar */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10 flex-shrink-0">
                      <CalendarDays className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary mb-1">
                        ¿Prefieres agendar directamente?
                      </h3>
                      <p className="text-text-secondary mb-3">
                        Elige el día y la hora que mejor te venga. Sin
                        intermediarios.
                      </p>
                      <Button href="/agendar-reunion" variant="secondary" size="sm">
                        Agendar reunión
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nota de privacidad */}
        <section className="bg-bg-secondary py-8">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm text-text-secondary">
              Tus datos están protegidos. Consulta nuestra{" "}
              <Link
                href="/politica-privacidad"
                className="text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors"
              >
                política de privacidad
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
