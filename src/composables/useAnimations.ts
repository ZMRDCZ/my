import { ref, onMounted } from 'vue'
import gsap from 'gsap'

export function useAnimations() {
  const animateIn = (element: HTMLElement | string, options = {}) => {
    return gsap.from(element, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out',
      ...options
    })
  }

  const animateFadeIn = (element: HTMLElement | string, options = {}) => {
    return gsap.from(element, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      ...options
    })
  }

  const animateSlideIn = (element: HTMLElement | string, direction: 'left' | 'right' | 'up' | 'down' = 'up', options = {}) => {
    const offset = 50
    const x = direction === 'left' ? -offset : direction === 'right' ? offset : 0
    const y = direction === 'up' ? offset : direction === 'down' ? -offset : 0

    return gsap.from(element, {
      opacity: 0,
      x,
      y,
      duration: 0.8,
      ease: 'power2.out',
      ...options
    })
  }

  const animateStagger = (elements: HTMLElement[] | string, options = {}) => {
    return gsap.from(elements, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      ...options
    })
  }

  return {
    animateIn,
    animateFadeIn,
    animateSlideIn,
    animateStagger
  }
}

export function useFadeIn(delay: number = 300) {
  const isVisible = ref(false)

  onMounted(() => {
    setTimeout(() => {
      isVisible.value = true
    }, delay)
  })

  return {
    isVisible
  }
}

