<template>
  <article v-if="work">
    <!-- Work Title and Metadata -->
    <h1 class="mb-2 text-3xl font-bold md:text-4xl">{{ work.title }}</h1>
    <div class="flex items-center gap-4 mb-8">
      <span class="px-3 py-1 text-sm font-bold text-white rounded-full bg-dark">
        {{ work.year }}
      </span>
      <span class="text-gray-500">{{ work.category }}</span>
    </div>

    <!-- Featured Image with fallback -->
    <div class="prose max-w-none" v-if="imageUrl">
      <img
        :src="imageUrl"
        :alt="work.title"
        class="w-full h-auto mb-8 rounded-lg"
        loading="lazy"
        @error="handleImageError"
      />
    </div>

    <!-- Markdown-rendered Content with safety checks -->
    <div 
      class="prose max-w-none" 
      v-if="parsedContent"
      v-html="parsedContent"
    />
    <div v-else class="text-gray-500">
      No content available for this work.
    </div>
  </article>
  <div v-else class="text-red-500">
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
      return value && value.title // Basic validation
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
    return marked(props.work.content)
  } catch (err) {
    console.error('Error parsing markdown:', err)
    return `<p>Error displaying content</p>`
  }
})
</script>

<style scoped>
/* [Your existing styles remain the same] */
</style>