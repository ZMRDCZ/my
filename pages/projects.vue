<template>
  <div class="projects-page">
    <!-- Hero Section -->
    <section class="projects-hero section">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title text-gradient">Проекты</h1>
          <p class="hero-subtitle">
            Технические проекты, веб-разработка и инновационные решения
          </p>
          <div class="project-filters">
            <button 
              v-for="filter in projectFilters"
              :key="filter.value"
              @click="activeFilter = filter.value"
              :class="{ 'active': activeFilter === filter.value }"
              class="filter-btn neon-button"
              type="button"
              :aria-pressed="activeFilter === filter.value"
            >
              {{ filter.label }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="projects-grid-section section">
      <div class="container">
        <div class="projects-grid">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
            @click="openProjectModal(project)"
          />
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <Transition name="modal">
      <div 
        v-if="selectedProject" 
        class="project-modal" 
        @click="closeProjectModal"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`modal-title-${selectedProject.id}`"
      >
        <div class="modal-content card neon-border" @click.stop>
          <button 
            class="modal-close" 
            @click="closeProjectModal" 
            aria-label="Закрыть модальное окно"
            type="button"
          >
            ×
          </button>
          <div class="modal-header">
            <div class="modal-icon" aria-hidden="true">{{ selectedProject.icon }}</div>
            <h2 :id="`modal-title-${selectedProject.id}`" class="modal-title">{{ selectedProject.title }}</h2>
            <p class="modal-category">{{ selectedProject.category }}</p>
          </div>
          <div class="modal-body">
            <p class="project-full-description">{{ selectedProject.fullDescription }}</p>
            
            <div v-if="selectedProject.achievements" class="project-achievements">
              <h3>Достижения проекта:</h3>
              <ul>
                <li v-for="achievement in selectedProject.achievements" :key="achievement">
                  {{ achievement }}
                </li>
              </ul>
            </div>
            
            <div v-if="selectedProject.videoReport" class="project-video">
              <h3>Видеоотчёт:</h3>
              <div class="video-placeholder">
                <div class="video-icon" aria-hidden="true">🎥</div>
                <p>{{ selectedProject.videoReport }}</p>
              </div>
            </div>
            
            <div class="project-details">
              <div class="detail-section">
                <h4>Технологии:</h4>
                <div class="tech-list">
                  <span 
                    v-for="tech in selectedProject.technologies"
                    :key="tech"
                    class="tech-tag"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              
              <div v-if="selectedProject.links" class="detail-section">
                <h4>Ссылки:</h4>
                <div class="project-links">
                  <a 
                    v-for="link in selectedProject.links"
                    :key="link.title"
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project-link neon-button"
                  >
                    {{ link.title }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Project, ProjectType } from '~/types'
import { projects, projectFilters } from '~/constants/projects'
import { useModal } from '~/composables/useModal'

// Meta tags
useSeoMeta({
  title: 'Проекты - Дмитрий Комаров',
  ogTitle: 'Проекты - Дмитрий Комаров',
  description: 'Технические проекты, веб-разработка и инновационные решения Дмитрия Комарова',
  ogDescription: 'Технические проекты, веб-разработка и инновационные решения Дмитрия Комарова'
})

// Reactive state
const activeFilter = ref<ProjectType>('all')
const projectsData = ref<Project[]>(projects)

// Modal management
const { isOpen: isModalOpen, modalContent, open: openModal, close: closeModal } = useModal()

const selectedProject = computed(() => modalContent.value as Project | null)

// Computed properties
const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projectsData.value
  }
  return projectsData.value.filter(project => project.type === activeFilter.value)
})

// Methods
const openProjectModal = (project: Project) => {
  openModal(project)
}

const closeProjectModal = () => {
  closeModal()
}
</script>

<style lang="scss" scoped>
.projects-page {
  min-height: 100vh;
}

