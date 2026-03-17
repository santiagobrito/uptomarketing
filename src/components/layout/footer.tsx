import Link from "next/link";
import { Logo } from "@/components/ui/logo";

const serviciosLinks = [
  { label: "Estrategia Digital", href: "/servicios/estrategia-marketing-digital" },
  { label: "SEO y Contenidos", href: "/servicios/seo-posicionamiento-web" },
  { label: "Publicidad Online", href: "/servicios/publicidad-digital" },
  { label: "Desarrollo Web", href: "/servicios/desarrollo-web-conversion" },
  { label: "Automatización", href: "/servicios/automatizaciones-marketing" },
  { label: "CRM e Integraciones", href: "/servicios/crm-integraciones" },
];

const empresaLinks = [
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Partners", href: "/partners" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

const legalLinks = [
  { label: "Política de privacidad", href: "/politica-privacidad" },
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Cookies", href: "/politica-cookies" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-800 text-blue-100">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Logo + description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <Logo height={44} />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-blue-200">
              Consultora de marketing digital especializada en despachos
              profesionales. Estrategia, tecnología y resultados medibles para
              hacer crecer tu negocio.
            </p>
          </div>

          {/* Col 2: Servicios */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Servicios
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {serviciosLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Empresa */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Empresa
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {empresaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hola@uptomarketing.com"
                  className="text-sm text-blue-200 transition-colors duration-200 hover:text-white"
                >
                  hola@uptomarketing.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-8">
          <p className="text-xs text-blue-300">
            &copy; {currentYear} Up To Marketing. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-blue-300 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
