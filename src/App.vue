<template>
  <AppHeader />
  <div class="app-content">
    <AppSideMenu />
    <main>
      <RouterView />
    </main>
  </div>

  <Toast position="top-center" />
</template>

<script setup>
import { RouterView } from 'vue-router';
import AppHeader from './components/layouts/AppHeader.vue';
import Toast from 'primevue/toast';
import AppSideMenu from './components/layouts/AppSideMenu.vue';
</script>

<style scoped>
.app-content {
  flex-grow: 1;
  display: flex;

  main {
    flex-grow: 1;
  }
}
</style>
