import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'

export const useMobileMenu = () => {
  const isOpen = ref(false)
  const { width } = useWindowSize()

  const open = () => {
    isOpen.value = true
    if (process.client) {
      document.body.style.overflow = 'hidden'
      // Prevent background scroll on mobile
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    }
  }

  const close = () => {
    isOpen.value = false
    if (process.client) {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }

  const toggle = () => {
    if (isOpen.value) {
      close()
    } else {
      open()
    }
  }

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen.value) {
      close()
    }
  }

  // Close menu when window is resized to desktop size
  watch(width, (newWidth) => {
    if (newWidth > 640 && isOpen.value) {
      close()
    }
  })

  onMounted(() => {
    if (process.client) {
      window.addEventListener('keydown', handleEscape)
    }
  })

  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener('keydown', handleEscape)
      // Ensure body styles are reset
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  })

  return {
    isOpen,
    open,
    close,
    toggle
  }
}

