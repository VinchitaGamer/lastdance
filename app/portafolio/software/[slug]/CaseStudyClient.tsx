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
import { motion, AnimatePresence } from "framer-motion";

const automationCases = [
  {
    id: "leads",
    title: "Leads y Agenda",
    subtitle: "Sincronización de Leads & Agenda (Ventas)",
    description: "Captación inmediata de prospectos web y automatización del agendamiento de llamadas comerciales para que ningún cliente potencial se enfríe.",
    icon: "Workflow",
    problem: "Los leads registrados en anuncios o formularios web tardaban hasta 24 horas en ser contactados por un asesor. Esto hacía que el 40% de los clientes potenciales perdieran interés o contrataran a la competencia.",
    solution: "Conectamos los anuncios y formularios directamente con el CRM y WhatsApp. El sistema procesa el contacto al instante, avisa al equipo en Slack y envía un mensaje personalizado al cliente con un enlace para agendar su llamada.",
    tools: ["Meta Ads", "HubSpot CRM", "Slack", "WhatsApp API", "Make.com"],
    flow: [
      { step: "1", title: "Contacto Registrado", desc: "El prospecto completa un anuncio en Meta o formulario web." },
      { step: "2", title: "Sincronización en CRM", desc: "El contacto se crea automáticamente en HubSpot y se asigna a un vendedor." },
      { step: "3", title: "Alerta Instantánea", desc: "Se envía una notificación detallada a Slack para que el equipo comercial esté enterado." },
      { step: "4", title: "Agenda del Cliente", desc: "Se envía un mensaje de WhatsApp automatizado con el enlace directo para agendar la llamada." }
    ],
    roi: [
      { label: "Tiempo de Respuesta", value: "< 2 min", desc: "Antes tardaba hasta 24 horas." },
      { label: "Aumento de Agendados", value: "+35%", desc: "Más llamadas comerciales concretadas." },
      { label: "Error Humano", value: "0%", desc: "Cero datos perdidos o no registrados." }
    ]
  },
  {
    id: "documentos",
    title: "Lectura de Documentos",
    subtitle: "Clasificación y Extracción de PDFs con IA (Backoffice)",
    description: "Lectura inteligente de adjuntos (PDFs) en correos corporativos para archivarlos ordenadamente en carpetas de nube e incorporar los datos a hojas de cálculo.",
    icon: "ScanSearch",
    problem: "Una oficina administrativa recibía decenas de correos diarios con facturas, recibos y órdenes de compra en PDF. Un empleado debía descargar cada archivo, leer los montos manualmente, renombrar el documento y registrar los datos en Excel.",
    solution: "Un agente automatizado monitorea el correo electrónico. Cuando llega un documento, la Inteligencia Artificial (IA) extrae los datos clave (monto, fecha, proveedor), renombra el archivo, lo guarda en la carpeta correspondiente de Google Drive y llena la base de datos automáticamente.",
    tools: ["Gmail", "OpenAI GPT-4", "Google Drive", "Google Sheets", "n8n"],
    flow: [
      { step: "1", title: "Recepción de Correo", desc: "El sistema detecta un nuevo correo con archivos adjuntos en PDF." },
      { step: "2", title: "Lectura con IA", desc: "La IA lee el contenido del PDF y extrae fecha, proveedor, conceptos e importe total." },
      { step: "3", title: "Archivo en Nube", desc: "El PDF es renombrado (ej: 'Proveedor_Fecha_Monto.pdf') y guardado en Google Drive." },
      { step: "4", title: "Registro Automático", desc: "Los datos extraídos se añaden como una nueva fila en Google Sheets en tiempo real." }
    ],
    roi: [
      { label: "Horas Semanales Ahorradas", value: "15 hrs", desc: "Liberación de trabajo manual repetitivo." },
      { label: "Tiempo de Procesamiento", value: "5 seg", desc: "Por documento recibido." },
      { label: "Precisión de Lectura", value: "99.8%", desc: "Validado mediante filtros de IA." }
    ]
  },
  {
    id: "onboarding",
    title: "Onboarding de Clientes",
    subtitle: "Activación Automática de Proyectos (Operaciones)",
    description: "Creación inmediata de canales de comunicación, carpetas de trabajo y generación de contratos digitales tan pronto como se confirma un pago.",
    icon: "ShieldCheck",
    problem: "Cada vez que un cliente pagaba, el equipo tardaba hasta 2 horas en crear manualmente un canal de Slack, una carpeta en Google Drive, un tablero de Notion, redactar el contrato y enviar el correo de bienvenida.",
    solution: "Automatizamos todo el proceso de inicio. Al confirmarse el pago, el sistema genera de forma autónoma el canal de comunicación, el espacio en Notion con plantillas listas, el contrato digital y dispara los accesos al cliente en segundos.",
    tools: ["Stripe", "Slack", "Notion", "Google Drive", "ActiveCampaign", "Make.com"],
    flow: [
      { step: "1", title: "Pago Confirmado", desc: "El cliente realiza el pago mediante Stripe y se activa la señal." },
      { step: "2", title: "Espacio de Trabajo", desc: "Se crea una carpeta compartida en Drive y un tablero de Notion clonado de la plantilla maestra." },
      { step: "3", title: "Canal de Slack", desc: "Se abre el canal del proyecto en Slack e invita automáticamente al cliente y al equipo." },
      { step: "4", title: "Email de Accesos", desc: "Se envía un correo con el contrato digital firmado y los enlaces de acceso directo." }
    ],
    roi: [
      { label: "Tiempo de Activación", value: "10 seg", desc: "Antes requería 2 horas de gestión manual." },
      { label: "Experiencia del Cliente", value: "10/10", desc: "Atención inmediata sin esperas de onboarding." },
      { label: "Cuentas y Accesos", value: "100%", desc: "Sin accesos olvidados o mal configurados." }
    ]
  },
  {
    id: "reportes",
    title: "Reportes Consolidados",
    subtitle: "Extracción e Informes Multi-Canal (Métricas)",
    description: "Recopilación automática de presupuestos, clics y conversiones de múltiples redes de anuncios en un solo informe consolidado enviado directamente por canales internos.",
    icon: "BarChart3",
    problem: "El equipo de marketing pasaba toda la mañana del lunes ingresando a Meta Ads, Google Ads y TikTok Ads para descargar reportes, copiar las métricas a un Excel y redactar un resumen para los directores de la empresa.",
    solution: "Establecimos un proceso programado (cron job) que cada lunes a las 8:00 AM se conecta a las APIs oficiales de las redes de anuncios, consolida la inversión y resultados en una base de datos central y envía un reporte en formato PDF ordenado a los canales directos de la empresa.",
    tools: ["Meta Ads API", "Google Ads API", "TikTok Ads API", "Google BigQuery", "Slack / Email"],
    flow: [
      { step: "1", title: "Conexión Directa", desc: "El sistema se comunica con las APIs de Meta, Google y TikTok a la hora programada." },
      { step: "2", title: "Consolidación de Datos", desc: "Se agrupan métricas como gasto, impresiones, clics y costo por adquisición." },
      { step: "3", title: "Generación de Reporte", desc: "Se genera un informe PDF limpio y resumido con gráficos de rendimiento." },
      { step: "4", title: "Envío al Equipo", desc: "Se envía automáticamente por correo y Slack a los directivos." }
    ],
    roi: [
    ]
  }
];

