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
        <div className="max-w-xl space-y-4">
          <p className="font-mono text-2xl font-semibold tracking-[0.24em] text-zinc-50">
            SOURDEV
          </p>
          <p className="max-w-lg text-sm leading-7 text-zinc-400">
            Diseñamos sistemas digitales claros, rápidos y orientados a resultados para negocios que necesitan ejecutar con precisión.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <nav className="flex flex-wrap gap-3 lg:justify-end">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:border-yellow-400/40 hover:text-yellow-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Dark mode · Neon accent · Asymmetric layout
          </p>
        </div>
      </div>
    </footer>
  );
}