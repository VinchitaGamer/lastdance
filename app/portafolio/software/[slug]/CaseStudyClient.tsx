"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Bot,
  DatabaseZap,
  FileClock,
  Globe2,
  LayoutGrid,
  MessageSquareText,
  MonitorSmartphone,
  PlugZap,
  ReceiptText,
  ShieldCheck,
  ScanSearch,
  Workflow,
  Utensils,
  X,
  ChevronLeft,
  ChevronRight,
  Activity,
  Volume2,
  Monitor,
  Timer,
  Play,
  BarChart3,
  TrendingUp,
  Settings,
  Users,
  Sliders,
} from "lucide-react";

const getIconComponent = (iconName: string) => {
  const Icon = (Icons as any)[iconName];
  return Icon || Icons.HelpCircle;
};

interface Shot {
  title: string;
  text: string;
  image: string;
}

interface Benefit {
  title: string;
  text: string;
}

interface OverviewCard {
  title: string;
  text: string;
  span: string;
  icon: string;
}

interface CaseData {
  title: string;
  description: string;
  overview: string;
  benefits: Benefit[];
  overviewCards: OverviewCard[];
  shots: Shot[];
  icon: string;
}

interface CaseStudyClientProps {
  slug: string;
  caseData: CaseData;
}

export default function CaseStudyClient({ slug, caseData }: CaseStudyClientProps) {
  const [activeShotIndex, setActiveShotIndex] = useState<number | null>(null);
  const [activeRole, setActiveRole] = useState<"mesero" | "cocina" | "admin" >("mesero");

  useEffect(() => {
    if (activeShotIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveShotIndex(null);
      if (e.key === "ArrowRight") {
        setActiveShotIndex((prev) => (prev !== null && prev < caseData.shots.length - 1 ? prev + 1 : 0));
      }
      if (e.key === "ArrowLeft") {
        setActiveShotIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : caseData.shots.length - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeShotIndex, caseData.shots.length]);

  const roleFeatures = {
    mesero: {
      title: "Interfaz del Personal de Salón (Meseros)",
      description: "Optimizado para la toma rápida de pedidos al pie de la mesa en dispositivos móviles o tabletas.",
      features: [
        {
          title: "Menú Visual Dinámico",
          text: "Categorización instantánea de platos y bebidas para navegar por el menú con pocos toques.",
          icon: LayoutGrid,
        },
        {
          title: "Personalización y Modificadores",
          text: "Añadir notas con especificaciones del cliente como 'término medio' o 'sin cebolla' en segundos.",
          icon: Sliders,
        },
        {
          title: "Visualización de Mesas",
          text: "Panel gráfico del estado de las mesas: libres, consumiendo o con platos listos por entregar.",
          icon: Activity,
        },
        {
          title: "Notificación de Entrega",
          text: "Alertas acústicas inmediatas de doble timbre cuando cocina despacha un pedido asignado.",
          icon: Volume2,
        },
      ],
    },
    cocina: {
      title: "Pantalla de Despacho de Cocina",
      description: "Diseñado para resistir la alta demanda con una visualización clara y cronológica de los pedidos.",
      features: [
        {
          title: "Cola Cronológica de Comandas",
          text: "Pedidos ordenados por hora de llegada con las modificaciones especiales resaltadas para evitar fallos.",
          icon: Monitor,
        },
        {
          title: "Cronómetro de Control de Tiempo",
          text: "Contador de minutos transcurridos en cola que cambia a color rojo si se excede el límite de 15 minutos.",
          icon: Timer,
        },
        {
          title: "Flujo Simplificado de Despacho",
          text: "Marcado rápido en pantalla táctil de órdenes como 'En Preparación' y luego 'Listo' para alertar al mesero.",
          icon: Play,
        },
      ],
    },
    admin: {
      title: "Panel de Control Administrativo",
      description: "Visualización total de operaciones y analíticas de ventas del negocio gastronómico.",
      features: [
        {
          title: "Métricas del Día en Tiempo Real",
          text: "Indicadores clave como facturación total, ticket promedio y cantidad de comandas del turno actual.",
          icon: BarChart3,
        },
        {
          title: "Top 5 Platos Populares",
          text: "Identificación de los artículos más vendidos para ajustar stock y preparaciones.",
          icon: TrendingUp,
        },
        {
          title: "Gestión del Menú",
          text: "Actualización de precios y desactivación instantánea de platos agotados para evitar ventas erróneas.",
          icon: Settings,
        },
        {
          title: "Control de Cuentas y Personal",
          text: "Asignación de roles y permisos específicos para meseros, cocineros y administradores.",
          icon: Users,
        },
      ],
    },
  };

  const steps = [
    {
      number: "01",
      title: "Ingreso al Sistema",
      text: "Cada empleado inicia sesión en su dispositivo. El sistema identifica el rol (mesero, cocina, administrador) y despliega automáticamente su pantalla optimizada.",
    },
    {
      number: "02",
      title: "Toma de Pedido",
      text: "El mesero selecciona la mesa del cliente, marca las bebidas y platos solicitados, añade modificadores especiales según alergias o gustos, y envía el pedido al instante.",
    },
    {
      number: "03",
      title: "Preparación",
      text: "La cocina recibe el pedido ordenado cronológicamente. El cocinero marca 'Iniciar' en la comanda digital y el sistema registra los tiempos de preparación automáticamente.",
    },
    {
      number: "04",
      title: "Despacho y Alerta",
      text: "Al terminar el plato, el cocinero pulsa 'Listo'. El mesero recibe de inmediato una campana de aviso en su dispositivo y recoge el pedido caliente directamente de cocina.",
    },
    {
      number: "05",
      title: "Métricas de Control",
      text: "La mesa realiza el pago, se marca como desocupada y los datos de la venta, ticket promedio e incidencias de tiempo se consolidan en el dashboard del administrador.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-zinc-950 px-4 py-20 text-zinc-50 sm:px-6 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.14),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.03),_transparent_20%)]" />

      <div className="relative mx-auto w-full max-w-7xl space-y-16">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/portafolio/software"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs uppercase tracking-[0.3em] text-zinc-400 transition hover:border-yellow-400/40 hover:text-yellow-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver
          </Link>
          <span className="text-xs uppercase tracking-[0.4em] text-yellow-300">Portafolio / Software</span>
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-yellow-300">{caseData.title}</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-none text-balance sm:text-6xl lg:text-7xl font-mono">
              {caseData.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-300">{caseData.description}</p>
            <button
              type="button"
              className="inline-flex h-14 min-w-[180px] items-center justify-center gap-2 rounded-full border border-yellow-400/50 bg-yellow-400 px-6 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]"
            >
              Probar Demo
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              {(() => {
                const CaseIcon = getIconComponent(caseData.icon);
                return <CaseIcon className="h-12 w-12 text-yellow-300 drop-shadow-[0_0_16px_rgba(250,204,21,0.5)]" />;
              })()}
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs uppercase tracking-[0.3em] text-zinc-400">
                01
              </span>
            </div>
            <p className="mt-6 text-sm leading-7 text-zinc-300">{caseData.overview}</p>
          </div>
        </section>

        {slug === "comandas" && (
          <section className="rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 md:p-10 backdrop-blur-xl space-y-8">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-yellow-300 font-mono">Dolor de Cabeza Resuelto</p>
              <h2 className="text-3xl font-semibold text-zinc-50 font-mono">¿Por qué ayuda al restaurante?</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <article className="border border-white/5 bg-zinc-900/40 p-6 rounded-2xl space-y-3">
                <div className="h-10 w-10 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-300 font-bold font-mono">01</div>
                <h3 className="text-lg font-semibold text-zinc-100 font-mono">Elimina tiempos muertos</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">El mesero toma el pedido en la mesa y cocina lo recibe de inmediato. Menos caminatas, más eficiencia.</p>
              </article>
              <article className="border border-white/5 bg-zinc-900/40 p-6 rounded-2xl space-y-3">
                <div className="h-10 w-10 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-300 font-bold font-mono">02</div>
                <h3 className="text-lg font-semibold text-zinc-100 font-mono">Cero errores de lectura</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">Adiós a comandas en papel ilegibles. Todo digitalizado con especificaciones exactas y directas.</p>
              </article>
              <article className="border border-white/5 bg-zinc-900/40 p-6 rounded-2xl space-y-3">
                <div className="h-10 w-10 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-300 font-bold font-mono">03</div>
                <h3 className="text-lg font-semibold text-zinc-100 font-mono">Mejor servicio al cliente</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">Los platos se sirven en orden y calientes gracias a las campanas de aviso acústico integradas en el salón.</p>
              </article>
              <article className="border border-white/5 bg-zinc-900/40 p-6 rounded-2xl space-y-3">
                <div className="h-10 w-10 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-300 font-bold font-mono">04</div>
                <h3 className="text-lg font-semibold text-zinc-100 font-mono">Decisiones con datos</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">Reporte automático de facturación diaria, ticket promedio y los platos más vendidos del negocio.</p>
              </article>
            </div>
          </section>
        )}

        <section className="grid gap-4 lg:grid-cols-12">
          {caseData.overviewCards.map((card, index) => (
            <article
              key={card.title}
              className={`rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl ${card.span}`}
            >
              <div className="flex items-start justify-between gap-4">
                {(() => {
                  const CardIcon = getIconComponent(card.icon);
                  return <CardIcon className="h-10 w-10 text-yellow-300 drop-shadow-[0_0_14px_rgba(250,204,21,0.5)]" />;
                })()}
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs uppercase tracking-[0.3em] text-zinc-400">
                  0{index + 1}
                </span>
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-zinc-50 font-mono">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-300 sm:text-base">{card.text}</p>
            </article>
          ))}
        </section>

        {slug === "comandas" && (
          <section className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-yellow-300 font-mono">Áreas del Sistema</p>
                <h2 className="text-3xl font-semibold text-zinc-50 font-mono">Funcionalidades por Rol</h2>
              </div>
              <div className="flex flex-wrap gap-2 border border-white/10 bg-zinc-950 p-1.5 rounded-full w-fit">
                <button
                  type="button"
                  onClick={() => setActiveRole("mesero")}
                  className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition ${
                    activeRole === "mesero" ? "bg-yellow-400 text-zinc-950 font-semibold" : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  Meseros
                </button>
                <button
                  type="button"
                  onClick={() => setActiveRole("cocina")}
                  className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition ${
                    activeRole === "cocina" ? "bg-yellow-400 text-zinc-950 font-semibold" : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  Cocina
                </button>
                <button
                  type="button"
                  onClick={() => setActiveRole("admin")}
                  className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition ${
                    activeRole === "admin" ? "bg-yellow-400 text-zinc-950 font-semibold" : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  Administración
                </button>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3 items-stretch">
              <div className="lg:col-span-1 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-yellow-300 font-mono leading-snug">
                    {roleFeatures[activeRole].title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                    {roleFeatures[activeRole].description}
                  </p>
                </div>
                <div className="border-t border-white/5 pt-6">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">Diseño Optimizado</span>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Cada panel fue estructurado asumiendo las condiciones físicas de trabajo de su operador.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
                {roleFeatures[activeRole].features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-[1.75rem] border border-white/5 bg-zinc-900/20 p-6 flex flex-col justify-between space-y-4 hover:border-yellow-400/20 transition duration-300"
                  >
                    <div className="h-10 w-10 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-300">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-zinc-100 font-mono text-base">{feature.title}</h4>
                      <p className="text-xs leading-relaxed text-zinc-400">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] text-yellow-300 font-mono">Capturas Reales</p>
              <h2 className="text-3xl font-semibold text-zinc-50 font-mono">Carrusel de vista previa</h2>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              Desliza horizontalmente. Haz clic en cualquier imagen para abrir la vista completa.
            </p>
          </div>

          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-white/10">
            {caseData.shots.map((shot, index) => {
              const isAdminImage = shot.image.includes("admin");
              const aspectStyle = isAdminImage ? { aspectRatio: "2636 / 1514" } : { aspectRatio: "1192 / 861" };

              return (
                <article
                  key={shot.image}
                  onClick={() => setActiveShotIndex(index)}
                  className="min-w-[80vw] sm:min-w-[48vw] lg:min-w-[35vw] snap-center overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/30 shadow-xl shadow-black/40 hover:border-yellow-400/40 transition duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div className="relative w-full bg-zinc-950" style={aspectStyle}>
                    <Image
                      src={shot.image}
                      alt={`${caseData.title} captura ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 80vw, 35vw"
                      className="object-contain transition duration-500 group-hover:scale-[1.01]"
                    />
                  </div>
                  <div className="p-6 border-t border-white/5 bg-zinc-900/30">
                    <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-yellow-300">Captura 0{index + 1}</p>
                    <h3 className="mt-1 text-base font-semibold text-zinc-100 font-mono leading-snug">{shot.title}</h3>
                    <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">{shot.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {slug === "comandas" && (
          <section className="space-y-12">
            <div className="space-y-3 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-yellow-300 font-mono">El Trabajo en Acción</p>
              <h2 className="text-3xl font-semibold text-zinc-50 font-mono">¿Cómo funciona paso a paso?</h2>
            </div>

            <div className="relative mx-auto max-w-4xl">
              <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-yellow-400 via-yellow-400/20 to-transparent md:left-1/2 md:-ml-0.25" />

              <div className="space-y-12">
                {steps.map((step, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div
                      key={step.number}
                      className={`relative flex flex-col md:flex-row items-start ${
                        isEven ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="absolute left-6 -translate-x-1/2 md:left-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-950 border border-yellow-400 text-yellow-300 text-xs font-mono font-bold shadow-[0_0_12px_rgba(250,204,21,0.4)]">
                        {step.number}
                      </div>

                      <div className="w-full pl-12 md:pl-0 md:w-1/2 md:px-8">
                        <div className="rounded-[1.75rem] border border-white/15 bg-white/[0.03] p-6 backdrop-blur-xl hover:border-yellow-400/20 transition">
                          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-yellow-300">Paso {step.number}</span>
                          <h3 className="mt-2 text-lg font-semibold text-zinc-50 font-mono">{step.title}</h3>
                          <p className="mt-2 text-xs leading-relaxed text-zinc-400">{step.text}</p>
                        </div>
                      </div>

                      <div className="hidden md:block w-1/2" />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section className="grid gap-3 md:grid-cols-3">
          {caseData.benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-zinc-50 font-mono">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{benefit.text}</p>
            </article>
          ))}
        </section>
      </div>

      {activeShotIndex !== null && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950/95 p-4 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setActiveShotIndex(null)}
            className="absolute right-4 top-4 z-50 rounded-full border border-white/10 bg-white/[0.03] p-3 text-zinc-400 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={() =>
              setActiveShotIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : caseData.shots.length - 1))
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full border border-white/10 bg-white/[0.03] p-3 text-zinc-400 transition hover:bg-white/10 hover:text-white hidden md:block"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={() =>
              setActiveShotIndex((prev) => (prev !== null && prev < caseData.shots.length - 1 ? prev + 1 : 0))
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full border border-white/10 bg-white/[0.03] p-3 text-zinc-400 transition hover:bg-white/10 hover:text-white hidden md:block"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="relative max-h-[70vh] w-full max-w-[90vw] transition-all duration-300 flex items-center justify-center"
            style={{
              aspectRatio: caseData.shots[activeShotIndex].image.includes("admin") ? "2636 / 1514" : "1192 / 861",
            }}
          >
            <Image
              src={caseData.shots[activeShotIndex].image}
              alt={caseData.shots[activeShotIndex].title}
              fill
              sizes="90vw"
              priority
              className="object-contain rounded-xl"
            />
          </div>

          <div className="mt-6 max-w-xl text-center space-y-2 px-4">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-yellow-300">
              Captura {activeShotIndex + 1} de {caseData.shots.length}
            </span>
            <h3 className="text-xl font-semibold text-zinc-50 font-mono">
              {caseData.shots[activeShotIndex].title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {caseData.shots[activeShotIndex].text}
            </p>
          </div>

          <div className="flex md:hidden gap-4 mt-6">
            <button
              type="button"
              onClick={() =>
                setActiveShotIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : caseData.shots.length - 1))
              }
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-mono text-zinc-300"
            >
              Anterior
            </button>
            <button
              type="button"
              onClick={() =>
                setActiveShotIndex((prev) => (prev !== null && prev < caseData.shots.length - 1 ? prev + 1 : 0))
              }
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-mono text-zinc-300"
            >
              Siguiente
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
