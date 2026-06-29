import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";

const servicesData = {
  "desarrollo-web-flash": {
    title: "Desarrollo Web Flash",
    description: "Sitios y landing pages premium de alto impacto comercial, optimizados para velocidad y conversión extrema.",
    overview: "Creamos portales web a medida utilizando Next.js y Tailwind CSS. Eliminamos plantillas lentas y constructores pesados para garantizar una carga instantánea (menos de 1 segundo), SEO optimizado desde el código de raíz y una experiencia móvil impecable.",
    icon: "Code2",
    benefits: [
      { title: "Velocidad Extrema", text: "Tiempos de carga inferiores a 1 segundo para reducir drásticamente la pérdida de visitas." },
      { title: "Foco Comercial", text: "Estructuras optimizadas para guiar al usuario directo a la acción (llamadas, registros o compras)." },
      { title: "SEO On-Page Nativo", text: "Desarrollo con etiquetas semánticas y meta-etiquetas dinámicas para posicionarte en Google." }
    ],
    beforeAfter: {
      problem: "Sitios pesados y desactualizados creados con constructores visuales lentos. Tardan más de 4 segundos en cargar en móviles, confunden a las visitas con menús saturados y pierden hasta el 50% del tráfico antes de cargar.",
      solution: "Webs ligeras con Next.js y Tailwind CSS. Carga en milisegundos, copywriting persuasivo directo al grano, formularios automatizados y un diseño asimétrico premium que eleva la percepción de tu marca."
    },
    tools: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel", "Google Lighthouse"],
    flow: [
      { step: "1", title: "Copywriting & Estructura", desc: "Redactamos textos enfocados en captar clientes y trazamos el flujo de navegación lógico." },
      { step: "2", title: "Diseño Visual de Interfaz", desc: "Creamos un prototipo asimétrico premium, responsivo y completamente a medida." },
      { step: "3", title: "Desarrollo de Código Limpio", desc: "Programamos en Next.js sin añadir scripts innecesarios para asegurar rendimiento." },
      { step: "4", title: "Integración de Conversiones", desc: "Conectamos los botones directamente a tu WhatsApp, correos o sistema CRM." },
      { step: "5", title: "Auditoría de Velocidad & SEO", desc: "Validamos que el sitio alcance el 95%+ en Lighthouse y publicamos en producción." }
    ],
    roi: [
      { label: "Tiempo de Carga", value: "0.8s", desc: "Lighthouse Score superior al 95%" },
      { label: "Tráfico Retenido", value: "+38%", desc: "Menor rebote en dispositivos móviles" },
      { label: "Conversión de Leads", value: "2x - 3x", desc: "Más clics de contacto con el mismo presupuesto" }
    ],
    subservices: [
      {
        id: "landings",
        title: "Landing Pages",
        subtitle: "Páginas de Aterrizaje para Campañas",
        description: "Páginas optimizadas para una única oferta comercial. Diseñadas para recibir tráfico de anuncios (Meta, Google) y convertir visitantes en prospectos calificados eliminando cualquier distracción.",
        icon: "LayoutGrid"
      },
      {
        id: "corporativos",
        title: "Sitios Institucionales",
        subtitle: "Presencia Corporativa e Imagen de Marca",
        description: "Webs completas multi-página para empresas y agencias que necesitan presentar su propuesta de valor, equipo, servicios y casos de éxito de forma profesional, moderna y pulida.",
        icon: "Globe2"
      },
      {
        id: "headless-ecommerce",
        title: "E-commerce Headless",
        subtitle: "Tiendas Online Rápidas y Seguras",
        description: "Plataformas de venta online de alto rendimiento. Separamos la interfaz del motor de datos para que tu catálogo y proceso de checkout carguen al instante con pasarelas integradas (Stripe).",
        icon: "ShoppingBag"
      },
      {
        id: "pwa-apps",
        title: "Web Apps (PWA)",
        subtitle: "Plataformas Interactivas a Medida",
        description: "Portales de clientes o sistemas internos que requieren base de datos, inicios de sesión y flujos interactivos dinámicos, instalables en teléfonos móviles sin pasar por App Stores.",
        icon: "MonitorSmartphone"
      }
    ]
  },
  "chatbots": {
    title: "Empleados IA (Chatbots)",
    description: "Agentes autónomos conversacionales disponibles 24/7 para responder clientes, calificar leads e integrar soporte.",
    overview: "Desarrollamos bots inteligentes entrenados con la documentación, políticas de venta y catálogo de tu empresa. Operan de forma natural en tu sitio web o WhatsApp resolviendo más del 80% de consultas habituales e integrando traspasos a agentes humanos.",
    icon: "Bot",
    benefits: [
      { title: "Atención Continua", text: "Disponibilidad total las 24 horas del día, los 365 días del año sin demoras." },
      { title: "Filtro de Leads", text: "Pregunta presupuesto, necesidades y recopila datos antes de agendar reuniones." },
      { title: "Optimización de Soporte", text: "Responde dudas frecuentes sobre envíos o servicios liberando a tu personal." }
    ],
    beforeAfter: {
      problem: "Prospectos calificados que escriben fuera de horario y no reciben respuesta en menos de 15 minutos, enfriándose o comprando a la competencia. Personal de ventas saturado respondiendo preguntas repetitivas a leads sin presupuesto.",
      solution: "Un agente autónomo entrenado que inicia conversación al instante, responde dudas en lenguaje natural usando tu base de conocimientos, califica el interés y agenda citas directo en tu Calendly."
    },
    tools: ["OpenAI GPT-4o", "WhatsApp Cloud API", "Make.com", "n8n", "LangChain", "Vector Databases", "Calendly"],
    flow: [
      { step: "1", title: "Carga de Conocimiento", desc: "Recopilamos tus preguntas frecuentes, PDFs, políticas y catálogos de venta." },
      { step: "2", title: "Diseño Conversacional", desc: "Definimos la personalidad, tono de voz de la IA y sus límites de seguridad." },
      { step: "3", title: "Integración de Canales", desc: "Conectamos el modelo a tu WhatsApp Cloud API, Instagram o widget web." },
      { step: "4", title: "Programación de Webhooks", desc: "Enlazamos la IA con bases de datos para buscar estados de envíos o stock real." },
      { step: "5", title: "Control de Traspaso Humano", desc: "Configuramos la entrega fluida de la conversación a tu equipo si la IA no sabe responder." }
    ],
    roi: [
      { label: "Respuestas con IA", value: "80%", desc: "De dudas frecuentes resueltas sin ayuda humana" },
      { label: "Tiempo de Respuesta", value: "< 3s", desc: "Velocidad constante y sin colas de espera" },
      { label: "Leads Calificados", value: "+40%", desc: "Incremento en la tasa de agendas comerciales" }
    ],
    subservices: [
      {
        id: "leads-sales",
        title: "Calificación y Ventas",
        subtitle: "Captación Comercial Autónoma",
        description: "Agentes entrenados para perfilar a los visitantes. Indagan sobre las necesidades de los prospectos, filtran por presupuesto y agendan llamadas comerciales en tu agenda digital automáticamente.",
        icon: "UserCheck"
      },
      {
        id: "support-agent",
        title: "Atención y Soporte",
        subtitle: "Resolución de Dudas Frecuentes",
        description: "Integrado a tu documentación de soporte o base de conocimientos para responder con precisión preguntas complejas sobre garantías, reembolsos, envíos o especificaciones técnicas.",
        icon: "HelpCircle"
      },
      {
        id: "ecommerce-assistant",
        title: "Asistente E-commerce",
        subtitle: "Compra Asistida por Chat",
        description: "Bot que recomienda productos o servicios de tu catálogo digital analizando las respuestas del usuario y facilitando enlaces de cobro (Stripe, WhatsApp Pay) para cerrar la venta.",
        icon: "ShoppingBag"
      },
      {
        id: "multichannel-bots",
        title: "Integraciones Multi-Canal",
        subtitle: "WhatsApp, Instagram y Web",
        description: "Despliegue unificado de agentes en múltiples puntos de contacto usando APIs oficiales para que tu negocio mantenga una conversación coherentemente en tu CRM.",
        icon: "MessageSquareText"
      }
    ]
  },
  "automatizacion": {
    title: "Automatización de Procesos",
    description: "Flujos conectados y sincronizados para eliminar el trabajo manual operativo de backoffice.",
    overview: "Unimos tus herramientas diarias (CRM, pasarelas de pago, planillas, carpetas y correos) en sistemas automatizados que corren de fondo. Ahorramos decenas de horas de trabajo repetitivo a tu equipo operativo y evitamos errores humanos de digitación.",
    icon: "Zap",
    benefits: [
      { title: "Cero Trabajo Repetitivo", text: "Liberación del equipo de tareas monótonas como copiar datos o descargar archivos." },
      { title: "Datos Sincronizados", text: "Información actualizada al instante entre tu CRM, contabilidad y operaciones." },
      { title: "Operación Escalable", text: "Capacidad para procesar miles de transacciones o registros sin requerir más personal." }
    ],
    beforeAfter: {
      problem: "Tu personal administrativo pasa horas semanales descargando facturas de correos, transcribiendo montos a un Excel, creando carpetas en Google Drive para cada cliente y enviando emails de bienvenida de forma manual.",
      solution: "Un flujo automatizado en Make o n8n que se activa al detectar un correo o pago, lee el PDF con inteligencia artificial, lo archiva con el nombre correcto en la nube, llena la contabilidad y envía los accesos en segundos."
    },
    tools: ["Make.com", "n8n.io", "Google Workspace APIs", "Slack API", "Stripe API", "HubSpot / Zoho CRM", "AI Document Parser"],
    flow: [
      { step: "1", title: "Auditoría de Procesos", desc: "Mapeamos las tareas manuales de tu equipo que consumen más tiempo." },
      { step: "2", title: "Diseño de Arquitectura", desc: "Establecemos qué APIs y herramientas participarán y cómo viajarán los datos." },
      { step: "3", title: "Desarrollo de Integración", desc: "Conectamos los sistemas usando webhooks, APIs oficiales y Make/n8n." },
      { step: "4", title: "Filtros & Validación de Datos", desc: "Programamos reglas lógicas para validar que la información sea exacta." },
      { step: "5", title: "Gestión de Alertas", desc: "Configuramos canales de Slack o correo para avisar al equipo en caso de error en APIs externas." }
    ],
    roi: [
      { label: "Horas Mensuales Libres", value: "60+ hrs", desc: "Reducción de tareas administrativas manuales" },
      { label: "Margen de Error Humano", value: "0%", desc: "Procesamiento exacto y validado de datos" },
      { label: "Tiempo de Activación", value: "< 5s", desc: "Respuestas y registros inmediatos tras eventos" }
    ],
    subservices: [
      {
        id: "crm-integrations",
        title: "Sincronización de CRM",
        subtitle: "Flujo Unificado de Clientes",
        description: "Conexión bidireccional entre tus plataformas de anuncios, formularios web, HubSpot, Salesforce u hojas de cálculo para mantener a tu equipo comercial alineado con leads actualizados.",
        icon: "DatabaseZap"
      },
      {
        id: "pdf-processing",
        title: "Procesamiento de Documentos",
        subtitle: "Lectura Inteligente OCR con IA",
        description: "Flujos de extracción de datos de PDFs adjuntos (facturas, recibos, remitos). La IA interpreta el texto y vuelca montos, fechas y conceptos en tu sistema de gestión o Excel de forma autónoma.",
        icon: "ScanSearch"
      },
      {
        id: "onboarding-automation",
        title: "Onboarding de Clientes",
        subtitle: "Activación Automática de Proyectos",
        description: "Creación inmediata de carpetas compartidas en la nube, tableros de Notion con plantillas predefinidas y alertas en Slack en el instante que se confirma un pago (Stripe, PayPal).",
        icon: "ShieldCheck"
      },
      {
        id: "consolidated-reports",
        title: "Reportes Consolidados",
        subtitle: "Consolidación de Datos Multi-Canal",
        description: "Sistemas programados que recopilan métricas de múltiples plataformas (Meta, Google, Shopify) cada semana, procesan los datos en la nube y envían un reporte consolidado a Slack o email.",
        icon: "BarChart3"
      }
    ]
  }
} as const;

type ServiceSlug = keyof typeof servicesData;

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default async function ServiceSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const serviceData = servicesData[slug as ServiceSlug];

  if (!serviceData) {
    notFound();
  }

  return <ServiceDetailClient slug={slug} serviceData={serviceData as any} />;
}
