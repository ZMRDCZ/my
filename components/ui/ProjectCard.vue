<template>
  <div class="project-card card" @click="$emit('click')">
    <div class="project-image">
      <div class="image-placeholder">
        <div class="placeholder-icon">{{ project.icon }}</div>
        <div class="project-category">{{ project.category }}</div>
      </div>
      <div class="project-overlay">
        <div class="overlay-content">
          <span class="view-details">Подробнее</span>
        </div>
      </div>
    </div>
    <div class="project-content">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.shortDescription }}</p>
      <div class="project-tech">
        <span 
          v-for="tech in project.technologies"
          :key="tech"
          class="tech-tag"
        >
          {{ tech }}
        </span>
      </div>
      <div class="project-stats">
        <div class="stat-item" v-if="project.participants">
          <span class="stat-icon">👥</span>
          <span class="stat-value">{{ project.participants }}+ участников</span>
        </div>
        <div class="stat-item" v-if="project.duration">
          <span class="stat-icon">⏰</span>
          <span class="stat-value">{{ project.duration }}</span>
        </div>
        <div class="stat-item" v-if="project.status">
          <span class="stat-icon">🚀</span>
          <span class="stat-value">{{ project.status }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  id: number
  title: string
  shortDescription: string
  category: string
  icon: string
  technologies: string[]
  participants?: string
  duration?: string
  status?: string
}

interface Props {
  project: Project
}

defineProps<Props>()
defineEmits<{
  click: []
}>()
</script>

<style lang="scss" scoped>
.project-card {
  cursor: pointer;
  overflow: hidden;
  transition: $transition-normal;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  
  @include mobile {
    min-height: 350px;
  }
  
  @include xs {
    min-height: 300px;
  }
  
  &:hover {
    transform: translateY(-10px);
    
    .project-overlay {
      opacity: 1;
    }
    
    .placeholder-icon {
      transform: scale(1.1);
    }
  }
  
  // Touch device optimizations
  @include touch-device {
    &:hover {
      transform: none;
    }
    
    &:active {
      transform: translateY(-5px);
    }
  }
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  
  @include mobile {
    height: 180px;
  }
  
  @include xs {
    height: 150px;
  }
  
  .image-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, $color-gray-800, $color-gray-700);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    
    .placeholder-icon {
      font-size: 4rem;
      transition: $transition-normal;
      
      @include mobile {
        font-size: 3rem;
      }
      
      @include xs {
        font-size: 2.5rem;
      }
    }
    
    .project-category {
      position: absolute;
      top: $spacing-4;
      right: $spacing-4;
      background: linear-gradient(45deg, $color-neon-pink, $color-neon-cyan);
      color: $color-white;
      padding: $spacing-1 $spacing-3;
      border-radius: $radius-full;
      font-size: $text-xs;
      font-weight: 600;
      
      @include mobile {
        top: $spacing-3;
        right: $spacing-3;
        padding: $spacing-1 $spacing-2;
        font-size: 0.7rem;
      }
      
      @include xs {
        top: $spacing-2;
        right: $spacing-2;
        padding: 0.25rem $spacing-2;
        font-size: 0.65rem;
      }
    }
  }
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: $transition-normal;
  
  .overlay-content {
    text-align: center;
    
    .view-details {
      color: $color-neon-cyan;
      font-weight: 600;
      font-size: $text-lg;
      @include neon-text($color-neon-cyan);
      
      @include mobile {
        font-size: $text-base;
      }
      
      @include xs {
        font-size: $text-sm;
      }
    }
  }
}

.project-content {
  padding: $spacing-6;
  flex: 1;
  display: flex;
  flex-direction: column;
  
  @include mobile {
    padding: $spacing-4;
  }
  
  @include xs {
    padding: $spacing-3;
  }
}

.project-title {
  font-size: $text-xl;
  color: $color-white;
  margin-bottom: $spacing-3;
  line-height: 1.3;
  
  @include mobile {
    font-size: $text-lg;
    margin-bottom: $spacing-2;
  }
  
  @include xs {
    font-size: $text-base;
    margin-bottom: $spacing-2;
  }
}

.project-description {
  color: $color-gray-300;
  line-height: 1.6;
  margin-bottom: $spacing-4;
  flex: 1;
  
  @include mobile {
    font-size: $text-sm;
    margin-bottom: $spacing-3;
  }
  
  @include xs {
    font-size: $text-xs;
    margin-bottom: $spacing-2;
  }
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-2;
  margin-bottom: $spacing-4;
  
  @include mobile {
    gap: $spacing-1;
    margin-bottom: $spacing-3;
  }
  
  @include xs {
    gap: 0.25rem;
    margin-bottom: $spacing-2;
  }
}

.tech-tag {
  background: rgba(255, 255, 255, 0.1);
  color: $color-neon-cyan;
  padding: $spacing-1 $spacing-3;
  border-radius: $radius-full;
  font-size: $text-xs;
  font-weight: 500;
  
  @include mobile {
    padding: 0.25rem $spacing-2;
    font-size: 0.7rem;
  }
  
  @include xs {
    padding: 0.2rem $spacing-2;
    font-size: 0.65rem;
  }
}

.project-stats {
  display: flex;
  flex-direction: column;
  gap: $spacing-2;
  margin-top: auto;
  
  @include mobile {
    gap: $spacing-1;
  }
  
  @include xs {
    gap: 0.25rem;
  }
  
  .stat-item {
    display: flex;
    align-items: center;
    gap: $spacing-2;
    font-size: $text-sm;
    color: $color-gray-400;
    
    @include mobile {
      font-size: $text-xs;
      gap: $spacing-1;
    }
    
    @include xs {
      font-size: 0.7rem;
      gap: 0.5rem;
    }
    
    .stat-icon {
      font-size: $text-base;
      
      @include mobile {
        font-size: $text-sm;
      }
      
      @include xs {
        font-size: $text-xs;
      }
    }
  }
}
</style> 