import { ref, onMounted, onUnmounted } from 'vue'

export const useScroll = (threshold = 50) => {
  const isScrolled = ref(false)
  const scrollY = ref(0)

  const handleScroll = () => {
    if (process.client) {
      scrollY.value = window.scrollY
      isScrolled.value = window.scrollY > threshold
    }
  }

  onMounted(() => {
    if (process.client) {
      window.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll() // Initial check
    }
  })

  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return {
    isScrolled,
    scrollY
  }
}