.projects-hero {
  padding-top: $spacing-16;
  text-align: center;
  
  @include mobile {
    padding-top: $spacing-12;
  }
  
  @include xs {
    padding-top: $spacing-8;
  }
  
  .hero-content {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .page-title {
    font-size: $text-6xl;
    margin-bottom: $spacing-6;
    
    @include mobile {
      font-size: $text-4xl;
      margin-bottom: $spacing-4;
    }
    
    @include xs {
      font-size: $text-3xl;
      margin-bottom: $spacing-3;
    }
  }
  
  .hero-subtitle {
    font-size: $text-xl;
    color: $color-neon-cyan;
    line-height: 1.6;
    margin-bottom: $spacing-8;
    
    @include mobile {
      font-size: $text-lg;
      margin-bottom: $spacing-6;
    }
    
    @include xs {
      font-size: $text-base;
      margin-bottom: $spacing-4;
    }
  }
}

.project-filters {
  display: flex;
  justify-content: center;
  gap: $spacing-4;
  flex-wrap: wrap;
  
  @include mobile {
    gap: $spacing-3;
  }
  
  @include xs {
    gap: $spacing-2;
  }
  
  .filter-btn {
    padding: $spacing-2 $spacing-4;
    font-size: $text-sm;
    
    @include mobile {
      padding: $spacing-3 $spacing-4;
      font-size: $text-xs;
    }
    
    @include xs {
      padding: $spacing-2 $spacing-3;
      font-size: 0.7rem;
    }
    
    &.active {
      background: linear-gradient(45deg, $color-neon-pink, $color-neon-cyan);
      @include neon-glow($color-neon-cyan, 3px);
    }
    
    &:not(.active) {
      background: transparent;
      border: 1px solid $color-gray-600;
      
      &:hover {
        border-color: $color-neon-cyan;
        color: $color-neon-cyan;
      }
    }
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: $spacing-8;
  
  @include mobile {
    grid-template-columns: 1fr;
    gap: $spacing-6;
  }
  
  @include xs {
    gap: $spacing-4;
  }
}

// Modal styles
.project-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: $z-modal;
  padding: $spacing-4;
  
  @include mobile {
    padding: $spacing-2;
  }
}

.modal-content {
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  
  @include mobile {
    max-height: 95vh;
  }
}

.modal-close {
  position: absolute;
  top: $spacing-4;
  right: $spacing-4;
  background: none;
  border: none;
  color: $color-white;
  font-size: $text-3xl;
  cursor: pointer;
  z-index: 10;
  min-height: 44px;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: $transition-normal;
  
  @include mobile {
    top: $spacing-3;
    right: $spacing-3;
    font-size: $text-2xl;
  }
  
  @include xs {
    top: $spacing-2;
    right: $spacing-2;
    font-size: $text-xl;
  }
  
  &:hover {
    color: $color-neon-pink;
    transform: scale(1.1);
  }
  
  &:focus {
    outline: 2px solid $color-neon-cyan;
    outline-offset: 2px;
  }
}

.modal-header {
  text-align: center;
  padding: $spacing-8 $spacing-6 $spacing-6;
  
  @include mobile {
    padding: $spacing-6 $spacing-4 $spacing-4;
  }
  
  @include xs {
    padding: $spacing-4 $spacing-3 $spacing-3;
  }
  
  .modal-icon {
    font-size: 5rem;
    margin-bottom: $spacing-4;
    
    @include mobile {
      font-size: 4rem;
      margin-bottom: $spacing-3;
    }
    
    @include xs {
      font-size: 3rem;
      margin-bottom: $spacing-2;
    }
  }
  
  .modal-title {
    font-size: $text-3xl;
    margin-bottom: $spacing-3;
    
    @include mobile {
      font-size: $text-2xl;
      margin-bottom: $spacing-2;
    }
    
    @include xs {
      font-size: $text-xl;
      margin-bottom: $spacing-2;
    }
  }
  
  .modal-category {
    color: $color-neon-cyan;
    font-weight: 600;
    
    @include mobile {
      font-size: $text-sm;
    }
    
    @include xs {
      font-size: $text-xs;
    }
  }
}

.modal-body {
  padding: 0 $spacing-6 $spacing-8;
  
  @include mobile {
    padding: 0 $spacing-4 $spacing-6;
  }
  
  @include xs {
    padding: 0 $spacing-3 $spacing-4;
  }
  
  .project-full-description {
    font-size: $text-lg;
    line-height: 1.7;
    color: $color-gray-300;
    margin-bottom: $spacing-8;
    
    @include mobile {
      font-size: $text-base;
      margin-bottom: $spacing-6;
    }
    
    @include xs {
      font-size: $text-sm;
      margin-bottom: $spacing-4;
    }
  }
  
  .project-achievements,
  .project-video {
    margin-bottom: $spacing-8;
    
    @include mobile {
      margin-bottom: $spacing-6;
    }
    
    @include xs {
      margin-bottom: $spacing-4;
    }
    
    h3 {
      color: $color-neon-purple;
      margin-bottom: $spacing-4;
      
      @include mobile {
        font-size: $text-lg;
        margin-bottom: $spacing-3;
      }
      
      @include xs {
        font-size: $text-base;
        margin-bottom: $spacing-2;
      }
    }
    
    ul {
      list-style: none;
      padding: 0;
      
      li {
        position: relative;
        padding-left: $spacing-5;
        margin-bottom: $spacing-2;
        color: $color-gray-300;
        
        @include mobile {
          padding-left: $spacing-4;
          margin-bottom: $spacing-1;
          font-size: $text-sm;
        }
        
        @include xs {
          padding-left: $spacing-3;
          font-size: $text-xs;
        }
        
        &::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: $color-neon-green;
          font-weight: bold;
        }
      }
    }
  }
  
  .video-placeholder {
    background: rgba(255, 255, 255, 0.05);
    border-radius: $radius-lg;
    padding: $spacing-6;
    text-align: center;
    
    @include mobile {
      padding: $spacing-4;
    }
    
    @include xs {
      padding: $spacing-3;
    }
    
    .video-icon {
      font-size: 3rem;
      margin-bottom: $spacing-4;
      
      @include mobile {
        font-size: 2.5rem;
        margin-bottom: $spacing-3;
      }
      
      @include xs {
        font-size: 2rem;
        margin-bottom: $spacing-2;
      }
    }
    
    p {
      color: $color-gray-400;
      margin: 0;
      
      @include mobile {
        font-size: $text-sm;
      }
      
      @include xs {
        font-size: $text-xs;
      }
    }
  }
}

