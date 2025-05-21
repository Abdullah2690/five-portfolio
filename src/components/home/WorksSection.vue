<template>
  <section>
    <h2 class="text-2xl font-medium mb-6">Featured works</h2>
    
    <!-- Works List -->
    <div class="space-y-8">
      <WorkCard 
        v-for="work in works" 
        :key="work.id" 
        :work="work" 
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/composables/useSupabase'
import WorkCard from '@/components/works/WorkCard.vue'

const works = ref([])

onMounted(async () => {
  // Fetch 3 most recent works
  const { data } = await supabase
    .from('works')
    .select('*')
    .order('year', { ascending: false })
    //.limit(3)
    
  works.value = data
})
</script>