<template>
  <main class="flex justify-center w-full px-4 py-8">
    <div class="w-full max-w-4xl">
      <h1 class="mb-8 text-3xl font-bold text-gray-900 dark:text-dark-text">Contact Me</h1>
      
      <div class="grid gap-12 md:grid-cols-2">
        <!-- Contact Form -->
        <div class="p-6 rounded-xl bg-gray-50 dark:bg-dark-card/30">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block mb-2 font-medium text-gray-700 dark:text-dark-muted">Name</label>
              <input
                v-model="form.name"
                type="text"
                id="name"
                required
                class="w-full px-4 py-2 transition-all border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark-card dark:border-dark-border dark:text-dark-text dark:focus:ring-primary-dark"
              >
            </div>
            
            <div>
              <label for="email" class="block mb-2 font-medium text-gray-700 dark:text-dark-muted">Email</label>
              <input
                v-model="form.email"
                type="email"
                id="email"
                required
                class="w-full px-4 py-2 transition-all border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark-card dark:border-dark-border dark:text-dark-text dark:focus:ring-primary-dark"
              >
            </div>
            
            <div>
              <label for="message" class="block mb-2 font-medium text-gray-700 dark:text-dark-muted">Message</label>
              <textarea
                v-model="form.message"
                id="message"
                rows="6"
                required
                class="w-full px-4 py-2 transition-all border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark-card dark:border-dark-border dark:text-dark-text dark:focus:ring-primary-dark"
              ></textarea>
            </div>
            
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-6 py-3 text-white transition-colors rounded-lg bg-primary hover:bg-primary-600 disabled:opacity-50 dark:bg-primary-dark dark:hover:bg-primary-700"
              :aria-busy="isSubmitting"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
            
            <div v-if="success" class="p-4 text-green-700 bg-green-100 rounded-lg dark:bg-green-900/30 dark:text-green-300">
              Thank you! Your message has been sent.
            </div>
            
            <div v-if="error" class="p-4 text-red-700 bg-red-100 rounded-lg dark:bg-red-900/30 dark:text-red-300">
              {{ error }}
            </div>
          </form>
        </div>
        
        <!-- Contact Information -->
        <div class="p-6 space-y-6 rounded-xl bg-gray-50 dark:bg-dark-card/30">
          <div>
            <h2 class="mb-2 text-xl font-semibold text-gray-900 dark:text-dark-text">Get in Touch</h2>
            <p class="text-gray-700 dark:text-dark-muted">
              Have a project in mind or want to discuss potential opportunities? 
              Feel free to reach out through this form or directly via email.
            </p>
          </div>
          
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <svg class="w-6 h-6 mt-1 text-primary dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h3 class="font-medium text-gray-900 dark:text-dark-text">Email</h3>
                <p class="text-gray-600 dark:text-dark-muted">contact@silikaabdullah.com</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <svg class="w-6 h-6 mt-1 text-primary dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <h3 class="font-medium text-gray-900 dark:text-dark-text">Phone</h3>
                <p class="text-gray-600 dark:text-dark-muted">+265 (099) 100 - 6765</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '@/composables/useSupabase'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const error = ref('')
const success = ref(false)

const submitContactForm = async (name, email, message) => {
  // 1. Insert into database
  const { error } = await supabase.from('contacts').insert({
    name,
    email,
    message
  })

  if (error) {
    throw new Error(error.message)
  }

  // 2. Call edge function
  const { error: funcError } = await supabase.functions.invoke('contact-email', {
    body: {
      name,
      email,
      message
    }
  })

  if (funcError) {
    throw new Error(funcError.message)
  }
}

async function handleSubmit() {
  try {
    isSubmitting.value = true
    error.value = ''
    success.value = false
    
    // Save to Supabase and send email
    await submitContactForm(form.value.name, form.value.email, form.value.message)
    
    // Reset form on success
    form.value = { name: '', email: '', message: '' }
    success.value = true
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      success.value = false
    }, 5000)
  } catch (err) {
    error.value = err.message || 'Failed to send message. Please try again.'
    
    // Clear error message after 5 seconds
    setTimeout(() => {
      error.value = ''
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Smooth transitions for form elements */
input, textarea, button {
  transition: all 0.2s ease;
}
</style>