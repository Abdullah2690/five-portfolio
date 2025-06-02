<!-- SkillsSection.vue -->
<template>
  <section class="grid grid-cols-1 gap-8 py-16 text-center skills-section md:grid-cols-3">
    <div v-for="(skill, index) in skills" :key="index">
      <img :src="skill.image" class="w-24 h-24 mx-auto mb-4" />
      <h3 class="mb-2 text-xl font-semibold">{{ skill.title }}</h3>
      <p class="text-gray-600">{{ skill.description }}</p>
    </div>
  </section>
</template>

<script setup>
const skills = [
  {
    image: '/Silika_Arc.png',
    title: 'Product design',
    description: 'This is a template Figma file, turned into code using Anima.',
  },
  {
    image: '/Silika_Arc.png',
    title: 'Art direction',
    description: 'This is a template Figma file, turned into code using Anima.',
  },
  {
    image: '/Silika_Arc.png',
    title: 'Visual design',
    description: 'This is a template Figma file, turned into code using Anima.',
  },
]
</script>
