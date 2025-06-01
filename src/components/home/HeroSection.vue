<template>
  <section class="mb-12 md:mb-20">
    <div class="flex flex-col items-start gap-8 md:flex-row">
      <!-- Text Content -->
      <div class="md:w-2/3">
        <h1 class="mb-4 text-4xl font-bold md:text-5xl">
          Hi, I am Abdullah,<br>
          <span class="text-primary">Creative Technologist</span>
        </h1>
        <p class="mb-6 text-lg">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation veniam 
          consequat sunt nostrud amet.
        </p>
        <button class="px-6 py-3 text-white transition rounded bg-primary hover:bg-primary-dark">
          <a 
            href="https://afkwkgamqajfgxxfureb.supabase.co/storage/v1/object/public/content-bucket//Abdullah%20Silika%20CV.pdf" 
            download 
            class="btn"
            target="_blank" 
            rel="noopener"
          >
  Download CV
</a>
        </button>
      </div>
      
      <!-- Profile Image -->
      <div class="order-first md:w-1/3 md:order-last">
        <img 
          src="@/assets/profile pic.jpg" 
          alt="five`s profile picture"
          class="object-cover w-48 h-48 mx-auto border-4 border-white rounded-full shadow-md md:w-64 md:h-64"
        >
      </div>
    </div>
  </section>
</template>

<script setup>
// No props needed for this component as it uses static content
// For dynamic content, we would define props here
</script>