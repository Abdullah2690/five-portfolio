<template>
  <div class="space-y-8">
    <WorkCard 
      v-for="work in displayedWorks" 
      :key="work.id" 
      :work="work" 
    />
  </div>
</template>

<script setup>
import WorkCard from './WorkCard.vue'
import { computed } from 'vue'

const props = defineProps({
  works: {
    type: Array,
    required: true,
    default: () => []
  },
  limit: {
    type: Number,
    default: null
  }
})

const displayedWorks = computed(() => {
  return props.limit ? props.works.slice(0, props.limit) : props.works
})
</script>
