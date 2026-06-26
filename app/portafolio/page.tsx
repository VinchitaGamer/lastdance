import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bot, ReceiptText, Workflow, Globe2, Utensils } from "lucide-react";

const cases = [
  {
    href: "/portafolio/software/comandas",
    title: "Sistema de Comandas",
    text: "Plataforma web en tiempo real para optimizar la toma de pedidos, coordinación de cocina y métricas en restaurantes.",
    icon: Utensils,
    image: "https://i.pinimg.com/1200x/d2/ca/6d/d2ca6dda107e94020437bc11e9342934.jpg",
  },
  {
    href: "/portafolio/software/automatizaciones",
    title: "Automatizaciones",
    text: "Conexión de ventas, correos y facturación para reducir trabajo manual y acelerar operaciones.",
    icon: Workflow,
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1600&q=80",
  },
  {
    href: "/portafolio/software/chatbots",
    title: "Chatbots IA",
    text: "Asistente conversacional entrenado para responder clientes, calificar leads y escalar soporte.",
    icon: Bot,
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    href: "/portafolio/software/paginas-web",
    title: "Páginas Web",
    text: "Landing pages y sitios corporativos con estética premium, velocidad y enfoque en conversión.",
    icon: Globe2,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function PortfolioPage() {
  return (
    <main className="flex-1 bg-zinc-950 px-4 py-20 text-zinc-50 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-7xl space-y-10">
        <section className="flex flex-col gap-6 sm:max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-yellow-300">Portafolio</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-none text-balance sm:text-6xl lg:text-7xl">
            Resultados Reales a Velocidad Luz.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-300">
            Un catálogo visual de soluciones que venden: comandas, automatizaciones, chatbots y páginas web.
          </p>
        </section>

        <section className="grid auto-rows-[minmax(360px,_1fr)] gap-4 lg:grid-cols-2">
          {cases.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 p-5 transition duration-300 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.5)]"
            >
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-28 transition duration-500 group-hover:scale-105 group-hover:opacity-38"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-zinc-950/60 to-zinc-950/92" />
              </div>

              <div className="relative flex h-full flex-col justify-between gap-6">
                <div className="flex items-start justify-between gap-4">
                  <item.icon className="h-11 w-11 text-yellow-300 drop-shadow-[0_0_16px_rgba(250,204,21,0.5)]" />
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs uppercase tracking-[0.3em] text-zinc-400">
                    0{index + 1}
                  </span>
                </div>

                <div className="max-w-2xl space-y-3">
                  <h2 className="text-2xl font-semibold text-zinc-50 sm:text-3xl">{item.title}</h2>
                  <p className="max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">{item.text}</p>
                </div>

                <div className="w-full rounded-2xl border border-white/10 bg-zinc-950/55 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs uppercase tracking-[0.35em] text-yellow-300">
                      Caso de estudio
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-yellow-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}