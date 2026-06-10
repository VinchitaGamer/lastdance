"use client";

import Image from "next/image";
import { Code2, Cpu, Network } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Orquestación IA",
    subtitle: "Paso de entrada",
    text: "Analizamos el alcance y coordinamos agentes para acelerar el arranque con precisión.",
    detail: "Mapeamos objetivos, tareas y prioridades para convertir la idea en un flujo de trabajo claro.",
    icon: Cpu,
  },
  {
    number: "02",
    title: "Supervisión Humana",
    subtitle: "Control técnico",
    text: "Revisamos arquitectura, seguridad y calidad para mantener control total sobre cada entrega.",
    detail: "Validamos estructura, permisos y consistencia técnica antes de avanzar a producción.",
    icon: Network,
  },
  {
    number: "03",
    title: "Entrega Escalable",
    subtitle: "Salida de producción",
    text: "Publicamos una base sólida y preparada para crecer con rapidez, orden y consistencia.",
    detail: "Dejamos una solución lista para iterar, medir y escalar sin romper la base técnica.",
    icon: Code2,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export default function MethodPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 px-4 py-20 text-zinc-50 sm:px-6 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
            alt="Fondo tecnológico vertical para móviles"
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80"
            alt="Fondo tecnológico horizontal para escritorio"
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_26%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.08),_transparent_18%),linear-gradient(180deg,_rgba(10,10,10,0.55),_rgba(9,9,11,0.86))]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <section className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-yellow-300">Método</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-none text-balance sm:text-6xl lg:text-7xl">
            Ingeniería Pura y Tecnología Avanzada.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-300">
            Orquestamos flujos de trabajo con agentes de IA de última generación, supervisados por ingeniería humana.
          </p>
        </section>

        <section className="relative mt-14 grid gap-4 lg:mt-20">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-yellow-400/60 via-yellow-400/20 to-transparent sm:left-7" />

          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.65 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.12 }}
              className={`relative grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 pl-16 backdrop-blur-xl transition duration-300 hover:border-yellow-400/30 hover:shadow-[0_0_0_1px_rgba(250,204,21,0.08),0_0_36px_rgba(250,204,21,0.08)] sm:p-8 sm:pl-20 ${
                index === 1 ? "md:translate-x-6" : index === 2 ? "md:translate-x-10" : ""
              }`}
            >
              <div className="absolute left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-yellow-400/30 bg-zinc-950/90 text-yellow-300 shadow-[0_0_18px_rgba(250,204,21,0.28)] sm:left-5 sm:h-9 sm:w-9">
                <step.icon className="h-4 w-4 drop-shadow-[0_0_14px_rgba(250,204,21,0.65)] sm:h-5 sm:w-5" />
              </div>

              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="font-mono text-sm uppercase tracking-[0.45em] text-yellow-300">
                    Paso {step.number}
                  </p>
                  <h2 className="font-mono text-2xl font-semibold tracking-[0.18em] text-zinc-50 sm:text-3xl">
                    {step.subtitle}
                  </h2>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs uppercase tracking-[0.3em] text-zinc-400">
                  0{index + 1}
                </span>
              </div>

              <div className="grid gap-3 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-8">
                <p className="max-w-md text-sm leading-7 text-zinc-300 sm:text-base">
                  {step.text}
                </p>
                <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">Detalle</p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    {step.detail}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
      </div>
    </main>
  );
}