const chatbotCases = [
  {
    id: "leads",
    title: "Calificación de Leads",
    subtitle: "Calificación y Captación de Clientes 24/7 (Ventas)",
    description: "Asistente con IA que califica a los prospectos que visitan tu web o escriben a WhatsApp, filtra según presupuesto y agenda reuniones de venta automáticamente.",
    icon: "UserCheck",
    problem: "El equipo comercial perdía valioso tiempo atendiendo leads fríos o no calificados, mientras que los prospectos calificados se marchaban si no recibían respuesta en menos de 10 minutos.",
    solution: "Un chatbot con IA conversacional que recopila datos clave (presupuesto, urgencia, necesidad), filtra los prospectos según criterios internos y agenda citas directo en Calendly.",
    tools: ["OpenAI GPT-4o", "WhatsApp Cloud API", "HubSpot CRM", "Calendly", "Make.com"],
    flow: [
      { step: "1", title: "Contacto de Lead", desc: "El usuario inicia chat en la web o escribe un mensaje en WhatsApp." },
      { step: "2", title: "Calificación con IA", desc: "La IA pregunta amigablemente sobre el proyecto, presupuesto y urgencia." },
      { step: "3", title: "Agendamiento Activo", desc: "Si el lead cumple los criterios de presupuesto, la IA le ofrece horarios de reunión." },
      { step: "4", title: "Registro y Alerta", desc: "Se crea el lead en el CRM con el resumen del chat y se notifica al asesor comercial." }
    ],
    roi: [
      { label: "Leads Calificados", value: "+45%", desc: "Incremento en reuniones agendadas con clientes ideales." },
      { label: "Tiempo de Respuesta", value: "< 10 seg", desc: "Atención inmediata para evitar el enfriamiento." },
      { label: "Eficiencia de Ventas", value: "3x", desc: "Asesores comerciales dedicados únicamente a cerrar." }
    ]
  },
  {
    id: "soporte",
    title: "Soporte al Cliente",
    subtitle: "Resolución de Consultas y Pedidos (Atención)",
    description: "Chatbot inteligente entrenado con toda la documentación de tu empresa para responder consultas comunes sobre envíos, garantías y facturas sin intervención humana.",
    icon: "HelpCircle",
    problem: "El equipo de soporte estaba saturado y tardaba hasta 8 horas en responder preguntas repetitivas sobre 'dónde está mi pedido' o 'cuáles son los métodos de pago', afectando la retención.",
    solution: "Un asistente virtual conectado al sistema de envíos (Shopify/WooCommerce) y base de conocimientos, resolviendo de forma autónoma el 80% de las consultas comunes.",
    tools: ["Shopify API", "OpenAI API", "Zendesk", "WhatsApp Cloud API", "n8n"],
    flow: [
      { step: "1", title: "Consulta de Cliente", desc: "El cliente pregunta sobre su orden o políticas de devolución por WhatsApp o web." },
      { step: "2", title: "Búsqueda en Base de Datos", desc: "La IA consulta las bases de datos de envío y la base de conocimientos." },
      { step: "3", title: "Respuesta al Instante", desc: "Se le da al cliente el estatus exacto de su envío o la respuesta requerida en segundos." },
      { step: "4", title: "Traspaso Humano", desc: "Si el caso requiere atención humana, se transfiere el ticket con el historial completo al equipo." }
    ],
    roi: [
      { label: "Consultas Automatizadas", value: "80%", desc: "Resueltas sin intervención del equipo de soporte." },
      { label: "Tiempo de Espera", value: "0 seg", desc: "Resolución al instante sin esperas en cola." },
      { label: "Satisfacción (CSAT)", value: "9.2/10", desc: "Mejora significativa por la inmediatez del bot." }
    ]
  },
  {
    id: "reservas",
    title: "Reservas de Citas",
    subtitle: "Gestión y Recordatorios de Citas (Servicios)",
    description: "Chatbot conversacional para clínicas, consultorios o agencias que permite reservar, reprogramar y recordar citas a pacientes o clientes vía WhatsApp.",
    icon: "CalendarRange",
    problem: "Las inasistencias sin previo aviso (no-shows) representaban el 20% de las citas perdidas, y el personal invertía horas llamando manualmente para confirmar la agenda del día.",
    solution: "Automatización completa de agenda interactiva en WhatsApp. El bot ofrece horas libres de Google Calendar, reserva al instante y envía recordatorios 24 horas antes.",
    tools: ["Google Calendar API", "WhatsApp Cloud API", "Make.com", "Google Sheets"],
    flow: [
      { step: "1", title: "Solicitud de Cita", desc: "El paciente chatea solicitando una cita para consulta o tratamiento." },
      { step: "2", title: "Oferta de Horas Libres", desc: "El chatbot consulta en tiempo real los espacios libres del médico o especialista." },
      { step: "3", title: "Confirmación en Agenda", desc: "El usuario elige la hora deseada y la cita queda bloqueada inmediatamente." },
      { step: "4", title: "Recordatorio Interactivo", desc: "24 horas antes de la cita, se envía un WhatsApp interactivo con botones de Confirmar/Reprogramar." }
    ],
    roi: [
      { label: "Reducción de No-Shows", value: "-75%", desc: "Disminución radical de inasistencias gracias a recordatorios." },
      { label: "Horas de Gestión", value: "-12 hrs/sem", desc: "Ahorro del personal en llamadas manuales de confirmación." },
      { label: "Reservas Fuera de Horario", value: "40%", desc: "Citas agendadas por la noche o fines de semana de forma automática." }
    ]
  },
  {
    id: "ventas",
    title: "Asistente de E-commerce",
    subtitle: "Recomendación y Compra Asistida (Ventas)",
    description: "Recomendador interactivo inteligente que hace preguntas rápidas a los usuarios y los guía a encontrar el producto ideal de tu catálogo con enlace de pago directo.",
    icon: "ShoppingBag",
    problem: "Muchos visitantes abandonaban la tienda online confundidos por la gran variedad de productos, lo que generaba altas tasas de rebote y baja conversión.",
    solution: "Un asesor digital de compras que replica la atención de una tienda física por chat, recomendando productos basándose en las necesidades del cliente.",
    tools: ["Shopify GraphQL API", "OpenAI GPT-4o", "Stripe API", "WhatsApp Cloud API"],
    flow: [
      { step: "1", title: "Descubrimiento de Necesidad", desc: "El comprador solicita ayuda para elegir un regalo o producto de cuidado personal." },
      { step: "2", title: "Diagnóstico Rápido", desc: "El asistente hace 3 preguntas clave sobre gustos, tipo de piel o presupuesto." },
      { step: "3", title: "Recomendación Inteligente", desc: "El chatbot presenta las 2 mejores opciones con su descripción y valor." },
      { step: "4", title: "Enlace de Pago", desc: "Se envía un link para pagar vía Stripe o añadir al carrito directamente en Shopify." }
    ],
    roi: [
      { label: "Conversión de Tienda", value: "+25%", desc: "Aumento de visitantes que finalizan la compra." },
      { label: "Ticket Promedio", value: "+15%", desc: "Mayor facturación gracias a recomendaciones cruzadas." },
      { label: "Recuperación de Carritos", value: "30%", desc: "Ventas recuperadas con recordatorios automáticos por WhatsApp." }
    ]
  }
];

