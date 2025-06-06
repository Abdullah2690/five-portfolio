<template>
  <header class="relative z-50 bg-white shadow-sm">
    <div class="container px-4 py-4 mx-auto">
      <nav class="flex items-center justify-between">
        <router-link 
          to="/" 
          class="flex items-center space-x-2 text-xl font-bold transition text-dark hover:text-primary"
        >
          <img 
            src="@/assets/Capital Five logo.png" 
            alt="Logo" 
            class="object-contain w-11 h-11"
          />
          
        </router-link>


        <!-- Desktop Menu -->
        <div class="hidden space-x-8 md:flex">
          <router-link to="/skills" class="font-medium text-gray-600 transition hover:text-primary" active-class="text-primary">Skills</router-link>
          <router-link to="/works" class="font-medium text-gray-600 transition hover:text-primary" active-class="text-primary">Works</router-link>
          <router-link to="/contact" class="font-medium text-gray-600 transition hover:text-primary" active-class="text-primary">Contact</router-link>
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

    <!-- Updated Sidebar Menu with Icons -->
    <aside 
      class="fixed top-0 right-0 z-50 w-64 h-full transition-transform duration-300 transform bg-white shadow-lg"
      :class="{ 'translate-x-0': showSidebar, 'translate-x-full': !showSidebar }"
    >
      <div class="p-6">
        <!-- Close button -->
        <button 
          class="flex items-center mb-6 text-gray-600 hover:text-primary"
          @click="showSidebar = false"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span class="ml-2">Close</span>
        </button>

        <!-- Mobile Nav Links with Icons -->
        <nav class="space-y-4">
          <router-link 
            to="/" 
            class="flex items-center p-2 font-medium text-gray-600 transition rounded-lg hover:text-primary hover:bg-gray-50" 
            active-class="bg-gray-100 text-primary"
            @click="showSidebar = false"
          >
            <HomeIcon class="w-5 h-5 mr-3" />
            Home
          </router-link>
          
          <router-link 
            to="/skills" 
            class="flex items-center p-2 font-medium text-gray-600 transition rounded-lg hover:text-primary hover:bg-gray-50" 
            active-class="bg-gray-100 text-primary"
            @click="showSidebar = false"
          >
            <CommandLineIcon class="w-5 h-5 mr-3" />
            Skills
          </router-link>
          
          <router-link 
            to="/works" 
            class="flex items-center p-2 font-medium text-gray-600 transition rounded-lg hover:text-primary hover:bg-gray-50" 
            active-class="bg-gray-100 text-primary"
            @click="showSidebar = false"
          >
            <BriefcaseIcon class="w-5 h-5 mr-3" />
            Works
          </router-link>
          
          <router-link 
            to="/contact" 
            class="flex items-center p-2 font-medium text-gray-600 transition rounded-lg hover:text-primary hover:bg-gray-50" 
            active-class="bg-gray-100 text-primary"
            @click="showSidebar = false"
          >
            <EnvelopeIcon class="w-5 h-5 mr-3" />
            Contact
          </router-link>

          <!-- Additional Pages -->
          <router-link 
            to="/privacy" 
            class="flex items-center p-2 font-medium text-gray-600 transition rounded-lg hover:text-primary hover:bg-gray-50" 
            active-class="bg-gray-100 text-primary"
            @click="showSidebar = false"
          >
            <ShieldCheckIcon class="w-5 h-5 mr-3" />
            Privacy
          </router-link>
          
          <router-link 
            to="/faq" 
            class="flex items-center p-2 font-medium text-gray-600 transition rounded-lg hover:text-primary hover:bg-gray-50" 
            active-class="bg-gray-100 text-primary"
            @click="showSidebar = false"
          >
            <QuestionMarkCircleIcon class="w-5 h-5 mr-3" />
            FAQ
          </router-link>
        </nav>
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
