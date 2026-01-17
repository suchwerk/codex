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
        <q-btn color="primary" label="Login" to="/dashboard" />
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
