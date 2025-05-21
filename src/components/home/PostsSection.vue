<template>
  <section class="mb-12 md:mb-20">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-medium">Recent posts</h2>
      <router-link to="/blog" class="text-secondary hover:underline">View all</router-link>
    </div>
    
    <!-- Posts Grid - 2 columns on desktop, 1 column on mobile -->
    <div class="grid md:grid-cols-2 gap-6">
      <PostCard 
        v-for="post in posts" 
        :key="post.id" 
        :post="post" 
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/composables/useSupabase'
import PostCard from '@/components/posts/PostCard.vue'

const posts = ref([])

onMounted(async () => {
  // Fetch 2 most recent posts
  const { data } = await supabase
    .from('posts')
    .select('*')
    .order('date', { ascending: false })
    .limit(2)
    
  posts.value = data
})
</script>