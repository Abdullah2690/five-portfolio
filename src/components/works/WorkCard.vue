<template>
  <article class="pb-8 border-b border-gray-200 last:border-0">
    <div class="flex flex-col gap-6 md:flex-row">
      <!-- Work Thumbnail -->
      <div class="md:w-1/3">
        <router-link :to="`/works/${work.slug}`">
          <img 
            :src="work.thumbnail" 
            :alt="work.title"
            class="w-full h-auto transition rounded-lg hover:opacity-90"
          >
        </router-link>
      </div>
      
      <!-- Work Details -->
      <div class="md:w-2/3">
        <router-link :to="`/works/${work.slug}`">
          <h3 class="mb-2 text-2xl font-bold transition hover:text-primary">{{ work.title }}</h3>
        </router-link>
        
        <!-- Work Meta (Year and Category) -->
        <div class="flex items-center gap-4 mb-4">
          <span class="px-2 py-1 text-sm font-bold text-white rounded-full bg-dark">
            {{ work.year }}
          </span>
          <span class="text-gray-500">{{ work.category }}</span>
        </div>
        
        <!-- Rendered Markdown Description -->
        <div class="prose text-gray-700 max-w-none" v-html="parsedDescription" />
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

const parsedDescription = computed(() => marked(props.work.description || ''))
</script>

<style scoped>
.prose :deep(p) {
  margin: 0;
}
</style>
