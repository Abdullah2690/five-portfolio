<template>
  <header class="relative z-50 bg-white shadow-sm dark:bg-gray-800">
    <div class="container px-4 py-4 mx-auto">
      <nav class="flex items-center justify-between">
        <!-- Logo -->
        <router-link 
          to="/" 
          class="flex items-center space-x-2 text-xl font-bold transition text-dark dark:text-white hover:text-primary"
        >
          <img 
            src="@/assets/Pineapple.png"
            alt="Logo" 
            class="object-contain w-11 h-11"
          />
        </router-link>

        <!-- Desktop Menu -->
        <div class="items-center hidden space-x-6 md:flex">
          <router-link to="/skills" class="font-medium text-gray-600 transition hover:text-primary dark:text-gray-300 dark:hover:text-primary" active-class="text-primary">Skills</router-link>
          <router-link to="/works" class="font-medium text-gray-600 transition hover:text-primary dark:text-gray-300 dark:hover:text-primary" active-class="text-primary">Works</router-link>
          <router-link to="/contact" class="font-medium text-gray-600 transition hover:text-primary dark:text-gray-300 dark:hover:text-primary" active-class="text-primary">Contact</router-link>

          <!-- 🌙 Dark Mode Toggle Button -->
          <button 
            @click="$emit('toggle-theme')" 
            class="p-1 text-gray-600 transition rounded hover:text-primary dark:text-gray-300"
          >
            <span v-if="isDarkMode">☀️</span>
            <span v-else>🌙</span>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="z-50 text-gray-600 md:hidden hover:text-primary dark:text-gray-300" 
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

    <!-- Sidebar -->
    <aside 
      class="fixed top-0 right-0 z-50 w-64 h-full transition-transform duration-300 transform bg-white shadow-lg dark:bg-gray-800"
      :class="{ 'translate-x-0': showSidebar, 'translate-x-full': !showSidebar }"
    >
      <div class="flex flex-col h-full p-6">
        <!-- Close button -->
        <button 
          class="flex items-center mb-6 text-gray-600 hover:text-primary dark:text-gray-300" 
          @click="showSidebar = false"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span class="ml-2">Close</span>
        </button>

        <!-- Mobile Nav Links -->
        <nav class="flex-1 space-y-4">
          <router-link to="/" class="flex items-center p-2 font-medium text-gray-600 transition rounded-lg hover:text-primary hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700" active-class="bg-gray-100 text-primary" @click="showSidebar = false">
            <HomeIcon class="w-5 h-5 mr-3" />
            Home
          </router-link>

          <router-link to="/skills" class="flex items-center p-2 font-medium text-gray-600 transition rounded-lg hover:text-primary hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700" active-class="bg-gray-100 text-primary" @click="showSidebar = false">
            <CommandLineIcon class="w-5 h-5 mr-3" />
            Skills
          </router-link>

          <router-link to="/works" class="flex items-center p-2 font-medium text-gray-600 transition rounded-lg hover:text-primary hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700" active-class="bg-gray-100 text-primary" @click="showSidebar = false">
            <BriefcaseIcon class="w-5 h-5 mr-3" />
            Works
          </router-link>

          <router-link to="/contact" class="flex items-center p-2 font-medium text-gray-600 transition rounded-lg hover:text-primary hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700" active-class="bg-gray-100 text-primary" @click="showSidebar = false">
            <EnvelopeIcon class="w-5 h-5 mr-3" />
            Contact
          </router-link>

          <router-link to="/privacy" class="flex items-center p-2 font-medium text-gray-600 transition rounded-lg hover:text-primary hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700" active-class="bg-gray-100 text-primary" @click="showSidebar = false">
            <ShieldCheckIcon class="w-5 h-5 mr-3" />
            Privacy
          </router-link>

          <router-link to="/faq" class="flex items-center p-2 font-medium text-gray-600 transition rounded-lg hover:text-primary hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700" active-class="bg-gray-100 text-primary" @click="showSidebar = false">
            <QuestionMarkCircleIcon class="w-5 h-5 mr-3" />
            FAQ
          </router-link>
        </nav>

        <!-- 🌙 Dark Mode Toggle in Mobile Sidebar - Now at the bottom -->
        <div class="pt-4 mt-auto border-t border-gray-200 dark:border-gray-700">
          <button 
            @click="$emit('toggle-theme')" 
            class="flex items-center w-full p-2 font-medium text-gray-600 rounded-lg hover:text-primary hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <svg class="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="isDarkMode" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h1M3 12H2m15.36 6.36l.71.71m-12.02 0l-.71.71m12.02-12.02l.71-.71m-12.02 0l-.71-.71" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3C10.67 4.34 10 6.12 10 8c0 3.31 2.69 6 6 6 1.88 0 3.66-.67 5-2-1.18 3.31-4.37 6-8 6-4.42 0-8-3.58-8-8 0-3.63 2.69-6.82 6-8z" />
            </svg>
            <span>{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
          </button>
        </div>
      </div>
    </aside>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import {
  HomeIcon,
  CommandLineIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  ShieldCheckIcon,
  QuestionMarkCircleIcon
} from '@heroicons/vue/24/outline'

defineProps({
  isDarkMode: Boolean
})

const showSidebar = ref(false)
</script>

<style scoped>
.translate-x-full {
  transform: translateX(100%);
}
.translate-x-0 {
  transform: translateX(0);
}
</style>