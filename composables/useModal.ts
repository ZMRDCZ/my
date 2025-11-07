import { ref, onMounted, onUnmounted } from 'vue'

export const useModal = () => {
  const isOpen = ref(false)
  const modalContent = ref<unknown>(null)

  const open = (content?: unknown) => {
    if (content) {
      modalContent.value = content
    }
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
    modalContent.value = null
    
    if (process.client) {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }

  const toggle = (content?: unknown) => {
    if (isOpen.value) {
      close()
    } else {
      open(content)
    }
  }

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen.value) {
      close()
    }
  }

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
    modalContent,
    open,
    close,
    toggle
  }
}

