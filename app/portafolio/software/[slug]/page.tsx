import {
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
} from "lucide-react";
import { notFound } from "next/navigation";
import CaseStudyClient from "./CaseStudyClient";

const softwareCases = {
  comandas: {
    title: "Sistema de Comandas",
    description: "Plataforma web en tiempo real para digitalizar la toma de pedidos, optimizar el flujo en cocina y centralizar métricas administrativas.",
    overview:
      "Diseñado para eliminar el papel y los tiempos muertos en restaurantes, conectando de forma instantánea a meseros, cocina y administración con alertas acústicas e interfaces optimizadas por rol.",
    benefits: [
      { title: "Toma de pedidos ágil", text: "Menú dinámico y personalización con notas especiales al instante desde cualquier tableta o celular." },
      { title: "Cocina coordinada", text: "Pantalla de despacho con orden cronológico y cronómetros de control de tiempos de preparación." },
      { title: "Métricas y administración", text: "Visualización en tiempo real del total vendido, platos más populares y control de stock del menú." },
    ],
    overviewCards: [
      {
        title: "Flujo en tiempo real",
        text: "Sincronización inmediata entre salón y cocina. Notificaciones acústicas al mesero en cuanto su plato está listo para servir.",
        span: "lg:col-span-7",
        icon: "Bell",
      },
      {
        title: "Beneficios operativos",
        text: "Elimina errores de lectura, reduce tiempos de espera y optimiza la rotación de mesas mediante un flujo de trabajo digital.",
        span: "lg:col-span-5",
        icon: "ShieldCheck",
      },
      {
        title: "Ideal para",
        text: "Restaurantes y PYMES gastronómicas que buscan profesionalizar su servicio y tomar decisiones basadas en datos de venta real.",
        span: "lg:col-span-4",
        icon: "FileClock",
      },
      {
        title: "Resultado esperado",
        text: "Una operación coordinada, cero platos perdidos y clientes satisfechos con un servicio rápido y sin fricciones.",
        span: "lg:col-span-8",
        icon: "Workflow",
      },
    ],
    shots: [
      {
        title: "Cocina - Gestión de Comandas",
        text: "Pantalla interactiva con pedidos ordenados por orden de llegada y modificaciones destacadas.",
        image: "https://files.catbox.moe/08n8wg.png",
      },
      {
        title: "Cocina - Pedidos en Preparación",
        text: "Detalle del estado de cada comanda con control de tiempo transcurrido en preparación.",
        image: "https://files.catbox.moe/c0d66v.png",
      },
      {
        title: "Cocina - Control de Tiempos",
        text: "Cronómetros integrados para evitar retrasos y garantizar entregas calientes.",
        image: "https://files.catbox.moe/u773it.png",
      },
      {
        title: "Cocina - Despacho de Órdenes",
        text: "Interfaz simplificada para que el cocinero notifique al mesero con un solo clic.",
        image: "https://files.catbox.moe/weojm4.png",
      },
      {
        title: "Mesero - Panel de Mesas",
        text: "Estado visual de cada mesa (vacía, consumiendo, con platos listos por retirar).",
        image: "https://files.catbox.moe/98qcnv.png",
      },
      {
        title: "Mesero - Menú Digital",
        text: "Categorización intuitiva de platos para agilizar la toma del pedido en mesa.",
        image: "https://files.catbox.moe/5oqzgc.png",
      },
      {
        title: "Mesero - Personalización",
        text: "Inclusión rápida de notas especiales como términos de carne o alergias alimentarias.",
        image: "https://files.catbox.moe/fntzmj.png",
      },
      {
        title: "Mesero - Confirmación de Pedido",
        text: "Resumen detallado de la mesa para evitar equivocaciones antes de enviar a cocina.",
        image: "https://files.catbox.moe/4a593a.png",
      },
      {
        title: "Mesero - Alerta de Plato Listo",
        text: "Aviso en pantalla y doble campana acústica que suena en el dispositivo asignado.",
        image: "https://files.catbox.moe/vqns39.png",
      },
      {
        title: "Mesero - Seguimiento de Cuenta",
        text: "Control del consumo acumulado y estado actual del servicio por mesa.",
        image: "https://files.catbox.moe/w8wmtv.png",
      },
      {
        title: "Administrador - Métricas Generales",
        text: "Dashboard principal con facturación diaria, ticket promedio y cantidad de comandas.",
        image: "https://files.catbox.moe/e5je1y.png",
      },
      {
        title: "Administrador - Reportes de Ventas",
        text: "Gráficos interactivos de ingresos para una toma de decisiones informada.",
        image: "https://files.catbox.moe/shpi2v.png",
      },
      {
        title: "Administrador - Top de Platos",
        text: "Identificación inmediata de los productos más vendidos y rentables del día.",
        image: "https://files.catbox.moe/m572pc.png",
      },
      {
        title: "Administrador - Gestión del Menú",
        text: "Administración ágil de platos, precios y disponibilidad de stock en segundos.",
        image: "https://files.catbox.moe/zbb6n5.png",
      },
      {
        title: "Administrador - Control de Usuarios",
        text: "Alta, edición y asignación de roles para el personal del salón y de cocina.",
        image: "https://files.catbox.moe/svs3yx.png",
      },
    ],
    icon: "Utensils",
  },
  automatizaciones: {
    title: "Automatizaciones",
    description: "Flujos conectados para ventas, correos y operaciones de oficina sin trabajo manual repetitivo.",
    overview:
      "Ideal para unir procesos dispersos en una operación más rápida, ordenada y libre de tareas manuales repetitivas.",
    benefits: [
      { title: "Cero tareas manuales", text: "Elimina pasos repetitivos y concentra a tu equipo en tareas de valor." },
      { title: "Procesos conectados", text: "Ventas, correos y operaciones de backoffice trabajando como un solo flujo." },
      { title: "Mayor velocidad", text: "Gana tiempo operativo y responde al instante sin perder el control." },
    ],
    overviewCards: [
      {
        title: "Flujos conectados",
        text: "Une ventas, correos y administración en recorridos automáticos que eliminan la fricción operativa.",
        span: "lg:col-span-7",
        icon: "Workflow",
      },
      {
        title: "Beneficios de negocio",
        text: "Menos errores de digitación, respuestas más veloces y mayor capacidad de escalamiento sin aumentar personal.",
        span: "lg:col-span-5",
        icon: "PlugZap",
      },
      {
        title: "Ideal para",
        text: "Negocios en crecimiento que quieren optimizar su tiempo y delegar tareas repetitivas a sistemas inteligentes.",
        span: "lg:col-span-4",
        icon: "LayoutGrid",
      },
      {
        title: "Resultado esperado",
        text: "Una operación ágil, unificada y lista para escalar ventas sin sobrecargar de trabajo al equipo.",
        span: "lg:col-span-8",
        icon: "FileClock",
      },
    ],
    shots: [
      {
        title: "Operación de Negocios",
        text: "Procesamiento de datos en tiempo real.",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    icon: "ScanSearch",
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
        icon: "Bot",
      },
      {
        title: "Beneficios",
        text: "Atención constante, captación de leads y filtros iniciales para escalar al equipo correcto.",
        span: "lg:col-span-5",
        icon: "MessageSquareText",
      },
      {
        title: "Ideal para",
        text: "Negocios que quieren responder rápido, ordenar conversaciones y no perder oportunidades.",
        span: "lg:col-span-4",
        icon: "Bell",
      },
      {
        title: "Resultado esperado",
        text: "Más velocidad de respuesta, mejor experiencia y una base clara para vender más.",
        span: "lg:col-span-8",
        icon: "FileClock",
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
    icon: "Bot",
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
        icon: "Globe2",
      },
      {
        title: "Beneficios",
        text: "Más conversión, una marca más fuerte y una experiencia responsive en todos los dispositivos.",
        span: "lg:col-span-5",
        icon: "LayoutGrid",
      },
      {
        title: "Ideal para",
        text: "Empresas que necesitan una vitrina digital elegante y preparada para generar oportunidades.",
        span: "lg:col-span-4",
        icon: "MonitorSmartphone",
      },
      {
        title: "Resultado esperado",
        text: "Una web que comunica valor, acelera la confianza y empuja a la acción.",
        span: "lg:col-span-8",
        icon: "FileClock",
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
    icon: "Globe2",
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

  return <CaseStudyClient slug={slug} caseData={caseData as any} />;
}