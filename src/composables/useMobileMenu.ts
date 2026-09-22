import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

/** Порог, на котором меню перестаёт быть выпадающей панелью. */
const WIDE_SCREEN = 1024

export function useMobileMenu() {
  const isOpen = ref(false)

  const open = () => {
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
  }

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  // Пока панель открыта, страница под ней не прокручивается
  watch(isOpen, (value) => {
    document.body.style.overflow = value ? 'hidden' : ''
  })

  // При переходе на широкий экран панель не должна оставаться открытой
  const onResize = () => {
    if (window.innerWidth >= WIDE_SCREEN && isOpen.value) {
      close()
    }
  }

  onMounted(() => window.addEventListener('resize', onResize))
  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)
    document.body.style.overflow = ''
  })

  return { isOpen, open, close, toggle }
}
