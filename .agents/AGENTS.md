# AGENTS.md — Reglas Globales del Proyecto

Este archivo define las restricciones y convenciones absolutas para todos los agentes
de IA que trabajen en este workspace. Estas reglas tienen **prioridad máxima** y no
pueden ser ignoradas bajo ninguna circunstancia.

---

## Stack Tecnológico Obligatorio

| Categoría | Tecnología | Prohibición |
|---|---|---|
| Framework | Next.js 14+ App Router | ❌ Pages Router |
| Componentes UI | Shadcn UI + Radix UI | — |
| Estilos | Tailwind CSS | — |
| Animaciones | Tailwind (primero) · Framer Motion (solo si aprobado) | — |
| Estado Global | Zustand | ❌ React Context API |
| HTTP Client | `fetch` nativo de Next.js | ❌ Axios |
| Validación | Zod + `z.infer<>` | ❌ Interfaces TypeScript manuales |
| Tipado | TypeScript estricto | ❌ `any` |
| Iconos | Lucide React | — |
| Auth | NextAuth.js v5 (Auth.js) | ❌ JWT manual |

---

## Reglas de Oro (Non-Negotiable)

1. **Server por defecto.** Todo componente es Server Component a menos que se justifique `"use client"`.
2. **`"use client"` mínimo.** Añadirlo solo cuando el componente use hooks, event handlers o Web APIs.
3. **Fetch en el servidor.** Nunca usar `useEffect` para fetching de datos — usar Server Components.
4. **Contrato JSON inmutable.** Toda respuesta de API respeta `{ success, data, error, code }`.
5. **Zustand sin Provider.** Los stores de Zustand no requieren `<Provider>` en el layout.
6. **Zod como única fuente de tipos.** Los tipos TypeScript se extraen con `z.infer<typeof Schema>`.
7. **Mutaciones vía Server Actions.** Solo usar Route Handlers para webhooks externos y APIs de terceros.
8. **Early returns siempre.** Evitar anidamiento profundo con guardias al inicio de funciones.
9. **kebab-case para archivos.** Sin excepción. PascalCase solo para nombres de funciones de componentes.
10. **Sin `any`.** Prohibido en cualquier parte del código.

---

## Skills Activas en Este Workspace

Las siguientes Skills amplían estas reglas con instrucciones detalladas y ejemplos, clasificadas por su ámbito de aplicación:

### 1. Skills Reutilizables de Desarrollo (Base para futuros proyectos)
Estándares y mejores prácticas de programación:
- `nextjs-architecture` — Estructura de carpetas, routing, App Router patterns.
- `backend-integration` — Fetch nativo, Route Handlers, contrato JSON, seguridad.
- `clean-code` — Zod como única fuente de tipos, nomenclatura, JSDoc, patrones de funciones.
- `design-system` — Shadcn UI, Tailwind CSS, CVA, responsividad y animaciones.
- `rendering-and-state` — Server/Client Components, Zustand, Server Actions.
- `auth-and-security` — NextAuth.js v5, middleware, protección de rutas y roles.
- `create-skill` — Generación de nuevas habilidades estructuradas para el agente.

### 2. Skills Específicas de SOURDEV (Exclusivas de este proyecto)
Lógica del negocio, copywriting y estructura de este portafolio:
- `portafolio` — Copywriting comercial de SOURDEV y directrices visuales "sin imágenes" (No-Image Strategy) en responsive.
- `comandas-portfolio` — Descripción comercial, funcional y flujos del caso de estudio "Sistema de Comandas".
- `vps-manager` — Monitoreo de contenedores Docker, recarga de proxies Nginx y mantenimiento del VPS.

---

## Directorios Canónicos del Proyecto

```
/app          → Rutas, páginas, layouts, Route Handlers, Server Actions
/components   → UI (Shadcn), layout, forms, shared
/lib          → ORM client, utilidades, configuraciones
/store        → Zustand stores EXCLUSIVAMENTE
/hooks        → Custom hooks de React (sin Zustand, sin lógica de negocio)
/types        → Re-exports de z.infer<> (sin interfaces manuales)
```

> El agente **NO debe** crear carpetas raíz fuera de esta lista sin autorización explícita del Ingeniero.
