import Image from "next/image";
import Link from "next/link";
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
} from "lucide-react";
import { notFound } from "next/navigation";

const softwareCases = {
  cobranzas: {
    title: "Web de Cobranzas",
    description: "Sistema para seguimiento de cartera, control de pagos y reportes financieros con prioridad operativa.",
    overview:
      "Pensado para centralizar cartera, reducir fricción operativa y mostrar el estado real de cobranza en un solo lugar.",
    benefits: [
      { title: "Control de cartera", text: "Visualiza estados, vencimientos y seguimiento de pagos en tiempo real." },
      { title: "Alertas automáticas", text: "Activa recordatorios y tareas para no perder seguimiento." },
      { title: "Panel de seguimiento", text: "Consulta el avance financiero con una interfaz limpia y rápida." },
    ],
    overviewCards: [
      {
        title: "Seguimiento de deuda",
        text: "Centraliza pagos, vencimientos y estados de cuenta para que el equipo vea la cartera completa en un solo lugar.",
        span: "lg:col-span-7",
        icon: ReceiptText,
      },
      {
        title: "Beneficios",
        text: "Reduce mora, prioriza cobros y evita el trabajo manual de revisar múltiples fuentes cada día.",
        span: "lg:col-span-5",
        icon: ShieldCheck,
      },
      {
        title: "Ideal para",
        text: "Empresas que necesitan control diario sobre cartera, recordatorios y gestión rápida de incidencias.",
        span: "lg:col-span-4",
        icon: FileClock,
      },
      {
        title: "Resultado esperado",
        text: "Más orden, menos fricción y una operación capaz de reaccionar a tiempo ante cada vencimiento.",
        span: "lg:col-span-8",
        icon: Bell,
      },
    ],
    shots: [
      {
        title: "Panel financiero",
        text: "Vista central para cartera, alertas y pagos.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Analítica de cobranza",
        text: "Indicadores de mora y recuperación.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Gestión de cartera",
        text: "Orden por cliente, estado y prioridad.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    icon: DatabaseZap,
  },
  automatizaciones: {
    title: "Automatizaciones",
    description: "Flujos conectados para ventas, correos y facturación sin trabajo manual repetitivo.",
    overview:
      "Ideal para unir procesos dispersos en una operación más rápida, ordenada y menos dependiente de tareas manuales.",
    benefits: [
      { title: "Menos tareas manuales", text: "Elimina pasos repetitivos y concentra el trabajo en decisiones de valor." },
      { title: "Procesos conectados", text: "Ventas, correos y facturación trabajando como un solo flujo." },
      { title: "Mayor velocidad", text: "Gana tiempo operativo sin perder trazabilidad ni control." },
    ],
    overviewCards: [
      {
        title: "Flujos conectados",
        text: "Une ventas, correo y facturación en recorridos automáticos que eliminan pasos manuales.",
        span: "lg:col-span-7",
        icon: Workflow,
      },
      {
        title: "Beneficios",
        text: "Menos errores, más velocidad y menos dependencia de tareas repetidas por parte del equipo.",
        span: "lg:col-span-5",
        icon: PlugZap,
      },
      {
        title: "Ideal para",
        text: "Operaciones que quieren responder más rápido y mantener un flujo limpio entre áreas.",
        span: "lg:col-span-4",
        icon: LayoutGrid,
      },
      {
        title: "Resultado esperado",
        text: "Una operación ligera, conectada y preparada para escalar sin añadir fricción.",
        span: "lg:col-span-8",
        icon: FileClock,
      },
    ],
    shots: [
      {
        title: "Flujo de trabajo",
        text: "Secuencias automáticas para operaciones.",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Integraciones",
        text: "Conexiones entre sistemas y tareas.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Automatización técnica",
        text: "Menos repetición, más control.",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    icon: ScanSearch,
  },
  chatbots: {
    title: "Chatbots IA",
    description: "Interfaces conversacionales para atención, calificación de leads y soporte continuo.",
    overview:
      "Diseñados para atender clientes, ordenar consultas y convertir conversaciones en oportunidades con respuesta inmediata.",
    benefits: [
      { title: "Atención 24/7", text: "Responde cuando el equipo no está disponible." },
      { title: "Respuestas rápidas", text: "Reduce tiempos de espera y mejora la experiencia." },
      { title: "Captura de leads", text: "Filtra oportunidades y envía contactos listos para ventas." },
    ],
    overviewCards: [
      {
        title: "Asistencia continua",
        text: "Responde preguntas, guía usuarios y mantiene conversaciones activas sin depender de horarios.",
        span: "lg:col-span-7",
        icon: Bot,
      },
      {
        title: "Beneficios",
        text: "Atención constante, captación de leads y filtros iniciales para escalar al equipo correcto.",
        span: "lg:col-span-5",
        icon: MessageSquareText,
      },
      {
        title: "Ideal para",
        text: "Negocios que quieren responder rápido, ordenar conversaciones y no perder oportunidades.",
        span: "lg:col-span-4",
        icon: Bell,
      },
      {
        title: "Resultado esperado",
        text: "Más velocidad de respuesta, mejor experiencia y una base clara para vender más.",
        span: "lg:col-span-8",
        icon: FileClock,
      },
    ],
    shots: [
      {
        title: "Conversación activa",
        text: "Chat de asistencia y soporte.",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Atención automática",
        text: "Respuestas y clasificación de consultas.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Asistente de leads",
        text: "Captura y calificación temprana.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    icon: Bot,
  },
  "paginas-web": {
    title: "Páginas Web",
    description: "Sitios y landings premium con enfoque comercial y presentación de alto impacto.",
    overview:
      "Hechas para vender mejor, comunicar con claridad y sostener una imagen visual consistente en desktop y móvil.",
    benefits: [
      { title: "Más conversión", text: "Dirige la atención hacia el contenido y la acción correcta." },
      { title: "Imagen premium", text: "Eleva la percepción de marca con una base visual moderna." },
      { title: "Rendimiento rápido", text: "Interfaces ligeras, claras y preparadas para escalar." },
    ],
    overviewCards: [
      {
        title: "Presencia digital",
        text: "Construye una base visual sólida con mensajes claros, secciones ordenadas y foco comercial.",
        span: "lg:col-span-7",
        icon: Globe2,
      },
      {
        title: "Beneficios",
        text: "Más conversión, una marca más fuerte y una experiencia responsive en todos los dispositivos.",
        span: "lg:col-span-5",
        icon: LayoutGrid,
      },
      {
        title: "Ideal para",
        text: "Empresas que necesitan una vitrina digital elegante y preparada para generar oportunidades.",
        span: "lg:col-span-4",
        icon: MonitorSmartphone,
      },
      {
        title: "Resultado esperado",
        text: "Una web que comunica valor, acelera la confianza y empuja a la acción.",
        span: "lg:col-span-8",
        icon: FileClock,
      },
    ],
    shots: [
      {
        title: "Landing premium",
        text: "Diseño enfocado en conversión.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Sitio corporativo",
        text: "Estructura limpia y elegante.",
        image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Interfaz responsive",
        text: "Experiencia visual en todos los dispositivos.",
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    icon: Globe2,
  },
} as const;

type SoftwareSlug = keyof typeof softwareCases;

export function generateStaticParams() {
  return Object.keys(softwareCases).map((slug) => ({ slug }));
}

export default async function SoftwareCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseData = softwareCases[slug as SoftwareSlug];

  if (!caseData) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden bg-zinc-950 px-4 py-20 text-zinc-50 sm:px-6 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.14),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.03),_transparent_20%)]" />

      <div className="relative mx-auto w-full max-w-7xl space-y-12">
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
            <h1 className="max-w-3xl text-5xl font-semibold leading-none text-balance sm:text-6xl lg:text-7xl">
              {caseData.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-300">{caseData.description}</p>
            <button
              type="button"
              className="inline-flex h-14 min-w-[180px] items-center justify-center gap-2 rounded-full border border-yellow-400/50 bg-yellow-400 px-6 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300"
            >
              Probar
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <caseData.icon className="h-12 w-12 text-yellow-300 drop-shadow-[0_0_16px_rgba(250,204,21,0.5)]" />
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs uppercase tracking-[0.3em] text-zinc-400">
                01
              </span>
            </div>
            <p className="mt-6 text-sm leading-7 text-zinc-300">{caseData.overview}</p>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-12">
          {caseData.overviewCards.map((card, index) => (
            <article
              key={card.title}
              className={`rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl ${card.span}`}
            >
              <div className="flex items-start justify-between gap-4">
                <card.icon className="h-10 w-10 text-yellow-300 drop-shadow-[0_0_14px_rgba(250,204,21,0.5)]" />
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs uppercase tracking-[0.3em] text-zinc-400">
                  0{index + 1}
                </span>
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-zinc-50">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-300 sm:text-base">{card.text}</p>
            </article>
          ))}
        </section>

        <section className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] text-yellow-300">Capturas</p>
              <h2 className="text-2xl font-semibold text-zinc-50">Carrusel de vista previa</h2>
            </div>
            <p className="hidden text-sm text-zinc-400 md:block">Desliza horizontalmente para recorrer las capturas.</p>
          </div>

          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            {caseData.shots.map((shot, index) => (
              <article
                key={shot.image}
                className="min-w-[86vw] snap-center overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 shadow-2xl shadow-black/30 md:min-w-[52vw] lg:min-w-[38vw]"
              >
                <div className="relative h-[420px] w-full md:h-[520px]">
                  <Image
                    src={shot.image}
                    alt={`${caseData.title} captura ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 86vw, 38vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/18 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-5 md:p-6">
                    <div className="max-w-md rounded-2xl border border-white/10 bg-zinc-950/70 p-4 backdrop-blur-xl">
                      <p className="text-xs uppercase tracking-[0.35em] text-yellow-300">Captura 0{index + 1}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-zinc-50">{shot.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-zinc-300">{shot.text}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-3 md:grid-cols-3">
          {caseData.benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-zinc-50">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{benefit.text}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}