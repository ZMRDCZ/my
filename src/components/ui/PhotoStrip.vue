<template>
  <div
    v-if="images.length"
    class="photos"
    :class="images.length > 1 ? 'photos--multi' : 'photos--single'"
    :style="frameStyle"
  >
    <button
      v-for="(image, index) in images"
      :key="image"
      type="button"
      class="photo"
      @click="open(index)"
    >
      <img :src="assetUrl(image)" :alt="label(index)" loading="lazy" decoding="async" />
    </button>

    <Teleport to="body">
      <div
        v-if="activeIndex !== null"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="label(activeIndex)"
        @click.self="close"
      >
        <button type="button" class="lightbox-close" :aria-label="t('gallery.close')" @click="close">
          <AppIcon name="close" :size="20" />
        </button>

        <button
          v-if="images.length > 1"
          type="button"
          class="lightbox-nav lightbox-nav--prev"
          :aria-label="t('gallery.prev')"
          @click.stop="step(-1)"
        >
          <AppIcon name="chevron-left" :size="28" />
        </button>

        <figure class="lightbox-figure">
          <img :src="assetUrl(images[activeIndex])" :alt="label(activeIndex)" />
          <figcaption v-if="alt" class="lightbox-caption">{{ alt }}</figcaption>
        </figure>

        <button
          v-if="images.length > 1"
          type="button"
          class="lightbox-nav lightbox-nav--next"
          :aria-label="t('gallery.next')"
          @click.stop="step(1)"
        >
          <AppIcon name="chevron-right" :size="28" />
        </button>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import { assetUrl } from '@/constants/gallery'
import { useI18n } from '@/i18n'

const props = defineProps<{
  images: string[]
  alt: string
}>()

const { t } = useI18n()
const activeIndex = ref<number | null>(null)

/** Одинаковая рамка у любой пачки: колонки и ряды от числа кадров, высота от ширины карточки. */
const frameStyle = computed(() => {
  const count = props.images.length
  const columns = count <= 1 ? 1 : count === 2 || count === 4 ? 2 : 3
  const rows = count <= 3 ? 1 : 2
  return {
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
  }
})

const label = (index: number) =>
  props.images.length > 1 ? `${props.alt} (${index + 1})` : props.alt

const open = (index: number) => {
  activeIndex.value = index
}

const close = () => {
  activeIndex.value = null
}

const step = (delta: number) => {
  if (activeIndex.value === null) return
  const total = props.images.length
  activeIndex.value = (activeIndex.value + delta + total) % total
}

const onKeydown = (event: KeyboardEvent) => {
  if (activeIndex.value === null) return
  if (event.key === 'Escape') close()
  if (event.key === 'ArrowLeft') step(-1)
  if (event.key === 'ArrowRight') step(1)
}

watch(activeIndex, (value) => {
  document.body.style.overflow = value === null ? '' : 'hidden'
  if (value === null) {
    window.removeEventListener('keydown', onKeydown)
  } else {
    window.addEventListener('keydown', onKeydown)
  }
})

onBeforeUnmount(() => {
  if (activeIndex.value !== null) document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style lang="scss" scoped>
.photos {
  display: grid;
  gap: 2px;
  width: 100%;
  aspect-ratio: 16 / 9;
  max-height: 380px;
  background: $line;
  overflow: hidden;
}

.photo {
  display: block;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: 0;
  border: 0;
  background: $paper-sunken;
  cursor: zoom-in;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    transition: transform $transition-slow;
  }

  &:hover img {
    transform: scale(1.03);
  }
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: $z-modal;
  display: grid;
  place-items: center;
  padding: $spacing-16 $spacing-20 $spacing-8;
  background: rgba(24, 21, 19, 0.97);

  @include mobile {
    padding: $spacing-12 $spacing-3 $spacing-16;
  }
}

.lightbox-figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: $spacing-3;
  width: min(1200px, 100%);
  max-height: 100%;
  min-width: 0;
  margin: 0;

  img {
    display: block;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: calc(100vh - 160px);
    object-fit: contain;
    border-radius: $radius-md;
  }
}

.lightbox-caption {
  color: $paper;
  text-align: center;
  font-size: $text-sm;
}

.lightbox-close,
.lightbox-nav {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: $radius-full;
  background: rgba($paper, 0.12);
  color: $paper;
  font-size: $text-xl;
  line-height: 1;
  flex-shrink: 0;

  &:hover {
    background: rgba($paper, 0.24);
  }
}

.lightbox-close {
  position: absolute;
  top: $spacing-4;
  right: $spacing-4;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: $text-3xl;

  &--prev {
    left: $spacing-4;
  }

  &--next {
    right: $spacing-4;
  }

  @include mobile {
    top: auto;
    bottom: $spacing-4;
    transform: none;
  }
}
</style>
