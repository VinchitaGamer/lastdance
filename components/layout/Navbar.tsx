"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/metodo", label: "Método" },
  { href: "/portafolio", label: "Portafolio" },
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="group inline-flex items-center gap-3 z-50">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-yellow-400/40 bg-yellow-400/10 text-sm font-semibold tracking-[0.28em] text-yellow-300 transition group-hover:border-yellow-300/70 group-hover:bg-yellow-400/15">
            S
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-mono text-lg font-semibold tracking-[0.28em] text-zinc-50">
              SOURDEV
            </span>
            <span className="mt-1 hidden text-xs uppercase tracking-[0.35em] text-zinc-400 sm:block">
              Agentic workflows
            </span>
          </span>
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-yellow-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botones de Acción y Menú */}
        <div className="flex items-center gap-3 z-50">
          <Link
            href="/contacto"
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-yellow-400/50 bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300 lg:inline-flex"
          >
            Agendar
          </Link>

          {/* Toggle Menú Móvil Animado con Framer Motion */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:bg-white/10 lg:hidden"
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
            className="absolute left-0 top-full w-full overflow-hidden border-b border-white/10 bg-zinc-950/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-3 px-4 py-6">
              {links.map((link) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-4 text-base font-medium text-zinc-300 transition hover:bg-white/5 hover:text-yellow-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={itemVariants}>
                <Link
                  href="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 flex w-full items-center justify-center rounded-xl bg-yellow-400 p-4 text-base font-semibold text-zinc-950 transition hover:bg-yellow-300 sm:hidden"
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