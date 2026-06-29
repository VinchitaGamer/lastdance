import Image from "next/image";
import Link from "next/link";
import { Bot, Code2, Zap } from "lucide-react";

const services = [
  {
    title: "Desarrollo Web Flash",
    slug: "desarrollo-web-flash",
    text: "Tu negocio en internet en tiempo récord, optimizado para vender.",
    icon: Code2,
    span: "md:col-span-2 md:row-span-2",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Empleados IA (Chatbots)",
    slug: "chatbots",
    text: "Atención al cliente 24/7. Un chatbot que conoce tu negocio a la perfección y responde por ti.",
    icon: Bot,
    span: "md:col-span-1",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Automatización de Procesos",
    slug: "automatizacion",
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
            <Link
              key={service.title}
              href={`/servicios/${service.slug}`}
              className={`group relative overflow-hidden rounded-2xl border-2 border-zinc-800 bg-zinc-950/50 backdrop-blur-xl p-6 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(250,204,21,0.05)] hover:-translate-y-1 hover:border-yellow-400 hover:shadow-[6px_6px_0px_0px_rgba(250,204,21,1)] active:translate-y-0 active:translate-x-[2px] active:shadow-none ${service.span}`}
            >
              <div className="absolute inset-0 opacity-95">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="scale-105 object-cover opacity-25 blur-[1px] saturate-150 transition duration-500 group-hover:opacity-40 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/80 via-zinc-950/65 to-zinc-950/90" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.15),_transparent_36%)] opacity-100" />
              </div>
              <div className="relative flex h-full min-h-[190px] flex-col justify-between gap-6">
                <div className="flex items-start justify-between gap-4">
                  <service.icon className="h-12 w-12 shrink-0 text-yellow-300 border-2 border-zinc-800 p-2 bg-zinc-950/80 shadow-[3px_3px_0px_0px_rgba(250,204,21,0.2)] transition duration-300 group-hover:border-yellow-400 group-hover:shadow-[3px_3px_0px_0px_rgba(250,204,21,0.4)]" />
                  <span className="border-2 border-zinc-800 bg-zinc-950/85 px-2.5 py-0.5 text-xs font-mono font-bold tracking-wider text-zinc-400 rounded-lg shadow-[2px_2px_0px_0px_rgba(255,255,255,0.02)]">
                    0{index + 1}
                  </span>
                </div>
                <div className="max-w-lg space-y-3">
                  <h2 className="text-xl font-bold text-zinc-50 md:text-2xl uppercase font-mono tracking-tight">{service.title}</h2>
                  <p className="max-w-md text-xs text-zinc-400 leading-relaxed font-mono">{service.text}</p>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}