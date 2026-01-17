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
