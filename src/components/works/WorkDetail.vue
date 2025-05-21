<template>
  <article>
    <!-- Work Title and Subtitle -->
    <h1 class="text-3xl md:text-4xl font-bold mb-2">{{ work.title }}</h1>
    <div class="flex items-center gap-4 mb-8">
      <span class="bg-dark text-white px-3 py-1 rounded-full text-sm font-bold">
        {{ work.year }}
      </span>
      <span class="text-gray-500">{{ work.category }}</span>
    </div>
    
    <!-- Work Content -->
    <div class="prose max-w-none">
      <!-- Featured Image -->
      <img 
        :src="work.featuredImage" 
        :alt="work.title"
        class="w-full h-auto rounded-lg mb-8"
      >
      
      <!-- Work Description -->
      <p class="text-lg mb-6">{{ work.description }}</p>
      
      <!-- Additional Content (from your screenshot) -->
      <h2 class="text-2xl font-bold mb-4">Heading 1</h2>
      <h3 class="text-xl font-semibold mb-3">Heading 2</h3>
      <p class="mb-6">{{ work.additionalContent }}</p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  work: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
/* Custom styling for the content */
.prose {
  color: #21243D;
  line-height: 1.6;
}

.prose h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}
</style>