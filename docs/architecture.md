# Arquitectura del Proyecto y Estructura de Archivos: SOURDEV

## 1. Reglas Generales de Estructura
- **Framework:** Next.js (App Router).
- **Prohibición:** La IA NO debe crear carpetas fuera de esta jerarquía a menos que el Ingeniero (Usuario) lo solicite explícitamente.
- **Separación de Responsabilidades:** El diseño visual no debe mezclarse con la lógica compleja. Toda función de cálculo o integración de APIs debe vivir en `/lib` o `/hooks`.

## 2. Mapa del Directorio Raíz
El proyecto sigue una estructura estricta y modular:

- `/app` (Rutas y Páginas principales)
- `/components` (Elementos visuales reutilizables)
- `/lib` (Lógica, utilidades y configuración)
- `/hooks` (Lógica interactiva de React)
- `/public` (Imágenes, íconos estáticos y fuentes)
- `/docs` (Archivos de contexto, arquitectura y reportes de fase)

## 3. Detalle de Enrutamiento (`/app`)
Las páginas deben estructurarse de la siguiente manera:
- `/app/page.tsx` (Inicio - Landing principal)
- `/app/servicios/page.tsx` (Página de Servicios)
- `/app/metodo/page.tsx` (Página de Nuestro Método)
- `/app/portafolio/page.tsx` (Página de Casos de Estudio)
- `/app/contacto/page.tsx` (Página de Contacto / Agendamiento)
- `/app/blog/[slug]/page.tsx` (Ruta dinámica preparada para futuras publicaciones)
- `/app/clientes/[id]/page.tsx` (Ruta dinámica preparada para futuros portales de clientes)

## 4. Detalle de Componentes (`/components`)
Todo componente de la interfaz de usuario debe categorizarse:
- `/components/ui` (Micro-componentes: Botones, Inputs, Tarjetas, Badges).
- `/components/layout` (Macro-componentes: Navbar, Footer, HeroSection, BentoGrid).

## 5. Detalle de Utilidades (`/lib` y `/hooks`)
- `/lib/utils.ts` (Funciones de ayuda, concatenación de clases Tailwind, formateo de fechas).
- `/hooks/use-animations.ts` (Archivos dedicados para manejar micro-interacciones de Framer Motion).