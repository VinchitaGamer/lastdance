import Link from "next/link";

const mainNavigation = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/metodo", label: "Método" },
  { href: "/contacto", label: "Contacto" },
];

const servicesNavigation = [
  { href: "/servicios/desarrollo-web-flash", label: "Desarrollo Web" },
  { href: "/servicios/chatbots", label: "Chatbots IA" },
  { href: "/servicios/automatizacion", label: "Automatización" },
];

const casesNavigation = [
  { href: "/portafolio/software/comandas", label: "Comandas" },
  { href: "/portafolio/software/automatizaciones", label: "Automatizaciones" },
  { href: "/portafolio/software/chatbots", label: "Chatbots IA" },
  { href: "/portafolio/software/paginas-web", label: "Páginas Web" },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-white/10 bg-zinc-950/60 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        
        {/* Grid Container */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          
          {/* Brand Info - spans 2 columns in mobile to stay balanced */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col gap-3">
            <span className="font-mono text-lg font-bold tracking-[0.24em] text-zinc-50">
              SOURDEV
            </span>
            <p className="text-xs leading-relaxed text-zinc-400 max-w-sm">
              Diseñamos sistemas digitales claros, rápidos y orientados a resultados para negocios que necesitan ejecutar con precisión.
            </p>
          </div>

          {/* Column 1: Navegación */}
          <div className="space-y-3">
            <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-300">
              Navegación
            </span>
            <ul className="space-y-1.5">
              {mainNavigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-[11px] text-zinc-400 transition hover:text-yellow-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Servicios */}
          <div className="space-y-3">
            <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-300">
              Servicios
            </span>
            <ul className="space-y-1.5">
              {servicesNavigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-[11px] text-zinc-400 transition hover:text-yellow-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Casos de Estudio */}
          <div className="space-y-3">
            <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-300">
              Casos
            </span>
            <ul className="space-y-1.5">
              {casesNavigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-[11px] text-zinc-400 transition hover:text-yellow-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="mt-8 border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-500">
          <p>© {new Date().getFullYear()} SOURDEV. Todos los derechos reservados.</p>
          <span className="text-zinc-600">Engineered with Agentic Workflows</span>
        </div>

      </div>
    </footer>
  );
}