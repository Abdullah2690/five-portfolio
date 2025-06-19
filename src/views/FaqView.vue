<template>
  <main class="flex justify-center w-full px-4 py-12">
    <div class="w-full max-w-4xl">
      <!-- Header Section -->
      <div class="mb-12 text-center">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-dark-text md:text-4xl">
          <span class="relative inline-block">
            Frequently Asked Questions
            <span class="absolute bottom-0 left-0 w-full h-1 -mb-1 bg-primary dark:bg-primary-dark opacity-20"></span>
          </span>
        </h1>
        <p class="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-dark-muted">
          Common questions about my services and workflow
        </p>
      </div>

      <!-- FAQ Accordion -->
      <div class="max-w-3xl mx-auto space-y-4">
        <transition-group name="fade-up">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index" 
            class="overflow-hidden transition-all duration-200 rounded-xl"
            :class="{ 'bg-gray-50 dark:bg-dark-card/30': !faq.open, 'bg-white dark:bg-dark-card shadow-md': faq.open }"
          >
            <button 
              @click="toggleFaq(index)"
              class="flex items-center justify-between w-full p-6 text-left transition-colors hover:bg-gray-100 dark:hover:bg-dark-border/50"
              :aria-expanded="faq.open"
              :aria-controls="'faq-answer-' + index"
            >
              <h3 class="font-medium text-gray-900 dark:text-dark-text">{{ faq.question }}</h3>
              <ChevronDownIcon 
                class="w-5 h-5 text-gray-500 transition-transform duration-200 dark:text-dark-muted"
                :class="{ 'transform rotate-180': faq.open }"
              />
            </button>
            
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform -translate-y-2 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="transform translate-y-0 opacity-100"
              leave-to-class="transform -translate-y-2 opacity-0"
            >
              <div 
                v-show="faq.open" 
                class="px-6 pb-6 text-gray-600 dark:text-dark-muted"
                :id="'faq-answer-' + index"
              >
                <div class="prose dark:prose-invert max-w-none">
                  {{ faq.answer }}
                </div>
              </div>
            </transition>
          </div>
        </transition-group>
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
    answer: "Timelines vary based on complexity, but I usually provide a project estimate after understanding your requirements in detail.",
    open: false
  },
  {
    question: "Do you offer support after project completion?",
    answer: "Yes, I provide ongoing support and maintenance services after deployment to ensure your project runs smoothly.",
    open: false
  },
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in modern web technologies including Vue.js, React, Node.js, and databases like PostgreSQL and MongoDB.",
    open: false
  },
  {
    question: "Can you help with UI/UX design?",
    answer: "Absolutely! I can assist with wireframes, design mockups, and full UI/UX workflows tailored to your brand.",
    open: false
  },
  {
    question: "Is there a consultation fee?",
    answer: "No, the initial consultation is completely free. We'll discuss your needs and I'll provide a quote if you decide to proceed.",
    open: false
  },
  {
    question: "Do you build both websites and web applications?",
    answer: "Yes, I build responsive websites as well as full-stack web applications with modern frameworks.",
    open: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}
</script>

<style>
/* Smooth transitions for dark mode */
main {
  transition: background-color 0.3s ease;
}

/* FAQ item transitions */
.fade-up-move,
.fade-up-enter-active {
  transition: all 0.3s ease;
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.fade-up-leave-active {
  position: absolute;
}
</style>