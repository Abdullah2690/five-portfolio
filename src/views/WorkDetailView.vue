<template>
  <main class="container px-4 py-8 mx-auto">
    <router-link to="/works" class="inline-block mb-6 text-secondary hover:underline">
      ← Back to Works
    </router-link>

    <WorkDetail :work="work" :imageUrl="imageUrl" v-if="work && imageUrl" />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/composables/useSupabase'
import WorkDetail from '@/components/works/WorkDetail.vue'

const route = useRoute()
const work = ref(null)
const imageUrl = ref(null)

onMounted(async () => {
  const { data, error } = await supabase
    .from('works')
    .select('*')
    .eq('slug', route.params.slug)
    .single()

  if (error) {
    console.error('Error fetching work:', error)
    return
  }

  work.value = data

  // Generate public URL from Supabase Storage
  const { data: publicData, error: urlError } = supabase
    .storage
    .from('content-bucket') // 🔁 Replace this
    .getPublicUrl(data.featured_image)

  if (urlError) {
    console.error('Error getting image URL:', urlError)
  } else {
    imageUrl.value = publicData.publicUrl
  }

  console.log('Featured image path:', data.featured_image)
})
</script>