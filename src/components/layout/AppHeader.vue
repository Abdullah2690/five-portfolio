<template>
  <header class="relative z-50 bg-white shadow-sm">
    <div class="container px-4 py-4 mx-auto">
      <nav class="flex items-center justify-between">
        <router-link 
          to="/" 
          class="text-xl font-bold transition text-dark hover:text-primary"
        >
          Abdullah
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden space-x-8 md:flex">
          <router-link to="/works" class="nav-link" active-class="text-primary">Works</router-link>
          <router-link to="/contact" class="nav-link" active-class="text-primary">Contact</router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="z-50 text-gray-600 md:hidden hover:text-primary"
          @click="showSidebar = true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </div>

    <!-- Sidebar Backdrop -->
    <div 
      v-if="showSidebar" 
      class="fixed inset-0 z-40 bg-black bg-opacity-50"
      @click="showSidebar = false"
    ></div>

    <!-- Sidebar Menu -->
    <aside 
      class="fixed top-0 right-0 z-50 w-64 h-full transition-transform duration-300 transform bg-white shadow-lg"
      :class="{ 'translate-x-0': showSidebar, 'translate-x-full': !showSidebar }"
    >
      <div class="p-6">
        <!-- Close button -->
        <button 
          class="mb-6 text-gray-600 hover:text-primary"
          @click="showSidebar = false"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Mobile Nav Links -->
        <div class="space-y-4">
          <router-link 
            to="/works" 
            class="block nav-link" 
            active-class="text-primary"
            @click="showSidebar = false"
          >
            Works
          </router-link>
          <router-link 
            to="/contact" 
            class="block nav-link" 
            active-class="text-primary"
            @click="showSidebar = false"
          >
            Contact
          </router-link>
        </div>
      </div>
    </aside>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const showSidebar = ref(false)
</script>

<style scoped>
.nav-link {
  @apply font-medium text-gray-600 hover:text-primary transition;
}
.translate-x-full {
  transform: translateX(100%);
}
.translate-x-0 {
  transform: translateX(0);
}
</style>
