import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partners estratégicos de Up To Marketing. Trabajamos junto a Izquierdomotter para ofrecer soluciones completas a despachos profesionales.",
};

const pasos = [
  "Izquierdomotter identifica necesidades de marketing en el despacho",
  "Nos presenta al equipo del despacho directamente",
  "Diseñamos e implementamos la estrategia de marketing digital",
  "Resultados compartidos y seguimiento coordinado",
];

const beneficios = [
  "Un solo interlocutor para marketing, sin perder tiempo buscando proveedores",
  "Estrategia de negocio y marketing digital alineadas desde el primer día",
  "Conocimiento profundo del sector: entendemos los ciclos, márgenes y retos de un despacho",
  "Seguimiento conjunto entre ambos equipos para garantizar resultados",
];

export default function Partners() {
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
              Partners estratégicos
            </h1>
            <p className="text-lg lg:text-xl text-blue-200 leading-relaxed">
              Colaboramos con consultoras de referencia para ofrecer soluciones
              completas a despachos profesionales. Estrategia de negocio +
              marketing digital, coordinados.
            </p>
          </div>
        </section>

        {/* Izquierdomotter */}
        <section className="bg-bg-primary py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-blue-600/10 text-blue-600 text-sm font-semibold rounded-full px-4 py-1 mb-6">
                  Partner principal
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
                  Izquierdomotter Consultores
                </h2>
                <div className="space-y-4 text-text-secondary leading-relaxed text-lg">
                  <p>
                    Izquierdomotter lleva más de 30 años asesorando a despachos
                    profesionales en estrategia de negocio, gestión y
                    crecimiento. Son la referencia en consultoría para
                    asesorías, despachos de abogados y firmas de servicios
                    profesionales.
                  </p>
                  <p>
                    Cuando sus clientes necesitan marketing digital, confían en
                    Up To Marketing. Porque saben que entendemos el sector, que
                    trabajamos con datos y que no vendemos humo.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="bg-white rounded-xl p-8 border border-border w-full flex items-center justify-center">
                  <Image
                    src="/logo-izquierdomotter.png"
                    alt="Izquierdomotter - Consultores de Despachos Profesionales"
                    width={400}
                    height={120}
                    className="w-full max-w-sm"
                  />
                </div>
                <p className="text-text-secondary text-sm text-center mt-4">
                  Consultores de despachos profesionales desde 1990
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo funciona la alianza */}
        <section className="bg-bg-secondary py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-12 text-center">
              Cómo funciona la alianza
            </h2>
            <div className="space-y-6">
              {pasos.map((paso, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 bg-white rounded-xl p-6 border border-border"
                >
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-text-primary text-lg leading-relaxed pt-1.5">
                    {paso}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios para el despacho */}
        <section className="bg-bg-primary py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4 text-center">
              Beneficios para el despacho
            </h2>
            <p className="text-text-secondary text-lg text-center mb-12 leading-relaxed max-w-2xl mx-auto">
              El despacho obtiene dos equipos especializados trabajando
              coordinados: gestión de negocio con Izquierdomotter y marketing
              digital con Up To Marketing.
            </p>
            <div className="space-y-4">
              {beneficios.map((beneficio, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-text-secondary text-lg leading-relaxed">
                    {beneficio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Tu despacho trabaja con Izquierdomotter?
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Habla con nosotros directamente. Conocemos vuestra realidad y
              podemos empezar a trabajar de forma inmediata.
            </p>
            <Button href="/contacto" variant="primary" size="lg">
              Contactar con Up To Marketing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
