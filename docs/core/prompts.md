# Sistema de Prompts (Plantillas de Delegación): SOURDEV

## Instrucción de Uso
Copia y pega estos prompts en tu IDE (GitHub Copilot) para generar código de forma estructurada, asegurando que la IA respete la arquitectura y el diseño del proyecto.

---

### 1. [PROMPT_INICIALIZACION] - Para la primera lectura del proyecto
"Por favor, lee los archivos `context.md`, `docs/ARCHITECTURE.md` y `docs/CONTENT.md`. Confirma que entiendes el stack tecnológico (Next.js + Tailwind), la identidad visual (Dark mode, asimetría, acento amarillo neón) y la regla estricta de no usar comentarios en el código generado. Responde solo con un 'Entendido, SOURDEV está listo'."

### 2. [PROMPT_COMPONENTE_NUEVO] - Para crear elementos visuales
"Crea un nuevo componente llamado [NOMBRE_DEL_COMPONENTE]. 
- Ubicación: Guárdalo en la ruta `components/[ui o layout]/` según dicte `ARCHITECTURE.md`.
- Estilo: Usa Tailwind CSS siguiendo las reglas visuales de `context.md` (diseño asimétrico, minimalismo técnico, amarillo neón).
- Contenido: Si requiere texto, extráelo de la sección [NOMBRE_DE_SECCION] en `docs/CONTENT.md`. NO uses Lorem Ipsum."

### 3. [PROMPT_PAGINA_NUEVA] - Para estructurar una ruta completa
"Crea la página [NOMBRE_DE_PÁGINA] en la ruta `app/[RUTA]/page.tsx`. 
- Ensambla la página utilizando componentes modulares (crea los componentes necesarios en `/components` si no existen).
- Importa todo el texto literal y exacto correspondiente a esta página desde `docs/CONTENT.md`.
- Aplica micro-interacciones suaves al hacer scroll."

### 4. [PROMPT_REFACTORIZACION] - Para limpiar código y aplicar QA
"Revisa este archivo. Refactoriza el código para que sea más limpio, corto y directo. Elimina todos los comentarios inline. Asegúrate de que las funciones de lógica compleja se muevan a `/lib/utils.ts` o a un hook personalizado en `/hooks`."

### 5. [PROMPT_DOCUMENTACION_FASE] - Al terminar un hito
"Hemos terminado la [NOMBRE_DE_FASE]. Genera un archivo Markdown en la carpeta `/docs` llamado `fase-[NUMERO]-[NOMBRE].md`. Resume técnicamente qué componentes se crearon, qué librerías se usaron y cómo se maneja el estado, sin añadir comentarios al código fuente."