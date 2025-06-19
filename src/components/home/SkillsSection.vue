<template>
  <div>
    <!-- Skills Grid -->
    <section class="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
      <!-- Loading and Error States -->
      <div 
        v-if="loading" 
        class="col-span-3 text-gray-600 dark:text-dark-muted"
      >
        <div class="inline-flex items-center gap-2">
          <span class="inline-block w-4 h-4 border-2 rounded-full border-primary dark:border-primary-dark border-t-transparent animate-spin"></span>
          Loading skills...
        </div>
      </div>
      <div 
        v-if="error" 
        class="col-span-3 text-red-500 dark:text-danger-dark"
      >
        {{ error }}
      </div>

      <!-- Skill Cards -->
      <div
        v-for="skill in displayedSkills"
        :key="skill.id"
        class="p-6 transition-all duration-300 bg-white rounded-lg shadow cursor-pointer hover:shadow-md dark:bg-dark-card dark:hover:shadow-dark-glow"
        @click="openSkillModal(skill)"
        role="button"
        tabindex="0"
        @keyup.enter="openSkillModal(skill)"
        @keyup.space="openSkillModal(skill)"
      >
        <img
          :src="skill.image_url || '/placeholder-skill.png'"
          :alt="`${skill.title} icon`"
          class="w-24 h-24 mx-auto mb-4 transition-transform hover:scale-105"
          loading="lazy"
          width="96"
          height="96"
        />
        <h3 class="mb-2 text-xl font-semibold dark:text-dark-text">{{ skill.title }}</h3>
        <p class="text-gray-600 dark:text-dark-muted">{{ skill.description }}</p>
        <span class="inline-block mt-2 text-sm text-gray-500 dark:text-dark-muted">
          {{ skill.category }}
        </span>
      </div>

      <!-- Empty State -->
      <div
        v-if="!loading && !error && displayedSkills.length === 0"
        class="col-span-3 py-8 text-gray-500 dark:text-dark-muted"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 mx-auto mb-4 text-gray-400 dark:text-dark-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        No skills found. Add some skills in the admin panel.
      </div>
    </section>

    <!-- Skill Detail Modal -->
    <div
      v-if="selectedSkill"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 dark:bg-opacity-70"
      @click.self="closeSkillModal"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="`skill-modal-title-${selectedSkill.id}`"
    >
      <div class="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg dark:bg-dark-card">
        <div class="flex items-start justify-between">
          <h2 
            :id="`skill-modal-title-${selectedSkill.id}`"
            class="text-2xl font-bold dark:text-dark-text"
          >
            {{ selectedSkill.title }}
          </h2>
          <button 
            @click="closeSkillModal" 
            class="text-xl text-gray-500 hover:text-red-500 dark:hover:text-danger-dark"
            aria-label="Close skill details"
          >
            &times;
          </button>
        </div>

        <img
          :src="selectedSkill.image_url || '/placeholder-skill.png'"
          :alt="`${selectedSkill.title} illustration`"
          class="w-32 h-32 mx-auto mt-4 mb-4 transition-transform rounded hover:scale-110"
          loading="lazy"
          width="128"
          height="128"
        />

        <p class="mb-4 text-center text-gray-700 dark:text-dark-muted">
          {{ selectedSkill.description }}
        </p>

        <div v-if="selectedSkill.proficiency" class="mt-6">
          <p class="font-semibold text-center dark:text-dark-text">
            Proficiency: {{ selectedSkill.proficiency }}/10
          </p>
          <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2 dark:bg-dark-border">
            <div
              class="bg-primary h-2.5 rounded-full dark:bg-primary-dark"
              :style="{ width: `${selectedSkill.proficiency * 10}%` }"
              role="progressbar"
              :aria-valuenow="selectedSkill.proficiency"
              aria-valuemin="0"
              aria-valuemax="10"
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
    default: null,
    validator: (value) => value === null || value > 0
  }
})

const skills = ref([])
const loading = ref(true)
const error = ref(null)
const selectedSkill = ref(null)

const displayedSkills = computed(() => {
  return props.limit ? skills.value.slice(0, props.limit) : skills.value
})

async function fetchSkills() {
  try {
    loading.value = true
    const { data, error: supabaseError } = await supabase
      .from('skills')
      .select('*')
      .order('proficiency', { ascending: false })
      .order('created_at', { ascending: false })

    if (supabaseError) throw supabaseError
    skills.value = data || []
  } catch (err) {
    error.value = err.message || 'Failed to load skills'
    console.error('Error fetching skills:', err)
  } finally {
    loading.value = false
  }
}

function openSkillModal(skill) {
  selectedSkill.value = skill
  // Prevent background scrolling when modal is open
  document.body.style.overflow = 'hidden'
}

function closeSkillModal() {
  selectedSkill.value = null
  // Restore background scrolling
  document.body.style.overflow = ''
}

onMounted(() => {
  fetchSkills()
  // Add keyboard event listener for ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && selectedSkill.value) {
      closeSkillModal()
    }
  })
})
</script>