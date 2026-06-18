import Link from "next/link";

const links = [
  { href: "/servicios", label: "Servicios" },
  { href: "/metodo", label: "Método" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-12">
        
        {/* Información de la marca */}
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <p className="font-mono text-2xl font-semibold tracking-[0.24em] text-zinc-50 mx-auto lg:mx-0">
            SOURDEV
          </p>
          <p className="mx-auto max-w-sm text-sm leading-7 text-zinc-400 lg:mx-0 lg:max-w-lg">
            Diseñamos sistemas digitales claros, rápidos y orientados a resultados para negocios que necesitan ejecutar con precisión.
          </p>
        </div>

        {/* Navegación y créditos */}
        <div className="flex flex-col items-center gap-8 lg:items-end lg:justify-between">
          <nav className="flex flex-wrap justify-center gap-3 lg:justify-end">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-yellow-400/40 hover:bg-white/10 hover:text-yellow-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex flex-col items-center gap-3 lg:items-end">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-zinc-600 text-center lg:text-right">
              Dark mode · Neon accent · Asymmetric layout
            </p>
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} Sourdev.
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}