import { ref } from 'vue'

export function useModal() {
  const isOpen = ref(false)
  const modalData = ref<any>(null)

  const open = (data?: any) => {
    isOpen.value = true
    modalData.value = data
    document.body.style.overflow = 'hidden'
  }

  const close = () => {
    isOpen.value = false
    modalData.value = null
    document.body.style.overflow = ''
  }

  const toggle = (data?: any) => {
    if (isOpen.value) {
      close()
    } else {
      open(data)
    }
  }

  return {
    isOpen,
    modalData,
    open,
    close,
    toggle
  }
}

