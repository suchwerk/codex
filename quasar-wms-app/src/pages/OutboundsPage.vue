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
const rows = [
  { order: 'SO-1001', customer: 'Muster GmbH', priority: 'Hoch', sla: '4h', status: 'Offen' },
  { order: 'SO-1002', customer: 'Nordhandel AG', priority: 'Normal', sla: '12h', status: 'Kommissionierung' }
]
</script>
