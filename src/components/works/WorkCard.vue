<template>
  <article class="border-b border-gray-200 pb-8 last:border-0">
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Work Thumbnail -->
      <div class="md:w-1/3">
        <router-link :to="`/works/${work.slug}`">
          <img 
            :src="work.thumbnail" 
            :alt="work.title"
            class="w-full h-auto rounded-lg transition hover:opacity-90"
          >
        </router-link>
      </div>
      
      <!-- Work Details -->
      <div class="md:w-2/3">
        <router-link :to="`/works/${work.slug}`">
          <h3 class="text-2xl font-bold mb-2 hover:text-primary transition">{{ work.title }}</h3>
        </router-link>
        
        <!-- Work Meta (Year and Category) -->
        <div class="flex items-center gap-4 mb-4">
          <span class="bg-dark text-white px-2 py-1 rounded-full text-sm font-bold">
            {{ work.year }}
          </span>
          <span class="text-gray-500">{{ work.category }}</span>
        </div>
        
        <!-- Work Description -->
        <p class="text-gray-700">{{ work.description }}</p>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
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
</script>