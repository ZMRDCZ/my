<template>
  <article class="project-card" :class="{ 'project-card--archived': project.archived }">
    <PhotoStrip v-if="project.images?.length" :images="project.images" :alt="project.title" />

    <div class="project-content">
      <header class="project-header">
        <span class="project-icon" aria-hidden="true">
          <AppIcon :name="project.icon" />
        </span>
        <div class="project-meta">
          <span class="project-category">{{ project.category }}</span>
          <span class="project-status">{{ project.status }}</span>
        </div>
      </header>

      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.shortDescription }}</p>

      <p v-if="project.role" class="project-role">
        <span class="project-role-label">{{ t('projects.role') }}</span> {{ project.role }}
      </p>
      <p v-if="project.customer" class="project-role">
        <span class="project-role-label">{{ t('projects.customer') }}</span> {{ project.customer }}
      </p>

      <div class="tag-cloud project-technologies">
        <span v-for="tech in project.technologies" :key="tech" class="tag">{{ tech }}</span>
      </div>

      <ul v-if="project.achievements.length" class="project-achievements">
        <li v-for="achievement in project.achievements" :key="achievement">
          {{ achievement }}
        </li>
      </ul>

      <footer class="project-footer">
        <span class="project-duration">{{ project.duration }}</span>
        <span v-if="relatedCount" class="project-pubs">
          {{ publicationsCount(relatedCount) }}
        </span>
      </footer>

      <router-link v-if="relatedCount" to="/publications" class="project-link">
        {{ t('projects.publicationsLink') }}
      </router-link>

      <div v-if="project.links?.length" class="project-links">
        <a
          v-for="link in project.links"
          :key="link.url"
          :href="link.url"
          class="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.title }} →
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import PhotoStrip from '@/components/ui/PhotoStrip.vue'
import { useI18n } from '@/i18n'
import type { Project } from '@/types'

interface Props {
  project: Project
}

const props = defineProps<Props>()

const { t, publicationsCount } = useI18n()

const relatedCount = computed(() => props.project.publicationIds?.length ?? 0)
</script>

<style lang="scss" scoped>
.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background: $paper-raised;
  border: 1px solid $line;
  border-radius: $radius-lg;
  box-shadow: $shadow-sm;
  transition: border-color $transition-normal, box-shadow $transition-normal, transform $transition-normal;

  &:hover {
    border-color: rgba($accent, 0.45);
    box-shadow: $shadow-lg;
    transform: translateY(-3px);
  }

  &--archived {
    background: transparent;
    border-style: dashed;
    box-shadow: none;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
}

.project-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: $spacing-3;
  padding: $spacing-5;

  @include mobile {
    padding: $spacing-4;
  }
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: $spacing-3;
}

.project-icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  color: $accent-ink;
  background: $paper-sunken;
  border-radius: $radius-md;
  flex-shrink: 0;
}

.project-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  text-align: right;
  min-width: 0;
}

.project-category {
  font-size: $text-sm;
  color: $accent-ink;
  font-weight: 600;
}

.project-status {
  font-size: $text-xs;
  color: $color-text-muted;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.project-title {
  font-size: $text-xl;
  line-height: 1.25;

  @include mobile {
    font-size: $text-lg;
  }
}

.project-description {
  color: $color-text-secondary;
  font-size: $text-sm;
}

.project-role {
  font-size: $text-sm;
  color: $color-text-secondary;
}

.project-role-label {
  color: $color-text-muted;
}

.project-achievements {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: $spacing-2;

  li {
    position: relative;
    padding-left: $spacing-4;
    color: $color-text-secondary;
    font-size: $text-sm;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.55em;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: rgba($accent, 0.6);
    }
  }
}

.project-footer {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-3;
  margin-top: auto;
  padding-top: $spacing-3;
  border-top: 1px solid $line;
  font-size: $text-sm;
  color: $color-text-muted;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-3;
}

.project-link {
  font-size: $text-sm;
  font-weight: 600;
  text-decoration: none;
}
</style>
