# Documentación de Avance: Vistas Detalladas de Servicios SOURDEV

Este documento describe la arquitectura, decisiones de diseño, contenido y proceso de verificación aplicados durante la creación de las vistas detalladas individuales para cada servicio principal de **SOURDEV**.

---

## 1. Arquitectura e Integración de Rutas

Se ha extendido el App Router de Next.js creando las siguientes rutas dinámicas y estáticas:

1. **Listado General:** `app/servicios/page.tsx`
   - Se modificaron las tarjetas generales de servicios para que apunten a los slugs individuales utilizando el componente `<Link>` de Next.js:
     - `/servicios/desarrollo-web-flash`
     - `/servicios/chatbots`
     - `/servicios/automatizacion`
2. **Controlador de Ruta Dinámica:** `app/servicios/[slug]/page.tsx`
   - Define el esquema estático de datos de servicios (`servicesData`) y maneja la carga a nivel de servidor.
   - Implementa `generateStaticParams()` para pre-renderizar estáticamente todas las rutas durante el build, mejorando la velocidad y optimizando el SEO.
3. **Componente de Renderizado Cliente:** `app/servicios/[slug]/ServiceDetailClient.tsx`
   - Orquesta la interactividad de la página (tabs de especialidades, animaciones de Framer Motion, y disparo de eventos de la demo del chatbot de asistencia).

---

## 2. Decisiones de Diseño y Reglas Aplicadas

Para mantener consistencia de diseño con la sección de portafolio y apegarse estrictamente a la identidad de marca de **SOURDEV**, se aplicaron las siguientes reglas:

* **Modo Oscuro Estricto & Acento Amarillo:** Fondo base `bg-zinc-950` con sutiles destellos radiales decorativos y botones de llamada a la acción en amarillo neón (`bg-yellow-400 text-zinc-950`).
* **Estrategia "Sin Imágenes" (No-Image Strategy):** Dado que los servicios son ofertas operativas sin capturas fijas de clientes, se incorporó una comparativa asimétrica de "Antes vs Después" (Problema vs Solución) con acentos de color en rojo y verde respectivamente.
* **Tipografía Precisa:** Se utilizó la fuente Monospace (`font-mono`) en títulos principales, métricas, y números de pasos para emular una estética de precisión de código/consola de comandos.
* **Pestañas Deslizables Multidispositivo:** Para evitar el desbordamiento o deformación en móviles, las pestañas de especialidades utilizan scroll horizontal táctil con snap en móvil (`snap-x snap-mandatory overflow-x-auto`), y se distribuyen en cuadrícula en pantallas de escritorio (`lg:grid lg:grid-cols-4`).
* **Timeline Paso a Paso:** La línea de proceso vertical y sus marcadores circulares se encuentran perfectamente alineados horizontalmente mediante la coordenada `left-3` y desplazando los textos con un padding constante de `pl-8`.
* **Grid de ROI Compacto:** Las métricas de retorno empresarial (ROI) se adaptan fluidamente en 3 columnas independientes con un alto mínimo para asegurar que los números no se desborden ni se recorten.

---

## 3. Contenido Persuasivo (Copywriting)

Para evitar duplicar o redundar con los estudios de caso específicos del portafolio (como el lector de PDFs, onboarding automático, etc.), el contenido de las páginas de servicios describe las **capacidades del servicio**, **nuestras tecnologías** y **metodologías de SOURDEV** de forma clara y directa:

1. **Desarrollo Web Flash:**
   - *Overview:* Creación a medida con Next.js y Tailwind para un rendimiento insuperable.
   - *Especialidades:* Landing Pages para campañas, Sitios Institucionales, E-commerce Headless y Web Apps (PWA).
2. **Empleados IA (Chatbots):**
   - *Overview:* Integración de LLMs en sitios y WhatsApp Cloud API entrenados con el conocimiento del negocio.
   - *Especialidades:* Calificación y Agendamiento de Leads, Atención y Soporte, Asistente de E-commerce e Integraciones Multi-Canal.
3. **Automatización de Procesos:**
   - *Overview:* Construcción de integraciones autónomas que eliminan la fricción de backoffice de fondo.
   - *Especialidades:* Sincronización de CRM, Procesamiento OCR de PDFs con IA, Onboarding Automático y Reportes Consolidados.

---

## 4. Verificación de Compilación

Se ejecutó con éxito el comando:
```bash
npm run build
```
El compilador de TypeScript y el constructor de Next.js compilaron con éxito y pre-renderizaron estáticamente las rutas sin advertencias ni errores:

```text
Route (app)
├ ○ /servicios
└ ● /servicios/[slug]
  ├ /servicios/desarrollo-web-flash
  ├ /servicios/chatbots
  └ /servicios/automatizacion
```