const webCases = [
  {
    id: "landing",
    title: "Landing Page",
    subtitle: "Conversión de Campañas (Marketing)",
    description: "Página de aterrizaje optimizada para una sola acción de conversión (registro o contacto), eliminando distracciones para maximizar el ROI de tus campañas de anuncios.",
    icon: "LayoutGrid",
    problem: "Las campañas de marketing digital redirigían el tráfico al sitio corporativo general de la empresa. Los visitantes se perdían entre las pestañas y el 97% abandonaba el sitio sin registrarse ni contactar.",
    solution: "Diseñamos una landing page enfocada exclusivamente en un servicio estrella. Estructura de arriba a abajo con propuesta de valor clara, prueba social, formulario integrado de 3 campos y llamada a la acción de alto impacto.",
    tools: ["React / Next.js", "Tailwind CSS", "Framer Motion", "Meta Pixel", "Google Analytics"],
    flow: [
      { step: "1", title: "Tráfico de Anuncios", desc: "El usuario hace clic en una campaña publicitaria en redes sociales o Google." },
      { step: "2", title: "Propuesta de Valor", desc: "Aterriza y ve un encabezado de alto impacto con un beneficio claro en menos de 3 segundos." },
      { step: "3", title: "Prueba Social", desc: "Ve testimonios y logotipos de clientes para eliminar la desconfianza." },
      { step: "4", title: "Llamada a la Acción", desc: "Completa el formulario de conversión directa que se conecta con el CRM." }
    ],
    roi: [
      { label: "Tasa de Conversión", value: "8.5%", desc: "Antes era del 1.2% en el sitio corporativo general." },
      { label: "Costo por Lead", value: "-45%", desc: "Reducción del costo de adquisición gracias a la conversión." },
      { label: "Carga de Página", value: "0.8s", desc: "Velocidad premium para evitar rebote móvil." }
    ]
  },
  {
    id: "corporativo",
    title: "Sitio Corporativo",
    subtitle: "Imagen de Marca y Confianza (Institucional)",
    description: "Sitio web multi-página premium para presentar la historia, servicios, catálogo y valores de tu empresa con una estética impecable que acelera la confianza del cliente.",
    icon: "Globe2",
    problem: "La empresa tenía un sitio web desactualizado, difícil de leer en celulares y sin coherencia de marca, lo que proyectaba una imagen informal ante clientes corporativos de alto valor.",
    solution: "Desarrollamos un sitio institucional moderno, totalmente responsivo y optimizado para buscadores (SEO). Incluye blog de contenidos, sección de portafolio, y conexiones directas a WhatsApp y correo institucional.",
    tools: ["Next.js App Router", "Vanilla CSS", "TypeScript", "Sanity CMS", "Nginx"],
    flow: [
      { step: "1", title: "Búsqueda en Google", desc: "El prospecto encuentra el sitio corporativo gracias a la optimización SEO." },
      { step: "2", title: "Navegación de Servicios", desc: "Explora las secciones de portafolio, quiénes somos y servicios de forma fluida." },
      { step: "3", title: "Validación de Confianza", desc: "Revisa los casos de éxito anteriores y el equipo detrás de la empresa." },
      { step: "4", title: "Contacto Corporativo", desc: "Envía una solicitud formal de cotización a través de un formulario estructurado." }
    ],
    roi: [
      { label: "Visitas Orgánicas", value: "+120%", desc: "Incremento continuo de tráfico gracias a SEO." },
      { label: "Tiempo de Sesión", value: "3.5 min", desc: "Los usuarios navegan más páginas debido a la experiencia fluida." },
      { label: "Confianza de Marca", value: "Alta", desc: "Percepción corporativa profesional y moderna." }
    ]
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    subtitle: "Tienda Online de Alto Rendimiento (Ventas)",
    description: "Tienda virtual optimizada con carga instantánea, catálogo interactivo, filtros fluidos y pasarelas de pago integradas para una experiencia de compra sin fricciones.",
    icon: "ShoppingBag",
    problem: "La tienda online en plantillas genéricas tardaba más de 5 segundos en cargar en móviles. Los usuarios se frustraban en el carrito de compras y el 80% abandonaba la web.",
    solution: "Construimos un e-commerce headless rápido. Los productos cargan al instante, los filtros de búsqueda funcionan en milisegundos y el checkout está integrado en un solo paso con Stripe.",
    tools: ["Next.js", "Shopify API", "Stripe", "Tailwind CSS", "Algolia Search"],
    flow: [
      { step: "1", title: "Carga de Productos", desc: "El usuario abre la tienda y ve las imágenes optimizadas al instante." },
      { step: "2", title: "Filtro Rápido", desc: "Encuentra el artículo deseado en milisegundos usando filtros dinámicos." },
      { step: "3", title: "Añadir al Carrito", desc: "Agrega productos y ve el resumen del carrito flotante sin recargar la página." },
      { step: "4", title: "Pago Integrado", desc: "Completa el pago de forma segura en un checkout optimizado de un solo paso." }
    ],
    roi: [
      { label: "Carga Web Móvil", value: "0.9s", desc: "Reducción del 80% en tiempos de espera." },
      { label: "Conversión de Compra", value: "+28%", desc: "Más pedidos completados exitosamente." },
      { label: "Carritos Abandonados", value: "-35%", desc: "Menor abandono gracias al checkout rápido." }
    ]
  },
  {
    id: "webapp",
    title: "Aplicación Web (PWA)",
    subtitle: "Interactividad y Procesos Complejos (Software)",
    description: "Plataformas web con bases de datos dinámicas, control de usuarios y flujos lógicos complejos (como CRM, ERP o SaaS) instalables en celulares.",
    icon: "MonitorSmartphone",
    problem: "El cliente dependía de plantillas rígidas de Excel y procesos de backoffice manuales que causaban duplicidad de datos, pérdida de archivos e imposibilidad de trabajar en equipo de forma remota.",
    solution: "Desarrollamos una plataforma web a medida con base de datos en tiempo real, gestión de roles de usuario, tableros interactivos y alertas. Funciona como una PWA instalable sin pasar por App Stores.",
    tools: ["React / Next.js", "Node.js / Express", "PostgreSQL / Prisma", "Tailwind CSS", "PWA Manifest"],
    flow: [
      { step: "1", title: "Acceso y Roles", desc: "El empleado o cliente inicia sesión de forma segura según sus permisos asignados." },
      { step: "2", title: "Tablero Central", desc: "Visualiza de forma interactiva el estatus de sus tareas, ventas o pedidos." },
      { step: "3", title: "Procesamiento de Datos", desc: "Interactúa con formularios, filtros avanzados y realiza descargas de reportes." },
      { step: "4", title: "Sincronización Total", desc: "Cualquier cambio se refleja inmediatamente para el resto del equipo en tiempo real." }
    ],
    roi: [
      { label: "Eficiencia Interna", value: "+50%", desc: "Aceleración de procesos y reducción de trabajo repetitivo." },
      { label: "Pérdida de Información", value: "0%", desc: "Bases de datos centralizadas en la nube con backups diarios." },
      { label: "Tiempo de Adopción", value: "< 2 días", desc: "Plataforma intuitiva y fácil de usar por el personal." }
    ]
  }
];

