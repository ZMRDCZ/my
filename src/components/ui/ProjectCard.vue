<template>
  <div class="project-card card">
    <div class="project-content">
      <div class="project-header">
        <span class="project-icon">{{ project.icon }}</span>
        <div class="project-meta">
          <span class="project-category">{{ project.category }}</span>
          <span class="project-status">{{ project.status }}</span>
        </div>
      </div>

      <h3 class="project-title text-gradient">{{ project.title }}</h3>
      <p class="project-description">{{ project.shortDescription }}</p>

      <div class="project-technologies">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="tech-tag"
        >
          {{ tech }}
        </span>
      </div>

      <ul class="project-achievements">
        <li v-for="achievement in project.achievements" :key="achievement">
          {{ achievement }}
        </li>
      </ul>

      <div class="project-footer">
        <span class="project-duration">
          📅 {{ project.duration }}
        </span>
        <span v-if="project.participants" class="project-participants">
          👥 {{ project.participants }} участников
        </span>
      </div>

      <div v-if="project.links?.length" class="project-links">
        <a
          v-for="link in project.links"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link"
        >
          {{ link.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/types'

interface Props {
  project: Project
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-icon {
  font-size: 2.5rem;
}

.project-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: $spacing-1;
}

.project-category {
  font-size: $text-sm;
  color: $color-highlight;
  font-weight: 600;
}

.project-status {
  font-size: $text-xs;
  color: $color-text-muted;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.project-title {
  font-size: $text-xl;
  font-family: $font-primary;

  @include mobile {
    font-size: $text-lg;
  }
}

.project-description {
  color: $color-text-secondary;
  line-height: 1.6;
  font-size: $text-sm;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-2;
}

.tech-tag {
  padding: $spacing-1 $spacing-3;
  background: rgba($color-accent, 0.2);
  border: 1px solid rgba($color-accent, 0.3);
  border-radius: $radius-sm;
  font-size: $text-xs;
  color: $color-accent;
  font-weight: 500;
  transition: $transition-normal;

  &:hover {
    background: rgba($color-accent, 0.3);
    border-color: $color-accent;
  }
}

.project-achievements {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: $spacing-2;

  li {
    padding-left: $spacing-4;
    position: relative;
    color: $color-text-secondary;
    font-size: $text-sm;

    &::before {
      content: '▸';
      position: absolute;
      left: 0;
      top: 0;
      color: $color-accent;
    }
  }
}

.project-footer {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-3;
  font-size: $text-sm;
  color: $color-text-muted;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-3;
}

.project-link {
  color: $color-industrial-cyan;
  text-decoration: none;
  font-weight: 600;
  font-size: $text-sm;
  transition: $transition-normal;

  &:hover {
    color: $color-highlight;
    @include industrial-text-glow($color-highlight);
  }
}
</style>