.project-details {
  .detail-section {
    margin-bottom: $spacing-6;
    
    @include mobile {
      margin-bottom: $spacing-4;
    }
    
    @include xs {
      margin-bottom: $spacing-3;
    }
    
    h4 {
      color: $color-neon-cyan;
      margin-bottom: $spacing-3;
      
      @include mobile {
        font-size: $text-base;
        margin-bottom: $spacing-2;
      }
      
      @include xs {
        font-size: $text-sm;
        margin-bottom: $spacing-2;
      }
    }
  }
  
  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-2;
    
    @include mobile {
      gap: $spacing-1;
    }
    
    @include xs {
      gap: 0.25rem;
    }
  }
  
  .project-links {
    display: flex;
    gap: $spacing-4;
    flex-wrap: wrap;
    
    @include mobile {
      gap: $spacing-3;
    }
    
    @include xs {
      gap: $spacing-2;
    }
  }
  
  .project-link {
    padding: $spacing-2 $spacing-4;
    font-size: $text-sm;
    text-decoration: none;
    
    @include mobile {
      padding: $spacing-3 $spacing-4;
      font-size: $text-xs;
    }
    
    @include xs {
      padding: $spacing-2 $spacing-3;
      font-size: 0.7rem;
    }
  }
}

// Modal transitions
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9);
  opacity: 0;
}
</style>