const uiStyles = {
  glassmorphism: {
    title: "Glassmorphism (Efecto Vidrio)",
    description: "Estilo moderno y translúcido que simula vidrio esmerilado. Utiliza transparencias, bordes finos de alto contraste y desenfoque de fondo. Muy utilizado en macOS, Windows 11 e interfaces web premium.",
    css: {
      card: "bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)]",
      button: "bg-white/10 hover:bg-white/20 border border-white/20 text-zinc-50 rounded-xl shadow-none",
      input: "bg-white/5 border border-white/10 text-zinc-200 placeholder-zinc-500 rounded-lg focus:border-white/30",
      badge: "bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 rounded-full",
    }
  },
  neomorphism: {
    title: "Neomorphism (Diseño Físico)",
    description: "Combina sombras claras y oscuras para simular elementos extruidos físicamente que 'sobresalen' o se 'hunden' en el fondo. Posee una estética industrial, suave y sumamente táctil.",
    css: {
      card: "bg-[#18181b] border-none rounded-[2.5rem] shadow-[10px_10px_25px_rgba(0,0,0,0.6),-8px_-8px_25px_rgba(255,255,255,0.02)]",
      button: "bg-[#18181b] hover:bg-[#1f1f23] text-yellow-300 rounded-2xl shadow-[6px_6px_12px_rgba(0,0,0,0.4),-4px_-4px_12px_rgba(255,255,255,0.015)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5),inset_-4px_-4px_8px_rgba(255,255,255,0.01)] border-none",
      input: "bg-[#141416] text-zinc-300 placeholder-zinc-600 rounded-xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5),inset_-3px_-3px_8px_rgba(255,255,255,0.005)] border-none",
      badge: "bg-[#18181b] text-yellow-400/90 rounded-lg shadow-[inset_2px_2px_5px_rgba(0,0,0,0.4),2px_2px_5px_rgba(255,255,255,0.01)]",
    }
  },
  claymorphism: {
    title: "Claymorphism (Efecto Arcilla)",
    description: "Evolución del neumorfismo que combina bordes extremadamente redondeados, sombras externas marcadas e iluminaciones internas 3D. El resultado simula figuras blandas 3D de arcilla o plástico.",
    css: {
      card: "bg-zinc-800 border-none rounded-[3rem] shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_6px_6px_12px_rgba(255,255,255,0.05),inset_-8px_-8px_16px_rgba(0,0,0,0.3)]",
      button: "bg-yellow-400 hover:bg-yellow-300 text-zinc-950 rounded-[1.5rem] shadow-[0_8px_16px_rgba(250,204,21,0.2),inset_3px_3px_6px_rgba(255,255,255,0.4),inset_-4px_-4px_8px_rgba(0,0,0,0.15)] border-none font-bold",
      input: "bg-zinc-900 text-zinc-100 placeholder-zinc-500 rounded-[1rem] shadow-[inset_-3px_-3px_6px_rgba(255,255,255,0.02),inset_4px_4px_8px_rgba(0,0,0,0.4)] border-none",
      badge: "bg-purple-500 text-purple-100 rounded-full shadow-[0_4px_10px_rgba(168,85,247,0.3),inset_2px_2px_4px_rgba(255,255,255,0.3)]",
    }
  },
  minimalist: {
    title: "Minimalist (Minimalismo Suizo)",
    description: "Foco absoluto en la tipografía sans-serif/monospace, el alto contraste y el espacio en blanco. Elimina sombras, gradientes y decoraciones irrelevantes. Menos es más.",
    css: {
      card: "bg-black border border-white rounded-none shadow-none font-mono",
      button: "bg-white hover:bg-zinc-200 text-black border border-white rounded-none shadow-none font-mono uppercase font-bold",
      input: "bg-black border border-zinc-700 focus:border-white text-white placeholder-zinc-600 rounded-none font-mono",
      badge: "bg-black border border-zinc-700 text-zinc-400 rounded-none font-mono",
    }
  },
  maximalist: {
    title: "Maximalist (Neon Brutalism)",
    description: "Diseño audaz y ruidoso. Emplea colores neón saturados, sombras planas gruesas de estilo cómic, tipografía pesada en mayúsculas y bordes gruesos negros. Ideal para marcas jóvenes y disruptivas.",
    css: {
      card: "bg-zinc-900 border-4 border-yellow-300 rounded-none shadow-[8px_8px_0px_rgba(250,204,21,1)] font-mono",
      button: "bg-yellow-300 hover:bg-yellow-200 text-black border-2 border-black rounded-none shadow-[4px_4px_0px_rgba(255,255,255,1)] active:translate-x-1 active:translate-y-1 active:shadow-none font-black uppercase text-xs",
      input: "bg-black border-2 border-yellow-300 text-yellow-300 placeholder-yellow-300/40 rounded-none font-mono",
      badge: "bg-purple-500 border-2 border-black text-black font-black rounded-none shadow-[2px_2px_0px_rgba(0,0,0,1)] uppercase text-[10px]",
    }
  }
};

