<template>
  <div class="container px-4 py-12 mx-auto">
    <h1 class="mb-8 text-3xl font-bold">My Work</h1>

    <div v-if="loading" class="text-center text-gray-500">Loading works...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    <WorksList :works="works" v-else />
  </div>
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
    const { data, error: supabaseError } = await supabase
      .from('works')
      .select('*')

    if (supabaseError) throw supabaseError
    works.value = data
  } catch (err) {
    error.value = err.message
    console.error('Error fetching works:', err)
  } finally {
    loading.value = false
  }
})
</script>
