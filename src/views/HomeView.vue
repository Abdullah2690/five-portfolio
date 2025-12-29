<template>
  <main class="w-full">
    <!-- Hero Section -->
    <div class="flex justify-center w-full px-4 py-8">
      <div class="w-full max-w-4xl">
        <HeroSection />
      </div>
    </div>

    <!-- Tools Section -->
    <section class="py-8 bg-gray-50 dark:bg-gray-900">
      <div class="w-full max-w-4xl px-4 mx-auto">
        <h2 class="mb-6 text-2xl font-medium text-center text-gray-900 dark:text-dark-text">Tools & Technologies</h2>
        <div class="overflow-hidden">
          <div class="flex animate-scroll">
            <div v-for="(tool, index) in [...tools, ...tools]" :key="`${tool.name}-${index}`" class="flex-shrink-0">
              <img :src="tool.src" :alt="tool.name" class="h-12 mx-4 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>

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

import cssImg from '@/assets/tools/css.png'
import htmlImg from '@/assets/tools/html.png'
import jsImg from '@/assets/tools/javascript.png'
import vueImg from '@/assets/tools/vue.png'
import phpImg from '@/assets/tools/php.png'
import nodeImg from '@/assets/tools/node.png'
import mysqlImg from '@/assets/tools/mysql.png'
import firestoreImg from '@/assets/tools/firestore.png'
import gitImg from '@/assets/tools/git.png'
import dockerImg from '@/assets/tools/docker.png'
import figmaImg from '@/assets/tools/figma.png'
import photoshopImg from '@/assets/tools/photoshop.png'
import illustratorImg from '@/assets/tools/illustrator.png'
import premiereImg from '@/assets/tools/premiere.png'

// Tools data
const tools = [
  { name: 'CSS', src: cssImg },
  { name: 'HTML', src: htmlImg },
  { name: 'JavaScript', src: jsImg },
  { name: 'Vue.js', src: vueImg },
  { name: 'PHP', src: phpImg },
  { name: 'Node.js', src: nodeImg },
  { name: 'MySQL', src: mysqlImg },
  { name: 'Firestore', src: firestoreImg },
  { name: 'Git', src: gitImg },
  { name: 'Docker', src: dockerImg },
  { name: 'Figma', src: figmaImg },
  { name: 'Photoshop', src: photoshopImg },
  { name: 'Illustrator', src: illustratorImg },
  { name: 'Premiere', src: premiereImg },
]

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

/* Scrolling animation for tools */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}
</style>