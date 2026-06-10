import Link from "next/link";
import { ArrowRight, Bot, DatabaseZap, ScanSearch, Globe2 } from "lucide-react";

const sections = [
  {
    href: "/portafolio/software/cobranzas",
    title: "Cobranzas",
    text: "Sistema para seguimiento, control y visualización de pagos con enfoque financiero.",
    icon: DatabaseZap,
  },
  {
    href: "/portafolio/software/automatizaciones",
    title: "Automatizaciones",
    text: "Flujos conectados para ventas, correos y facturación sin trabajo manual repetitivo.",
    icon: ScanSearch,
  },
  {
    href: "/portafolio/software/chatbots",
    title: "Chatbots",
    text: "Interfaces conversacionales para atención, calificación de leads y soporte continuo.",
    icon: Bot,
  },
  {
    href: "/portafolio/software/paginas-web",
    title: "Páginas Web",
    text: "Sitios y landings premium con enfoque comercial y presentación de alto impacto.",
    icon: Globe2,
  },
];

export default function SoftwareHubPage() {
  return (
    <main className="flex-1 bg-zinc-950 px-4 py-20 text-zinc-50 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-7xl space-y-10">
        <section className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-yellow-300">Portafolio / Software</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-none text-balance sm:text-6xl lg:text-7xl">
            Software hecho para operar, automatizar y vender.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-300">
            Selecciona una categoría para ver su vista dedicada con beneficios, capturas y enfoque de producto.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.5)]"
            >
              <div className="flex items-start justify-between gap-4">
                <section.icon className="h-11 w-11 text-yellow-300 drop-shadow-[0_0_16px_rgba(250,204,21,0.5)]" />
                <ArrowRight className="h-4 w-4 text-yellow-300 transition group-hover:translate-x-1" />
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-zinc-50">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{section.text}</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}