<template>
  <article class="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
    <!-- Post Title -->
    <h3 class="text-2xl font-bold mb-2">{{ post.title }}</h3>
    
    <!-- Post Meta (Date and Tags) -->
    <div class="flex gap-4 mb-4 text-sm">
      <span class="text-gray-500">{{ formatDate(post.date) }}</span>
      <span class="text-gray-700">|</span>
      <span class="text-gray-500">{{ post.tags.join(', ') }}</span>
    </div>
    
    <!-- Post Excerpt -->
    <p class="text-gray-700">{{ post.excerpt }}</p>
  </article>
</template>

<script setup>
import { formatDate } from '@/utils/helpers'

// Define props with TypeScript-like syntax for better IDE support
defineProps({
  post: {
    type: Object,
    required: true,
    validator: (value) => {
      return [
        'id',
        'title',
        'date',
        'tags',
        'excerpt'
      ].every(key => key in value)
    }
  }
})
</script>