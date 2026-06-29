/* app/ui-showroom/MockPreview.tsx */
"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  Mail, 
  Lock, 
  Settings, 
  Send, 
  ShoppingCart, 
  Heart, 
  Play, 
  DollarSign, 
  TrendingUp, 
  User, 
  Info, 
  Layers, 
  Sparkles, 
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  Menu,
  X
} from "lucide-react";

// Style definitions
export const stylesData = {
  claymorphism: {
    title: "Claymorphism (Efecto Arcilla)",
    definition: "Evolución del neumorfismo que simula figuras tridimensionales blandas que parecen hechas de arcilla moldeada o plástico inflado.",
    difference: "Usa bordes extremadamente redondeados, sombras externas suaves y amplias para simular que flota, combinadas con dos sombras internas (una blanca para luz y una oscura para relieve) para dar volumen 3D.",
    projects: "Ideal para aplicaciones interactivas, interfaces orientadas a niños, sitios creativos, mundos virtuales, metaversos y productos Web3 de enfoque amigable.",
    fonts: {
      heading: "font-sans font-extrabold tracking-tight",
      body: "font-sans text-sm",
    },
    dark: {
      wrapperBg: "bg-slate-950 text-slate-100 transition-colors duration-500",
      contentBg: "bg-indigo-950/20",
      card: "clay-card-dark text-slate-100 p-6 md:p-8",
      cardInner: "bg-slate-900/60 p-5 rounded-2xl border border-white/5",
      btnPrimary: "clay-btn-purple py-3 px-6 text-sm font-semibold flex items-center justify-center gap-2",
      btnSecondary: "clay-btn-blue py-3 px-6 text-sm font-semibold flex items-center justify-center gap-2",
      input: "clay-input-dark w-full px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-400",
      badge: "clay-badge px-3 py-1 text-xs font-semibold w-fit",
      border: "border-slate-800",
      footerBg: "bg-slate-900/40 border-t border-slate-800/50",
      accentText: "text-purple-400",
      mutedText: "text-slate-400"
    },
    light: {
      wrapperBg: "bg-indigo-50/60 text-slate-900 transition-colors duration-500",
      contentBg: "bg-indigo-100/40",
      card: "clay-card-light text-slate-900 p-6 md:p-8",
      cardInner: "bg-white/70 p-5 rounded-2xl border border-indigo-200/50",
      btnPrimary: "clay-btn-purple py-3 px-6 text-sm font-semibold flex items-center justify-center gap-2",
      btnSecondary: "clay-btn-blue py-3 px-6 text-sm font-semibold flex items-center justify-center gap-2",
      input: "clay-input-light w-full px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400",
      badge: "clay-badge px-3 py-1 text-xs font-semibold w-fit",
      border: "border-indigo-100",
      footerBg: "bg-indigo-100/30 border-t border-indigo-200/50",
      accentText: "text-purple-600",
      mutedText: "text-slate-500"
    }
  },
  neomorphism: {
    title: "Neomorphism (Diseño Táctil)",
    definition: "Estilo que simula controles físicos extruidos o grabados en bajorrelieve sobre una superficie continua.",
    difference: "Usa un color de fondo plano idéntico en las tarjetas y el fondo general. El volumen se genera exclusivamente mediante dos sombras opuestas: una clara (luz) y una oscura (sombra).",
    projects: "Adecuado para paneles de domótica, reproductores multimedia, consolas de audio digital, calculadoras y aplicaciones móviles con pocas jerarquías de lectura.",
    fonts: {
      heading: "font-sans font-bold tracking-tight uppercase",
      body: "font-sans text-sm",
    },
    dark: {
      wrapperBg: "neo-bg-dark text-slate-200 transition-colors duration-500",
      contentBg: "bg-zinc-900/10",
      card: "neo-card-dark text-slate-200 p-6 md:p-8",
      cardInner: "bg-[#17171c] p-5 rounded-2xl shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.015)]",
      btnPrimary: "neo-btn-dark py-3 px-6 text-sm font-semibold text-yellow-300 flex items-center justify-center gap-2",
      btnSecondary: "neo-btn-dark py-3 px-6 text-sm font-semibold text-slate-300 flex items-center justify-center gap-2",
      input: "neo-input-dark w-full px-4 py-3 text-sm text-slate-200 placeholder-zinc-600 focus:outline-none",
      badge: "neo-badge-dark px-3 py-1 text-xs font-semibold text-yellow-400/90 w-fit",
      border: "border-zinc-800/20",
      footerBg: "neo-bg-dark border-t border-zinc-900/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]",
      accentText: "text-yellow-400",
      mutedText: "text-zinc-500"
    },
    light: {
      wrapperBg: "neo-bg-light text-slate-800 transition-colors duration-500",
      contentBg: "bg-slate-200/20",
      card: "neo-card-light text-slate-800 p-6 md:p-8",
      cardInner: "bg-[#dddfeb] p-5 rounded-2xl shadow-[inset_3px_3px_6px_rgba(184,186,196,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.7)]",
      btnPrimary: "neo-btn-light py-3 px-6 text-sm font-semibold text-indigo-600 flex items-center justify-center gap-2",
      btnSecondary: "neo-btn-light py-3 px-6 text-sm font-semibold text-slate-600 flex items-center justify-center gap-2",
      input: "neo-input-light w-full px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none",
      badge: "neo-badge-light px-3 py-1 text-xs font-semibold text-indigo-500 w-fit",
      border: "border-slate-300/30",
      footerBg: "neo-bg-light border-t border-slate-300/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]",
      accentText: "text-indigo-600",
      mutedText: "text-slate-500"
    }
  },
  glassmorphism: {
    title: "Glassmorphism (Efecto Vidrio)",
    definition: "Estilo moderno basado en la transparencia y en paneles superpuestos que simulan vidrio esmerilado flotando sobre un fondo colorido.",
    difference: "Usa el desenfoque de fondo (backdrop-filter: blur), una ligera opacidad translúcida, sombras difusas profundas y un borde blanco fino (1px) que imita el reflejo del canto del vidrio.",
    projects: "Excelente para landing pages de startups tecnológicas, tableros analíticos interactivos, interfaces móviles de alta gama (iOS/OSX style) e interfaces de cliente premium.",
    fonts: {
      heading: "font-sans font-bold tracking-tight",
      body: "font-sans text-sm",
    },
    dark: {
      wrapperBg: "bg-slate-950 text-slate-100 transition-colors duration-500 glass-bg",
      contentBg: "bg-slate-900/10",
      card: "glass-card-dark text-slate-100 p-6 md:p-8",
      cardInner: "bg-white/[0.02] p-5 rounded-xl border border-white/5",
      btnPrimary: "glass-btn py-3 px-6 text-sm font-semibold rounded-xl text-white flex items-center justify-center gap-2",
      btnSecondary: "glass-btn py-3 px-6 text-sm font-semibold rounded-xl text-slate-300 flex items-center justify-center gap-2",
      input: "bg-white/5 border border-white/10 rounded-xl w-full px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20",
      badge: "bg-pink-500/20 text-pink-300 border border-pink-500/30 rounded-full px-3 py-1 text-xs font-semibold w-fit",
      border: "border-white/10",
      footerBg: "bg-slate-950/80 border-t border-white/5 backdrop-blur-md",
      accentText: "text-pink-400",
      mutedText: "text-slate-400"
    },
    light: {
      wrapperBg: "bg-slate-100 text-slate-900 transition-colors duration-500 glass-bg",
      contentBg: "bg-slate-200/20",
      card: "glass-card-light text-slate-900 p-6 md:p-8",
      cardInner: "bg-black/[0.02] p-5 rounded-xl border border-black/5",
      btnPrimary: "glass-btn-light py-3 px-6 text-sm font-semibold rounded-xl text-slate-900 flex items-center justify-center gap-2",
      btnSecondary: "glass-btn-light py-3 px-6 text-sm font-semibold rounded-xl text-slate-600 flex items-center justify-center gap-2",
      input: "bg-white/75 border border-black/10 rounded-xl w-full px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-400/50 focus:ring-1 focus:ring-indigo-400/20",
      badge: "bg-indigo-500/10 text-indigo-600 border border-indigo-500/20 rounded-full px-3 py-1 text-xs font-semibold w-fit",
      border: "border-black/5",
      footerBg: "bg-white/50 border-t border-black/5 backdrop-blur-md",
      accentText: "text-indigo-600",
      mutedText: "text-slate-500"
    }
  },
  minimalist: {
    title: "Minimalist (Minimalismo Suizo)",
    definition: "Estilo enfocado en la simplicidad y en transmitir la máxima claridad de información, prescindiendo de adornos visuales.",
    difference: "Ausencia total de degradados, bordes redondeados y sombras. Foco estricto en el espacio en blanco (aire), tipografías elegantes (normalmente Serif para títulos) y alto contraste cromático.",
    projects: "Óptimo para revistas de diseño, agencias de arquitectura, marcas de lujo, portfolios de arte y blogs de lectura limpia.",
    fonts: {
      heading: "min-font-serif text-3xl md:text-5xl font-normal leading-tight italic",
      body: "font-mono text-xs tracking-tight",
    },
    dark: {
      wrapperBg: "bg-black text-white transition-colors duration-500",
      contentBg: "bg-zinc-900/10",
      card: "bg-black border border-white rounded-none p-6 md:p-8 text-white",
      cardInner: "bg-black border border-zinc-800 p-5 rounded-none",
      btnPrimary: "bg-white hover:bg-zinc-200 text-black border border-white py-3 px-6 text-xs uppercase font-bold tracking-wider rounded-none transition duration-150 flex items-center justify-center gap-2",
      btnSecondary: "bg-black hover:bg-zinc-900 text-white border border-white py-3 px-6 text-xs uppercase font-bold tracking-wider rounded-none transition duration-150 flex items-center justify-center gap-2",
      input: "bg-black border border-zinc-700 focus:border-white w-full px-4 py-3 text-xs text-white placeholder-zinc-700 rounded-none focus:outline-none",
      badge: "border border-zinc-700 text-zinc-400 px-3 py-1 text-[10px] uppercase tracking-wider rounded-none w-fit font-mono",
      border: "border-zinc-800",
      footerBg: "bg-black border-t border-zinc-950",
      accentText: "text-white underline underline-offset-4",
      mutedText: "text-zinc-500"
    },
    light: {
      wrapperBg: "bg-white text-black transition-colors duration-500",
      contentBg: "bg-slate-50",
      card: "bg-white border border-black rounded-none p-6 md:p-8 text-black",
      cardInner: "bg-white border border-slate-200 p-5 rounded-none",
      btnPrimary: "bg-black hover:bg-zinc-800 text-white border border-black py-3 px-6 text-xs uppercase font-bold tracking-wider rounded-none transition duration-150 flex items-center justify-center gap-2",
      btnSecondary: "bg-white hover:bg-slate-100 text-black border border-black py-3 px-6 text-xs uppercase font-bold tracking-wider rounded-none transition duration-150 flex items-center justify-center gap-2",
      input: "bg-white border border-slate-300 focus:border-black w-full px-4 py-3 text-xs text-black placeholder-slate-300 rounded-none focus:outline-none",
      badge: "border border-slate-300 text-slate-500 px-3 py-1 text-[10px] uppercase tracking-wider rounded-none w-fit font-mono",
      border: "border-slate-200",
      footerBg: "bg-white border-t border-slate-200",
      accentText: "text-black underline underline-offset-4",
      mutedText: "text-slate-400"
    }
  },
  maximalist: {
    title: "Maximalist (Diseño Expresivo)",
    definition: "Estilo disruptivo que rechaza la sobriedad y busca captar la atención de forma audaz mediante la sobrecarga, colores intensos y dinamismo visual.",
    difference: "Presenta bordes dashed (discontinuos) inclinados, componentes superpuestos que rompen la cuadrícula convencional, patrones de fondo llamativos y sombras de colores desfasadas.",
    projects: "Común en eventos culturales, marcas de streetwear, marketing de guerrilla, agencias creativas alternativas y portales interactivos experimentales.",
    fonts: {
      heading: "font-mono font-black tracking-tighter uppercase italic text-3xl md:text-5xl",
      body: "font-mono text-xs uppercase font-bold",
    },
    dark: {
      wrapperBg: "max-bg-dark text-white transition-colors duration-500",
      contentBg: "bg-[#0b0f19]/80 backdrop-blur-sm",
      card: "max-card-dark text-white p-6 md:p-8",
      cardInner: "bg-[#182235] border-2 border-dashed border-indigo-400 p-5 rounded-xl",
      btnPrimary: "max-btn py-3 px-6 text-xs text-black flex items-center justify-center gap-2 font-black uppercase",
      btnSecondary: "bg-purple-600 hover:bg-purple-500 text-white border-3 border-black py-3 px-6 text-xs flex items-center justify-center gap-2 font-black uppercase shadow-[3px_3px_0px_#000]",
      input: "max-input-dark w-full px-4 py-3 text-xs text-yellow-300 placeholder-yellow-300/30 focus:outline-none focus:border-dashed",
      badge: "bg-pink-500 border-2 border-black text-black px-3 py-1 text-[10px] w-fit shadow-[2px_2px_0px_#000] uppercase font-black",
      border: "border-[#f43f5e]/40",
      footerBg: "bg-[#080b13] border-t-4 border-double border-pink-500",
      accentText: "text-yellow-300",
      mutedText: "text-indigo-300"
    },
    light: {
      wrapperBg: "max-bg-light text-slate-900 transition-colors duration-500",
      contentBg: "bg-stone-50/90 backdrop-blur-sm",
      card: "max-card-light text-slate-900 p-6 md:p-8",
      cardInner: "bg-stone-100 border-2 border-dashed border-rose-400 p-5 rounded-xl",
      btnPrimary: "max-btn py-3 px-6 text-xs text-black flex items-center justify-center gap-2 font-black uppercase",
      btnSecondary: "bg-cyan-500 hover:bg-cyan-400 text-black border-3 border-black py-3 px-6 text-xs flex items-center justify-center gap-2 font-black uppercase shadow-[3px_3px_0px_#000]",
      input: "bg-white border-2 border-dashed border-rose-400 text-rose-600 placeholder-rose-600/30 w-full px-4 py-3 text-xs focus:outline-none",
      badge: "bg-rose-500 border-2 border-black text-white px-3 py-1 text-[10px] w-fit shadow-[2px_2px_0px_#000] uppercase font-black",
      border: "border-[#06b6d4]/40",
      footerBg: "bg-stone-200 border-t-4 border-double border-rose-500",
      accentText: "text-rose-600",
      mutedText: "text-stone-500"
    }
  },
  neobrutalism: {
    title: "Neo-Brutalismo (Figma Style)",
    definition: "Variación moderna del brutalismo que combina dureza visual con un espíritu juvenil, plano y optimista.",
    difference: "Usa bordes negros sólidos muy gruesos (border-3), esquinas completamente rectas sin redondear y sombras planas sólidas (offset shadow) sin ningún tipo de difuminado o blur.",
    projects: "Muy demandado por startups digitales, SaaS colaborativas (Figma, Gumroad), plataformas educativas y fintechs orientadas a jóvenes.",
    fonts: {
      heading: "font-sans font-black tracking-tight uppercase text-3xl md:text-5xl",
      body: "font-mono text-xs font-semibold",
    },
    dark: {
      wrapperBg: "bg-zinc-900 text-zinc-100 transition-colors duration-500",
      contentBg: "bg-zinc-950/60",
      card: "brutal-card-dark p-6 md:p-8 text-zinc-100",
      cardInner: "bg-zinc-950 border border-zinc-800 p-5 rounded-none",
      btnPrimary: "brutal-btn-yellow py-3 px-6 text-xs uppercase font-extrabold flex items-center justify-center gap-2",
      btnSecondary: "brutal-btn-white-dark py-3 px-6 text-xs uppercase font-extrabold flex items-center justify-center gap-2",
      input: "bg-zinc-950 border-2 border-white text-white placeholder-zinc-700 w-full px-4 py-3 text-xs rounded-none focus:outline-none focus:border-yellow-300",
      badge: "bg-pink-400 text-black border-2 border-black px-3 py-1 text-[10px] uppercase tracking-wider rounded-none font-bold w-fit",
      border: "border-zinc-700",
      footerBg: "bg-zinc-950 border-t-3 border-white",
      accentText: "text-yellow-400",
      mutedText: "text-zinc-500"
    },
    light: {
      wrapperBg: "bg-[#e5e7eb] text-zinc-900 transition-colors duration-500",
      contentBg: "bg-white/40",
      card: "brutal-card-light p-6 md:p-8 text-zinc-900",
      cardInner: "bg-[#f3f4f6] border border-zinc-200 p-5 rounded-none",
      btnPrimary: "brutal-btn-yellow py-3 px-6 text-xs uppercase font-extrabold flex items-center justify-center gap-2",
      btnSecondary: "brutal-btn-white-light py-3 px-6 text-xs uppercase font-extrabold flex items-center justify-center gap-2",
      input: "bg-white border-2 border-black text-black placeholder-zinc-400 w-full px-4 py-3 text-xs rounded-none focus:outline-none focus:border-blue-500",
      badge: "brutal-btn-pink px-3 py-1 text-[10px] uppercase tracking-wider rounded-none w-fit font-bold",
      border: "border-zinc-300",
      footerBg: "bg-white border-t-3 border-black",
      accentText: "text-blue-600",
      mutedText: "text-zinc-500"
    }
  },
  premiumsaas: {
    title: "Premium SaaS (Linear Style)",
    definition: "Estilo elegante imperante en el software corporativo premium y herramientas de ingeniería moderna.",
    difference: "Usa bordes ultra finos de 1px con degradados lineales sutiles, cuadrículas de fondo minimalistas y efectos de resplandor (glow) localizados para centrar la atención.",
    projects: "El estándar para plataformas cloud, bases de datos (Supabase), automatizaciones avanzadas, IA conversacional empresarial y productos de desarrollo.",
    fonts: {
      heading: "font-sans font-semibold tracking-tight text-3xl md:text-5xl",
      body: "font-sans text-sm",
    },
    dark: {
      wrapperBg: "saas-grid-dark text-zinc-100 transition-colors duration-500",
      contentBg: "bg-zinc-900/40 backdrop-blur-sm",
      card: "saas-card-dark p-6 md:p-8 text-zinc-100",
      cardInner: "bg-zinc-900/80 border border-zinc-800/50 p-5 rounded-lg",
      btnPrimary: "bg-violet-600 hover:bg-violet-500 text-white rounded-lg py-3 px-6 text-sm font-semibold transition shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] flex items-center justify-center gap-2 border border-violet-500/30",
      btnSecondary: "bg-zinc-900 hover:bg-zinc-850 text-zinc-300 rounded-lg py-3 px-6 text-sm font-semibold transition border border-zinc-800/80 flex items-center justify-center gap-2",
      input: "bg-zinc-950/80 border border-zinc-800 focus:border-violet-500/50 rounded-lg w-full px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none",
      badge: "bg-violet-500/10 text-violet-300 border border-violet-500/20 rounded-md px-2.5 py-0.5 text-xs font-medium w-fit",
      border: "border-zinc-800/60",
      footerBg: "bg-zinc-950/90 border-t border-zinc-900/50 backdrop-blur-sm",
      accentText: "text-violet-400",
      mutedText: "text-zinc-500"
    },
    light: {
      wrapperBg: "saas-grid-light text-zinc-900 transition-colors duration-500",
      contentBg: "bg-white/80 backdrop-blur-sm",
      card: "saas-card-light p-6 md:p-8 text-zinc-900",
      cardInner: "bg-zinc-50/50 border border-zinc-200/55 p-5 rounded-lg",
      btnPrimary: "bg-violet-600 hover:bg-violet-500 text-white rounded-lg py-3 px-6 text-sm font-semibold transition shadow-[0_4px_12px_rgba(124,58,237,0.2)] flex items-center justify-center gap-2",
      btnSecondary: "bg-white hover:bg-zinc-50 text-zinc-700 rounded-lg py-3 px-6 text-sm font-semibold transition border border-zinc-200 flex items-center justify-center gap-2",
      input: "bg-zinc-50 border border-zinc-200 focus:border-violet-500/40 rounded-lg w-full px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none",
      badge: "bg-violet-100 text-violet-700 border border-violet-200 rounded-md px-2.5 py-0.5 text-xs font-medium w-fit",
      border: "border-zinc-200/80",
      footerBg: "bg-white/95 border-t border-zinc-200/60 backdrop-blur-sm",
      accentText: "text-violet-600",
      mutedText: "text-zinc-400"
    }
  },
  cyberpunk: {
    title: "Cyberpunk (Diseño Futurista)",
    definition: "Estilo inmersivo basado en la ciencia ficción distópica de alta tecnología y bajos niveles de vida, con interfaces sobrecargadas.",
    difference: "Líneas de corte angular (clip-path), brillos intensos de neón (cian, amarillo o magenta), micro-textos, mirillas de enfoque en cruz (+) y marcos asimétricos estilo HUD militar.",
    projects: "Apropiado para criptomonedas, bots automatizados avanzados de hacking, videojuegos de rol de ciencia ficción y productos de IA de carácter disruptivo.",
    fonts: {
      heading: "cyber-font text-3xl md:text-5xl font-black uppercase tracking-wider",
      body: "cyber-font text-xs tracking-widest uppercase",
    },
    dark: {
      wrapperBg: "bg-[#090b0e] text-slate-100 transition-colors duration-500",
      contentBg: "bg-[#0d0e12]/70",
      card: "cyber-card-dark p-6 md:p-8 cyber-clip text-slate-100",
      cardInner: "bg-[#11131a] border border-cyan-500/20 p-5 cyber-clip-sm",
      btnPrimary: "cyber-btn-cyan py-3 px-6 text-xs font-bold cyber-clip-sm uppercase flex items-center justify-center gap-2",
      btnSecondary: "cyber-btn-magenta py-3 px-6 text-xs font-bold cyber-clip-sm uppercase flex items-center justify-center gap-2",
      input: "bg-[#11131a] border border-[#00f0ff]/40 focus:border-[#00f0ff] w-full px-4 py-3 text-xs text-[#00f0ff] placeholder-cyan-900/60 focus:outline-none cyber-clip-sm font-mono",
      badge: "border border-[#00f0ff] text-[#00f0ff] bg-cyan-950/20 px-3 py-1 text-[10px] tracking-widest cyber-clip-sm uppercase w-fit font-mono cyber-glow-cyan",
      border: "border-cyan-950/30",
      footerBg: "bg-[#08090d] border-t-2 border-cyan-500",
      accentText: "text-[#00f0ff] cyber-glow-cyan",
      mutedText: "text-slate-500"
    },
    light: {
      wrapperBg: "bg-[#f5f6fa] text-[#090b0e] transition-colors duration-500",
      contentBg: "bg-[#f4f6fa]/60",
      card: "cyber-card-light p-6 md:p-8 cyber-clip text-[#090b0e]",
      cardInner: "bg-white border border-rose-300 p-5 cyber-clip-sm",
      btnPrimary: "cyber-btn-magenta py-3 px-6 text-xs font-bold cyber-clip-sm uppercase flex items-center justify-center gap-2",
      btnSecondary: "cyber-btn-cyan py-3 px-6 text-xs font-bold cyber-clip-sm uppercase flex items-center justify-center gap-2",
      input: "bg-white border border-rose-400 focus:border-rose-600 w-full px-4 py-3 text-xs text-[#090b0e] placeholder-rose-300 w-full focus:outline-none cyber-clip-sm font-mono",
      badge: "border border-rose-500 text-rose-500 bg-rose-50 px-3 py-1 text-[10px] tracking-widest cyber-clip-sm uppercase w-fit font-mono cyber-glow-magenta",
      border: "border-rose-200/50",
      footerBg: "bg-[#ebedf3] border-t-2 border-rose-500",
      accentText: "text-[#ff0055] cyber-glow-magenta",
      mutedText: "text-slate-400"
    }
  }
};

