<template>
  <section class="grid grid-cols-1 gap-8 py-16 text-center md:grid-cols-3">
    <!-- Loading State -->
    <div v-if="loading" class="col-span-3 text-center">Loading skills...</div>
    
    <!-- Error State -->
    <div v-if="error" class="col-span-3 text-red-500">{{ error }}</div>
    
    <!-- Skills Display -->
    <div v-for="skill in displayedSkills" :key="skill.id" class="skill-card">
      <img 
        :src="skill.image_url || '/placeholder-skill.png'" 
        :alt="skill.title"
        class="w-24 h-24 mx-auto mb-4"
      />
      <h3 class="mb-2 text-xl font-semibold">{{ skill.title }}</h3>
      <p class="text-gray-600">{{ skill.description }}</p>
      <span class="inline-block mt-2 text-sm text-gray-500">
        {{ skill.category }}
      </span>
    </div>
    
    <!-- Empty State -->
    <div v-if="!loading && !error && displayedSkills.length === 0" class="col-span-3">
      No skills found. Add some skills in the admin panel.
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { supabase } from '@/composables/useSupabase'

const props = defineProps({
  limit: {
    type: Number,
    default: null
  }
})

const skills = ref([])
const loading = ref(true)
const error = ref(null)

const displayedSkills = computed(() => {
  return props.limit ? skills.value.slice(0, props.limit) : skills.value
})

async function fetchSkills() {
  try {
    loading.value = true
    const { data, error: supabaseError } = await supabase
      .from('skills')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (supabaseError) throw supabaseError
    skills.value = data || []
  } catch (err) {
    error.value = err.message
    console.error('Error fetching skills:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchSkills()
})
</script>

<style scoped>
.skill-card {
  @apply p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow;
}
</style>