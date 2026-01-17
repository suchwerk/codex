<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar class="bg-primary text-white">
        <q-btn flat dense round icon="menu" @click="drawerOpen = !drawerOpen" />
        <q-toolbar-title>WMS Admin</q-toolbar-title>
        <q-space />
        <q-input
          dense
          standout="bg-white text-black"
          v-model="search"
          placeholder="Suchen…"
          class="q-mr-md"
        />
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
        <q-item clickable v-ripple>
          <q-item-section avatar><q-icon name="inventory" /></q-item-section>
          <q-item-section>Inbounds</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar><q-icon name="warehouse" /></q-item-section>
          <q-item-section>Inventur</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar><q-icon name="dataset" /></q-item-section>
          <q-item-section>Stammdaten</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar><q-icon name="analytics" /></q-item-section>
          <q-item-section>Reports</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
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
