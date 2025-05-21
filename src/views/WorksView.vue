<template>
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Work</h1>
    
    <!-- Work List Component -->
    <WorkList :works="works" />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/composables/useSupabase'
import WorkList from '@/components/works/WorkList.vue'

const works = ref([])

onMounted(async () => {
  // Fetch all works from Supabase, ordered by year (newest first)
  const { data } = await supabase
    .from('works')
    .select('*')
    .order('year', { ascending: false })
    
  works.value = data
})
</script>