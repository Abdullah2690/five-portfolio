<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    
    <main class="flex-grow bg-gray-50 dark:bg-gray-900">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.fullPath" />
        </transition>
      </router-view>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<style>
/* Page transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Global body styles */
:global(body) {
  background-color: #f9fafb;
  color: #1a202c;
  font-family: 'Heebo', sans-serif;
}
</style>
