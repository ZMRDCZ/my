<template>
  <div class="initiatives-page">
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">{{ t('initiatives.title') }}</h1>
        <p class="page-subtitle">{{ initiativesIntro }}</p>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container">
        <div class="init-grid">
          <article v-for="item in initiatives" :key="item.id" class="init-card">
            <PhotoStrip v-if="item.images?.length" :images="item.images" :alt="item.title" />

            <div class="init-row">
              <span class="init-icon" aria-hidden="true">
                <AppIcon :name="item.icon" />
              </span>

              <div class="init-body">
                <div v-if="item.period" class="init-period">{{ item.period }}</div>
                <h2 class="init-title">{{ item.title }}</h2>
                <p v-if="item.role" class="init-role">{{ item.role }}</p>
                <p class="init-description">{{ item.description }}</p>

                <div v-if="item.facts?.length" class="init-facts">
                  <span v-for="fact in item.facts" :key="fact" class="init-fact">{{ fact }}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--sunken">
      <div class="container">
        <h2 class="research-title">{{ initiativesResearch.title }}</h2>
        <p class="research-note">{{ initiativesResearch.description }}</p>

        <ul class="research-list">
          <li v-for="item in initiativesResearch.items" :key="item">{{ item }}</li>
        </ul>

        <router-link to="/publications" class="research-link">{{ t('initiatives.allPublications') }}</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import PhotoStrip from '@/components/ui/PhotoStrip.vue'
import {
  getInitiatives,
  getInitiativesIntro,
  getInitiativesResearch
} from '@/constants/initiatives'
import { useI18n } from '@/i18n'

const { locale, t } = useI18n()

const initiativesIntro = computed(() => getInitiativesIntro(locale.value))
const initiatives = computed(() => getInitiatives(locale.value))
const initiativesResearch = computed(() => getInitiativesResearch(locale.value))
</script>

<style lang="scss" scoped>
.section--tight {
  padding: $spacing-6 0 $spacing-12;
}

.section--sunken {
  background: $paper-sunken;
  border-top: 1px solid $line;
}

.init-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: $spacing-4;

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.init-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: $paper-raised;
  border: 1px solid $line;
  border-radius: $radius-lg;
  transition: border-color $transition-normal, box-shadow $transition-normal;

  &:hover {
    border-color: rgba($accent, 0.4);
    box-shadow: $shadow-md;
  }
}

.init-row {
  display: flex;
  gap: $spacing-4;
  padding: $spacing-5;

  @include mobile {
    padding: $spacing-4;
    gap: $spacing-3;
  }
}

.init-icon {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  color: $accent-ink;
  background: $paper-sunken;
  border-radius: $radius-md;
}

.init-body {
  min-width: 0;
}

.init-period {
  font-size: $text-xs;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: $color-text-muted;
  margin-bottom: $spacing-1;
}

.init-title {
  font-size: $text-lg;
  line-height: 1.3;
  margin-bottom: $spacing-2;

  @include mobile {
    font-size: $text-base;
  }
}

.init-role {
  color: $accent-ink;
  font-size: $text-sm;
  font-weight: 600;
  margin-bottom: $spacing-2;
}

.init-description {
  color: $color-text-secondary;
  font-size: $text-sm;
}

.init-facts {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-2;
  margin-top: $spacing-3;
}

.init-fact {
  padding: 2px $spacing-3;
  background: $accent-soft;
  color: $accent-ink;
  border-radius: $radius-full;
  font-size: $text-sm;
  font-weight: 600;
}

.research-title {
  font-size: $text-2xl;
  margin-bottom: $spacing-3;

  @include mobile {
    font-size: $text-xl;
  }
}

.research-note {
  color: $color-text-secondary;
  max-width: 68ch;
  margin-bottom: $spacing-4;
}

.research-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: $spacing-3;
  max-width: 72ch;

  li {
    padding-left: $spacing-4;
    border-left: 2px solid rgba($accent, 0.4);
    color: $color-text-secondary;
    font-size: $text-sm;
  }
}

.research-link {
  display: inline-block;
  margin-top: $spacing-6;
  font-weight: 600;
  text-decoration: none;
}
</style>
