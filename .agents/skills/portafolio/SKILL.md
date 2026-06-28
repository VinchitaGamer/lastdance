---
name: portafolio
description: Guía y pautas para modificar, rediseñar y optimizar responsivamente las vistas y casos de estudio del portafolio comercial de SOURDEV.
---

# Guía de Modificación y Diseño del Portafolio SOURDEV

Esta skill documenta las decisiones de arquitectura, estrategias de copywriting comercial y reglas de diseño responsivo aplicadas en el rediseño del portafolio de **SOURDEV**. Debe utilizarse al modificar, agregar o depurar vistas del portafolio en el futuro.

---

## 1. Arquitectura y Archivos Clave

El portafolio de proyectos y software está estructurado con el App Router de Next.js de la siguiente forma:

* **Página Hub de Software:** [page.tsx](file:///c:/Users/Lenovo/Desktop/lastdance/app/portafolio/software/page.tsx)
  * Presenta la parrilla general de las categorías del portafolio.
* **Controlador de Casos de Estudio (Ruta Dinámica):** [page.tsx](file:///c:/Users/Lenovo/Desktop/lastdance/app/portafolio/software/%5Bslug%5D/page.tsx)
  * Carga estáticamente los metadatos generales (`title`, `description`, `overviewCards`, `benefits`) de cada slug (`comandas`, `automatizaciones`, `chatbots`, `paginas-web`).
* **Componente de Renderizado Interactivo:** [CaseStudyClient.tsx](file:///c:/Users/Lenovo/Desktop/lastdance/app/portafolio/software/%5Bslug%5D/CaseStudyClient.tsx)
  * Controla los layouts específicos de cada caso de estudio. La interactividad de pestañas dinámicas, transiciones lógicas y diagramas de flujo vive aquí.

---

## 2. Estrategia Comercial "Sin Imágenes" (No-Image Strategy)

Cuando un proyecto o categoría (como *Automatizaciones*) carece de capturas de pantalla reales, **NUNCA** utilices imágenes de relleno (stock) genéricas. En su lugar, presenta el valor técnico y operativo utilizando:

1. **Comparativa Antes/Después (Problema vs. Solución):**
   * **Antes (El Problema):** Describe el cuello de botella o dolor de cabeza operativo manual con acento en rojo (`border-red-500/10 bg-red-500/[0.02]`).
   * **Después (La Solución SOURDEV):** Describe el proceso automatizado y liberado con acento en verde (`border-emerald-500/10 bg-emerald-500/[0.02]`).
2. **Diagrama de Flujo Comercial Conceptualmente Sencillo:**
   * Muestra el paso a paso del proceso usando una línea cronológica simple y entendible para directivos de empresas.
   * Evita código técnico, archivos crudos o payloads JSON; enfócate en flujos lógicos simples (ej: *Recepción de Documento* ➔ *Lectura por IA* ➔ *Guardado en Nube*).
3. **Métricas de Retorno (ROI) Directas:**
   * Destaca números grandes en amarillo neón (`text-yellow-300 font-mono`) que resalten el valor empresarial directo: horas semanales ahorradas, reducción de errores a 0% o tiempos de respuesta de pocos segundos.

---

## 3. Reglas de Diseño Responsivo (Mobile-First)

Para asegurar que los componentes interactivos se vean impecables en pantallas móviles (celulares), sigue estas pautas estrictas de CSS y Tailwind:

### A. Selectores de Pestañas (Tabs) Deslizables
* En pantallas grandes, las pestañas deben mostrarse en grid (`lg:grid lg:grid-cols-4`).
* En pantallas móviles, agrúpalas en un flexbox horizontal deslizable que oculte las barras de scroll y permita snap táctil para mantener centradas las opciones seleccionadas.
* **Clase Tailwind recomendada:**
  ```typescript
  className="flex overflow-x-auto gap-3 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-4 lg:gap-4 lg:pb-0"
  ```
  *(Cada tarjeta hija debe llevar `min-w-[260px] shrink-0 snap-center lg:min-w-0`)*.

### B. Alineación Pixel-Perfect de Líneas de Flujo y Markers
* Para evitar desalineaciones en la línea de paso a paso vertical, **remueve el padding izquierdo del contenedor padre** y colócalo en los contenedores hijos de cada paso (`pl-8`).
* Posiciona la línea vertical del fondo (`absolute left-3 top-2 bottom-2 w-[1px]`) y los círculos marcadores (`absolute left-3 -translate-x-1/2`) en la misma coordenada horizontal exacta (`left-3` / 12px). El translation de 50% centrará los círculos de forma idéntica en cualquier pantalla.

### C. Grid de ROI/Métricas Compacto
* En dispositivos móviles, las métricas deben agruparse en 3 columnas fluidas en un solo renglón para optimizar espacio vertical (`grid grid-cols-3 gap-2 sm:gap-4`).
* Usa un alto mínimo (`min-h-[90px] sm:min-h-[120px]`) y fuentes responsivas (`text-xl sm:text-3xl`) para que los números grandes nunca se corten ni se desborden.

---

## 4. Identidad Visual de SOURDEV

* **Tema Base:** Modo Oscuro estricto (`bg-zinc-950`).
* **Color de Acento:** Amarillo Neón / Neón Técnico (`text-yellow-300`, `border-yellow-400`).
* **Tipografía:** Títulos y métricas en fuente Monospace (`font-mono`) para dar una estética de precisión y terminal de código.
* **Animaciones:** Utiliza transiciones y desvanecimientos suaves (`AnimatePresence` de `framer-motion`) al conmutar entre vistas o pestañas.
