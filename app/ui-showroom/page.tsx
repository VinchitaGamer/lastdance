/* app/ui-showroom/page.tsx */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Laptop, 
  Tablet, 
  Smartphone, 
  Sun, 
  Moon, 
  Layers, 
  ArrowLeft,
  Settings,
  Sliders,
  Sparkles,
  HelpCircle
} from "lucide-react";
import MockPreview, { stylesData } from "./MockPreview";
import "./ShowcaseStyles.css";

export default function ShowroomPage() {
  const [activeStyle, setActiveStyle] = useState<keyof typeof stylesData>("glassmorphism");
  const [colorMode, setColorMode] = useState<"light" | "dark">("dark");
  const [viewportSize, setViewportSize] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-zinc-950 text-zinc-100 font-mono text-xs">
        <div className="flex flex-col items-center gap-4">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-yellow-400 border-t-transparent" />
          <span>Cargando SOURDEV UI Studio...</span>
        </div>
      </div>
    );
  }

  // Viewport width mapping
  const viewportWidths = {
    desktop: "w-full h-full",
    tablet: "max-w-[768px] h-[85vh] rounded-2xl border-4 border-zinc-800 shadow-2xl",
    mobile: "max-w-[375px] h-[80vh] rounded-2xl border-4 border-zinc-800 shadow-2xl"
  };

  return (
    <main className="flex h-screen w-screen overflow-hidden bg-[#09090b] text-zinc-100 font-sans">
      
      {/* 1. LEFT CONTROL PANEL (Sidebar) */}
      <aside className="hidden lg:flex w-80 shrink-0 flex-col justify-between border-r border-zinc-900 bg-[#0c0c0e] p-6">
        <div className="space-y-8">
          
          {/* Logo & Back Link */}
          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-zinc-500 hover:text-yellow-300 transition group"
            >
              <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
              Volver a SOURDEV
            </Link>

            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg border border-yellow-400 bg-yellow-400/5 flex items-center justify-center shadow-[2px_2px_0px_rgba(250,204,21,0.2)]">
                <Sparkles className="h-5 w-5 text-yellow-300" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-mono text-sm font-bold tracking-[0.25em] text-zinc-200">
                  UI STUDIO
                </span>
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mt-1">
                  Muestrario de Estilos
                </span>
              </div>
            </div>
          </div>

          {/* Control Section 1: Selector de Estilo */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-zinc-400">
              <Sliders className="h-3.5 w-3.5 text-zinc-500" />
              <h3 className="text-[10px] font-mono uppercase tracking-wider font-semibold">Seleccionar Estilo UI</h3>
            </div>
            
            <div className="flex flex-col gap-2 max-h-[45vh] overflow-y-auto pr-1 scrollbar-thin">
              {Object.keys(stylesData).map((styleKey) => {
                const isSelected = activeStyle === styleKey;
                const info = stylesData[styleKey as keyof typeof stylesData];
                return (
                  <button
                    key={styleKey}
                    onClick={() => setActiveStyle(styleKey as any)}
                    className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer border ${
                      isSelected 
                        ? "bg-yellow-400/10 border-yellow-400 text-yellow-300 shadow-[0_0_12px_rgba(250,204,21,0.1)]" 
                        : "bg-zinc-900/40 border-zinc-800/40 text-zinc-400 hover:bg-zinc-900 hover:border-zinc-800 hover:text-zinc-200"
                    }`}
                  >
                    <div className="text-xs font-mono font-bold">{info.title.split(" (")[0]}</div>
                    <div className="text-[10px] opacity-75 mt-0.5 font-sans line-clamp-1">{info.definition}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Control Section 2: Modo Color */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-zinc-400">
              <Settings className="h-3.5 w-3.5 text-zinc-500" />
              <h3 className="text-[10px] font-mono uppercase tracking-wider font-semibold">Modo de Color</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-2 bg-zinc-950 p-1 rounded-xl border border-zinc-900">
              <button
                onClick={() => setColorMode("light")}
                className={`py-2 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  colorMode === "light"
                    ? "bg-zinc-800 text-white shadow-sm"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Sun className="h-3.5 w-3.5" />
                <span>Light</span>
              </button>
              <button
                onClick={() => setColorMode("dark")}
                className={`py-2 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  colorMode === "dark"
                    ? "bg-zinc-800 text-white shadow-sm"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Moon className="h-3.5 w-3.5" />
                <span>Dark</span>
              </button>
            </div>
          </div>

        </div>

        {/* Info label at bottom */}
        <div className="border-t border-zinc-900 pt-4 text-[10px] text-zinc-600 font-mono space-y-1">
          <div>Ruta Oculta: /ui-showroom</div>
          <div>SOURDEV Lab v1.0.0</div>
        </div>
      </aside>

      {/* MOBILE CONTROL STICKY HEADER */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0c0c0e] border-b border-zinc-900 p-4 space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4.5 w-4.5 text-yellow-300" />
            <span className="font-mono text-xs font-bold tracking-wider">UI STUDIO</span>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => setColorMode(colorMode === "dark" ? "light" : "dark")}
              className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
            >
              {colorMode === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link href="/" className="text-[10px] font-mono bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg text-zinc-300 flex items-center gap-1">
              <ArrowLeft className="h-3 w-3" />
              Salir
            </Link>
          </div>
        </div>

        {/* Horizontally scrolling list of styles */}
        <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-none">
          {Object.keys(stylesData).map((styleKey) => {
            const isSelected = activeStyle === styleKey;
            const info = stylesData[styleKey as keyof typeof stylesData];
            return (
              <button
                key={styleKey}
                onClick={() => setActiveStyle(styleKey as any)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold whitespace-nowrap border shrink-0 transition ${
                  isSelected 
                    ? "bg-yellow-400 text-black border-yellow-400" 
                    : "bg-zinc-900 border-zinc-800 text-zinc-400"
                }`}
              >
                {info.title.split(" (")[0]}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. RIGHT LIVE PREVIEW CANVAS */}
      <section className="flex-1 flex flex-col pt-[104px] lg:pt-0 bg-[#09090b]">
        
        {/* Top Viewport Sizing Controls Bar (Desktop only) */}
        <div className="hidden lg:flex h-14 shrink-0 items-center justify-between border-b border-zinc-900 bg-[#0a0a0c] px-8">
          <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Renderizando: </span>
            <span className="text-zinc-200 font-bold bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 uppercase">
              {activeStyle} ({colorMode})
            </span>
          </div>

          {/* Viewport simulator selectors */}
          <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-lg border border-zinc-900">
            <button
              onClick={() => setViewportSize("desktop")}
              className={`p-1.5 rounded-md cursor-pointer transition ${
                viewportSize === "desktop" ? "bg-zinc-800 text-yellow-300" : "text-zinc-500 hover:text-zinc-300"
              }`}
              title="Escritorio (Completo)"
            >
              <Laptop className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewportSize("tablet")}
              className={`p-1.5 rounded-md cursor-pointer transition ${
                viewportSize === "tablet" ? "bg-zinc-800 text-yellow-300" : "text-zinc-500 hover:text-zinc-300"
              }`}
              title="Tablet (768px)"
            >
              <Tablet className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewportSize("mobile")}
              className={`p-1.5 rounded-md cursor-pointer transition ${
                viewportSize === "mobile" ? "bg-zinc-800 text-yellow-300" : "text-zinc-500 hover:text-zinc-300"
              }`}
              title="Móvil (375px)"
            >
              <Smartphone className="h-4 w-4" />
            </button>
          </div>

          <div className="text-[10px] text-zinc-600 font-mono">
            Resolución: {viewportSize === "desktop" ? "100%" : viewportSize === "tablet" ? "768px" : "375px"}
          </div>
        </div>

        {/* Live Canvas Window Container */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 flex items-center justify-center bg-zinc-950/40 relative">
          
          {/* Mock Browser Outer shell */}
          <div 
            className={`flex flex-col overflow-hidden transition-all duration-300 ${viewportWidths[viewportSize]} ${
              viewportSize !== "desktop" 
                ? "border border-zinc-800 bg-zinc-900/20" 
                : "w-full h-full"
            }`}
          >
            {/* Mock browser header bar */}
            <div className="h-9 bg-[#0b0c0f] border-b border-zinc-900 flex items-center px-4 justify-between select-none">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              </div>
              <div className="bg-zinc-950/60 rounded-md border border-zinc-900/50 px-8 py-0.5 text-[10px] text-zinc-500 font-mono max-w-[280px] truncate">
                https://sourdev.com/velocity-ai
              </div>
              <div className="w-12" />
            </div>

            {/* Mock page container */}
            <div className="flex-1 overflow-y-auto preview-scroll relative">
              <MockPreview activeStyle={activeStyle} colorMode={colorMode} />
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}
