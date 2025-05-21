<template>
  <!-- Main container with max-width for large screens -->
  <main class="container mx-auto px-4 py-8">
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Recent Posts Section -->
    <PostsSection />
    
    <!-- Featured Works Section -->
    <WorksSection />
  </main>
</template>

<script setup>
// Import section components
import HeroSection from '@/components/home/HeroSection.vue'
import PostsSection from '@/components/home/PostsSection.vue'
import WorksSection from '@/components/home/WorksSection.vue'
</script>

<style scoped>
/* Container styling for consistent layout */
.container {
  max-width: 860px; /* Matches your design's content width */
}
</style>