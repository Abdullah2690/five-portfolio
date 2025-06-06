<template>
  <main class="container max-w-4xl px-4 py-12 mx-auto prose">
    <h1 class="text-3xl font-bold">Privacy Policy</h1>
    <p class="text-gray-600">Last updated: {{ new Date().toLocaleDateString() }}</p>
    
    <section class="mt-8">
      <h2 class="mb-4 text-2xl font-semibold">Terms and Conditions</h2>
      <p class="mb-4">Last updated: June 06, 2025</p>
      <p class="mb-6">Please read these terms and conditions carefully before using Our Service.</p>

      <article class="mb-8">
        <h3 class="mb-3 text-xl font-semibold">Interpretation and Definitions</h3>
        
        <h4 class="mb-2 font-medium">Interpretation</h4>
        <p class="mb-4">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
        
        <h4 class="mb-2 font-medium">Definitions</h4>
        <p class="mb-3">For the purposes of these Terms and Conditions:</p>
        <ul class="pl-6 mb-6 space-y-2 list-disc">
          <li>
            <p><strong>Application</strong> means the software program provided by the Company downloaded by You on any electronic device, named Abdullah-portfolio</p>
          </li>
          <li>
            <p><strong>Application Store</strong> means the digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded.</p>
          </li>
          <!-- Continue other list items... -->
        </ul>
      </article>

      <article class="mb-8">
        <h3 class="mb-3 text-xl font-semibold">Acknowledgment</h3>
        <p class="mb-4">These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
        <p class="mb-4">Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
        <p class="mb-4">By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
        <p class="mb-4">You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
      </article>

      <article class="mb-8">
        <h3 class="mb-3 text-xl font-semibold">Links to Other Websites</h3>
        <p class="mb-4">Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
        <p class="mb-4">The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
        <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>
      </article>

      <!-- Continue with other sections following the same pattern -->

      <article class="mb-8">
        <h3 class="mb-3 text-xl font-semibold">Contact Us</h3>
        <p class="mb-3">If you have any questions about these Terms and Conditions, You can contact us:</p>
        <ul class="pl-6 space-y-2 list-disc">
          <li>By email: silikaabdullah@gmail.com</li>
          <li>
            By visiting this page on our website: 
            <a href="http://five-portfolio/#/contact" 
               target="_blank" 
               rel="noopener noreferrer"
               class="text-primary hover:underline">
              http://five-portfolio/#/contact
            </a>
          </li>
          <li>By phone number: +265 99 100 6765</li>
        </ul>
      </article>
    </section>
  </main>
</template>

<script setup>
// You can add reactive functionality here if needed
</script>

<style scoped>
/* Custom styling if needed */
.prose {
  line-height: 1.6;
  color: #333;
}

.prose a {
  color: #3b82f6;
  text-decoration: none;
}

.prose a:hover {
  text-decoration: underline;
}

.prose ul {
  margin-bottom: 1.25em;
}

.prose h2, .prose h3, .prose h4 {
  color: #111827;
  margin-top: 1.5em;
  margin-bottom: 0.75em;
  font-weight: 600;
}
</style>