"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, Wand2 } from "lucide-react";
import { motion } from "framer-motion";

const heroTitle = "Desarrollo de Software Acelerado por Inteligencia Artificial.";
const heroDescription =
  "Soluciones web, automatizaciones y agentes de IA creados a la velocidad de la luz y con precisión de ingeniería.";

const problemSolution =
  "Las agencias tradicionales tardan meses en entregar resultados. Nuestro equipo utiliza Agentic Workflows para reducir los tiempos de desarrollo de meses a semanas, garantizando un código limpio y escalable.";

export default function Home() {
  return (
    <main className="relative flex-1 overflow-hidden bg-zinc-950 text-zinc-50 flex items-center min-h-[calc(105vh-76px)]">
      {/* Background radial overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.15),_transparent_26%),radial-gradient(circle_at_80%_15%,_rgba(255,255,255,0.06),_transparent_18%),linear-gradient(180deg,_rgba(255,255,255,0.02),_transparent_22%)]" />
      <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-yellow-400/5 blur-3xl sm:top-20 sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-yellow-300/5 blur-3xl sm:h-80 sm:w-80" />

      {/* Main Bento Layout Grid */}
      <section className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10 lg:px-8 lg:py-16">
        
        {/* Left Side: Bento Hero Block (2/3 width) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl border-2 border-zinc-800 bg-zinc-950/50 backdrop-blur-xl p-6 sm:p-10 flex flex-col justify-center gap-6 sm:gap-8 shadow-[4px_4px_0px_0px_rgba(250,204,21,0.03)] md:hover:border-zinc-700 md:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.03)] transition-all duration-300"
        >
          <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-yellow-300 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            SOURDEV
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h1 className="max-w-4xl bg-gradient-to-b from-zinc-50 via-zinc-200 to-zinc-600 bg-clip-text text-4xl font-semibold leading-tight tracking-tight text-transparent text-balance sm:text-5xl lg:text-6xl font-mono">
              {heroTitle}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-8 font-mono">
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
        </motion.div>

        {/* Right Side: Bento Solution Dashboard Block (1/3 width) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          className="group rounded-2xl border-2 border-zinc-800 bg-zinc-950/50 backdrop-blur-xl overflow-hidden flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(250,204,21,0.05)] md:hover:border-yellow-400 md:hover:shadow-[6px_6px_0px_0px_rgba(250,204,21,0.85)] transition-all duration-300"
        >
          {/* Dashboard Image Header */}
          <div className="relative h-[200px] w-full overflow-hidden border-b border-zinc-900">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
              alt="Pantalla de código y tecnología de inteligencia artificial"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Dashboard Info Panel */}
          <div className="p-6 flex-1 flex flex-col justify-between gap-4">
            
            {/* Tech Status Header */}
            <div className="flex justify-between items-center border-b border-zinc-900 pb-3">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 font-bold uppercase">System Info</span>
              <div className="flex items-center gap-1.5 font-mono text-[9px] text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active Engine</span>
              </div>
            </div>

            {/* Content body */}
            <div className="space-y-3">
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.35em] text-yellow-300">
                Problema / Solución
              </p>
              <p className="text-xs leading-relaxed text-zinc-300 font-mono">
                {problemSolution}
              </p>
            </div>

            {/* Footer indicators */}
            <div className="flex gap-2 font-mono text-[9px] text-zinc-500 pt-3 border-t border-zinc-900/60 mt-2">
              <span className="bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">AGENTIC BUILD</span>
              <span className="bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">LATENCY: 12ms</span>
            </div>

          </div>
        </motion.div>

      </section>
    </main>
  );
}