<template>
  <main class="container mx-auto px-4 py-8">
    <!-- Back button to return to works list -->
    <router-link 
      to="/works" 
      class="inline-block mb-6 text-secondary hover:underline"
    >
      ← Back to Works
    </router-link>
    
    <!-- Work Detail Component -->
    <WorkDetail :work="work" v-if="work" />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/composables/useSupabase'
import WorkDetail from '@/components/works/WorkDetail.vue'

const route = useRoute()
const work = ref(null)

onMounted(async () => {
  // Fetch single work based on URL slug
  const { data } = await supabase
    .from('works')
    .select('*')
    .eq('slug', route.params.slug)
    .single()
    
  work.value = data
})
</script>