<template>
  <main class="w-full">
    <!-- Hero Section -->
    <div class="flex justify-center w-full px-4 py-8">
      <div class="w-full max-w-4xl">
        <HeroSection />
      </div>
    </div>

    <!-- Skills Section - Updated dark mode styling -->
    <section 
      class="flex justify-center w-full py-12 transition-colors duration-300"
      aria-labelledby="featured-skills-heading"
    >
      <div class="w-full max-w-4xl px-4">
        <div class="p-6 rounded-xl bg-gray-30"> <!-- Added opacity and rounded corners -->
          <h2 
            id="featured-skills-heading"
            class="mb-6 text-2xl font-medium text-gray-900 dark:text-dark-text"
          >
            Featured Skills
          </h2>
          <SkillsSection :limit="3" />
          <div class="flex justify-center md:justify-start">
            <router-link
              to="/skills"
              class="inline-flex items-center mt-6 text-primary hover:underline dark:text-primary-dark dark:hover:text-primary group"
            >
              View All Skills
              <span class="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Works Section -->
    <section 
      class="flex justify-center w-full py-12"
      aria-labelledby="featured-projects-heading"
    >
      <div class="w-full max-w-4xl px-4">
        <h2 
          id="featured-projects-heading"
          class="mb-6 text-2xl font-medium text-gray-900 dark:text-dark-text"
        >
          Featured Projects
        </h2>
        <WorkList :works="limitedWorks" />
        <div class="flex justify-center md:justify-start">
          <router-link
            to="/works"
            class="inline-flex items-center mt-6 text-primary hover:underline dark:text-primary-dark dark:hover:text-primary group"
          >
            View All Projects
            <span class="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { supabase } from '@/composables/useSupabase'

// Components
import HeroSection from '@/components/home/HeroSection.vue'
import SkillsSection from '@/components/home/SkillsSection.vue'
import WorkList from '@/components/works/WorkList.vue'

// State
const works = ref([])
const loading = ref(true)
const error = ref(null)

// Fetch works data
onMounted(async () => {
  try {
    loading.value = true
    const { data, error: supabaseError } = await supabase
      .from('works')
      .select('*')
      .order('year', { ascending: false })
      .limit(5)

    if (supabaseError) throw supabaseError
    works.value = data || []
  } catch (err) {
    error.value = err.message || 'Failed to load projects'
    console.error('Error fetching works:', err)
  } finally {
    loading.value = false
  }
})

// Computed properties
const limitedWorks = computed(() => {
  return works.value.slice(0, 3)
})
</script>

<style>
/* Smooth transitions for dark mode */
section {
  transition: background-color 0.3s ease;
}
</style>