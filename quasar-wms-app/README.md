# Quasar WMS App (Starter)

Dieses Projekt ist ein **vollständiger Quasar-Starter** für ein WMS-Admin-Interface mit:
- App-Layout (Drawer, Toolbar)
- Outbounds-Page (Status-Tabs, Quick Access, QTable)
- Auth-Flows (Login, Passwort-Reset, MFA)

## Hinweis zur Quasar-Scaffolding
Für reale Projekte empfiehlt Quasar das offizielle Scaffolding. Du kannst dieses Repo entweder:
1. **Direkt verwenden** (so wie es hier liegt), oder
2. **Neu scaffolden** und die Dateien aus `src/` sowie `quasar.config.js` übernehmen.

### Beispiel: Scaffolding via Quasar CLI
```bash
npm create quasar
# -> Project name wählen, Vite, Vue 3, Router aktivieren
# Danach die Dateien aus diesem Starter übernehmen:
# - quasar.config.js
# - src/layouts/
# - src/pages/
# - src/router/
# - src/app.scss
```

## Voraussetzungen
- Node.js LTS
- npm

## Setup (direkt aus diesem Repo)
```bash
cd quasar-wms-app
npm install
npm run dev
```

## Routen
- `/auth/login`
- `/auth/forgot`
- `/auth/mfa`
- `/dashboard`
- `/outbounds`

## Hinweise
- Branding/Farben sind in `quasar.config.js` gesetzt.
- Der Datenbestand in `OutboundsPage.vue` ist Demo-Daten.
