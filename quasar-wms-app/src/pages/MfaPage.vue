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
        <q-btn color="primary" label="Bestätigen" to="/dashboard" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const code = ref('')
</script>
