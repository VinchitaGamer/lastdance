"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const mainNavigation = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/metodo", label: "Método" },
  { href: "/contacto", label: "Contacto" },
];

const servicesNavigation = [
  { href: "/servicios/desarrollo-web-flash", label: "Desarrollo Web" },
  { href: "/servicios/chatbots", label: "Chatbots IA" },
  { href: "/servicios/automatizacion", label: "Automatización" },
];

const casesNavigation = [
  { href: "/portafolio/software/comandas", label: "Comandas" },
  { href: "/portafolio/software/automatizaciones", label: "Automatizaciones" },
  { href: "/portafolio/software/chatbots", label: "Chatbots IA" },
  { href: "/portafolio/software/paginas-web", label: "Páginas Web" },
];

import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const isShowroom = pathname?.startsWith("/ui-showroom");
  
  if (isShowroom) return null;

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    navigation: false,
    services: false,
    cases: false,
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <footer className="border-t-2 border-white/10 bg-zinc-950/60 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
            <span className="font-mono text-lg font-bold tracking-[0.24em] text-zinc-50">
              SOURDEV
            </span>
            <p className="text-xs leading-relaxed text-zinc-400 max-w-sm">
              Diseñamos sistemas digitales claros, rápidos y orientados a resultados para negocios que necesitan ejecutar con precisión.
            </p>
          </div>

          {/* Column 1: Navegación */}
          <div className="border-b border-zinc-900 pb-4 sm:border-0 sm:pb-0">
            <button
              onClick={() => toggleSection("navigation")}
              className="w-full flex justify-between items-center text-left focus:outline-none sm:pointer-events-none"
            >
              <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-300">
                Navegación
              </span>
              <ChevronDown
                className={`h-4.5 w-4.5 text-yellow-300 transition-transform duration-300 sm:hidden ${
                  openSections.navigation ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`transition-all duration-300 overflow-hidden sm:max-h-none sm:opacity-100 sm:block ${
                openSections.navigation ? "max-h-48 opacity-100 mt-3" : "max-h-0 opacity-0 sm:mt-0"
              }`}
            >
              <div className="space-y-1.5 pt-2 sm:pt-0">
                {mainNavigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-mono text-[11px] text-zinc-400 transition hover:text-yellow-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          </div>

          {/* Column 2: Servicios */}
          <div className="border-b border-zinc-900 pb-4 sm:border-0 sm:pb-0">
            <button
              onClick={() => toggleSection("services")}
              className="w-full flex justify-between items-center text-left focus:outline-none sm:pointer-events-none"
            >
              <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-300">
                Servicios
              </span>
              <ChevronDown
                className={`h-4.5 w-4.5 text-yellow-300 transition-transform duration-300 sm:hidden ${
                  openSections.services ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`transition-all duration-300 overflow-hidden sm:max-h-none sm:opacity-100 sm:block ${
                openSections.services ? "max-h-48 opacity-100 mt-3" : "max-h-0 opacity-0 sm:mt-0"
              }`}
            >
              <div className="space-y-1.5 pt-2 sm:pt-0">
                {servicesNavigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-mono text-[11px] text-zinc-400 transition hover:text-yellow-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          </div>

          {/* Column 3: Casos de Estudio */}
          <div className="border-b border-zinc-900 pb-4 sm:border-0 sm:pb-0">
            <button
              onClick={() => toggleSection("cases")}
              className="w-full flex justify-between items-center text-left focus:outline-none sm:pointer-events-none"
            >
              <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-300">
                Casos
              </span>
              <ChevronDown
                className={`h-4.5 w-4.5 text-yellow-300 transition-transform duration-300 sm:hidden ${
                  openSections.cases ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`transition-all duration-300 overflow-hidden sm:max-h-none sm:opacity-100 sm:block ${
                openSections.cases ? "max-h-48 opacity-100 mt-3" : "max-h-0 opacity-0 sm:mt-0"
              }`}
            >
              <div className="space-y-1.5 pt-2 sm:pt-0">
                {casesNavigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-mono text-[11px] text-zinc-400 transition hover:text-yellow-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="mt-8 border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-500">
          <p>© {new Date().getFullYear()} SOURDEV. Todos los derechos reservados.</p>
          <span className="text-zinc-600">Engineered with Agentic Workflows</span>
        </div>

      </div>
    </footer>
  );
}