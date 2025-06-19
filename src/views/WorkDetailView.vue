<template>
  <main class="flex justify-center w-full px-4 py-8">
    <div class="w-full max-w-4xl">
      <router-link 
        to="/works" 
        class="inline-flex items-center mb-6 text-secondary hover:underline dark:text-secondary-dark dark:hover:text-secondary group"
      >
        <span class="mr-1 transition-transform group-hover:-translate-x-1">←</span>
        Back to Works
      </router-link>

      <template v-if="work && imageUrl">
        <WorkDetail :work="work" :imageUrl="imageUrl" />
      </template>
      
      <!-- Loading State -->
      <div 
        v-else-if="loading"
        class="flex items-center justify-center py-12 text-gray-500 dark:text-dark-muted"
      >
        <div class="inline-flex items-center gap-2">
          <span class="inline-block w-4 h-4 border-2 rounded-full border-primary dark:border-primary-dark border-t-transparent animate-spin"></span>
          Loading project details...
        </div>
      </div>
      
      <!-- Error State -->
      <div 
        v-else-if="error"
        class="p-4 text-red-500 bg-red-100 rounded-lg dark:bg-red-900/30 dark:text-red-300"
      >
        {{ error }}
      </div>
      
      <div 
        v-else
        class="p-4 text-gray-500 bg-gray-100 rounded-lg dark:bg-dark-card/30 dark:text-dark-muted"
      >
        Project not found
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/composables/useSupabase'
import WorkDetail from '@/components/works/WorkDetail.vue'

const route = useRoute()
const work = ref(null)
const imageUrl = ref(null)
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    loading.value = true
    error.value = null
    
    // Fetch work data
    const { data, error: fetchError } = await supabase
      .from('works')
      .select('*')
      .eq('slug', route.params.slug)
      .single()

    if (fetchError) throw fetchError
    if (!data) throw new Error('Project not found')
    
    work.value = data

    // Get image URL from Supabase Storage
    const { data: publicData, error: urlError } = supabase
      .storage
      .from('content-bucket') // Replace with your bucket name
      .getPublicUrl(data.featured_image)

    if (urlError) throw urlError
    
    imageUrl.value = publicData.publicUrl
  } catch (err) {
    error.value = err.message || 'Failed to load project details'
    console.error('Error:', err)
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