const webPreviewCards = {
  landing: {
    badge: "Oferta Especial",
    title: "Agente IA SourDev",
    subtitle: "Aprende a automatizar tus ventas con inteligencia artificial hoy mismo.",
    inputLabel: "Correo Corporativo",
    inputPlaceholder: "nombre@empresa.com",
    buttonText: "Acceder a Demo",
    hasInput: true,
  },
  corporativo: {
    badge: "Agencia de Software",
    title: "Desarrollo Next.js",
    subtitle: "Creamos portales corporativos rápidos, seguros y preparados para posicionarse en Google.",
    buttonText: "Nuestros Servicios",
    hasInput: false,
  },
  ecommerce: {
    badge: "Más Vendido",
    title: "Auriculares SoundMax",
    subtitle: "Cancelación de ruido activa y 40 horas de reproducción de audio continua.",
    price: "499 Bs.",
    buttonText: "Comprar Ahora",
    isProduct: true,
  },
  webapp: {
    badge: "Métricas CRM",
    title: "Leads Calificados",
    metricValue: "1,248 leads",
    metricLabel: "+24.5% este mes",
    progressBar: 75,
    buttonText: "Ver Reporte Completo",
    isDashboard: true,
  }
};

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
  const [activeRole, setActiveRole] = useState<"mesero" | "cocina" | "admin">("mesero");
  const [activeTab, setActiveTab] = useState<string>(() => {
    return slug === "paginas-web" ? "landing" : "leads";
  });
  const [activeUiStyle, setActiveUiStyle] = useState<"glassmorphism" | "neomorphism" | "claymorphism" | "minimalist" | "maximalist">("glassmorphism");

  useEffect(() => {
    if (slug === "paginas-web") {
      setActiveTab("landing");
    } else {
      setActiveTab("leads");
    }
  }, [slug]);

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
            <h1 className="max-w-3xl text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight sm:leading-none text-balance font-mono">
              {caseData.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-300">{caseData.description}</p>
            {slug === "automatizaciones" ? (
              <Link
                href="/contacto"
                className="inline-flex h-14 min-w-[180px] items-center justify-center gap-2 rounded-full border border-yellow-400/50 bg-yellow-400 px-6 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]"
              >
                Cotizar Automatización
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : slug === "chatbots" ? (
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent("open-sourbot", {
                      detail: { message: "Hola, me gustaría probar la demo de Chatbots IA" }
                    })
                  );
                }}
                className="inline-flex h-14 min-w-[180px] items-center justify-center gap-2 rounded-full border border-yellow-400/50 bg-yellow-400 px-6 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] cursor-pointer"
              >
                Probar Demo Chatbot
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                className="inline-flex h-14 min-w-[180px] items-center justify-center gap-2 rounded-full border border-yellow-400/50 bg-yellow-400 px-6 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]"
              >
                Probar Demo
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
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

        {slug !== "automatizaciones" && slug !== "chatbots" && (
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
        )}

        {(slug === "automatizaciones" || slug === "chatbots" || slug === "paginas-web") && (() => {
          const cases = 
            slug === "chatbots" 
              ? chatbotCases 
              : slug === "automatizaciones" 
              ? automationCases 
              : webCases;
          const sectionTitle = 
            slug === "chatbots" 
              ? "Asistentes de IA" 
              : slug === "automatizaciones" 
              ? "Automatizaciones Empresariales" 
              : "Desarrollo y Estilos Web";
          const sectionSubtitle = 
            slug === "chatbots" 
              ? "Casos de Uso" 
              : slug === "automatizaciones" 
              ? "Casos de Éxito" 
              : "Tipos y Estilos UI";
          const sectionDesc = 
            slug === "chatbots" 
              ? "Ejemplos de cómo implementamos agentes conversacionales y bots de soporte para optimizar la comunicación y captar oportunidades 24/7."
              : slug === "automatizaciones"
              ? "Ejemplos reales de cómo optimizamos procesos repetitivos de oficina y ventas, eliminando cuellos de botella y potenciando el rendimiento de los equipos."
              : "Explora la diferencia entre landing pages, sitios corporativos y aplicaciones web, junto con una demostración interactiva de estilos de diseño visual.";
          const currentCase = cases.find((c) => c.id === activeTab) || cases[0];
          const AlertIcon = getIconComponent("AlertTriangle");
          const ZapIcon = getIconComponent("Zap");
          const CpuIcon = getIconComponent("Cpu");

          return (
            <section className="space-y-12">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-yellow-300 font-mono">{sectionSubtitle}</p>
                <h2 className="text-3xl font-semibold text-zinc-50 font-mono">{sectionTitle}</h2>
                <p className="max-w-2xl text-sm text-zinc-400 leading-relaxed">
                  {sectionDesc}
                </p>
              </div>

              {/* Bento-style Tab Selectors - Horizontal Swipeable on Mobile */}
              <div className="flex overflow-x-auto gap-3 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-4 lg:gap-4 lg:pb-0">
                {cases.map((item) => {
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
                          Caso 0{cases.indexOf(item) + 1}
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
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="grid gap-6 lg:gap-8 lg:grid-cols-12 items-stretch mt-6 sm:mt-10"
                >
                  {slug === "paginas-web" ? (
                    <>
                      {/* Left side: Problema vs Solución & Tools & UI Style Selector */}
                      <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                        <div className="space-y-6">
                          {/* Problema */}
                          <div className="rounded-2xl border border-red-500/10 bg-red-500/[0.02] p-5 sm:p-6 space-y-2">
                            <div className="flex items-center gap-2 text-red-400">
                              <AlertIcon className="h-4 w-4" />
                              <h3 className="font-mono text-[10px] uppercase tracking-wider font-semibold">El Problema de Negocio</h3>
                            </div>
                            <p className="text-xs text-zinc-300 leading-relaxed">{currentCase.problem}</p>
                          </div>

                          {/* Solución */}
                          <div className="rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.02] p-5 sm:p-6 space-y-2">
                            <div className="flex items-center gap-2 text-emerald-400">
                              <ZapIcon className="h-4 w-4" />
                              <h3 className="font-mono text-[10px] uppercase tracking-wider font-semibold">Solución SOURDEV</h3>
                            </div>
                            <p className="text-xs text-zinc-300 leading-relaxed">{currentCase.solution}</p>
                          </div>

                          {/* Selector de Estilos de UI */}
                          <div className="hidden lg:block rounded-2xl border border-white/5 bg-zinc-900/20 p-5 sm:p-6 space-y-4">
                            <div className="flex items-center gap-2 text-yellow-300">
                              <CpuIcon className="h-4 w-4" />
                              <h3 className="font-mono text-[10px] uppercase tracking-wider font-semibold">Interactuar con Estilos UI</h3>
                            </div>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
                              {Object.keys(uiStyles).map((styleKey) => {
                                const style = uiStyles[styleKey as keyof typeof uiStyles];
                                const isSelected = activeUiStyle === styleKey;
                                return (
                                  <button
                                    key={styleKey}
                                    type="button"
                                    onClick={() => setActiveUiStyle(styleKey as any)}
                                    className="px-3 py-2 rounded-xl text-left text-[10px] font-mono font-semibold transition cursor-pointer bg-white/5 text-zinc-300 hover:bg-white/10"
                                    style={isSelected ? {
                                      backgroundColor: "#facc15",
                                      color: "#09090b",
                                      boxShadow: "0 0 12px rgba(250,204,21,0.25)"
                                    } : {}}
                                  >
                                    {style.title.split(" (")[0]}
                                  </button>
                                );
                              })}
                            </div>

                            <p className="text-[11px] text-zinc-400 leading-relaxed italic border-t border-white/5 pt-3">
                              {uiStyles[activeUiStyle].description}
                            </p>
                          </div>
                        </div>

                        {/* Herramientas */}
                        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-6 space-y-3">
                          <div className="flex items-center gap-2 text-zinc-300">
                            <CpuIcon className="h-4 w-4" />
                            <h3 className="font-mono text-[10px] uppercase tracking-wider font-semibold">Tecnologías</h3>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {currentCase.tools.map((tool) => (
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

                      {/* Right side: Live CSS/UI Render Demo container */}
                      <div className="lg:col-span-7 flex flex-col justify-between gap-6 w-full max-w-full overflow-hidden">
                        {/* Selected UI Style Card Render Frame */}
                        <div className="w-full max-w-full rounded-[2rem] border border-white/10 bg-zinc-950 p-4 sm:p-8 flex flex-col justify-center items-center relative min-h-[400px] sm:min-h-[460px] flex-1 overflow-hidden">
                          <div className="absolute top-4 left-6 flex items-center gap-1.5 text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            <span>Render en Vivo ({activeUiStyle})</span>
                          </div>

                          {/* Dynamic Card based on activeUiStyle CSS and activeTab content */}
                          {(() => {
                            const cardContent = webPreviewCards[activeTab as keyof typeof webPreviewCards] as any;
                            return (
                              <div className={`w-full max-w-[440px] p-5 sm:p-8 md:p-10 space-y-5 sm:space-y-8 transition-all duration-500 ${uiStyles[activeUiStyle].css.card}`}>
                                <div className="flex items-center justify-between">
                                  <span className={`px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase font-mono ${uiStyles[activeUiStyle].css.badge}`}>
                                    {cardContent.badge}
                                  </span>
                                  <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                                  </div>
                                </div>

                                <div className="space-y-1.5">
                                  <h4 className="text-lg sm:text-2xl font-bold tracking-tight text-zinc-100">{cardContent.title}</h4>
                                  <p className="text-[11px] sm:text-sm text-zinc-400 leading-normal">{cardContent.subtitle}</p>
                                </div>

                                {/* Conditionally Render fields based on layout details */}
                                {cardContent.hasInput && (
                                  <div className="space-y-2">
                                    <label className="text-[9px] uppercase tracking-wider text-zinc-500 font-mono font-semibold block">
                                      {cardContent.inputLabel}
                                    </label>
                                    <input
                                      type="email"
                                      disabled
                                      placeholder={cardContent.inputPlaceholder}
                                      className={`w-full px-4 py-2.5 text-xs sm:text-sm outline-none transition duration-300 ${uiStyles[activeUiStyle].css.input}`}
                                    />
                                  </div>
                                )}

                                {cardContent.isProduct && (
                                  <div className="flex items-center justify-between pt-1">
                                    <span className="text-zinc-500 text-xs sm:text-sm font-mono">Precio:</span>
                                    <span className="text-yellow-300 font-mono font-bold text-xl sm:text-2xl">{cardContent.price}</span>
                                  </div>
                                )}

                                {cardContent.isDashboard && (
                                  <div className="space-y-3 pt-1">
                                    <div className="flex justify-between items-end text-xs sm:text-sm font-mono">
                                      <span className="text-zinc-100 font-bold text-xl sm:text-2xl">{cardContent.metricValue}</span>
                                      <span className="text-emerald-400 text-xs">{cardContent.metricLabel}</span>
                                    </div>
                                    {/* Styled progress bar */}
                                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                      <div 
                                        className="h-full bg-yellow-400 transition-all duration-500" 
                                        style={{ width: `${cardContent.progressBar}%` }} 
                                      />
                                    </div>
                                  </div>
                                )}

                                <div className="pt-2">
                                  <button
                                    type="button"
                                    className={`w-full py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition duration-300 flex items-center justify-center gap-2 ${uiStyles[activeUiStyle].css.button}`}
                                  >
                                    {cardContent.buttonText}
                                    <ArrowRight className="h-4 w-4" />
                                  </button>
                                </div>
                              </div>
                            );
                          })()}
                        </div>

                        {/* Mobile UI Style Selector (hidden on desktop) */}
                        <div className="lg:hidden rounded-2xl border border-white/5 bg-zinc-900/20 p-5 space-y-4">
                          <div className="flex items-center gap-2 text-yellow-300">
                            <CpuIcon className="h-4 w-4" />
                            <h3 className="font-mono text-[10px] uppercase tracking-wider font-semibold">Interactuar con Estilos UI</h3>
                          </div>
                          
                          {/* Horizontal swipeable buttons for mobile view */}
                          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none sm:grid sm:grid-cols-5">
                            {Object.keys(uiStyles).map((styleKey) => {
                              const style = uiStyles[styleKey as keyof typeof uiStyles];
                              const isSelected = activeUiStyle === styleKey;
                              return (
                                <button
                                  key={styleKey}
                                  type="button"
                                  onClick={() => setActiveUiStyle(styleKey as any)}
                                  className="px-3 py-2 rounded-xl text-left text-[10px] font-mono font-semibold transition shrink-0 bg-white/5 text-zinc-300 hover:bg-white/10"
                                  style={isSelected ? {
                                    backgroundColor: "#facc15",
                                    color: "#09090b",
                                    boxShadow: "0 0 12px rgba(250,204,21,0.25)"
                                  } : {}}
                                >
                                  {style.title.split(" (")[0]}
                                </button>
                              );
                            })}
                          </div>

                          <p className="text-[11px] text-zinc-400 leading-relaxed italic border-t border-white/5 pt-3">
                            {uiStyles[activeUiStyle].description}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left: Problema vs Solución & Tools */}
                      <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                        <div className="space-y-6">
                          {/* Problema */}
                          <div className="rounded-2xl border border-red-500/10 bg-red-500/[0.02] p-5 sm:p-6 space-y-3">
                            <div className="flex items-center gap-2 text-red-400">
                              <AlertIcon className="h-5 w-5" />
                              <h3 className="font-mono text-xs uppercase tracking-wider font-semibold">El Problema Operativo (Antes)</h3>
                            </div>
                            <p className="text-sm text-zinc-300 leading-relaxed">{currentCase.problem}</p>
                          </div>

                          {/* Solución */}
                          <div className="rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.02] p-5 sm:p-6 space-y-3">
                            <div className="flex items-center gap-2 text-emerald-400">
                              <ZapIcon className="h-5 w-5" />
                              <h3 className="font-mono text-xs uppercase tracking-wider font-semibold">La Solución SOURDEV (Después)</h3>
                            </div>
                            <p className="text-sm text-zinc-300 leading-relaxed">{currentCase.solution}</p>
                          </div>
                        </div>

                        {/* Herramientas */}
                        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-6 space-y-4 flex flex-col justify-between">
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 text-zinc-300">
                              <CpuIcon className="h-5 w-5" />
                              <h3 className="font-mono text-xs uppercase tracking-wider font-semibold">Herramientas Conectadas</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {currentCase.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-zinc-300 font-mono"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>

                          {slug === "chatbots" && (
                            <button
                              type="button"
                              onClick={() => {
                                window.dispatchEvent(
                                  new CustomEvent("open-sourbot", {
                                    detail: { message: `Hola, me interesa probar el chatbot de: ${currentCase.title}` }
                                  })
                                );
                              }}
                              className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-yellow-400/30 bg-yellow-400/10 text-yellow-300 hover:bg-yellow-400 hover:text-zinc-950 font-semibold font-mono text-xs uppercase tracking-wider transition duration-300 cursor-pointer"
                            >
                              Probar Asistente
                              <Icons.MessageSquare className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Right: Flujo de Trabajo & ROI */}
                      <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                    {/* Flujo de Trabajo */}
                    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:p-8 space-y-6 flex-1">
                      <div className="space-y-1">
                        <span className="text-xs uppercase tracking-[0.25em] text-yellow-300 font-mono">El Proceso Automatizado</span>
                        <h3 className="text-lg sm:text-xl font-semibold text-zinc-50 font-mono">¿Cómo funciona paso a paso?</h3>
                      </div>

                      <div className="relative space-y-6 sm:space-y-8 mt-6">
                        {/* Vertical line connecting steps - perfectly aligned with left-3 */}
                        <div className="absolute left-3 top-2 bottom-2 w-[1px] bg-gradient-to-b from-yellow-400 via-yellow-400/25 to-transparent" />

                        {currentCase.flow.map((step) => (
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

                    {/* ROI / Métricas - Optimized 3-Column Grid */}
                    <div className="grid gap-2 sm:gap-4 grid-cols-3">
                      {currentCase.roi.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:p-5 flex flex-col justify-between min-h-[90px] sm:min-h-[120px]"
                        >
                          <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-wider text-zinc-400 leading-tight">
                            {metric.label}
                          </span>
                          <div>
                            <div className="text-xl sm:text-3xl font-bold font-mono text-yellow-300 leading-none">
                              {metric.value}
                            </div>
                            <p className="text-[9px] sm:text-[10px] text-zinc-500 mt-1 sm:mt-2 leading-tight hidden xs:block">
                              {metric.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
              </AnimatePresence>
            </section>
          );
        })()}

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

        {slug !== "automatizaciones" && slug !== "chatbots" && slug !== "paginas-web" && (
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
        )}

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

                      <div className={`w-full pl-12 md:w-1/2 ${
                        isEven ? "md:pl-12 md:pr-0" : "md:pl-0 md:pr-12"
                      }`}>
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

        {slug !== "automatizaciones" && slug !== "chatbots" && (
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
        )}
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
