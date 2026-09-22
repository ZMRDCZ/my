<template>
  <div class="achievements-page">
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">{{ t('achievements.title') }}</h1>
        <p class="page-subtitle">{{ t('achievements.subtitle') }}</p>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container">
        <!-- Фильтры -->
        <div class="filters">
          <div class="filter-row" role="group" :aria-label="t('achievements.filterYears')">
            <button
              v-for="year in achievementYears"
              :key="year"
              type="button"
              class="filter"
              :class="{ active: activeYear === year }"
              @click="activeYear = year"
            >
              {{ year === 'all' ? t('common.allYears') : year }}
            </button>
          </div>

          <div class="filter-row" role="group" :aria-label="t('achievements.filterCategories')">
            <button
              v-for="category in achievementCategories"
              :key="category.value"
              type="button"
              class="filter filter--ghost"
              :class="{ active: activeCategory === category.value }"
              @click="activeCategory = category.value"
            >
              {{ category.label }}
            </button>
          </div>
        </div>

        <!-- Хронология -->
        <div v-if="groups.length" class="timeline">
          <section v-for="group in groups" :key="group.year" class="year-block">
            <h2 class="year-marker">{{ group.year }}</h2>

            <div class="cards">
              <article v-for="item in group.items" :key="item.id" class="ach-card">
                <PhotoStrip v-if="item.images?.length" :images="item.images" :alt="item.title" />

                <div class="ach-row">
                  <span class="ach-icon" aria-hidden="true">
                    <AppIcon :name="item.icon" />
                  </span>

                  <div class="ach-body">
                    <div class="ach-meta">
                      <span class="ach-category">{{ categoryLabel(item.category) }}</span>
                      <span v-if="item.date" class="ach-date">{{ item.date }}</span>
                    </div>

                    <h3 class="ach-title">{{ item.title }}</h3>
                    <p class="ach-description">{{ item.description }}</p>

                    <ul v-if="item.details?.length" class="ach-details">
                      <li v-for="line in item.details" :key="line">{{ line }}</li>
                    </ul>

                    <div v-if="item.result || item.role" class="ach-badges">
                      <span v-if="item.result" class="ach-badge ach-badge--result">
                        {{ item.result }}
                      </span>
                      <span v-if="item.role" class="ach-badge">{{ item.role }}</span>
                    </div>

                    <a
                      v-if="item.source"
                      :href="item.source.url"
                      class="ach-source"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {{ item.source.label }} →
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>

        <p v-else class="empty">{{ t('common.empty') }}</p>

        <!-- Архив -->
        <div v-if="archivedAchievements.length" class="archive">
          <button type="button" class="archive-toggle" @click="showArchive = !showArchive">
            {{ showArchive ? t('common.archiveHide') : `${t('common.archive')} (${archivedAchievements.length})` }}
          </button>

          <div v-if="showArchive" class="cards archive-cards">
            <article v-for="item in archivedAchievements" :key="item.id" class="ach-card ach-card--muted">
              <PhotoStrip v-if="item.images?.length" :images="item.images" :alt="item.title" />
              <div class="ach-row">
                <span class="ach-icon" aria-hidden="true">
                  <AppIcon :name="item.icon" />
                </span>
                <div class="ach-body">
                  <div class="ach-meta">
                    <span class="ach-category">{{ item.year }}</span>
                  </div>
                  <h3 class="ach-title">{{ item.title }}</h3>
                  <p class="ach-description">{{ item.description }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import PhotoStrip from '@/components/ui/PhotoStrip.vue'
import {
  achievementYears,
  getAchievementCategories,
  getArchivedAchievements,
  getCurrentAchievements
} from '@/constants/achievements'
import { useI18n } from '@/i18n'
import type { AchievementCategory } from '@/types'

const { locale, t } = useI18n()

const achievementCategories = computed(() => getAchievementCategories(locale.value))
const currentAchievements = computed(() => getCurrentAchievements(locale.value))
const archivedAchievements = computed(() => getArchivedAchievements(locale.value))

const activeYear = ref('all')
const activeCategory = ref('all')
const showArchive = ref(false)

const filtered = computed(() =>
  currentAchievements.value.filter((item) => {
    const byYear = activeYear.value === 'all' || item.year === activeYear.value
    const byCategory = activeCategory.value === 'all' || item.category === activeCategory.value
    return byYear && byCategory
  })
)

/** Годы по убыванию: 2026 → 2023. */
const groups = computed(() => {
  const years = Array.from(new Set(filtered.value.map((item) => item.year))).sort(
    (a, b) => Number(b) - Number(a)
  )

  return years.map((year) => ({
    year,
    items: filtered.value.filter((item) => item.year === year)
  }))
})

const categoryLabel = (value: AchievementCategory) =>
  achievementCategories.value.find((category) => category.value === value)?.label ?? value
</script>

<style lang="scss" scoped>
.section--tight {
  padding: $spacing-6 0 $spacing-16;
}

// --- Фильтры ---
.filters {
  display: flex;
  flex-direction: column;
  gap: $spacing-3;
  margin-bottom: $spacing-10;

  @include mobile {
    margin-bottom: $spacing-6;
  }
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-2;

  @include mobile {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: $spacing-1;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}

.filter {
  padding: $spacing-2 $spacing-4;
  min-height: 40px;
  border: 1px solid $line;
  border-radius: $radius-full;
  background: transparent;
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

  &--ghost {
    border-color: transparent;
    background: $paper-sunken;

    &.active {
      background: $accent-soft;
      border-color: rgba($accent, 0.4);
      color: $accent-ink;
    }
  }
}

// --- Хронология ---
.year-block {
  margin-bottom: $spacing-12;

  &:last-child {
    margin-bottom: 0;
  }
}

.year-marker {
  font-size: $text-3xl;
  padding-bottom: $spacing-2;
  margin-bottom: $spacing-6;
  border-bottom: 2px solid $ink;

  @include mobile {
    font-size: $text-2xl;
    margin-bottom: $spacing-4;
  }
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: $spacing-4;

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.ach-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: $paper-raised;
  border: 1px solid $line;
  border-radius: $radius-lg;
  transition: border-color $transition-normal, box-shadow $transition-normal, transform $transition-normal;

  &:hover {
    border-color: rgba($accent, 0.4);
    box-shadow: $shadow-md;
    transform: translateY(-2px);
  }

  &--muted {
    background: transparent;
    border-style: dashed;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
}

.ach-row {
  display: flex;
  gap: $spacing-4;
  padding: $spacing-5;

  @include mobile {
    padding: $spacing-4;
    gap: $spacing-3;
  }
}

.ach-icon {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  color: $accent-ink;
  background: $paper-sunken;
  border-radius: $radius-md;
}

.ach-body {
  min-width: 0;
}

.ach-meta {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-2;
  margin-bottom: $spacing-2;
}

.ach-category,
.ach-date {
  font-size: $text-xs;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: $color-text-muted;
}

.ach-title {
  font-size: $text-lg;
  line-height: 1.3;
  margin-bottom: $spacing-2;

  @include mobile {
    font-size: $text-base;
  }
}

.ach-description {
  color: $color-text-secondary;
  font-size: $text-sm;
}

.ach-details {
  margin-top: $spacing-3;
  padding-left: $spacing-5;
  color: $color-text-secondary;
  font-size: $text-sm;

  li {
    margin-bottom: 2px;
  }
}

.ach-badges {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-2;
  margin-top: $spacing-3;
}

.ach-badge {
  padding: 2px $spacing-2;
  border-radius: $radius-full;
  background: $paper-sunken;
  color: $color-text-secondary;
  font-size: $text-xs;
  font-weight: 600;

  &--result {
    background: $accent-soft;
    color: $accent-ink;
  }
}

.ach-source {
  display: inline-block;
  margin-top: $spacing-3;
  font-size: $text-sm;
  font-weight: 600;
  text-decoration: none;
}

.empty {
  color: $color-text-muted;
  padding: $spacing-8 0;
}

// --- Архив ---
.archive {
  margin-top: $spacing-12;
  padding-top: $spacing-8;
  border-top: 1px solid $line;
}

.archive-toggle {
  padding: $spacing-2 $spacing-4;
  min-height: 44px;
  border: 1px solid $line;
  border-radius: $radius-md;
  background: transparent;
  color: $color-text-secondary;
  font-size: $text-sm;
  font-weight: 500;

  &:hover {
    border-color: rgba($accent, 0.5);
    color: $ink;
  }
}

.archive-cards {
  margin-top: $spacing-4;
}
</style>
