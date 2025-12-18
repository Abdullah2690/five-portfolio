<template>
  <section class="py-12 mb-12 transition-colors duration-300 bg-white dark:bg-gray-900 md:mb-20 md:py-20 dark:bg-dark-card/20">
    <div class="container flex flex-col items-start gap-8 px-4 mx-auto md:flex-row">
      <!-- Text Content -->
      <div class="md:w-2/3">
        <h1 class="mb-4 text-4xl font-bold md:text-5xl dark:text-white">
          Hi, I am Abdullah,<br>
          <span class="text-primary dark:text-primary-400">Creative Technologist</span>
        </h1>
        
        <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
          a passionate developer with a strong background in ICT and a keen eye for meaningful digital experiences. 
          I specialize in creating user-centered web and mobile applications that combine functionality with elegance. Whether I'm building powerful backend systems or designing clean user interfaces, I strive to craft solutions that make a real impact.
        </p>
        
        <p class="mb-8 text-lg text-gray-700 dark:text-gray-300">
          Explore my portfolio to see some of the projects I've worked on — from personal apps to community-focused tools that solve everyday problems.
        </p>
        
        <div class="flex flex-wrap items-center gap-4">
          <!-- Download Resume Button -->
          <a 
            href="https://ztmuorvnvylnqysozdfy.supabase.co/storage/v1/object/public/documents/Abdullah%20Silika%20CV.pdf"
            download 
            target="_blank" 
            rel="noopener"
            class="px-6 py-3 text-white transition-all rounded-full bg-primary hover:bg-primary-dark dark:bg-primary-500 dark:hover:bg-primary-600 hover:shadow-lg active:scale-95"
          >
            Download Resume
          </a>
          
          <!-- Contact Button -->
          <router-link 
            to="/contact" 
            class="flex items-center justify-center w-12 h-12 transition-all border rounded-full border-primary text-primary hover:bg-primary hover:text-white dark:text-primary-400 dark:border-primary-400 dark:hover:bg-primary-500 dark:hover:text-white hover:shadow-lg active:scale-95"
            aria-label="Contact Me"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </router-link>
        </div>
      </div>
      
      <!-- Profile Image -->
      <div class="order-first md:w-1/3 md:order-last">
        <div class="relative">
          <img 
            src="@/assets/profile pic.jpg" 
            alt="Abdullah Silika's profile picture"
            class="object-cover w-48 h-48 mx-auto transition-shadow duration-300 border-4 border-white rounded-full shadow-lg md:w-64 md:h-64 dark:border-gray-800 hover:shadow-xl"
          >
          <div class="absolute bottom-0 right-0 flex items-center justify-center w-12 h-12 bg-green-500 border-4 border-white rounded-full dark:border-gray-800">
            <span class="text-xl">👋</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No props needed for this component
</script>