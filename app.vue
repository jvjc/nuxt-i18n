<template>
  <div>
    <Toolbar />
    <v-container>
      <NuxtPage />
    </v-container>
  </div>
</template>

<script setup lang="ts">
import Toolbar from './components/toolbar.vue';

useHead({
  title: $t('title'),
})
</script>
