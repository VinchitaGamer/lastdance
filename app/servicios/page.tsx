import Image from "next/image";
import { Bot, Code2, Zap } from "lucide-react";

const services = [
  {
    title: "Desarrollo Web Flash",
    text: "Tu negocio en internet en tiempo récord, optimizado para vender.",
    icon: Code2,
    span: "md:col-span-2 md:row-span-2",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Empleados IA (Chatbots)",
    text: "Atención al cliente 24/7. Un chatbot que conoce tu negocio a la perfección y responde por ti.",
    icon: Bot,
    span: "md:col-span-1",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Automatización de Procesos",
    text: "Eliminamos tareas repetitivas. Conectamos tus ventas, correos y facturación para que tú solo te dediques a dirigir.",
    icon: Zap,
    span: "md:col-span-1 md:translate-y-6",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1 bg-zinc-950 px-4 py-20 text-zinc-50 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-7xl space-y-10">
        <section className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-yellow-300">Servicios</p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-none sm:text-6xl">
            Soluciones construidas para vender, automatizar y escalar.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-300">
            Diseñamos servicios con ejecución rápida, interfaces claras y una estética premium para negocios que necesitan moverse con precisión.
          </p>
        </section>

        <section className="grid auto-rows-[minmax(190px,_1fr)] gap-3 md:grid-cols-3 md:grid-rows-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-900 p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:shadow-[0_0_0_1px_rgba(250,204,21,0.12),0_0_32px_rgba(250,204,21,0.12)] ${service.span}`}
            >
              <div className="absolute inset-0 opacity-95">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="scale-105 object-cover opacity-35 blur-[1.5px] saturate-150 transition duration-500 group-hover:opacity-50 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/72 via-zinc-950/58 to-zinc-950/82" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.18),_transparent_36%)] opacity-100" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.12),_transparent_35%)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative flex h-full min-h-[190px] flex-col justify-between gap-6">
                <div className="flex items-start justify-between gap-4">
                  <service.icon className="h-11 w-11 shrink-0 text-yellow-300 transition duration-300 group-hover:drop-shadow-[0_0_18px_rgba(250,204,21,0.65)]" />
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-zinc-400">
                    0{index + 1}
                  </span>
                </div>
                <div className="max-w-lg space-y-3">
                  <h2 className="text-xl font-semibold text-zinc-50 md:text-2xl">{service.title}</h2>
                  <p className="max-w-md text-sm leading-6 text-zinc-400 md:text-[15px]">{service.text}</p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}