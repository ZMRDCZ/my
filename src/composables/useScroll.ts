import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll(threshold: number = 50) {
  const isScrolled = ref(false)
  const scrollY = ref(0)

  const updateScroll = () => {
    scrollY.value = window.scrollY
    isScrolled.value = window.scrollY > threshold
  }

  onMounted(() => {
    window.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScroll)
  })

  return {
    isScrolled,
    scrollY
  }
}

export function useScrollTo() {
  const scrollTo = (target: string | number, options?: ScrollToOptions) => {
    if (typeof target === 'string') {
      const element = document.querySelector(target)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', ...options })
      }
    } else {
      window.scrollTo({ top: target, behavior: 'smooth', ...options })
    }
  }

  const scrollToTop = () => {
    scrollTo(0)
  }

  return {
    scrollTo,
    scrollToTop
  }
}

