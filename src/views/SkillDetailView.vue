<template>
  <main class="container px-4 py-12 mx-auto">
    <div v-if="loading" class="text-center">Loading skill details...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-else-if="skill" class="max-w-3xl mx-auto">
      <div class="flex flex-col gap-8 md:flex-row">
        <div class="md:w-1/3">
          <img 
            :src="skill.image_url || '/images/skill-placeholder.png'" 
            :alt="skill.title"
            class="w-full h-auto rounded-lg"
          />
        </div>
        <div class="md:w-2/3">
          <h1 class="mb-4 text-3xl font-bold">{{ skill.title }}</h1>
          <p class="mb-6 text-gray-600">{{ skill.description }}</p>
          
          <div v-if="skill.proficiency" class="mb-6">
            <h3 class="mb-2 font-semibold">Proficiency: {{ skill.proficiency }}/10</h3>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                class="bg-primary h-2.5 rounded-full" 
                :style="{ width: `${skill.proficiency * 10}%` }"
              ></div>
            </div>
          </div>

          <router-link 
            to="/skills" 
            class="inline-block mt-6 text-primary hover:underline"
          >
            ← Back to All Skills
          </router-link>
        </div>
      </div>
    </div>
    <div v-else class="text-center">Skill not found</div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/composables/useSupabase'

const route = useRoute()
const skill = ref(null)
const loading = ref(false)
const error = ref(null)

onMounted(async () => {
  try {
    loading.value = true
    const { data, error: supabaseError } = await supabase
      .from('skills')
      .select('*')
      .eq('slug', route.params.slug)
      .single()
    
    if (supabaseError) throw supabaseError
    skill.value = data
  } catch (err) {
    error.value = err.message
    console.error('Error fetching skill:', err)
  } finally {
    loading.value = false
  }
})
</script>