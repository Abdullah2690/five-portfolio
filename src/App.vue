<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader :isDarkMode="isDarkMode" @toggle-theme="toggleTheme" />

    <main class="flex-grow text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-white">
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
import { ref, watchEffect, onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

// Dark mode toggle state
const isDarkMode = ref(false)

// Check stored preference on mount
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDarkMode.value = savedTheme === 'dark'
})

// Watch and apply dark mode class
watchEffect(() => {
  const root = document.documentElement
  if (isDarkMode.value) {
    root.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    root.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
})

// Toggle function
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
}
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
  font-family: 'Heebo', sans-serif;
}
</style>
