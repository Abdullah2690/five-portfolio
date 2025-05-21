<template>
  <header class="bg-white shadow-sm">
    <div class="container px-4 py-4 mx-auto">
      <nav class="flex items-center justify-between">
        <router-link 
          to="/" 
          class="text-xl font-bold transition text-dark hover:text-primary"
        >
          Abdullah
        </router-link>
        
        <div class="hidden space-x-8 md:flex">
          <router-link 
            to="/works" 
            class="nav-link"
            active-class="text-primary"
          >
            Works
          </router-link>
          <router-link 
            to="/contact" 
            class="nav-link"
            active-class="text-primary"
          >
            Contact
          </router-link>
        </div>
        
        <!-- Mobile menu button -->
        <button class="text-gray-600 md:hidden hover:text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
// No script needed for basic functionality
</script>

<style scoped>
.nav-link {
  @apply font-medium text-gray-600 hover:text-primary transition;
}
</style>