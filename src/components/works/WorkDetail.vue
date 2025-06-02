<template>
  <article>
    <!-- Work Title and Subtitle -->
    <h1 class="mb-2 text-3xl font-bold md:text-4xl">{{ work.title }}</h1>
    <div class="flex items-center gap-4 mb-8">
      <span class="px-3 py-1 text-sm font-bold text-white rounded-full bg-dark">
        {{ work.year }}
      </span>
      <span class="text-gray-500">{{ work.category }}</span>
    </div>
    
    <!-- Work Content -->
  
      
      <!-- Featured Image -->
      <div class="prose max-w-none">
      <img 
        :src="imageUrl" 
        :alt="work.title" 
        class="w-full h-auto mb-8 rounded-lg" 
      />

      
      <!-- Work Description -->
      <p class="mb-6 text-lg">{{ work.description }}</p>
      
      <!-- Additional Content (from your screenshot) -->
      <h2 class="mb-4 text-2xl font-bold">Heading 1</h2>
      <h3 class="mb-3 text-xl font-semibold">Heading 2</h3>
      <p class="mb-6">{{ work.additionalContent }}</p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  work: Object,
  imageUrl: String
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