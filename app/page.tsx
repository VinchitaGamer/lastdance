"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, Wand2, Cpu, GitBranch, FileCode, Terminal, CloudLightning } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

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

const steps = [
  {
    number: "01",
    title: "Análisis del Prompt",
    icon: Cpu,
    role: "Agente Analista",
    description: "Desglosa los requisitos de negocio a partir de tu idea inicial, estructurando las prioridades de desarrollo en un backlog técnico claro.",
    details: "Herramientas: AI Spec Parser, Backlog Structurer.",
    output: "Backlog de desarrollo estructurado en 12 tareas prioritarias."
  },
  {
    number: "02",
    title: "Modelado de Base de Datos",
    icon: GitBranch,
    role: "Agente Arquitecto",
    description: "Diseña el esquema relacional de la base de datos SQL y genera los contratos OpenAPI para la comunicación de APIs de forma óptima.",
    details: "Herramientas: PostgreSQL, Prisma ORM, OpenAPI Spec Builder.",
    output: "Esquema relacional y contratos OpenAPI validados con cero redundancia."
  },
  {
    number: "03",
    title: "Escritura de Código",
    icon: FileCode,
    role: "Agente Codificador",
    description: "Escribe de manera autónoma los componentes de interfaz reactivos en Next.js y los servicios backend integrando las APIs.",
    details: "Herramientas: Next.js 14, Tailwind CSS, Stripe Payments SDK.",
    output: "Componentes TSX y llamadas de API de checkout implementados."
  },
  {
    number: "04",
    title: "Pruebas Automáticas",
    icon: Terminal,
    role: "Agente de Calidad (QA)",
    description: "Corre lints y ejecuta suites de tests unitarios e integración para garantizar estabilidad y cobertura de código antes del lanzamiento.",
    details: "Herramientas: Vitest, Jest Runner, ESLint, TypeScript Compiler.",
    output: "100% de tests unitarios aprobados con cobertura de código de 98.2%."
  },
  {
    number: "05",
    title: "Despliegue & Monitoreo",
    icon: CloudLightning,
    role: "Agente DevOps",
    description: "Compila el bundle de producción y despliega la aplicación de forma segura en la VPS, habilitando monitoreo de logs en tiempo real.",
    details: "Herramientas: Docker, Nginx Reverse Proxy, VPS Cloud Hosting.",
    output: "Contenedor Docker Swarm levantado y corriendo en producción."
  }
];

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <main className="relative flex-1 overflow-hidden bg-zinc-950 text-zinc-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.18),_transparent_26%),radial-gradient(circle_at_80%_15%,_rgba(255,255,255,0.08),_transparent_18%),linear-gradient(180deg,_rgba(255,255,255,0.03),_transparent_22%)]" />
      <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl sm:top-20 sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-yellow-300/5 blur-3xl sm:h-80 sm:w-80" />

      {/* Hero Section */}
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
                className={`group rounded-2xl border-2 border-zinc-800 bg-zinc-950/50 backdrop-blur-xl p-5 shadow-[4px_4px_0px_0px_rgba(250,204,21,0.05)] md:hover:-translate-y-1 md:hover:border-yellow-400 md:hover:shadow-[6px_6px_0px_0px_rgba(250,204,21,1)] transition-all duration-300 ${
                  index === 1 ? "md:translate-y-4 md:hover:translate-y-3" : index === 2 ? "md:translate-y-2 md:hover:translate-y-1" : ""
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
          <div className="group relative overflow-hidden rounded-2xl border-2 border-zinc-800 bg-zinc-950/50 backdrop-blur-xl shadow-[4px_4px_0px_0px_rgba(250,204,21,0.05)] md:hover:border-yellow-400 md:hover:shadow-[6px_6px_0px_0px_rgba(250,204,21,0.85)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
              alt="Pantalla de código y tecnología de inteligencia artificial"
              width={1200}
              height={1400}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-[400px] md:h-[520px] w-full object-cover opacity-70 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-x-4 sm:inset-x-5 bottom-4 sm:bottom-5 z-20 rounded-xl border-2 border-zinc-800 bg-zinc-950/85 p-4 sm:p-5 backdrop-blur-xl shadow-[3px_3px_0px_0px_rgba(250,204,21,0.1)] transition-all duration-300 group-hover:border-yellow-400 group-hover:shadow-[3px_3px_0px_0px_rgba(250,204,21,0.3)]">
              <p className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.35em] text-yellow-300">Problema / Solución</p>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-zinc-300 font-mono">{problemSolution}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Interactive Workflow Timeline */}
      <section className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24 border-t border-white/10">
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-mono uppercase tracking-tight text-white">
            Nuestro Método: Agentic Workflows
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            Utilizamos agentes inteligentes autónomos para acelerar las fases de desarrollo tradicional, reduciendo tiempos de entrega sin comprometer la calidad del software.
          </p>
        </div>

        {/* Layout Interactivo */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          
          {/* Columna Izquierda: Los pasos de la línea de tiempo */}
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 flex items-start gap-4 ${
                  activeStep === idx
                    ? "border-yellow-400 bg-zinc-950/80 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] text-white"
                    : "border-zinc-800 bg-zinc-950/30 text-zinc-400 md:hover:border-zinc-700 md:hover:bg-zinc-950/50"
                }`}
              >
                <div className={`p-2.5 rounded-xl border-2 transition-all ${
                  activeStep === idx
                    ? "border-yellow-400 bg-yellow-400/10 text-yellow-300"
                    : "border-zinc-800 bg-zinc-900 text-zinc-500"
                }`}>
                  <step.icon className="h-5 w-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 font-bold">FASE {step.number}</span>
                    <span className="text-[10px] font-mono bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-zinc-400">{step.role}</span>
                  </div>
                  <h3 className="text-base font-bold font-mono uppercase tracking-tight">{step.title}</h3>
                </div>
              </button>
            ))}
          </div>

          {/* Columna Derecha: Previsualización de la Terminal/Ficha Técnica */}
          <div className="rounded-2xl border-2 border-zinc-850 bg-zinc-950/60 p-6 backdrop-blur-xl shadow-[4px_4px_0px_0px_rgba(250,204,21,0.05)] flex flex-col justify-between min-h-[380px] lg:min-h-full">
            <div className="space-y-6">
              
              {/* Encabezado Terminal */}
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-500">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
                  <span>workflow_simulation.sh</span>
                </div>
                <span className="text-[10px] font-mono bg-yellow-400/10 text-yellow-300 border border-yellow-400/30 px-2.5 py-0.5 rounded-full">
                  Status: Active
                </span>
              </div>

              {/* Contenido Ficha */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold font-mono uppercase tracking-tight text-white flex items-center gap-2">
                  <span className="text-yellow-300 font-mono">/</span> {steps[activeStep].title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                  {steps[activeStep].description}
                </p>
                <div className="border-l-2 border-yellow-400/30 pl-4 py-1.5 space-y-2 bg-zinc-900/20 rounded-r-lg">
                  <p className="text-[11px] font-mono text-zinc-500">
                    <span className="text-yellow-300">⚙</span> {steps[activeStep].details}
                  </p>
                </div>
              </div>

            </div>

            {/* Consola Simplificada (Output Realista) */}
            <div className="mt-8 border-2 border-zinc-900 bg-zinc-950/80 p-4 rounded-xl space-y-2">
              <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 block">Console Output:</span>
              <p className="text-xs font-mono text-emerald-400 flex items-center gap-2">
                <span className="text-[10px] text-zinc-600 font-bold">$</span> {steps[activeStep].output}
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}