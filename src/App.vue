<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useBlogStore } from "./stores/blogStore";

// Komponenten
import Navbar from "./components/Navbar.vue";

const blogStore = useBlogStore();

blogStore.loadAllBlogs();

</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
</style>
