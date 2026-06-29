"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Bot, Terminal } from "lucide-react";
import { useState } from "react";

export default function DemoCardsPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Mock Card Content
  const mockCard = {
    title: "Empleados IA (Chatbots)",
    index: "02",
    text: "Atención al cliente 24/7. Un chatbot inteligente que conoce tu negocio a la perfección y responde por ti en WhatsApp o web.",
    tag: "Servicio Premium",
  };

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-16 text-zinc-50 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl space-y-12">
        
        {/* Header */}
        <section className="space-y-4 max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs uppercase tracking-widest text-zinc-400 transition hover:border-yellow-400/40 hover:text-yellow-300"
          >
            <ArrowLeft className="h-3 w-3" />
            Volver al Inicio
          </Link>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight font-mono">
            Demostración de Estilos de Tarjeta (6 Opciones)
          </h1>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
            Interactúa con las tarjetas de abajo en tu navegador (pasa el cursor encima y haz clic). Cada una implementa un estilo de diseño distinto. Dime cuál es tu preferida para aplicarla a las vistas de Servicios, Portafolio y Contacto.
          </p>
        </section>

        {/* Grid layout */}
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* OPCIÓN 1: Cyber-Brutalism (Maximalista Retro) */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-yellow-300 font-semibold">Opción 1: Cyber-Brutalism</span>
            <div className="border border-white/5 bg-zinc-900/10 p-2 rounded-2xl">
              <div 
                className="group relative bg-zinc-950 p-6 border-2 border-white rounded-none shadow-[6px_6px_0px_0px_#facc15] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[9px_9px_0px_0px_#facc15] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer flex flex-col justify-between min-h-[300px]"
                onClick={() => setSelectedOption("Opción 1")}
              >
                <div className="flex justify-between items-start">
                  <Bot className="h-10 w-10 text-yellow-300 border-2 border-white p-1.5 bg-zinc-900" />
                  <span className="border-2 border-zinc-700 bg-zinc-950 px-2.5 py-0.5 text-xs font-mono font-black tracking-wider text-zinc-400">
                    {mockCard.index}
                  </span>
                </div>
                <div className="space-y-2 mt-4 flex-1">
                  <h3 className="text-xl font-bold tracking-tight text-white uppercase font-mono">{mockCard.title}</h3>
                  <p className="text-xs text-zinc-400 font-mono leading-relaxed">{mockCard.text}</p>
                </div>
                <div className="border-2 border-white bg-zinc-900 p-3 mt-4 flex justify-between items-center transition group-hover:bg-yellow-400 group-hover:text-black">
                  <span className="text-[10px] uppercase font-mono font-black tracking-wider">Ver Caso de Estudio</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
            <p className="text-[11px] text-zinc-500 italic">Estilo audaz con bordes gruesos de 2px, esquinas rectas y sombra plana neón rígida 100% sólida.</p>
          </div>

          {/* OPCIÓN 2: Glassmorphism Aura (Futurista Premium) */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-yellow-300 font-semibold">Opción 2: Glassmorphism Aura</span>
            <div className="border border-white/5 bg-zinc-900/10 p-2 rounded-2xl">
              <div 
                className="group relative bg-white/[0.02] border border-white/10 rounded-[2rem] p-6 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/40 hover:bg-white/[0.04] hover:shadow-[0_0_25px_rgba(250,204,21,0.15)] cursor-pointer flex flex-col justify-between min-h-[300px]"
                onClick={() => setSelectedOption("Opción 2")}
              >
                {/* Glow Background */}
                <div className="absolute top-0 right-0 -z-10 h-32 w-32 rounded-full bg-yellow-400/5 blur-[45px] transition duration-500 group-hover:bg-yellow-400/10" />
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-yellow-300">
                    <Bot className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] text-zinc-400">
                    {mockCard.index}
                  </span>
                </div>
                <div className="space-y-2 mt-4 flex-1">
                  <h3 className="text-xl font-semibold text-zinc-50">{mockCard.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{mockCard.text}</p>
                </div>
                <div className="flex items-center justify-between mt-4 border border-white/10 rounded-full px-4 py-2 bg-white/[0.02] group-hover:border-yellow-400/30 group-hover:bg-yellow-400/[0.03]">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 group-hover:text-yellow-300">Ver Detalles</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400 group-hover:text-yellow-300" />
                </div>
              </div>
            </div>
            <p className="text-[11px] text-zinc-500 italic">Efecto translúcido muy elegante con bordes curvos amplios, micro-bordes y un sutil resplandor de fondo.</p>
          </div>

          {/* OPCIÓN 3: Cyber-Neomorphism (Textura Táctil) */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-yellow-300 font-semibold">Opción 3: Cyber-Neomorphism</span>
            <div className="border border-white/5 bg-zinc-900/10 p-2 rounded-2xl">
              <div 
                className="group relative bg-[#18181b] rounded-3xl p-6 shadow-[10px_10px_24px_rgba(0,0,0,0.55),-6px_-6px_24px_rgba(255,255,255,0.015)] transition-all duration-300 hover:shadow-[14px_14px_30px_rgba(0,0,0,0.65),-4px_-4px_30px_rgba(255,255,255,0.02)] hover:border-t-2 hover:border-l-2 hover:border-yellow-400/20 border border-transparent cursor-pointer flex flex-col justify-between min-h-[300px]"
                onClick={() => setSelectedOption("Opción 3")}
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-[#141416] text-yellow-300 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),2px_2px_5px_rgba(255,255,255,0.01)]">
                    <Bot className="h-6 w-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono bg-[#141416] text-zinc-500 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4)]">
                    {mockCard.index}
                  </span>
                </div>
                <div className="space-y-2 mt-4 flex-1">
                  <h3 className="text-xl font-bold text-zinc-100">{mockCard.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{mockCard.text}</p>
                </div>
                <div className="bg-[#141416] py-2 px-4 rounded-xl text-center shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5)] mt-4">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 group-hover:text-yellow-300 transition duration-300">Explorar Servicio</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-zinc-500 italic">Estilo 3D suave con doble sombra simulando volumen extruido y controles hundidos en el fondo.</p>
          </div>

          {/* OPCIÓN 4: Developer Code-Editor (Terminal Minimal) */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-yellow-300 font-semibold">Opción 4: Code-Editor</span>
            <div className="border border-white/5 bg-zinc-900/10 p-2 rounded-2xl">
              <div 
                className="group relative bg-black border border-zinc-800 rounded-lg p-6 font-mono transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-950 cursor-pointer flex flex-col justify-between min-h-[300px]"
                onClick={() => setSelectedOption("Opción 4")}
              >
                <div className="flex justify-between items-start border-b border-zinc-900 pb-3">
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <Terminal className="h-4 w-4 text-emerald-400" />
                    <span className="text-[10px]">service.tsx</span>
                  </div>
                  <span className="text-zinc-600 text-xs">{"// 02"}</span>
                </div>
                <div className="space-y-2.5 mt-4 flex-1">
                  <div className="flex items-center gap-1">
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-400">serviceName</span>
                    <span className="text-zinc-300">=</span>
                    <span className="text-yellow-300">"{mockCard.title.split(" ")[0]}"</span>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed font-sans">{mockCard.text}</p>
                </div>
                <div className="text-[10px] text-emerald-400/70 group-hover:text-emerald-400 border-t border-zinc-900 pt-3 flex items-center justify-between">
                  <span>$ npm run inspect</span>
                  <ArrowUpRight className="h-3 w-3" />
                </div>
              </div>
            </div>
            <p className="text-[11px] text-zinc-500 italic">Estilo minimalista monospace de editor de código. Tipografía sans-serif interior, muy técnico.</p>
          </div>

          {/* OPCIÓN 5: Neon-Glow Border (Aura Electrónica) */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-yellow-300 font-semibold">Opción 5: Neon-Glow Border</span>
            <div className="border border-white/5 bg-zinc-900/10 p-2 rounded-2xl">
              <div 
                className="group relative bg-zinc-950 border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(250,204,21,0.2)] cursor-pointer flex flex-col justify-between min-h-[300px]"
                onClick={() => setSelectedOption("Opción 5")}
              >
                {/* Neon Border Stripe */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-400 via-amber-300 to-purple-500 rounded-t-2xl opacity-80 group-hover:opacity-100" />
                
                <div className="flex justify-between items-start pt-2">
                  <div className="p-2 bg-zinc-900 border border-white/5 rounded-xl text-zinc-100 group-hover:text-yellow-300 transition duration-300">
                    <Bot className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-600 group-hover:text-yellow-300/80">
                    #{mockCard.index}
                  </span>
                </div>
                <div className="space-y-2 mt-4 flex-1">
                  <h3 className="text-xl font-bold tracking-tight text-zinc-100">{mockCard.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{mockCard.text}</p>
                </div>
                <div className="text-xs text-zinc-400 group-hover:text-white font-semibold flex items-center gap-1.5 mt-4">
                  <span>Conocer más</span>
                  <ArrowUpRight className="h-3 h-3 text-yellow-400 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
            <p className="text-[11px] text-zinc-500 italic">Borde de color sutil, franja superior en gradiente de neón y un halo de luz que rodea la tarjeta al hacer hover.</p>
          </div>

          {/* OPCIÓN 6: Hybrid Cyberpunk (Brutalismo Refinado) */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-yellow-300 font-semibold">Opción 6: Hybrid Cyberpunk</span>
            <div className="border border-white/5 bg-zinc-900/10 p-2 rounded-2xl">
              <div 
                className="group relative bg-[#09090b] border-2 border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:border-yellow-400 hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(250,204,21,0.05)] hover:shadow-[6px_6px_0px_0px_rgba(250,204,21,1)] cursor-pointer flex flex-col justify-between min-h-[300px]"
                onClick={() => setSelectedOption("Opción 6")}
              >
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-zinc-900 border border-zinc-700 rounded-lg text-yellow-300 shadow-[2px_2px_0px_0px_rgba(250,204,21,0.2)]">
                    <Bot className="h-6 w-6" />
                  </div>
                  <span className="rounded-md border-2 border-zinc-800 bg-zinc-950 px-2 py-0.5 font-mono text-[10px] text-zinc-400">
                    C-{mockCard.index}
                  </span>
                </div>
                <div className="space-y-2 mt-4 flex-1">
                  <h3 className="text-xl font-bold tracking-tight text-zinc-100 group-hover:text-yellow-300 transition duration-300">{mockCard.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{mockCard.text}</p>
                </div>
                <div className="flex items-center justify-between border-t border-zinc-800 pt-3 mt-4 text-[10px] font-mono uppercase text-zinc-500 group-hover:text-zinc-300">
                  <span>Ver Especificaciones</span>
                  <ArrowUpRight className="h-4 w-4 text-yellow-300" />
                </div>
              </div>
            </div>
            <p className="text-[11px] text-zinc-500 italic">Versión refinada híbrida: mezcla bordes curvos suaves con la sombra plana neón offset del neo-brutalismo.</p>
          </div>

        </section>

        {/* Selection feedback overlay/bar */}
        {selectedOption && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-zinc-900 border border-yellow-400/50 px-6 py-4 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.7)] flex flex-col sm:flex-row items-center gap-4 animate-bounce">
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold">Has elegido: <span className="text-yellow-300 font-bold">{selectedOption}</span></p>
            </div>
            <button
              onClick={() => setSelectedOption(null)}
              className="text-xs px-3 py-1 bg-yellow-400 text-zinc-950 font-bold rounded-lg hover:bg-yellow-300"
            >
              Cerrar
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
