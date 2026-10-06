# Contexto del Proyecto y Reglas de Desarrollo: SOURDEV

## 1. Identidad de la Agencia
- [cite_start]**Nombre:** SOURDEV [cite: 91]
- [cite_start]**Descripción:** Agencia de desarrollo de software y automatización acelerada por flujos de trabajo con Inteligencia Artificial (Agentic Workflows)[cite: 4].
- [cite_start]**Público Objetivo:** Negocios medianos y pequeños del área tecnológica, PYMES en general[cite: 90].
- **Tono de Voz en el Copywriting:** Profesional, directo y orientado a resultados. [cite_start]Hablar siempre en plural ("Nosotros", "Nuestro equipo")[cite: 67].

## 2. Directrices Visuales (UI/UX)
- [cite_start]**Tema Base:** Modo Oscuro (Dark Mode) obligatorio[cite: 82]. [cite_start]El fondo debe tener sutiles destellos (glows) radiales[cite: 135].
- [cite_start]**Color de Acento:** Amarillo Neón[cite: 92]. [cite_start]Usar para llamar la atención en botones (CTA) y enlaces[cite: 85].
- [cite_start]**Tipografía:** Estilo "Terminal de Comandos" / Monospace (ej. JetBrains Mono o Space Mono) para los títulos y elementos técnicos, combinada con una fuente sans-serif limpia para lectura de párrafos largos.
- **Estilo General:** Minimalismo técnico. Uso de asimetría controlada (Bento Grids). [cite_start]Cero fotos de personas de stock; utilizar solo ilustraciones abstractas, capturas de código o iconografía[cite: 136, 137].

## 3. Stack Tecnológico Estricto
- [cite_start]**Framework Principal:** Next.js usando React[cite: 36].
- [cite_start]**Estilos:** Tailwind CSS[cite: 36]. No generar archivos CSS personalizados.
- [cite_start]**Iconografía:** Lucide Icons[cite: 41].
- [cite_start]**Animaciones:** Framer Motion para micro-interacciones suaves al hacer scroll[cite: 71].

## 4. Reglas de Generación de Código (Strict)
- [cite_start]**Estilo:** Escribir código limpio, corto, modular y directo[cite: 98]. [cite_start]Priorizar la velocidad y el rendimiento[cite: 109].
- [cite_start]**Cero Comentarios Inline:** NO incluir comentarios explicativos dentro del código fuente[cite: 109]. [cite_start]El código debe ser autoexplicativo mediante un buen nombrado de variables y funciones[cite: 104].

## 5. Sistema de Documentación por Fases
- [cite_start]**Reportes de Fase:** La IA no documentará en el código, sino externamente[cite: 110]. [cite_start]Al finalizar cada hito o componente principal, la IA debe redactar una explicación clara en un archivo `.md` o `.txt` dentro de una carpeta `/docs`[cite: 104].