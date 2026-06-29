"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/metodo", label: "Método" },
  { href: "/contacto", label: "Contacto" },
];

// Variantes para el contenedor del menú (animación de entrada/salida)
const menuVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      when: "afterChildren", // Espera a que los hijos se oculten
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren", // Anima el contenedor antes que los hijos
      staggerChildren: 0.1,   // Retraso entre cada enlace
    },
  },
};

// Variantes para cada enlace individual
const itemVariants: Variants = {
  closed: { x: -16, opacity: 0 },
  open: { x: 0, opacity: 1 },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="group inline-flex items-center gap-3 z-50">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border-2 border-yellow-400 bg-yellow-400/5 flex items-center justify-center transition shadow-[3px_3px_0px_0px_rgba(250,204,21,0.3)] group-hover:bg-yellow-400/15">
            <Image
              src="/favicon.ico"
              alt="SOURDEV"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
          </div>
          <span className="flex flex-col leading-none">
            <span className="font-mono text-lg font-bold tracking-[0.28em] text-zinc-50">
              SOURDEV
            </span>
            <span className="mt-1 hidden text-[10px] font-mono uppercase tracking-[0.35em] text-zinc-400 sm:block">
              Agentic workflows
            </span>
          </span>
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden items-center gap-1.5 rounded-full border-2 border-white/10 bg-zinc-950/50 px-4 py-1.5 backdrop-blur-xl shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)] lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 transition hover:bg-white/5 hover:text-yellow-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botones de Acción y Menú */}
        <div className="flex items-center gap-3 z-50">
          <Link
            href="/contacto"
            className="hidden sm:inline-flex items-center justify-center rounded-full border-2 border-black bg-yellow-400 px-5 py-2 text-xs font-mono font-black uppercase tracking-wider text-zinc-950 transition-all shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)] hover:translate-y-[-1px] active:translate-y-[1px] lg:inline-flex"
          >
            Agendar
          </Link>

          {/* Toggle Menú Móvil Animado con Framer Motion */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/10 bg-zinc-950 text-zinc-300 transition shadow-[3px_3px_0px_0px_rgba(255,255,255,0.08)] hover:bg-white/5 lg:hidden"
            aria-label="Abrir menú"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Dropdown Menú Móvil con AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute left-0 top-full w-full overflow-hidden border-b-2 border-white/10 bg-zinc-950/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-3 px-4 py-6">
              {links.map((link) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between rounded-xl border-2 border-white/10 bg-zinc-900/50 p-4 text-sm font-mono font-bold uppercase tracking-wider text-zinc-300 transition hover:border-yellow-400 hover:text-yellow-300 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.03)]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={itemVariants}>
                <Link
                  href="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 flex w-full items-center justify-center rounded-xl border-2 border-black bg-yellow-400 p-4 text-sm font-mono font-black uppercase tracking-wider text-zinc-950 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] hover:translate-y-[-1px] active:translate-y-[1px] sm:hidden"
                >
                  Agendar Consultoría
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}