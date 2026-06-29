"use client";

import { Cpu, GitBranch, FileCode, Terminal, CloudLightning } from "lucide-react";
import { useState } from "react";

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

export default function MethodPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 px-4 py-20 text-zinc-50 sm:px-6 lg:px-8 lg:py-28">
      {/* Background glow filters */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.14),_transparent_26%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.06),_transparent_18%),linear-gradient(180deg,_rgba(10,10,10,0.55),_rgba(9,9,11,0.86))]" />
      
      <div className="relative mx-auto w-full max-w-7xl space-y-16">
        
        {/* Intro Header Section (Original Texts) */}
        <section className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-yellow-300 font-mono">Método</p>
          <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-7xl font-bold leading-none text-balance font-mono">
            Ingeniería Pura y Tecnología Avanzada.
          </h1>
          <p className="max-w-2xl text-base sm:text-lg leading-8 text-zinc-400">
            Orquestamos flujos de trabajo con agentes de IA de última generación, supervisados por ingeniería humana.
          </p>
        </section>

        {/* Interactive Simulation Grid */}
        <section className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          
          {/* Left Column: Timeline Steps */}
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
                    <span className="text-[10px] font-mono bg-zinc-900 border border-zinc-805 px-2 py-0.5 rounded text-zinc-400">{step.role}</span>
                  </div>
                  <h3 className="text-base font-bold font-mono uppercase tracking-tight">{step.title}</h3>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Cyberpunk Glass Terminal Preview */}
          <div className="rounded-2xl border-2 border-zinc-850 bg-zinc-950/60 p-6 backdrop-blur-xl shadow-[4px_4px_0px_0px_rgba(250,204,21,0.05)] flex flex-col justify-between min-h-[380px] lg:min-h-full">
            <div className="space-y-6">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-500">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
                  <span>workflow_simulation.sh</span>
                </div>
                <span className="text-[10px] font-mono bg-yellow-400/10 text-yellow-300 border border-yellow-400/30 px-2.5 py-0.5 rounded-full">
                  Status: Active
                </span>
              </div>

              {/* Ficha Content */}
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

            {/* Console Output (Realist / Minimalist) */}
            <div className="mt-8 border-2 border-zinc-900 bg-zinc-950/80 p-4 rounded-xl space-y-2">
              <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 block">Console Output:</span>
              <p className="text-xs font-mono text-emerald-400 flex items-center gap-2">
                <span className="text-[10px] text-zinc-600 font-bold">$</span> {steps[activeStep].output}
              </p>
            </div>

          </div>

        </section>

      </div>
    </main>
  );
}