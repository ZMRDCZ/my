<template>
  <span class="app-icon" :class="toneClass" :style="boxStyle" v-html="markup" aria-hidden="true" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { iconMarkup, iconTone } from '@/constants/icons'

const props = withDefaults(
  defineProps<{
    name: string
    size?: number
  }>(),
  { size: 22 }
)

const markup = computed(() => iconMarkup(props.name))
const toneClass = computed(() => {
  const tone = iconTone(props.name)
  return tone ? `app-icon--${tone}` : undefined
})
const boxStyle = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`
}))
</script>

<style lang="scss" scoped>
.app-icon {
  display: block;
  flex-shrink: 0;
  line-height: 0;
  color: inherit;

  :deep(svg) {
    display: block;
    width: 100%;
    height: 100%;
  }

  &--gold {
    color: #9a6b24;
  }

  &--silver {
    color: #6e675f;
  }

  &--bronze {
    color: #8a5340;
  }
}
</style>
