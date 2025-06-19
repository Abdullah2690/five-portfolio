<template>
  <main class="flex justify-center w-full px-4 py-12">
    <div class="w-full max-w-4xl">
      <!-- Header with subtle decoration -->
      <div class="mb-12 text-center">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-dark-text md:text-4xl">
          <span class="relative inline-block">
            My Skills
            <span class="absolute bottom-0 left-0 w-full h-1 -mb-1 bg-primary dark:bg-primary-dark opacity-20"></span>
          </span>
        </h1>
        <p class="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-dark-muted">
          Technologies and tools I'm proficient with, organized by category
        </p>
      </div>

      <!-- Skills Section with animated entry -->
      <transition appear name="fade-up">
        <SkillsSection class="mt-8" />
      </transition>

      <!-- Optional categories filter (commented out) -->
      <!-- <div class="flex flex-wrap justify-center gap-2 mb-8">
        <button 
          v-for="category in categories"
          :key="category"
          class="px-4 py-2 text-sm transition-colors rounded-full"
          :class="{
            'bg-primary text-white': activeCategory === category,
            'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-dark-card dark:text-dark-muted dark:hover:bg-dark-border': activeCategory !== category
          }"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div> -->
    </div>
  </main>
</template>

<script setup>
import SkillsSection from '@/components/home/SkillsSection.vue'
import { ref } from 'vue'

// Example for potential category filtering (uncomment to use)
// const categories = ref(['All', 'Frontend', 'Backend', 'Design', 'DevOps'])
// const activeCategory = ref('All')
</script>

<style>
/* Smooth transitions for dark mode */
main {
  transition: background-color 0.3s ease;
}

/* Animation for skills entry */
.fade-up-enter-active {
  transition: all 0.4s ease-out;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

/* Optional shimmer effect for loading state */
.shimmer {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.dark .shimmer {
  background: linear-gradient(90deg, #1e293b 25%, #334155 50%, #1e293b 75%);
}
</style>