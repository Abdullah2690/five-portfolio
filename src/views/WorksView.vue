<template>
  <main class="flex justify-center w-full px-4 py-12">
    <div class="w-full max-w-4xl">
      <h1 class="mb-8 text-3xl font-bold text-gray-900 dark:text-dark-text">My Work</h1>

      <!-- Loading State -->
      <div 
        v-if="loading" 
        class="flex items-center justify-center py-12 text-gray-500 dark:text-dark-muted"
      >
        <div class="inline-flex items-center gap-2">
          <span class="inline-block w-4 h-4 border-2 rounded-full border-primary dark:border-primary-dark border-t-transparent animate-spin"></span>
          Loading works...
        </div>
      </div>

      <!-- Error State -->
      <div 
        v-else-if="error" 
        class="p-4 text-red-500 bg-red-100 rounded-lg dark:bg-red-900/30 dark:text-red-300"
      >
        {{ error }}
      </div>

      <!-- Success State -->
      <WorksList 
        v-else 
        :works="works" 
        class="space-y-12"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import WorksList from '@/components/works/WorkList.vue'
import { supabase } from '@/composables/useSupabase'

const works = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    loading.value = true
    const { data, error: supabaseError } = await supabase
      .from('works')
      .select('*')
      .order('year', { ascending: false }) // Added sorting by year

    if (supabaseError) throw supabaseError
    works.value = data || []
  } catch (err) {
    error.value = err.message || 'Failed to load works'
    console.error('Error fetching works:', err)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
/* Smooth transitions for dark mode */
main {
  transition: background-color 0.3s ease;
}
</style>