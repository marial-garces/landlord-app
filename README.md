# landlord-app

Prototipo del sistema de gestión de inquilinos (sin login por ahora).

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

Luego abre http://localhost:3000

## Estructura

- `app/` — páginas (Next.js App Router)
- `components/` — componentes de UI reutilizables (se llena en Fase 2)
- `lib/mock-data.ts` — datos de ejemplo mientras no hay backend
- `types/tenant.ts` — modelo de datos (Owner, Building, Unit, Tenant, Lease)

## Roadmap de fases

- [x] Fase 1 — Estructura base del proyecto, modelo de datos, mock data
- [ ] Fase 2 — Vista de lista de inquilinos (tabla/cards)
- [ ] Fase 3 — Vista de detalle de un inquilino
- [ ] Fase 4 — Login y roles
- [ ] Fase 5 — Backend real (reemplazar mock-data)
