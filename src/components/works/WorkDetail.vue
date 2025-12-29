<template>
  <article v-if="work">
    <!-- Work Title and Metadata -->
    <h1 class="mb-2 text-3xl font-bold md:text-4xl dark:text-dark-text">{{ work.title }}</h1>
    <div class="flex flex-wrap items-center gap-4 mb-8">
      <span class="px-3 py-1 text-sm font-bold text-white rounded-full bg-dark dark:bg-primary-dark">
        {{ work.year }}
      </span>
      <span class="text-gray-500 dark:text-dark-muted">{{ work.category }}</span>
    </div>

    <!-- Featured Image with fallback -->
    <div class="mb-8" v-if="imageUrl && !imageError">
      <img
        :src="imageUrl"
        :alt="`Featured image for ${work.title}`"
        class="w-full h-auto transition-all rounded-lg shadow-md hover:shadow-lg dark:shadow-dark-glow"
        loading="lazy"
        @error="handleImageError"
      />
    </div>
    <div 
      v-else-if="imageError"
      class="flex items-center justify-center p-8 mb-8 text-gray-400 bg-gray-100 rounded-lg dark:bg-dark-card/30 dark:text-dark-muted"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span>Image unavailable</span>
    </div>

    <!-- Markdown-rendered Content -->
    <div 
      class="prose max-w-none dark:prose-invert"
      v-if="parsedContent"
      v-html="parsedContent"
    />
    <div 
      v-else 
      class="p-4 text-gray-500 bg-gray-100 rounded-lg dark:bg-dark-card/30 dark:text-dark-muted"
    >
      No content available for this work.
    </div>
  </article>
  <div 
    v-else 
    class="p-4 text-red-500 bg-red-100 rounded-lg dark:bg-red-900/30 dark:text-red-300"
  >
    Work data is not available.
  </div>
</template>

<script setup>
import { marked } from 'marked'
import { computed, ref } from 'vue'

const props = defineProps({
  work: {
    type: Object,
    required: true,
    validator: (value) => {
      return value && value.title && value.year && value.category
    }
  },
  imageUrl: {
    type: String,
    default: ''
  }
})

const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
  console.error('Failed to load image:', props.imageUrl)
}

const parsedContent = computed(() => {
  if (!props.work?.content) return null
  try {
    return marked(props.work.content, {
      breaks: true,
      gfm: true
    })
  } catch (err) {
    console.error('Error parsing markdown:', err)
    return `<p class="text-red-500 dark:text-red-300">Error displaying content</p>`
  }
})
</script>

<style scoped>
/* Smooth transitions for dark mode */
article {
  transition: color 0.3s ease;
}

.prose :deep(img) {
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.dark .prose :deep(img) {
  box-shadow: 0 4px 14px 0 rgba(125, 211, 252, 0.2);
}

.prose :deep(a) {
  color: #FF6464;
  text-decoration: none;
}
.prose :deep(a):hover {
  text-decoration: underline;
}
.dark .prose :deep(a) {
  color: #FF8383;
}

.prose :deep(code) {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.25rem;
  background-color: rgb(243 244 246);
}
.dark .prose :deep(code) {
  background-color: #1e293b;
}
</style>