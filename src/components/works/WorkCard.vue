<template>
  <article 
    class="pb-8 border-b border-gray-200 dark:border-dark-border last:border-0"
    :aria-labelledby="`work-title-${work.id}`"
  >
    <div class="flex flex-col gap-6 md:flex-row">
      <!-- Work Thumbnail -->
      <div class="md:w-1/3">
        <router-link 
          :to="`/works/${work.slug}`"
          :aria-label="`View details of ${work.title}`"
        >
          <img 
            :src="work.thumbnail" 
            :alt="`Thumbnail for ${work.title}`"
            class="w-full h-auto transition rounded-lg hover:opacity-90"
            loading="lazy"
            width="320"
            height="180"
          >
        </router-link>
      </div>
      
      <!-- Work Details -->
      <div class="md:w-2/3">
        <router-link 
          :to="`/works/${work.slug}`"
          class="group"
        >
          <h3 
            :id="`work-title-${work.id}`"
            class="mb-2 text-2xl font-bold transition-colors group-hover:text-primary dark:group-hover:text-primary-dark dark:text-dark-text"
          >
            {{ work.title }}
          </h3>
        </router-link>
        
        <!-- Work Meta (Year and Category) -->
        <div class="flex items-center gap-4 mb-4">
          <span class="px-2 py-1 text-sm font-bold text-white bg-black rounded-full dark:bg-primary-dark">
            {{ work.year }}
          </span>
          <span class="text-gray-500 dark:text-dark-muted">{{ work.category }}</span>
        </div>
        
        <!-- Rendered Markdown Description -->
        <div 
          class="prose text-gray-700 dark:text-dark-muted max-w-none dark:prose-invert"
          v-html="parsedDescription"
        />
      </div>
    </div>
  </article>
</template>

<script setup>
import { marked } from 'marked'
import { computed } from 'vue'

const props = defineProps({
  work: {
    type: Object,
    required: true,
    validator: (value) => {
      return [
        'id',
        'title',
        'year',
        'category',
        'description',
        'slug',
        'thumbnail'
      ].every(key => key in value)
    }
  }
})

// Memoize the parsed description to avoid re-computation
const parsedDescription = computed(() => {
  return marked.parse(props.work.description || '', {
    breaks: true,
    gfm: true
  })
})
</script>

<style scoped>
.prose :deep(p) {
  margin: 0;
}

/* Smooth transitions for dark mode */
article {
  transition: border-color 0.3s ease;
}
</style>