<script setup lang="ts">
import { RouterView } from 'vue-router'

// Komponenten
import Navbar from "./components/Navbar.vue"

</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
