<template>
  <div>
    <!-- Skills Grid -->
    <section class="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
      <div v-if="loading" class="col-span-3 text-center">Loading skills...</div>
      <div v-if="error" class="col-span-3 text-red-500">{{ error }}</div>

      <!-- Skill Cards -->
      <div
        v-for="skill in displayedSkills"
        :key="skill.id"
        class="p-6 transition-shadow bg-white rounded-lg shadow cursor-pointer hover:shadow-md"
        @click="openSkillModal(skill)"
      >
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

      <div
        v-if="!loading && !error && displayedSkills.length === 0"
        class="col-span-3"
      >
        No skills found. Add some skills in the admin panel.
      </div>
    </section>

    <!-- 🔲 Skill Detail Modal -->
    <div
      v-if="selectedSkill"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      @click.self="closeSkillModal"
    >
      <div class="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
        <div class="flex items-start justify-between">
          <h2 class="text-2xl font-bold">{{ selectedSkill.title }}</h2>
          <button @click="closeSkillModal" class="text-xl text-gray-500 hover:text-red-500">×</button>
        </div>

        <img
          :src="selectedSkill.image_url || '/placeholder-skill.png'"
          :alt="selectedSkill.title"
          class="w-32 h-32 mx-auto mt-4 mb-4 rounded"
        />

        <p class="mb-4 text-center text-gray-700">{{ selectedSkill.description }}</p>

        <div v-if="selectedSkill.proficiency">
          <p class="font-semibold text-center">
            Proficiency: {{ selectedSkill.proficiency }}/10
          </p>
          <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div
              class="bg-primary h-2.5 rounded-full"
              :style="{ width: selectedSkill.proficiency * 10 + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
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

const selectedSkill = ref(null)

function openSkillModal(skill) {
  selectedSkill.value = skill
}

function closeSkillModal() {
  selectedSkill.value = null
}

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

onMounted(fetchSkills)
</script>

<style scoped>
/* No additional CSS needed; Tailwind classes are used directly in the template */
</style>