interface MockPreviewProps {
  activeStyle: keyof typeof stylesData;
  colorMode: "light" | "dark";
}

export default function MockPreview({ activeStyle, colorMode }: MockPreviewProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const styleConf = stylesData[activeStyle];
  const theme = colorMode === "dark" ? styleConf.dark : styleConf.light;

  // Bento state logic for interactive graph
  const [balance, setBalance] = useState(62970);
  const [pct, setPct] = useState(5.3);

  // Form states (disabled mock UI, but updates values)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div className={`w-full min-h-full flex flex-col ${theme.wrapperBg} ${styleConf.fonts.body}`}>
      
      {/* 1. HEADER (MOCK) */}
      <header className={`border-b ${theme.border} py-4 px-6 md:px-8`}>
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className={`h-6 w-6 ${theme.accentText}`} />
            <span className={`font-mono text-base font-bold uppercase tracking-wider ${theme.accentText}`}>
              Velocity AI
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <a href="#features" className={`hover:${theme.accentText} transition`}>Características</a>
            <a href="#about" className={`hover:${theme.accentText} transition`}>Acerca de</a>
            <a href="#usecases" className={`hover:${theme.accentText} transition`}>Casos de Uso</a>
            <a href="#dashboard" className={`hover:${theme.accentText} transition`}>Dashboard</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className={`${theme.btnSecondary} !py-2 !px-4`}>
              Log In
            </button>
            <button className={`${theme.btnPrimary} !py-2 !px-4`}>
              Demo Gratis
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav overlay */}
        {mobileMenuOpen && (
          <div className={`md:hidden mt-4 pt-4 border-t ${theme.border} flex flex-col gap-4 font-mono pb-2`}>
            <a href="#features" className="py-1" onClick={() => setMobileMenuOpen(false)}>Características</a>
            <a href="#about" className="py-1" onClick={() => setMobileMenuOpen(false)}>Acerca de</a>
            <a href="#usecases" className="py-1" onClick={() => setMobileMenuOpen(false)}>Casos de Uso</a>
            <a href="#dashboard" className="py-1" onClick={() => setMobileMenuOpen(false)}>Dashboard</a>
            <div className="flex flex-col gap-2 pt-2">
              <button className={`${theme.btnSecondary} w-full`}>Log In</button>
              <button className={`${theme.btnPrimary} w-full`}>Demo Gratis</button>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 space-y-6">
          <span className={theme.badge}>
            {activeStyle.toUpperCase()} • MODE: {colorMode.toUpperCase()}
          </span>
          <h1 className={`${styleConf.fonts.heading} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-balance`}>
            Automatiza tu Operación con <span className={theme.accentText}>Inteligencia Artificial</span>
          </h1>
          <p className={`${theme.mutedText} text-sm md:text-base max-w-2xl leading-relaxed`}>
            Estás visualizando una página de muestra en estilo <strong className="text-zinc-100 dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-100 px-1 py-0.5 rounded-sm">{styleConf.title}</strong>. 
            Este diseño demuestra cómo las fuentes, bordes, sombras y la composición espacial cambian la percepción estética de tu producto frente al cliente final.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className={theme.btnPrimary}>
              Comenzar Ahora
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className={theme.btnSecondary}>
              Saber Más
            </button>
          </div>
        </div>

        {/* Hero Interactive Widget Frame */}
        <div className="md:col-span-5 flex justify-center">
          <div className={`${theme.card} w-full max-w-[380px] space-y-6 relative overflow-hidden`}>
            {activeStyle === "glassmorphism" && <div className="saas-glow-indigo top-0 left-0" />}
            
            <div className="flex items-center justify-between">
              <span className={theme.badge}>
                Velocity AI
              </span>
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/70" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                <span className="w-2 h-2 rounded-full bg-green-500/70" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold">Agenda tu onboarding</h3>
              <p className={`text-xs ${theme.mutedText}`}>Elige una hora para que nuestro agente automatizado cree tu flujo de trabajo.</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-wider block">Correo de Trabajo</label>
                <input 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@empresa.com" 
                  className={theme.input}
                />
              </div>
              <button 
                onClick={() => alert(`Suscrito en estilo: ${activeStyle}`)}
                className={`${theme.btnPrimary} w-full`}
              >
                Configurar Cuenta
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STYLE ANALYSIS SECTION (EMBEDDED METADATA) */}
      <section id="about" className={`${theme.contentBg} border-y ${theme.border} py-12 px-6 md:px-8`}>
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-2 text-center md:text-left">
            <span className={theme.badge}>Análisis Técnico</span>
            <h2 className={`${styleConf.fonts.heading} text-2xl md:text-4xl`}>
              ¿Qué define a este Estilo?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Definicion */}
            <div className={theme.card}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${theme.cardInner} w-fit`}>
                  <Info className={`h-5 w-5 ${theme.accentText}`} />
                </div>
                <h4 className="font-bold text-base">Definición</h4>
              </div>
              <p className={`text-xs md:text-sm leading-relaxed ${theme.mutedText}`}>
                {styleConf.definition}
              </p>
            </div>

            {/* Card 2: Diferencias */}
            <div className={theme.card}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${theme.cardInner} w-fit`}>
                  <Layers className={`h-5 w-5 ${theme.accentText}`} />
                </div>
                <h4 className="font-bold text-base">Diferencias Clave</h4>
              </div>
              <p className={`text-xs md:text-sm leading-relaxed ${theme.mutedText}`}>
                {styleConf.difference}
              </p>
            </div>

            {/* Card 3: Proyectos */}
            <div className={theme.card}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${theme.cardInner} w-fit`}>
                  <Sparkles className={`h-5 w-5 ${theme.accentText}`} />
                </div>
                <h4 className="font-bold text-base">Proyectos Ideales</h4>
              </div>
              <p className={`text-xs md:text-sm leading-relaxed ${theme.mutedText}`}>
                {styleConf.projects}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BENTO WIDGET DASHBOARD (Matching user image elements) */}
      <section id="dashboard" className="px-6 py-12 md:py-20 max-w-7xl mx-auto w-full space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className={theme.badge}>Vista de Componentes</span>
          <h2 className={`${styleConf.fonts.heading} text-2xl md:text-4xl`}>
            Panel de Operación en Tiempo Real
          </h2>
          <p className={`${theme.mutedText} text-xs md:text-sm leading-relaxed`}>
            A continuación se presenta un tablero interactivo mock. Los elementos están inspirados en la estética física del diseño (Neumorfismo, 3D suave, transparencias) para mostrar cómo responde cada control.
          </p>
        </div>

        {/* The Dashboard Bento Layout */}
        <div className="grid md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card A: Login Component (Left col, 4 span) */}
          <div className={`${theme.card} md:col-span-4 flex flex-col justify-between space-y-6`}>
            <div className="flex items-center gap-3">
              <span className={`w-3 h-3 rounded-full bg-red-400`} />
              <h3 className="text-base font-bold uppercase font-mono tracking-wider">Access Node</h3>
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl font-bold font-mono">Sign In</h4>
              
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="text-[9px] uppercase tracking-wider font-mono">User/Email</label>
                    <Mail className="h-3 w-3 opacity-40" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="johnkohl.mail.com" 
                    className={theme.input}
                    disabled
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="text-[9px] uppercase tracking-wider font-mono">Secret Key</label>
                    <Lock className="h-3 w-3 opacity-40" />
                  </div>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className={theme.input}
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button className={`${theme.btnPrimary} w-full`}>
                Sign Up
              </button>
              <a href="#" className={`text-[10px] block text-center underline ${theme.mutedText}`}>
                Forget Password?
              </a>
            </div>
          </div>

          {/* Card B: Live Analytics curved Graph (Middle col, 5 span) */}
          <div className={`${theme.card} md:col-span-5 flex flex-col justify-between space-y-6 relative overflow-hidden`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className={`h-4 w-4 ${theme.accentText}`} />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider">Flow Engine</h3>
              </div>
              <span className={`${theme.badge} !py-0.5`}>LIVE</span>
            </div>

            {/* Dynamic Graph drawing using SVG */}
            <div className="w-full h-32 relative flex items-end">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Area path */}
                <path 
                  d="M0,40 Q15,30 25,22 T50,28 T75,10 T100,20 L100,40 L0,40 Z" 
                  fill="url(#purpleGrad)" 
                />
                {/* Stroke path */}
                <path 
                  d="M0,40 Q15,30 25,22 T50,28 T75,10 T100,20" 
                  fill="none" 
                  stroke={activeStyle === 'cyberpunk' ? '#00f0ff' : '#a855f7'} 
                  strokeWidth="2.5" 
                />
                
                {/* Intersect dot */}
                <circle cx="75" cy="10" r="2.5" fill="#facc15" className="animate-pulse" />
              </svg>

              {/* Month markings */}
              <div className="w-full flex justify-between text-[9px] font-mono text-zinc-500 px-1 z-10">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
              </div>
            </div>

            {/* Metric Display */}
            <div className="flex justify-between items-center pt-2">
              <div>
                <span className={`text-[9px] uppercase tracking-wider block ${theme.mutedText}`}>Today Earnings</span>
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-zinc-100 dark:text-zinc-900">
                  ${balance.toLocaleString()}
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-emerald-400 font-mono font-bold">+{pct}%</span>
                <button 
                  onClick={() => {
                    setBalance(prev => prev + 240);
                    setPct(prev => parseFloat((prev + 0.1).toFixed(1)));
                  }}
                  className={`${theme.btnSecondary} !p-1.5 rounded-full`}
                  title="Simular Compra"
                >
                  <PlusSymbol />
                </button>
              </div>
            </div>

            {/* Sound bar widget mimicking reference */}
            <div className={`p-3 ${theme.cardInner} flex items-center justify-between gap-4`}>
              <div className="flex gap-1.5 h-6 items-end">
                <span className="w-1.5 h-3 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <span className="w-1.5 h-5 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                <span className="w-1.5 h-6 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                <span className="w-1.5 h-4 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                <span className="w-1.5 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
              <span className="text-[10px] font-mono opacity-60">System Transactions Active</span>
            </div>
          </div>

          {/* Card C: Settings & Dial Metric (Right col, 3 span) */}
          <div className={`${theme.card} md:col-span-3 flex flex-col justify-between space-y-6`}>
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider">Metrics</h3>
              <Settings className="h-4 w-4 opacity-40 animate-spin-slow" />
            </div>

            {/* Slider items */}
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono">
                  <span>Resource Use</span>
                  <span>78%</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500" style={{ width: '78%' }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono">
                  <span>Savings</span>
                  <span>45%</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-400" style={{ width: '45%' }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono">
                  <span>API Latency</span>
                  <span>12ms</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500" style={{ width: '90%' }} />
                </div>
              </div>
            </div>

            {/* Dial circle graphic mimicking image '6k' circular progress */}
            <div className="flex justify-center py-2">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="absolute w-full h-full transform -rotate-90">
                  <circle cx="56" cy="56" r="45" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="transparent" />
                  <circle 
                    cx="56" cy="56" r="45" 
                    stroke={activeStyle === 'cyberpunk' ? '#00f0ff' : '#a855f7'} 
                    strokeWidth="8" 
                    fill="transparent" 
                    strokeDasharray="282" 
                    strokeDashoffset="70"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="text-center z-10">
                  <span className="text-2xl font-extrabold font-mono block">6k</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-500 block">Actions</span>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-between gap-2 pt-2">
              <button className={`${theme.btnSecondary} !p-2 flex-1 text-[10px] flex flex-col items-center gap-1`}>
                <Send className="h-3 w-3" />
                <span>Send</span>
              </button>
              <button className={`${theme.btnSecondary} !p-2 flex-1 text-[10px] flex flex-col items-center gap-1`}>
                <ShoppingCart className="h-3 w-3" />
                <span>Shop</span>
              </button>
              <button className={`${theme.btnSecondary} !p-2 flex-1 text-[10px] flex flex-col items-center gap-1`}>
                <Heart className="h-3 w-3" />
                <span>Like</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className={`${theme.footerBg} py-12 px-6 md:px-8 mt-auto`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Layers className={`h-5 w-5 ${theme.accentText}`} />
              <span className="font-mono text-sm font-bold uppercase tracking-wider">Velocity AI</span>
            </div>
            <p className={`text-xs leading-relaxed ${theme.mutedText}`}>
              Construyendo automatización conversacional a escala con flujos de agentes autónomos.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider font-mono">Estilos de UI</h4>
            <div className={`flex flex-col gap-1.5 text-xs ${theme.mutedText}`}>
              <span>Claymorphism</span>
              <span>Neomorphism</span>
              <span>Glassmorphism</span>
              <span>Minimalist & Maximalist</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider font-mono">Tendencias</h4>
            <div className={`flex flex-col gap-1.5 text-xs ${theme.mutedText}`}>
              <span>Neo-Brutalismo</span>
              <span>Premium SaaS (Linear)</span>
              <span>Cyberpunk / Sci-Fi</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider font-mono">Suscríbete</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="tu@correo.com" 
                className={`${theme.input} !py-2 !px-3 !rounded-lg text-xs`}
                disabled
              />
              <button className={`${theme.btnPrimary} !p-2 !rounded-lg`}>
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-zinc-800/20 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-[11px]">
          <span className={theme.mutedText}>
            © 2026 Velocity AI. Todos los derechos reservados. Muestra creada por SOURDEV.
          </span>
          <div className="flex gap-4">
            <a href="#" className={`hover:${theme.accentText}`}>Políticas</a>
            <a href="#" className={`hover:${theme.accentText}`}>Seguridad</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

// Plus symbol SVG
function PlusSymbol() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
}
