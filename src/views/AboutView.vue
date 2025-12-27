<template>
  <main class="container px-4 py-16 mx-auto">
    <!-- Hero Section -->
    <section class="grid items-center gap-12 mb-24 md:grid-cols-3">
      <!-- Intro Text -->
      <div class="max-w-2xl md:col-span-2">
        <h1
          class="mb-6 text-4xl font-extrabold tracking-tight text-dark dark:text-light md:text-5xl"
        >
          About Me
        </h1>

        <p
          class="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
        >
          I am an ICT graduate and software developer focused on building clean,
          practical, and meaningful digital products that solve real-world
          problems.
        </p>

        <!-- CV Button -->
        <a
          :href="cvUrl"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition rounded-lg bg-primary hover:opacity-90"
        >
          Download CV
        </a>
      </div>

      <!-- Profile Image -->
      <div class="flex justify-center md:justify-end">
        <img
          src="@/assets/profile pic.jpg"
          alt="Profile photo"
          class="object-cover w-40 h-40 rounded-full shadow-xl"
        />
      </div>
    </section>

    <!-- Content Sections -->
    <section class="grid gap-12 md:grid-cols-2">
      <!-- Background -->
      <div class="p-8 border border-gray-200 rounded-xl bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <h2
          class="mb-4 text-xl font-semibold tracking-tight text-dark dark:text-light"
        >
          Background
        </h2>
        <p class="leading-relaxed text-gray-700 dark:text-gray-300">
          I hold a degree in Information and Communication Technology and two
          diplomas in Computing and Information Systems. I have experience
          building both web and mobile applications with a strong focus on
          usability and performance.
        </p>
      </div>

      <!-- Focus -->
      <div class="p-8 border border-gray-200 rounded-xl bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <h2
          class="mb-4 text-xl font-semibold tracking-tight text-dark dark:text-light"
        >
          What I Focus On
        </h2>
        <ul
          class="space-y-2 leading-relaxed text-gray-700 list-disc list-inside dark:text-gray-300"
        >
          <li>Modern frontend development</li>
          <li>Flutter cross-platform applications</li>
          <li>Supabase-backed systems</li>
          <li>Accessible and clean UI design</li>
        </ul>
      </div>

      <!-- Values -->
      <div class="p-8 border border-gray-200 rounded-xl bg-gray-50 dark:bg-gray-800 dark:border-gray-700 md:col-span-2">
        <h2
          class="mb-4 text-xl font-semibold tracking-tight text-dark dark:text-light"
        >
          Values & Direction
        </h2>
        <p class="leading-relaxed text-gray-700 dark:text-gray-300">
          I value clarity, consistency, and simplicity. My long-term goal is to
          build impactful digital products, particularly in education,
          faith-based platforms, and solutions that support local communities.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
const cvUrl =
  'https://YOUR_PROJECT_ID.supabase.co/storage/v1/object/public/documents/cv/abdullah-silika-cv.pdf'
</script>

<style scoped>
  section > div {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

section > div:hover {
  transform: translateY(-2px);
}
section > div:active {
  transform: translateY(0);
  box-shadow: none;
}
</style>
