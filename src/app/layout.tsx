import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { OrganizationJsonLd } from "@/components/seo/json-ld";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Up To Marketing | Marketing Digital para Despachos Profesionales",
    template: "%s | Up To Marketing",
  },
  description:
    "Consultora de marketing digital especializada en despachos profesionales: asesorías, abogados de empresa y consultoras. Estrategia + tecnología + resultados medibles.",
  metadataBase: new URL("https://uptomarketing.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://uptomarketing.com",
    siteName: "Up To Marketing",
    title: "Up To Marketing | Marketing Digital para Despachos Profesionales",
    description:
      "Consultora de marketing digital especializada en despachos profesionales. Marketing que se mide en clientes.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
