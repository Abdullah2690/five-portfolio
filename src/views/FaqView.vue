<template>
  <main class="container px-4 py-12 mx-auto">
    <h1 class="mb-8 text-3xl font-bold text-center">Frequently Asked Questions</h1>
    
    <div class="max-w-3xl mx-auto space-y-4">
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <button 
          @click="toggleFaq(index)"
            class="flex items-center justify-between w-full p-4 text-left rounded-lg bg-gray-50"
            :aria-expanded="faq.open"
            :aria-controls="'faq-answer-' + index"
        >
          <h3 class="font-medium">{{ faq.question }}</h3>
          <ChevronDownIcon 
            class="w-5 h-5 transition-transform duration-200"
            :class="{ 'transform rotate-180': faq.open }"
          />
        </button>
        <div 
            v-show="faq.open" 
            class="p-4 text-gray-600" 
            :id="'faq-answer-' + index"
            >
            {{ faq.answer }}
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

const faqs = ref([
  {
    question: "How long do projects typically take?",
    answer: "Timelines vary based on complexity, but we usually provide a project estimate after understanding your requirements in detail.",
    open: false
  },
  {
    question: "Do you offer support after project completion?",
    answer: "Yes, we provide ongoing support and maintenance services after deployment to ensure your project runs smoothly.",
    open: false
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web and mobile technologies such as Vue.js, Flutter, Firebase, and MySQL/PostgreSQL.",
    open: false
  },
  {
    question: "Can you help with UI/UX design?",
    answer: "Absolutely! We can assist with wireframes, design mockups, and full UI/UX workflows tailored to your brand.",
    open: false
  },
  {
    question: "Is there a consultation fee?",
    answer: "No, the initial consultation is completely free. We’ll discuss your needs and provide a quote if you decide to proceed.",
    open: false
  },
  {
    question: "Do you build both websites and mobile apps?",
    answer: "Yes, we build responsive websites as well as cross-platform mobile applications for Android and iOS.",
    open: false
  }
])

  

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}
</script>