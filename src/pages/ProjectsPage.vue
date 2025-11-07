<template>
  <div class="projects-page">
    <section class="page-header section">
      <div class="container">
        <h1 class="page-title text-gradient">Проекты</h1>
        <p class="page-description">
          Технические проекты, веб-разработка и инновационные решения
        </p>
      </div>
    </section>

    <section class="filters-section">
      <div class="container">
        <div class="filters">
          <button
            v-for="filter in projectFilters"
            :key="filter.value"
            class="filter-btn"
            :class="{ 'active': activeFilter === filter.value }"
            @click="activeFilter = filter.value"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section>

    <section class="projects-section section">
      <div class="container">
        <div class="projects-grid">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
          />
        </div>
        
        <div v-if="filteredProjects.length === 0" class="no-results">
          <p>Проекты не найдены</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { projects, projectFilters } from '@/constants/projects'

const activeFilter = ref('all')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects
  }
  return projects.filter(project => project.type === activeFilter.value)
})
</script>

<style lang="scss" scoped>
.page-header {
  text-align: center;
  padding-top: 120px;
  
  @include mobile {
    padding-top: 100px;
  }
}

.page-title {
  font-size: $text-5xl;
  margin-bottom: $spacing-4;
  
  @include mobile {
    font-size: $text-4xl;
  }
  
  @include xs {
    font-size: $text-3xl;
  }
}

.page-description {
  font-size: $text-xl;
  color: $color-text-secondary;
  max-width: 600px;
  margin: 0 auto;
  
  @include mobile {
    font-size: $text-lg;
  }
  
  @include xs {
    font-size: $text-base;
  }
}

.filters-section {
  padding: $spacing-8 0;
  
  @include mobile {
    padding: $spacing-6 0;
  }
}

.filters {
  display: flex;
  justify-content: center;
  gap: $spacing-3;
  flex-wrap: wrap;
}

.filter-btn {
  padding: $spacing-2 $spacing-4;
  background: transparent;
  border: 2px solid rgba($color-accent, 0.3);
  color: $color-text-secondary;
  border-radius: $radius-md;
  font-family: $font-secondary;
  font-weight: 600;
  transition: $transition-normal;
  cursor: pointer;
  
  &:hover {
    border-color: $color-accent;
    color: $color-accent;
  }
  
  &.active {
    background: $gradient-industrial;
    border-color: transparent;
    color: $color-white;
    @include industrial-glow($color-accent, 3px);
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: $spacing-6;
  
  @include mobile {
    grid-template-columns: 1fr;
    gap: $spacing-4;
  }
}

.no-results {
  text-align: center;
  padding: $spacing-12;
  color: $color-text-muted;
  font-size: $text-lg;
}
</style>

