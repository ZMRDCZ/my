<template>
  <div class="publications-page">
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">{{ t('publications.title') }}</h1>
        <p class="page-subtitle">{{ t('publications.subtitle') }}</p>

        <div class="profiles">
          <a
            v-for="item in publicationProfiles"
            :key="item.name"
            :href="item.url"
            class="profile-chip"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="profile-chip-name">{{ item.name }}</span>
            <span class="profile-chip-handle">{{ item.handle }}</span>
          </a>
        </div>

        <p class="original-note">{{ t('publications.originalNote') }}</p>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container">
        <!-- Фильтр по годам -->
        <div class="filters" role="group" :aria-label="t('publications.filterYears')">
          <button
            type="button"
            class="filter"
            :class="{ active: activeYear === 'all' }"
            @click="activeYear = 'all'"
          >
            {{ t('common.allYears') }}
          </button>
          <button
            v-for="year in publicationYears"
            :key="year"
            type="button"
            class="filter"
            :class="{ active: activeYear === year }"
            @click="activeYear = year"
          >
            {{ year }}
          </button>
        </div>

        <!-- Список по годам -->
        <div v-for="group in groupedPublications" :key="group.year" class="year-group">
          <h2 class="year-title">
            {{ group.year }}
            <span class="year-count">{{ countLabel(group.items.length) }}</span>
          </h2>

          <ol class="pub-list">
            <li v-for="item in group.items" :key="item.id" class="pub-item">
              <article class="pub-card">
                <header class="pub-head">
                  <h3 class="pub-title">{{ item.title }}</h3>
                  <span v-if="item.pending" class="pub-badge">{{ t('publications.pending') }}</span>
                </header>

                <p class="pub-authors">{{ item.authors }}</p>

                <p class="pub-source">
                  {{ item.source }}<template v-if="item.city">. {{ item.city }}</template
                  ><template v-if="item.pages">. {{ item.pages }}</template>
                </p>

                <p v-if="item.note" class="pub-note">{{ item.note }}</p>

                <div v-if="item.topics?.length" class="tag-cloud pub-topics">
                  <span v-for="topic in item.topics" :key="topic" class="tag">{{ topic }}</span>
                </div>

                <a
                  v-if="item.link"
                  :href="item.link"
                  class="pub-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ t('publications.read') }}
                </a>
              </article>
            </li>
          </ol>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { getPublications, publicationProfiles, publicationYears } from '@/constants/publications'
import { useI18n } from '@/i18n'

const { locale, t, worksCount } = useI18n()

const publications = computed(() => getPublications(locale.value))
const activeYear = ref<string>('all')

const groupedPublications = computed(() => {
  const years = activeYear.value === 'all' ? publicationYears : [activeYear.value]

  return years
    .map((year) => ({
      year,
      items: publications.value.filter((item) => item.year === year)
    }))
    .filter((group) => group.items.length > 0)
})

const countLabel = (count: number): string => worksCount(count)
</script>

<style lang="scss" scoped>
.section--tight {
  padding: $spacing-6 0 $spacing-16;
}

.profiles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: $spacing-3;
  margin-top: $spacing-6;
}

.profile-chip {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: $spacing-3 $spacing-4;
  background: $paper-raised;
  border: 1px solid $line;
  border-radius: $radius-md;
  text-decoration: none;
  text-align: left;
  min-height: 44px;

  &:hover {
    border-color: rgba($accent, 0.5);
  }
}

.profile-chip-name {
  font-weight: 600;
  font-size: $text-sm;
  color: $ink;
}

.original-note {
  margin-top: $spacing-4;
  color: $color-text-muted;
  font-size: $text-sm;
}

.profile-chip-handle {
  font-size: $text-xs;
  color: $color-text-muted;
}

// --- Фильтр ---
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-2;
  margin-bottom: $spacing-10;

  @include mobile {
    margin-bottom: $spacing-6;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: $spacing-2;
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

// --- Список ---
.year-group {
  margin-bottom: $spacing-12;

  &:last-child {
    margin-bottom: 0;
  }
}

.year-title {
  display: flex;
  align-items: baseline;
  gap: $spacing-3;
  font-size: $text-2xl;
  padding-bottom: $spacing-3;
  border-bottom: 2px solid $ink;
  margin-bottom: $spacing-6;
}

.year-count {
  font-family: $font-secondary;
  font-size: $text-sm;
  font-weight: 400;
  color: $color-text-muted;
}

.pub-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
  counter-reset: pub;
}

.pub-card {
  padding: $spacing-5;
  background: $paper-raised;
  border: 1px solid $line;
  border-radius: $radius-lg;
  transition: border-color $transition-normal, box-shadow $transition-normal;

  &:hover {
    border-color: rgba($accent, 0.4);
    box-shadow: $shadow-md;
  }

  @include mobile {
    padding: $spacing-4;
  }
}

.pub-head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: $spacing-3;
  margin-bottom: $spacing-2;
}

.pub-title {
  font-size: $text-lg;
  line-height: 1.35;
  flex: 1;
  min-width: 240px;

  @include mobile {
    font-size: $text-base;
    min-width: 0;
  }
}

.pub-badge {
  flex-shrink: 0;
  padding: 2px $spacing-2;
  background: $second-soft;
  color: $second;
  border-radius: $radius-full;
  font-size: $text-xs;
  font-weight: 600;
  white-space: nowrap;
}

.pub-authors {
  color: $accent-ink;
  font-weight: 500;
  font-size: $text-sm;
  margin-bottom: $spacing-2;
}

.pub-source {
  color: $color-text-secondary;
  font-size: $text-sm;
}

.pub-note {
  margin-top: $spacing-2;
  color: $color-text-muted;
  font-size: $text-sm;
  font-style: italic;
}

.pub-topics {
  margin-top: $spacing-3;
}

.pub-link {
  display: inline-block;
  margin-top: $spacing-3;
  font-size: $text-sm;
  font-weight: 600;
  text-decoration: none;
}
</style>
