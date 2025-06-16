<template>
  <!-- Main container with max-width for large screens -->
  <main class="container px-4 py-8 mx-auto">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Skills Section -->
    <section class="py-12 bg-gray-50">
      <h2 class="mb-6 text-2xl font-medium">Featured Skills</h2>
      <SkillsSection :limit="3" />
      <router-link
        to="/skills"
        class="inline-block mt-6 text-primary hover:underline"
      >
        View All Skills →
      </router-link>
    </section>

    <!-- Featured Works Section -->
    <section class="py-12">
      <h2 class="mb-6 text-2xl font-medium">Featured Projects</h2>
      <WorkList :works="limitedWorks" />

      <router-link
        to="/works"
        class="inline-block mt-6 text-primary hover:underline"
      >
        View All Projects →
      </router-link>
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

// Works data
const works = ref([])

onMounted(async () => {
  const { data, error } = await supabase
    .from('works')
    .select('*')
    .order('year', { ascending: false })

  if (!error) {
    works.value = data
  } else {
    console.error('Failed to fetch works:', error)
  }
})

// Limit works to 3
const limitedWorks = computed(() => works.value.slice(0, 3))
</script>

<style scoped>
.container {
  max-width: 860px;
}
</style>
