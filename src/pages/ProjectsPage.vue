<template>
  <div class="projects-page">
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">{{ t('projects.title') }}</h1>
        <p class="page-subtitle">{{ t('projects.subtitle') }}</p>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container">
        <div class="filters" role="group" :aria-label="t('projects.filter')">
          <button
            v-for="filter in projectFilters"
            :key="filter.value"
            type="button"
            class="filter"
            :class="{ active: activeFilter === filter.value }"
            @click="activeFilter = filter.value"
          >
            {{ filter.label }}
          </button>
        </div>

        <div v-if="filteredProjects.length" class="projects-grid">
          <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
        </div>

        <p v-else class="no-results">{{ t('projects.empty') }}</p>

        <div v-if="archivedProjects.length" class="archive">
          <button type="button" class="archive-toggle" @click="showArchive = !showArchive">
            {{ showArchive ? t('common.archiveHide') : `${t('common.archive')} (${archivedProjects.length})` }}
          </button>

          <div v-if="showArchive" class="projects-grid archive-grid">
            <ProjectCard v-for="project in archivedProjects" :key="project.id" :project="project" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { getActiveProjects, getArchivedProjects, getProjectFilters } from '@/constants/projects'
import { useI18n } from '@/i18n'

const { locale, t } = useI18n()

const projectFilters = computed(() => getProjectFilters(locale.value))
const activeProjects = computed(() => getActiveProjects(locale.value))
const archivedProjects = computed(() => getArchivedProjects(locale.value))

const activeFilter = ref('all')
const showArchive = ref(false)

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return activeProjects.value
  return activeProjects.value.filter((project) => project.type === activeFilter.value)
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: $spacing-5;

  @include mobile {
    grid-template-columns: 1fr;
    gap: $spacing-4;
  }
}

.no-results {
  padding: $spacing-12 0;
  color: $color-text-muted;
}

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

.archive-grid {
  margin-top: $spacing-4;
}
</style>
