---
name: vps-manager
description: Reglas y procedimientos para administrar servicios Docker, sitios Nginx y estado general en el VPS de SOURDEV (IP 159.223.155.188). Usar al monitorear, desplegar o depurar contenedores y proxies reversos en el servidor.
---

# VPS Manager Skill

Habilidad específica del proyecto para gestionar el entorno del servidor virtual privado (VPS) de SOURDEV. Permite el control del estado del sistema, el monitoreo de contenedores Docker y la administración de configuraciones Nginx.

## Cuando Usar
- Para monitorear la salud de los servicios Docker en producción y demo.
- Para verificar logs de contenedores de backend, frontend o base de datos.
- Para reiniciar contenedores o reconstruir imágenes tras actualizaciones.
- Para inspeccionar o renovar la configuración del proxy reverso Nginx y certificados SSL (Certbot).

## Cuando No Usar
- Para el desarrollo local de componentes React/Next.js (usar localmente primero).
- Para mutaciones o cambios en el código base local (realizarlos en el workspace local antes de desplegar).

## Entorno del VPS (Información Clave)

- **IP del Servidor:** `159.223.155.188`
- **Usuario:** `root` (Conexión SSH sin contraseña por clave SSH autorizada)
- **Ruta de los Proyectos:** `/var/www/`
  - `/var/www/restaurante-comandas` (Proyecto de comandas)
  - `/var/www/chatbot-web` (Proyecto de chatbot)
  - `/var/www/html` (Archivos HTML estáticos estándar)

---

## Servicios Activos y Contenedores

| Servicio / Sitio | Puerto Interno | Docker Container | Dominio Web (HTTPS) | Nginx Config Path |
|---|---|---|---|---|
| **Comandas (Prod Frontend)** | `3000` | `comandas_frontend` | `comandas.sourdev.app` | `/etc/nginx/sites-available/comandas` |
| **Comandas (Prod Backend)** | `8000` | `comandas_backend` | `comandas.sourdev.app/api` | `/etc/nginx/sites-available/comandas` |
| **Comandas (Demo Frontend)** | `3002` | `comandas_frontend_demo` | `demo.comandas.sourdev.app` | `/etc/nginx/sites-available/comandas` |
| **Comandas (Demo Backend)** | `8001` | `comandas_backend_demo` | `demo.comandas.sourdev.app/api` | `/etc/nginx/sites-available/comandas` |
| **Chatbot (App)** | `3001` | `chatbot_app` | `bot.sourdev.app` | `/etc/nginx/sites-available/chatbot` |
| **Chatbot (Redis)** | `6379` | `chatbot_redis` | *Interno* | *N/A* |

---

## Comandos y Tareas Comunes

### 1. Estado y Monitoreo General
```bash
# Ver estado de los contenedores Docker
ssh root@159.223.155.188 "docker ps -a"

# Ver uso de recursos (CPU / Memoria)
ssh root@159.223.155.188 "docker stats --no-stream"

# Ver logs de un contenedor específico (ej. backend)
ssh root@159.223.155.188 "docker logs --tail 100 comandas_backend"
```

### 2. Reiniciar o Reconstruir Servicios
```bash
# Reiniciar un contenedor
ssh root@159.223.155.188 "docker restart comandas_backend"

# Reconstruir y levantar un proyecto en Docker Compose (ej: restaurante-comandas)
ssh root@159.223.155.188 "cd /var/www/restaurante-comandas && docker-compose up -d --build"
```

### 3. Nginx y Certificados SSL (Certbot)
```bash
# Probar configuración de Nginx antes de recargar
ssh root@159.223.155.188 "nginx -t"

# Recargar configuración de Nginx
ssh root@159.223.155.188 "systemctl reload nginx"

# Ver estado de renovación automática de SSL
ssh root@159.223.155.188 "certbot renew --dry-run"
```

---

## Definición del Subagente `vps-manager`

Al interactuar con el subagente `vps-manager`, el agente padre lo registrará con el siguiente prompt de sistema:

### Prompt del Sistema para `vps-manager`
```markdown
Eres un administrador de sistemas especializado en el VPS Linux de SOURDEV (IP 159.223.155.188). 
Tu rol consiste en mantener, depurar e inspeccionar los servicios Docker y el servidor Nginx en producción.

Reglas de Operación:
1. Conéctate siempre vía SSH usando: ssh -o StrictHostKeyChecking=no root@159.223.155.188
2. Para cualquier comando complejo o actualización de contenedores, realiza comprobaciones de estado antes y después (p. ej. docker ps).
3. Nunca alteres configuraciones SSL de Certbot o archivos Nginx sin ejecutar primero 'nginx -t' para validar la sintaxis.
4. Reporta el output exacto de los comandos críticos para dar transparencia total.
```

---

## Validación

- [ ] La conexión SSH al VPS `159.223.155.188` se realiza sin solicitar contraseña.
- [ ] Los contenedores docker indicados se encuentran en estado `Up` tras reinicios o despliegues.
- [ ] La sintaxis de Nginx se reporta como válida (`nginx -t` exitosa) tras modificar algún sitio.
- [ ] El certificado de seguridad SSL se encuentra activo para los dominios configurados.
