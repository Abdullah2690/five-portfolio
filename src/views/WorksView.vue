<template>
  <main class="container px-4 py-8 mx-auto">
    <h1 class="mb-8 text-3xl font-bold">Work</h1>
    
    <!-- Work List Component -->
    <WorkList :works="works" />
  </main>
  <section class="container px-4 py-8 mx-auto">
    <!-- <h2 class="mb-4 text-2xl font-bold">Add New Work</h2> -->
    
    <!-- Add Work Form Component -->
    <!-- <AddWorkForm /> -->
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/composables/useSupabase'
import WorkList from '@/components/works/WorkList.vue'
//import AddWorkForm from '@/components/works/AddWorkForm.vue'

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