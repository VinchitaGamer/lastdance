"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, Wand2 } from "lucide-react";
import { motion } from "framer-motion";

const heroTitle = "Desarrollo de Software Acelerado por Inteligencia Artificial.";
const heroDescription =
  "Soluciones web, automatizaciones y agentes de IA creados a la velocidad de la luz y con precisión de ingeniería.";

const problemSolution =
  "Las agencias tradicionales tardan meses en entregar resultados. Nuestro equipo utiliza Agentic Workflows para reducir los tiempos de desarrollo de meses a semanas, garantizando un código limpio y escalable.";

const benefits = [
  "Entrega ultrarrápida.",
  "Código de calidad garantizado por un Ingeniero en Sistemas.",
  "Soluciones modernas (IAs integradas).",
];

export default function Home() {
  return (
    <main className="relative flex-1 overflow-hidden bg-zinc-950 text-zinc-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.18),_transparent_26%),radial-gradient(circle_at_80%_15%,_rgba(255,255,255,0.08),_transparent_18%),linear-gradient(180deg,_rgba(255,255,255,0.03),_transparent_22%)]" />
      <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl sm:top-20 sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-yellow-300/5 blur-3xl sm:h-80 sm:w-80" />

      <section className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col justify-center gap-6 sm:gap-8"
        >
          <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-yellow-300 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            SOURDEV
          </div>

          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <h1 className="max-w-4xl bg-gradient-to-b from-zinc-50 via-zinc-200 to-zinc-600 bg-clip-text text-4xl font-semibold leading-tight tracking-tight text-transparent text-balance sm:text-5xl lg:text-7xl lg:leading-[0.92]">
              {heroTitle}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg sm:leading-8">
              {heroDescription}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 mt-2">
            <a
              href="/contacto"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3.5 sm:py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_0_1px_rgba(250,204,21,0.35),0_0_24px_rgba(250,204,21,0.24)] transition duration-300 hover:bg-yellow-300 hover:shadow-[0_0_0_1px_rgba(250,204,21,0.65),0_0_40px_rgba(250,204,21,0.52)]"
            >
              <Wand2 className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              Agenda una Consultoría Gratuita
            </a>
            <a
              href="/portafolio"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 sm:py-3 text-sm font-semibold text-zinc-100 transition hover:border-yellow-400/40 hover:bg-white/10 hover:text-yellow-300"
            >
              Cotiza tu Proyecto
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-3 sm:gap-4 mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.article
                key={benefit}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
                className={`rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl ${
                  index === 1 ? "md:translate-y-4" : index === 2 ? "md:translate-y-2" : ""
                }`}
              >
                <p className="text-sm font-semibold leading-6 text-zinc-50">{benefit}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.08 }}
          className="relative self-start mt-8 lg:mt-0 lg:pt-4"
        >
          <div className="absolute -left-6 top-8 hidden h-24 w-24 rounded-full border border-yellow-400/20 bg-yellow-400/10 blur-xl lg:block" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
              alt="Pantalla de código y tecnología de inteligencia artificial"
              width={1200}
              height={1400}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-[400px] md:h-[520px] w-full object-cover opacity-80"
            />
            <div className="absolute inset-x-4 sm:inset-x-5 bottom-4 sm:bottom-5 z-20 rounded-2xl border border-white/10 bg-zinc-950/80 p-4 sm:p-5 backdrop-blur-xl">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-yellow-300">Problema / Solución</p>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-zinc-300">{problemSolution}</p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}