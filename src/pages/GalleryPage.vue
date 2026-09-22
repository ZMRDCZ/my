<template>
  <div class="gallery-page">
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">{{ t('gallery.title') }}</h1>
        <p class="page-subtitle">{{ t('gallery.subtitle') }}</p>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container">
        <div class="filters" role="group" :aria-label="t('gallery.filter')">
          <button
            v-for="category in galleryCategories"
            :key="category.value"
            type="button"
            class="filter"
            :class="{ active: activeCategory === category.value }"
            @click="activeCategory = category.value"
          >
            {{ category.label }}
          </button>
        </div>

        <div class="grid">
          <button
            v-for="(item, index) in filteredItems"
            :key="item.id"
            type="button"
            class="tile"
            @click="openLightbox(index)"
          >
            <img
              :src="assetUrl(item.image)"
              :alt="item.title"
              loading="lazy"
              decoding="async"
            />
            <span class="tile-caption">
              <span class="tile-title">{{ item.title }}</span>
              <span v-if="item.description" class="tile-description">{{ item.description }}</span>
            </span>
          </button>
        </div>
      </div>
    </section>

    <!-- Просмотр -->
    <Teleport to="body">
      <div
        v-if="lightboxIndex !== null"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="currentItem?.title"
        @click.self="closeLightbox"
      >
        <button type="button" class="lightbox-close" :aria-label="t('gallery.close')" @click="closeLightbox">
          <AppIcon name="close" :size="20" />
        </button>

        <button
          v-if="filteredItems.length > 1"
          type="button"
          class="lightbox-nav lightbox-nav--prev"
          :aria-label="t('gallery.prev')"
          @click.stop="step(-1)"
        >
          <AppIcon name="chevron-left" :size="28" />
        </button>

        <figure class="lightbox-figure">
          <img :src="assetUrl(currentItem!.image)" :alt="currentItem!.title" />
          <figcaption class="lightbox-caption">
            <strong>{{ currentItem!.title }}</strong>
            <span v-if="currentItem!.description">{{ currentItem!.description }}</span>
          </figcaption>
        </figure>

        <button
          v-if="filteredItems.length > 1"
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
import { assetUrl, getGalleryCategories, getGalleryItems } from '@/constants/gallery'
import { useI18n } from '@/i18n'

const { locale, t } = useI18n()

const galleryCategories = computed(() => getGalleryCategories(locale.value))
const galleryItems = computed(() => getGalleryItems(locale.value))

const activeCategory = ref('all')
const lightboxIndex = ref<number | null>(null)

const filteredItems = computed(() =>
  activeCategory.value === 'all'
    ? galleryItems.value
    : galleryItems.value.filter((item) => item.category === activeCategory.value)
)

const currentItem = computed(() =>
  lightboxIndex.value === null ? null : filteredItems.value[lightboxIndex.value]
)

const openLightbox = (index: number) => {
  lightboxIndex.value = index
}

const closeLightbox = () => {
  lightboxIndex.value = null
}

const step = (delta: number) => {
  if (lightboxIndex.value === null) return
  const total = filteredItems.value.length
  lightboxIndex.value = (lightboxIndex.value + delta + total) % total
}

const onKeydown = (event: KeyboardEvent) => {
  if (lightboxIndex.value === null) return
  if (event.key === 'Escape') closeLightbox()
  if (event.key === 'ArrowLeft') step(-1)
  if (event.key === 'ArrowRight') step(1)
}

// Блокируем прокрутку страницы, пока открыт просмотр
watch(lightboxIndex, (value) => {
  document.body.style.overflow = value === null ? '' : 'hidden'
  if (value === null) {
    window.removeEventListener('keydown', onKeydown)
  } else {
    window.addEventListener('keydown', onKeydown)
  }
})

watch(activeCategory, closeLightbox)

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style lang="scss" scoped>
.section--tight {
  padding: $spacing-6 0 $spacing-16;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-2;
  margin-bottom: $spacing-8;

  @include mobile {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: $spacing-2;
    margin-bottom: $spacing-6;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}

.filter {
  padding: $spacing-2 $spacing-4;
  min-height: 40px;
  background: transparent;
  border: 1px solid $line;
  border-radius: $radius-full;
  color: $color-text-secondary;
  font-size: $text-sm;
  font-weight: 500;
  white-space: nowrap;

  &:hover {
    border-color: rgba($accent, 0.5);
    color: $ink;
  }

  &.active {
    background: $ink;
    border-color: $ink;
    color: $paper;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: $spacing-4;

  @include mobile {
    grid-template-columns: 1fr;
    gap: $spacing-3;
  }
}

.tile {
  position: relative;
  display: block;
  padding: 0;
  overflow: hidden;
  border: 1px solid $line;
  border-radius: $radius-lg;
  background: $paper-raised;
  text-align: left;
  cursor: zoom-in;

  img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    object-position: center center;
    transition: transform $transition-slow;
  }

  &:hover {
    border-color: rgba($accent, 0.5);

    img {
      transform: scale(1.03);
    }
  }
}

.tile-caption {
  display: block;
  padding: $spacing-3 $spacing-4 $spacing-4;
}

.tile-title {
  display: block;
  font-weight: 600;
  color: $ink;
  font-size: $text-base;
}

.tile-description {
  display: block;
  margin-top: 2px;
  color: $color-text-muted;
  font-size: $text-sm;
}

// --- Просмотр ---
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
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: $text-sm;

  span {
    color: rgba($paper, 0.72);
  }
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
