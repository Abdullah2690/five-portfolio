<template>
  <div class="space-y-8">
    <WorkCard 
      v-for="work in works" 
      :key="work.id" 
      :work="work" 
    />
  </div>
</template>

<script setup>
import WorkCard from './WorkCard.vue'

defineProps({
  works: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>