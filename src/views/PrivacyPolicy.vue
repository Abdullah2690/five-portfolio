<template>
  <main class="flex justify-center w-full px-4 py-12">
    <div class="w-full max-w-4xl prose dark:prose-invert">
      <!-- Header Section -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-dark-text md:text-4xl">Privacy Policy</h1>
        <p class="text-gray-600 dark:text-dark-muted">Last updated: {{ new Date().toLocaleDateString() }}</p>
      </div>
      
      <!-- Content Sections -->
      <section class="mt-8">
        <h2 class="mb-4 text-2xl font-semibold text-gray-900 dark:text-dark-text">Terms and Conditions</h2>
        <p class="mb-4 text-gray-600 dark:text-dark-muted">Last updated: June 06, 2025</p>
        <p class="mb-6 text-gray-700 dark:text-dark-muted">Please read these terms and conditions carefully before using Our Service.</p>

        <!-- Interpretation Article -->
        <article class="mb-8">
          <h3 class="mb-3 text-xl font-semibold text-gray-900 dark:text-dark-text">Interpretation and Definitions</h3>
          
          <h4 class="mb-2 font-medium text-gray-800 dark:text-dark-text">Interpretation</h4>
          <p class="mb-4 text-gray-700 dark:text-dark-muted">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
          
          <h4 class="mb-2 font-medium text-gray-800 dark:text-dark-text">Definitions</h4>
          <p class="mb-3 text-gray-700 dark:text-dark-muted">For the purposes of these Terms and Conditions:</p>
          <ul class="pl-6 mb-6 space-y-2 text-gray-700 list-disc dark:text-dark-muted">
            <li>
              <p><strong class="text-gray-900 dark:text-dark-text">Application</strong> means the software program provided by the Company downloaded by You on any electronic device, named Abdullah-portfolio</p>
            </li>
            <li>
              <p><strong class="text-gray-900 dark:text-dark-text">Application Store</strong> means the digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded.</p>
            </li>
            <!-- Continue other list items... -->
          </ul>
        </article>

        <!-- Acknowledgment Article -->
        <article class="mb-8">
          <h3 class="mb-3 text-xl font-semibold text-gray-900 dark:text-dark-text">Acknowledgment</h3>
          <p class="mb-4 text-gray-700 dark:text-dark-muted">These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
          <p class="mb-4 text-gray-700 dark:text-dark-muted">Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
          <p class="mb-4 text-gray-700 dark:text-dark-muted">By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
          <p class="mb-4 text-gray-700 dark:text-dark-muted">You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
        </article>

        <!-- Links Article -->
        <article class="mb-8">
          <h3 class="mb-3 text-xl font-semibold text-gray-900 dark:text-dark-text">Links to Other Websites</h3>
          <p class="mb-4 text-gray-700 dark:text-dark-muted">Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
          <p class="mb-4 text-gray-700 dark:text-dark-muted">The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
          <p class="text-gray-700 dark:text-dark-muted">We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>
        </article>

        <!-- Contact Article -->
        <article class="mb-8">
          <h3 class="mb-3 text-xl font-semibold text-gray-900 dark:text-dark-text">Contact Us</h3>
          <p class="mb-3 text-gray-700 dark:text-dark-muted">If you have any questions about these Terms and Conditions, You can contact us:</p>
          <ul class="pl-6 space-y-2 text-gray-700 list-disc dark:text-dark-muted">
            <li>By email: <a href="mailto:silikaabdullah@gmail.com" class="text-primary hover:underline dark:text-primary-dark">silikaabdullah@gmail.com</a></li>
            <li>
              By visiting this page on our website: 
              <a href="http://five-portfolio/#/contact" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="text-primary hover:underline dark:text-primary-dark">
                http://five-portfolio/#/contact
              </a>
            </li>
            <li>By phone number: +265 99 100 6765</li>
          </ul>
        </article>
      </section>
    </div>
  </main>
</template>

<script setup>
// You can add reactive functionality here if needed
</script>

<style>
/* Smooth transitions for dark mode */
main {
  transition: background-color 0.3s ease;
}

/* Enhanced Prose Styles */
.prose {
  line-height: 1.75;
  color: inherit;
}

.prose a {
  @apply text-primary hover:underline dark:text-primary-dark;
  transition: color 0.2s ease;
}

.prose ul {
  @apply mb-6;
}

.prose li {
  @apply mb-2;
}

.prose h2, 
.prose h3, 
.prose h4 {
  @apply mt-8 mb-4 font-semibold;
}

.prose h2 {
  @apply text-2xl;
}

.prose h3 {
  @apply text-xl;
}

.prose h4 {
  @apply text-lg;
}

.prose p {
  @apply mb-4;
}

.prose strong {
  @apply font-semibold;
}
</style>