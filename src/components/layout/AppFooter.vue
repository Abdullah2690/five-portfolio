<template>
  <footer class="py-8 transition-colors duration-300 bg-white border-t border-gray-100 dark:bg-gray-800 dark:border-gray-800">
    <div class="container px-4 mx-auto">
      <!-- Social Icons -->
      <div class="flex justify-center mb-4 space-x-6">
        <!-- LinkedIn -->
        <a 
          href="https://www.linkedin.com/in/abdullah-silika" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-gray-500 transition-colors duration-300 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          aria-label="LinkedIn"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>

        <!-- Instagram -->
        <a 
          href="https://www.instagram.com/abdullahmuhammads" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-gray-500 transition-colors duration-300 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400"
          aria-label="Instagram"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        <!-- X (Twitter) -->
        <a 
          href="https://twitter.com/SilikaAbdullah" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-gray-500 transition-colors duration-300 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          aria-label="X (Twitter)"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>

        <!-- Facebook -->
        <a 
          href="https://www.facebook.com/AbdullahMSilika" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-gray-500 dark:text-gray-400 hover:text-[#1877F2] transition-colors duration-300"
          aria-label="Facebook"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"/>
          </svg>
        </a>
      </div>

      <!-- Legal Links -->
      <div class="flex justify-center mb-4 space-x-6 text-sm">
        <router-link 
          to="/privacy" 
          class="text-gray-500 transition-colors duration-300 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400"
          active-class="font-medium text-primary dark:text-primary-400"
        >
          Privacy Policy
        </router-link>
        <span class="text-gray-400 dark:text-gray-600">•</span>
        <router-link 
          to="/faq" 
          class="text-gray-500 transition-colors duration-300 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400"
          active-class="font-medium text-primary dark:text-primary-400"
        >
          FAQ
        </router-link>
        <span class="text-gray-400 dark:text-gray-600">•</span>
        <router-link 
          to="/contact" 
          class="text-gray-500 transition-colors duration-300 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400"
          active-class="font-medium text-primary dark:text-primary-400"
        >
          Contact
        </router-link>
      </div>
      
      <!-- Copyright Notice -->
      <p class="text-sm text-center text-gray-500 dark:text-gray-400">
        Copyright © {{ new Date().getFullYear() }} {{ yourName }}. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
// Replace with your actual name
const yourName = "Abdullah Silika";
</script>

<style scoped>
/* Custom hover effects */
a {
  transition: all 0.3s ease;
}
a:hover {
  transform: translateY(-2px);
}

/* Legal links styling */
.legal-links a {
  @apply px-2 py-1 rounded;
}
.legal-links a:hover {
  @apply bg-gray-50 dark:bg-gray-800;
}
</style>