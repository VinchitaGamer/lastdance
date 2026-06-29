"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowLeft, ArrowRight, AlertTriangle, Zap, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const getIconComponent = (iconName: string) => {
  const Icon = (Icons as any)[iconName];
  return Icon || Icons.HelpCircle;
};

interface Benefit {
  title: string;
  text: string;
}

interface Step {
  step: string;
  title: string;
  desc: string;
}

interface RoiMetric {
  label: string;
  value: string;
  desc: string;
}

interface SubService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

interface ServiceData {
  title: string;
  description: string;
  overview: string;
  icon: string;
  benefits: Benefit[];
  beforeAfter: {
    problem: string;
    solution: string;
  };
  tools: string[];
  flow: Step[];
  roi: RoiMetric[];
  subservices: SubService[];
}

interface ServiceDetailClientProps {
  slug: string;
  serviceData: ServiceData;
}

export default function ServiceDetailClient({ slug, serviceData }: ServiceDetailClientProps) {
  const [activeTab, setActiveTab] = useState<string>(() => serviceData.subservices[0]?.id || "");

  useEffect(() => {
    if (serviceData.subservices[0]) {
      setActiveTab(serviceData.subservices[0].id);
    }
  }, [slug, serviceData]);

  const currentSubservice = serviceData.subservices.find((s) => s.id === activeTab) || serviceData.subservices[0];
  const MainIcon = getIconComponent(serviceData.icon);

  return (
    <main className="relative overflow-hidden bg-zinc-950 px-4 py-20 text-zinc-50 sm:px-6 lg:px-8 lg:py-28">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.14),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.03),_transparent_20%)]" />

      <div className="relative mx-auto w-full max-w-7xl space-y-16">
        {/* Navigation header */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs uppercase tracking-[0.3em] text-zinc-400 transition hover:border-yellow-400/40 hover:text-yellow-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver
          </Link>
          <span className="text-xs uppercase tracking-[0.4em] text-yellow-300">Servicios / SOURDEV</span>
        </div>

        {/* Hero Section */}
        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-yellow-300">Servicio Profesional</p>
            <h1 className="max-w-3xl text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight sm:leading-none text-balance font-mono">
              {serviceData.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-300">{serviceData.description}</p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="inline-flex h-14 min-w-[180px] items-center justify-center gap-2 rounded-full border border-yellow-400/50 bg-yellow-400 px-6 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]"
              >
                Cotizar Servicio
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              {slug === "chatbots" && (
                <button
                  type="button"
                  onClick={() => {
                    window.dispatchEvent(
                      new CustomEvent("open-sourbot", {
                        detail: { message: "Hola, me gustaría agendar una demo del chatbot IA de SOURDEV" }
                      })
                    );
                  }}
                  className="inline-flex h-14 min-w-[180px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 text-sm font-semibold text-zinc-50 transition hover:bg-white/10 hover:border-yellow-400/30 cursor-pointer"
                >
                  Probar Demo
                  <Icons.MessageSquare className="h-4 w-4 text-yellow-300" />
                </button>
              )}
            </div>
          </div>

          {/* Overview Bento Card */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <MainIcon className="h-12 w-12 text-yellow-300 drop-shadow-[0_0_16px_rgba(250,204,21,0.5)]" />
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs uppercase tracking-[0.3em] text-zinc-400">
                Resumen
              </span>
            </div>
            <p className="mt-6 text-sm leading-7 text-zinc-300">{serviceData.overview}</p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 md:p-10 backdrop-blur-xl space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-yellow-300 font-mono">Ventajas Clave</p>
            <h2 className="text-3xl font-semibold text-zinc-50 font-mono">¿Por qué elegir este servicio?</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {serviceData.benefits.map((benefit, index) => (
              <article key={benefit.title} className="border border-white/5 bg-zinc-900/40 p-6 rounded-2xl space-y-3">
                <div className="h-10 w-10 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-300 font-bold font-mono">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-semibold text-zinc-100 font-mono">{benefit.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Subservices Pestañas Dinámicas */}
        {serviceData.subservices.length > 0 && (
          <section className="space-y-12">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-yellow-300 font-mono">Especialidades</p>
              <h2 className="text-3xl font-semibold text-zinc-50 font-mono">Formatos y Áreas de Trabajo</h2>
              <p className="max-w-2xl text-sm text-zinc-400 leading-relaxed">
                Ofrecemos diferentes soluciones adaptadas a la madurez operativa y los objetivos de facturación de tu negocio.
              </p>
            </div>

            {/* Bento-style Tab Selectors - Mobile-First Horizontal Scroll */}
            <div className="flex overflow-x-auto gap-3 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-4 lg:gap-4 lg:pb-0">
              {serviceData.subservices.map((item, index) => {
                const IconComponent = getIconComponent(item.icon);
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveTab(item.id)}
                    className={`group text-left rounded-3xl border p-5 sm:p-6 transition duration-300 flex flex-col justify-between min-h-[140px] sm:min-h-[160px] min-w-[260px] sm:min-w-[280px] lg:min-w-0 shrink-0 snap-center cursor-pointer ${
                      isActive
                        ? "border-yellow-400 bg-yellow-400/[0.03] shadow-[0_0_20px_rgba(250,204,21,0.15)]"
                        : "border-white/10 bg-white/[0.02] hover:border-yellow-400/40 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-start justify-between w-full">
                      <div className={`p-2.5 sm:p-3 rounded-2xl transition duration-300 ${
                        isActive ? "bg-yellow-400/10 text-yellow-300" : "bg-white/5 text-zinc-400 group-hover:text-zinc-200"
                      }`}>
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                        Opción 0{index + 1}
                      </span>
                    </div>

                    <div className="mt-4">
                      <h3 className={`text-sm sm:text-base font-semibold font-mono leading-tight ${isActive ? "text-yellow-300" : "text-zinc-100"}`}>
                        {item.title}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-zinc-400 mt-1 leading-snug line-clamp-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Tab Detail with Framer Motion Transition */}
            <AnimatePresence mode="wait">
              {currentSubservice && (
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="grid gap-6 lg:gap-8 lg:grid-cols-12 items-stretch mt-6"
                >
                  {/* Left Side: Detail & Description */}
                  <div className="lg:col-span-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-yellow-300">
                        {currentSubservice.subtitle}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-50 font-mono leading-tight">
                        {currentSubservice.title}
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                        {currentSubservice.description}
                      </p>
                    </div>

                    <div className="border-t border-white/5 pt-6 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">
                        Alineación Estratégica
                      </span>
                      <Link
                        href="/contacto"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-yellow-300 hover:text-yellow-400 transition"
                      >
                        Solicitar Demo <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Side: Before/After & Tools */}
                  <div className="lg:col-span-6 flex flex-col justify-between gap-6">
                    <div className="space-y-4">
                      {/* Antes (Problema) */}
                      <div className="rounded-2xl border border-red-500/10 bg-red-500/[0.02] p-5 space-y-2">
                        <div className="flex items-center gap-2 text-red-400">
                          <AlertTriangle className="h-4 w-4" />
                          <h4 className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                            El Problema Operativo (Antes)
                          </h4>
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {serviceData.beforeAfter.problem}
                        </p>
                      </div>

                      {/* Después (Solución) */}
                      <div className="rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.02] p-5 space-y-2">
                        <div className="flex items-center gap-2 text-emerald-400">
                          <Zap className="h-4 w-4" />
                          <h4 className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                            Solución SOURDEV (Después)
                          </h4>
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {serviceData.beforeAfter.solution}
                        </p>
                      </div>
                    </div>

                    {/* Herramientas */}
                    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 space-y-3">
                      <div className="flex items-center gap-2 text-zinc-300">
                        <Cpu className="h-4 w-4" />
                        <h4 className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                          Tecnologías Utilizadas
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {serviceData.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] text-zinc-300 font-mono"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        )}

        {/* Workflow steps and ROI Metrics */}
        <section className="grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Timeline Process Flow */}
          <div className="lg:col-span-7 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.25em] text-yellow-300 font-mono">Metodología de Trabajo</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-zinc-50 font-mono">¿Cómo construimos el servicio?</h3>
            </div>

            <div className="relative space-y-6 sm:space-y-8 mt-6">
              {/* Vertical line connecting steps - perfectly aligned with left-3 */}
              <div className="absolute left-3 top-2 bottom-2 w-[1px] bg-gradient-to-b from-yellow-400 via-yellow-400/20 to-transparent" />

              {serviceData.flow.map((step) => (
                <div key={step.step} className="relative pl-8 flex flex-col gap-1 group">
                  {/* Step marker - centered at left-3 */}
                  <div className="absolute left-3 -translate-x-1/2 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950 border border-yellow-400 text-[10px] font-mono font-bold text-yellow-300 shadow-[0_0_8px_rgba(250,204,21,0.2)]">
                    {step.step}
                  </div>

                  <h4 className="text-xs sm:text-sm font-semibold text-zinc-100 font-mono leading-none pl-1">
                    {step.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed pl-1">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics ROI */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 sm:p-8 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-yellow-300 font-mono">Impacto del Negocio</span>
              <h3 className="text-xl font-semibold text-zinc-50 font-mono">Resultados Estimados</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Nuestras integraciones y desarrollos están pensados exclusivamente para generar un retorno de inversión claro y auditable en tu operación diaria.
              </p>
            </div>

            <div className="grid gap-2 sm:gap-4 grid-cols-3">
              {serviceData.roi.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:p-5 flex flex-col justify-between min-h-[95px] sm:min-h-[120px]"
                >
                  <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-zinc-400 leading-tight">
                    {metric.label}
                  </span>
                  <div>
                    <div className="text-lg sm:text-2xl font-bold font-mono text-yellow-300 leading-none">
                      {metric.value}
                    </div>
                    <p className="text-[9px] text-zinc-500 mt-1 leading-tight hidden xs:block">
                      {metric.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
