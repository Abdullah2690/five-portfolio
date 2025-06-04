<template>
  <!-- Main container with max-width for large screens -->
  <main class="container px-4 py-8 mx-auto">
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Skills Section -->
    <section class="py-12 bg-gray-50">
    <h2 class="mb-8 text-2xl font-medium">Featured Skills</h2>
    <SkillsSection :limit="3" />
    </section>
    
    <!-- Featured Works Section -->
    <WorksSection />
  </main>
</template>

<script setup>
// Import section components
import HeroSection from '@/components/home/HeroSection.vue'
import SkillsSection from '@/components/home/SkillsSection.vue'
import WorksSection from '@/components/home/WorksSection.vue'
</script>

<style scoped>
/* Container styling for consistent layout */
.container {
  max-width: 860px; /* Matches your design's content width */
}
</style>