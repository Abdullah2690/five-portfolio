<template>
  <section class="py-12 transition-colors duration-300 rounded-lg shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-dark-card dark:to-dark-bg">
    <div class="container px-4 mx-auto">
      <div class="mb-10 text-center">
        <h2 class="text-3xl font-bold md:text-4xl dark:text-dark-text">Featured Projects</h2>
        <p class="mt-2 text-gray-600 dark:text-dark-muted">A few highlights of my recent work</p>
      </div>

      <div class="grid gap-8 md:grid-cols-2">
        <TransitionGroup name="fade" tag="div">
          <div
            v-for="work in limitedWorks"
            :key="work.id"
            class="relative p-4 transition-all duration-300 bg-white border rounded-lg shadow hover:-translate-y-1 hover:shadow-xl dark:bg-dark-card dark:border-dark-border dark:hover:shadow-dark-glow"
          >
            <!-- Featured badge -->
            <span class="absolute px-2 py-1 text-xs font-bold text-white rounded top-2 right-2 bg-primary dark:bg-primary-dark">
              Featured
            </span>

            <!-- Work thumbnail -->
            <router-link :to="`/works/${work.slug}`">
              <img
                :src="work.thumbnail"
                :alt="work.title"
                class="w-full h-auto mb-4 rounded-lg"
              />
            </router-link>

            <!-- Title -->
            <router-link :to="`/works/${work.slug}`">
              <h3 class="text-xl font-bold hover:text-primary dark:hover:text-primary-dark dark:text-dark-text">{{ work.title }}</h3>
            </router-link>

            <!-- Meta info -->
            <div class="flex items-center gap-4 my-2">
              <span class="px-2 py-1 text-sm font-bold text-white rounded-full bg-dark dark:bg-primary-600">{{ work.year }}</span>
              <span class="text-sm text-gray-500 dark:text-dark-muted">{{ work.category }}</span>
            </div>

            <!-- Description -->
            <div class="prose text-gray-700 max-w-none dark:prose-invert dark:text-dark-muted" v-html="parsedDescriptions[work.id] || ''" />
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script setup>
import { marked } from 'marked'
import { ref, onMounted } from 'vue'
import { supabase } from '@/composables/useSupabase'

const works = ref([])
const parsedDescriptions = ref({})
const limit = 3 // Limit for homepage

const fetchWorks = async () => {
  const { data, error } = await supabase
    .from('works')
    .select('*')
    .order('year', { ascending: false })
    .limit(limit)

  if (!error && data) {
    works.value = data
    for (const item of data) {
      parsedDescriptions.value[item.id] = marked(item.description || '')
    }
  }
}

onMounted(fetchWorks)

const limitedWorks = works
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.prose :deep(p) {
  margin: 0;
}

/* Custom dark mode transitions */
.dark .prose :deep(a) {
  color: theme('colors.primary.dark');
  transition: color 0.3s ease;
}

.dark .prose :deep(a:hover) {
  color: theme('colors.primary.600');
}
</style>