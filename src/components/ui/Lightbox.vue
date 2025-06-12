<template>
  <transition name="fade">
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      @click.self="close"
    >
      <!-- Close Button -->
      <button 
        @click="close"
        class="absolute p-2 text-white top-4 right-4 hover:text-primary"
        aria-label="Close lightbox"
      >
        <XMarkIcon class="w-8 h-8" />
      </button>

      <!-- Navigation Arrows -->
      <button 
        v-if="images.length > 1"
        @click.stop="prevImage"
        class="absolute p-2 text-white left-4 hover:text-primary md:left-8"
        aria-label="Previous image"
      >
        <ChevronLeftIcon class="w-8 h-8" />
      </button>
      
      <button 
        v-if="images.length > 1"
        @click.stop="nextImage"
        class="absolute p-2 text-white right-4 hover:text-primary md:right-8"
        aria-label="Next image"
      >
        <ChevronRightIcon class="w-8 h-8" />
      </button>

      <!-- Current Image -->
      <div class="relative w-full max-w-6xl p-4">
        <img 
          :src="currentImage" 
          :alt="`Gallery image ${currentIndex + 1}`"
          class="max-h-[80vh] w-auto mx-auto object-contain"
        >
        
        <!-- Image Counter -->
        <div 
          v-if="images.length > 1"
          class="mt-4 text-center text-white"
        >
          {{ currentIndex + 1 }} / {{ images.length }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { 
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon 
} from '@heroicons/vue/24/outline'

const props = defineProps({
  images: {
    type: Array,
    default: () => []
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  isOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

const currentIndex = ref(props.initialIndex)

const currentImage = computed(() => {
  return props.images[currentIndex.value]
})

function close() {
  emit('close')
}

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

// Handle keyboard navigation
function handleKeydown(e) {
  if (!props.isOpen) return
  
  switch(e.key) {
    case 'Escape':
      close()
      break
    case 'ArrowRight':
      nextImage()
      break
    case 'ArrowLeft':
      prevImage()
      break
  }
}

// Set up keyboard listeners
onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})

// Reset index when opening
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    currentIndex.value = props.initialIndex
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>