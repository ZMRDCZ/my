import { ref, watch } from 'vue'

export function useMobileMenu() {
  const isOpen = ref(false)

  const open = () => {
    isOpen.value = true
    document.body.style.overflow = 'hidden'
  }

  const close = () => {
    isOpen.value = false
    document.body.style.overflow = ''
  }

  const toggle = () => {
    if (isOpen.value) {
      close()
    } else {
      open()
    }
  }

  // Close menu on route change
  watch(isOpen, (newValue) => {
    if (newValue) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  })

  return {
    isOpen,
    open,
    close,
    toggle
  }
}

