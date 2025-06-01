<!-- src/components/works/AddWorkForm.vue -->
<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-4">
      <label>Title</label>
      <input v-model="form.title" required>
    </div>

    <div class="mb-4">
      <label>Thumbnail Image</label>
      <input type="file" @change="handleThumbnailChange" accept="image/*">
    </div>

    <div class="mb-4">
      <label>Featured Image</label>
      <input type="file" @change="handleFeaturedChange" accept="image/*">
    </div>

    <button type="submit" :disabled="isSubmitting">
      {{ isSubmitting ? 'Saving...' : 'Save Work' }}
    </button>

    <div v-if="error" class="text-red-500">{{ error }}</div>
    <div v-if="success" class="text-green-500">Work added successfully!</div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { addWork } from '@/utils/supabaseUtils' //here
import { uploadWorkImage } from '@/utils/fileUploader'

const form = ref({
  title: '',
  slug: '',
  year: '',
  category: '',
  description: '',
  content: '',
  thumbnail: '',
  featured_image: ''
})

const thumbnailFile = ref(null)
const featuredFile = ref(null)
const isSubmitting = ref(false)
const error = ref('')
const success = ref(false)

function handleThumbnailChange(e) {
  thumbnailFile.value = e.target.files[0]
}

function handleFeaturedChange(e) {
  featuredFile.value = e.target.files[0]
}

async function handleSubmit() {
  try {
    isSubmitting.value = true
    error.value = ''
    success.value = false

    // Generate slug from title
    form.value.slug = form.value.title.toLowerCase().replace(/\s+/g, '-')

    // Upload images
    if (thumbnailFile.value) {
      form.value.thumbnail = await uploadWorkImage(
        thumbnailFile.value, 
        form.value.slug,
        'thumbnail'
      )
    }

    if (featuredFile.value) {
      form.value.featured_image = await uploadWorkImage(
        featuredFile.value,
        form.value.slug,
        'featured'
      )
    }

    // Save work data
    const { error: dbError } = await addWork(form.value)
    if (dbError) throw dbError

    success.value = true
    resetForm()
  } catch (err) {
    error.value = err.message || 'Failed to save work'
  } finally {
    isSubmitting.value = false
  }
}

function resetForm() {
  form.value = {
    title: '',
    slug: '',
    year: '',
    category: '',
    description: '',
    content: '',
    thumbnail: '',
    featured_image: ''
  }
  thumbnailFile.value = null
  featuredFile.value = null
}
</script>
