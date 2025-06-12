<template>
  <div v-if="loading" class="py-10 text-center text-gray-500">Loading...</div>

  <WorkDetail 
    v-else-if="work" 
    :work="work" 
    :imageUrl="work.featured_image" 
  />

  <div v-else class="py-10 text-center text-red-500">Work not found.</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { createClient } from '@supabase/supabase-js'
import WorkDetail from '@/components/works/WorkList.vue' // adjust path as needed

const route = useRoute()
const slug = route.params.slug

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

const work = ref(null)
const loading = ref(true)

onMounted(async () => {
  const { data, error } = await supabase
    .from('work')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching work:', error)
  } else {
    work.value = data
  }

  loading.value = false
})
</script>