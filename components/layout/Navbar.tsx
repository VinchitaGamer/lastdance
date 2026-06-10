import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/metodo", label: "Método" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center border border-yellow-400/40 bg-yellow-400/10 text-sm font-semibold tracking-[0.28em] text-yellow-300 transition group-hover:border-yellow-300/70 group-hover:bg-yellow-400/15">
            S
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-mono text-lg font-semibold tracking-[0.28em] text-zinc-50">
              SOURDEV
            </span>
            <span className="mt-1 text-xs uppercase tracking-[0.35em] text-zinc-400">
              Agentic workflows
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-yellow-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contacto"
          className="inline-flex items-center justify-center rounded-full border border-yellow-400/50 bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300"
        >
          Agendar
        </Link>
      </div>
    </header>
  );
}