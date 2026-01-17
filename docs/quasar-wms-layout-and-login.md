# Quasar Layout + Login Pages (WMS Desktop Admin)

Dieses Dokument enthält eine praktikable **Quasar-Layout-Struktur** (Material Design) für ein WMS-Admin-Interface sowie **Login-Seiten** (Login, Passwort-Reset, MFA). Die Struktur ist als Vorlage gedacht und kann direkt in ein Quasar/Vue-Projekt übernommen werden.

## 1) Layout-Struktur (App-Layout)

**Ziele:**
- Desktop-first, klare Navigation (QDrawer)
- Schnellzugriff (configurable Quick Access)
- Kontextbezogene Toolbar + Statusfilter

### 1.1 AppLayout.vue (Skeleton)
```vue
<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar class="bg-primary text-white">
        <q-btn flat dense round icon="menu" @click="drawerOpen = !drawerOpen" />
        <q-toolbar-title>WMS Admin</q-toolbar-title>
        <q-space />
        <q-input dense standout="bg-white text-black" v-model="search" placeholder="Suchen…" class="q-mr-md" />
        <q-btn flat round icon="notifications" />
        <q-btn flat round icon="account_circle" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerOpen" show-if-above bordered>
      <q-list padding>
        <q-item clickable v-ripple to="/dashboard">
          <q-item-section avatar><q-icon name="dashboard" /></q-item-section>
          <q-item-section>Dashboard</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/outbounds">
          <q-item-section avatar><q-icon name="local_shipping" /></q-item-section>
          <q-item-section>Outbounds</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/inbounds">
          <q-item-section avatar><q-icon name="inventory" /></q-item-section>
          <q-item-section>Inbounds</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/inventory">
          <q-item-section avatar><q-icon name="warehouse" /></q-item-section>
          <q-item-section>Inventur</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/master-data">
          <q-item-section avatar><q-icon name="dataset" /></q-item-section>
          <q-item-section>Stammdaten</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/reports">
          <q-item-section avatar><q-icon name="analytics" /></q-item-section>
          <q-item-section>Reports</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/settings">
          <q-item-section avatar><q-icon name="settings" /></q-item-section>
          <q-item-section>Einstellungen</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const drawerOpen = ref(true)
const search = ref('')
</script>
```

### 1.2 Outbounds-Page (Statusfilter + Quick Access)
```vue
<template>
  <q-page padding>
    <div class="row items-center q-gutter-sm q-mb-md">
      <q-btn color="primary" icon="add" label="Neuer Outbound" />
      <q-btn outline color="primary" icon="playlist_add" label="Picking starten" />
      <q-btn outline color="primary" icon="print" label="Label drucken" />
      <q-space />
      <q-btn flat icon="tune" label="Quick Access konfigurieren" />
    </div>

    <q-tabs v-model="tab" class="text-primary" align="left" dense>
      <q-tab name="open" label="Offen" />
      <q-tab name="picking" label="In Kommissionierung" />
      <q-tab name="packing" label="Beim Verpacken" />
      <q-tab name="done" label="Abgeschlossen" />
    </q-tabs>

    <q-separator class="q-my-md" />

    <q-table
      title="Outbounds"
      :rows="rows"
      :columns="columns"
      row-key="order"
      flat
      bordered
    />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('open')
const columns = [
  { name: 'order', label: 'Auftrag', field: 'order', sortable: true },
  { name: 'customer', label: 'Kunde', field: 'customer', sortable: true },
  { name: 'priority', label: 'Priorität', field: 'priority', sortable: true },
  { name: 'sla', label: 'SLA', field: 'sla', sortable: true },
  { name: 'status', label: 'Status', field: 'status', sortable: true }
]
const rows = []
</script>
```

## 2) Login Pages

### 2.1 LoginPage.vue
```vue
<template>
  <q-page class="flex flex-center bg-grey-1">
    <q-card class="q-pa-lg" style="width: 380px;">
      <q-card-section>
        <div class="text-h6">Anmelden</div>
        <div class="text-caption text-grey">WMS Admin Console</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="email" type="email" label="E-Mail" dense outlined />
        <q-input v-model="password" type="password" label="Passwort" dense outlined class="q-mt-sm" />
        <q-checkbox v-model="remember" label="Angemeldet bleiben" dense class="q-mt-sm" />
      </q-card-section>

      <q-card-actions align="between">
        <q-btn flat label="Passwort vergessen?" to="/auth/forgot" />
        <q-btn color="primary" label="Login" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const remember = ref(true)
</script>
```

### 2.2 ForgotPasswordPage.vue
```vue
<template>
  <q-page class="flex flex-center bg-grey-1">
    <q-card class="q-pa-lg" style="width: 380px;">
      <q-card-section>
        <div class="text-h6">Passwort zurücksetzen</div>
        <div class="text-caption text-grey">Wir senden dir einen Reset-Link.</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="email" type="email" label="E-Mail" dense outlined />
      </q-card-section>

      <q-card-actions align="between">
        <q-btn flat label="Zurück" to="/auth/login" />
        <q-btn color="primary" label="Link senden" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
</script>
```

### 2.3 MfaPage.vue
```vue
<template>
  <q-page class="flex flex-center bg-grey-1">
    <q-card class="q-pa-lg" style="width: 380px;">
      <q-card-section>
        <div class="text-h6">Zwei-Faktor-Authentifizierung</div>
        <div class="text-caption text-grey">Bitte Code eingeben.</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="code" label="6-stelliger Code" dense outlined maxlength="6" />
      </q-card-section>

      <q-card-actions align="between">
        <q-btn flat label="Zurück" to="/auth/login" />
        <q-btn color="primary" label="Bestätigen" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const code = ref('')
</script>
```

## 3) Routing (Kurzbeispiel)
```ts
const routes = [
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'forgot', component: () => import('pages/ForgotPasswordPage.vue') },
      { path: 'mfa', component: () => import('pages/MfaPage.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: 'outbounds', component: () => import('pages/OutboundsPage.vue') },
      { path: 'dashboard', component: () => import('pages/DashboardPage.vue') }
    ]
  }
]
```

## 4) Hinweise zum Mantis-Farbschema
- **Neutraler Hintergrund** (z. B. `bg-grey-1`) für Arbeitsflächen
- **Akzentfarbe** für Primary/Secondary Buttons und Statuschips
- **Statusfarben** je Flow: Offen (Neutral), Kommissionierung (Info), Verpacken (Warn), Abgeschlossen (Success)

---

Wenn du willst, kann ich daraus auch ein vollständiges Quasar-Template-Projekt erzeugen (Layouts, Pages, Routes, Theme-Config).
