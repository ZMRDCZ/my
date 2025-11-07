<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text fade-in" :class="{ 'visible': isVisible }">
            <h1 class="hero-title">
              <span class="greeting">Привет, я</span>
              <span class="name text-gradient">Дмитрий Комаров</span>
            </h1>
            <p class="hero-subtitle">
              Инженер, исследователь и организатор инклюзивных инициатив
            </p>
            <p class="hero-description">
              Создаю инновационные технические решения и организую мероприятия, 
              способствующие развитию инклюзивного образования и технологий
            </p>
            <div class="hero-actions">
              <IndustrialButton to="/projects" variant="primary">
                Мои проекты
              </IndustrialButton>
              <IndustrialButton to="/contacts" variant="secondary">
                Связаться со мной
              </IndustrialButton>
            </div>
          </div>
          <div class="hero-image fade-in" :class="{ 'visible': isVisible }">
            <div class="image-placeholder">
              <div class="image-frame industrial-border">
                <div class="placeholder-content">
                  <div class="placeholder-icon">👨‍💻</div>
                  <p>Фото будет предоставлено заказчиком</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Achievement Section -->
    <section class="achievement-section section">
      <div class="container">
        <div class="achievement-card card">
          <div class="achievement-content">
            <div class="achievement-icon">🏆</div>
            <h2 class="achievement-title">Главное достижение</h2>
            <h3 class="achievement-name text-gradient">
              Стипендия Правительства РФ
            </h3>
            <p class="achievement-description">
              Получил государственную стипендию Правительства Российской Федерации 
              за выдающиеся достижения в области образования и науки
            </p>
            <div class="achievement-stats">
              <div class="stat-item">
                <span class="stat-number text-gradient-gold">2024</span>
                <span class="stat-label">Год получения</span>
              </div>
              <div class="stat-item">
                <span class="stat-number text-gradient-gold">15+</span>
                <span class="stat-label">Проектов</span>
              </div>
              <div class="stat-item">
                <span class="stat-number text-gradient-gold">100+</span>
                <span class="stat-label">Участников</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Navigation Section -->
    <section class="navigation-section section">
      <div class="container">
        <h2 class="section-title text-center">Исследуйте портфолио</h2>
        <div class="nav-grid">
          <router-link to="/about" class="nav-card card">
            <div class="nav-icon">👨‍🎓</div>
            <h3 class="nav-title">О себе</h3>
            <p class="nav-description">
              Узнайте больше о моем образовании, навыках и профессиональном пути
            </p>
          </router-link>
          
          <router-link to="/achievements" class="nav-card card">
            <div class="nav-icon">🏅</div>
            <h3 class="nav-title">Достижения</h3>
            <p class="nav-description">
              Награды, стипендии и признание в научной и технической сферах
            </p>
          </router-link>
          
          <router-link to="/projects" class="nav-card card">
            <div class="nav-icon">🚀</div>
            <h3 class="nav-title">Проекты</h3>
            <p class="nav-description">
              Технические проекты, веб-разработка и инновационные решения
            </p>
          </router-link>
          
          <router-link to="/initiatives" class="nav-card card">
            <div class="nav-icon">🤝</div>
            <h3 class="nav-title">Инклюзивные инициативы</h3>
            <p class="nav-description">
              Мероприятия и программы для развития инклюзивного образования
            </p>
          </router-link>
          
          <router-link to="/publications" class="nav-card card">
            <div class="nav-icon">📚</div>
            <h3 class="nav-title">Публикации</h3>
            <p class="nav-description">
              Научные статьи, исследования и публикации в профильных изданиях
            </p>
          </router-link>
          
          <router-link to="/gallery" class="nav-card card">
            <div class="nav-icon">📸</div>
            <h3 class="nav-title">Галерея</h3>
            <p class="nav-description">
              Фотографии с мероприятий, конференций и проектной деятельности
            </p>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import IndustrialButton from '@/components/ui/IndustrialButton.vue'
import { useFadeIn } from '@/composables/useAnimations'

const { isVisible } = useFadeIn(300)
</script>

<style lang="scss" scoped>
.home-page {
  min-height: 100vh;
}

.hero-section {
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 80px;
  
  @include mobile {
    min-height: 80vh;
    padding-top: 70px;
  }
  
  @include xs {
    min-height: 70vh;
    padding-top: 60px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at center,
      rgba($color-accent, 0.1) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-12;
  align-items: center;
  
  @include mobile-and-tablet {
    grid-template-columns: 1fr;
    gap: $spacing-8;
    text-align: center;
  }
  
  @include mobile {
    gap: $spacing-6;
  }
}

.hero-text {
  .greeting {
    display: block;
    font-size: $text-xl;
    color: $color-text-secondary;
    margin-bottom: $spacing-2;
    font-family: $font-secondary;
    
    @include mobile {
      font-size: $text-lg;
    }
    
    @include xs {
      font-size: $text-base;
    }
  }
  
  .name {
    display: block;
    font-size: $text-6xl;
    line-height: 1;
    margin-bottom: $spacing-6;
    
    @include mobile {
      font-size: $text-4xl;
      margin-bottom: $spacing-4;
    }
    
    @include xs {
      font-size: $text-3xl;
    }
  }
}

.hero-subtitle {
  font-size: $text-2xl;
  color: $color-industrial-cyan;
  margin-bottom: $spacing-4;
  font-weight: 600;
  
  @include mobile {
    font-size: $text-xl;
  }
  
  @include xs {
    font-size: $text-lg;
  }
}

.hero-description {
  font-size: $text-lg;
  color: $color-text-secondary;
  line-height: 1.7;
  margin-bottom: $spacing-8;
  
  @include mobile {
    font-size: $text-base;
    margin-bottom: $spacing-6;
  }
  
  @include xs {
    font-size: $text-sm;
  }
}

.hero-actions {
  display: flex;
  gap: $spacing-4;
  
  @include mobile-and-tablet {
    flex-direction: column;
    align-items: center;
    gap: $spacing-3;
  }
}

.hero-image {
  .image-placeholder {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    
    @include mobile {
      max-width: 300px;
    }
    
    @include xs {
      max-width: 250px;
    }
    
    .image-frame {
      aspect-ratio: 1;
      padding: $spacing-8;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba($color-tertiary, 0.2);
      
      @include mobile {
        padding: $spacing-6;
      }
      
      @include xs {
        padding: $spacing-4;
      }
      
      .placeholder-content {
        text-align: center;
        
        .placeholder-icon {
          font-size: 4rem;
          margin-bottom: $spacing-4;
          
          @include mobile {
            font-size: 3rem;
            margin-bottom: $spacing-3;
          }
          
          @include xs {
            font-size: 2.5rem;
            margin-bottom: $spacing-2;
          }
        }
        
        p {
          color: $color-text-muted;
          font-size: $text-sm;
          
          @include xs {
            font-size: $text-xs;
          }
        }
      }
    }
  }
}

.achievement-section {
  .achievement-card {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    
    @include mobile {
      max-width: 100%;
    }
    
    .achievement-icon {
      font-size: 4rem;
      margin-bottom: $spacing-6;
      
      @include mobile {
        font-size: 3rem;
        margin-bottom: $spacing-4;
      }
      
      @include xs {
        font-size: 2.5rem;
        margin-bottom: $spacing-3;
      }
    }
    
    .achievement-title {
      font-size: $text-3xl;
      margin-bottom: $spacing-4;
      color: $color-white;
      
      @include mobile {
        font-size: $text-2xl;
        margin-bottom: $spacing-3;
      }
      
      @include xs {
        font-size: $text-xl;
      }
    }
    
    .achievement-name {
      font-size: $text-4xl;
      margin-bottom: $spacing-6;
      
      @include mobile {
        font-size: $text-2xl;
        margin-bottom: $spacing-4;
      }
      
      @include xs {
        font-size: $text-xl;
      }
    }
    
    .achievement-description {
      font-size: $text-lg;
      color: $color-text-secondary;
      margin-bottom: $spacing-8;
      line-height: 1.7;
      
      @include mobile {
        font-size: $text-base;
        margin-bottom: $spacing-6;
      }
      
      @include xs {
        font-size: $text-sm;
      }
    }
  }
}

.achievement-stats {
  display: flex;
  justify-content: center;
  gap: $spacing-8;
  
  @include mobile {
    flex-direction: column;
    gap: $spacing-4;
  }
  
  @include xs {
    gap: $spacing-3;
  }
  
  .stat-item {
    text-align: center;
    
    .stat-number {
      display: block;
      font-size: $text-3xl;
      font-weight: 700;
      font-family: $font-primary;
      margin-bottom: $spacing-2;
      
      @include mobile {
        font-size: $text-2xl;
        margin-bottom: $spacing-1;
      }
      
      @include xs {
        font-size: $text-xl;
      }
    }
    
    .stat-label {
      color: $color-text-muted;
      font-size: $text-sm;
      text-transform: uppercase;
      letter-spacing: 1px;
      
      @include xs {
        font-size: $text-xs;
      }
    }
  }
}

.navigation-section {
  .section-title {
    font-size: $text-4xl;
    margin-bottom: $spacing-12;
    text-align: center;
    
    @include mobile {
      font-size: $text-3xl;
      margin-bottom: $spacing-8;
    }
    
    @include xs {
      font-size: $text-2xl;
      margin-bottom: $spacing-6;
    }
  }
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-6;
  
  @include mobile {
    grid-template-columns: 1fr;
    gap: $spacing-4;
  }
  
  @include xs {
    gap: $spacing-3;
  }
}

.nav-card {
  text-decoration: none;
  color: inherit;
  padding: $spacing-8;
  text-align: center;
  transition: $transition-normal;
  
  @include mobile {
    padding: $spacing-6;
  }
  
  @include xs {
    padding: $spacing-4;
  }
  
  &:hover {
    .nav-icon {
      transform: scale(1.2);
      @include industrial-text-glow($color-industrial-cyan);
    }
  }
  
  @include touch-device {
    &:hover {
      transform: none;
    }
    
    &:active {
      transform: translateY(-5px);
    }
  }
  
  .nav-icon {
    font-size: 3rem;
    margin-bottom: $spacing-4;
    transition: $transition-normal;
    
    @include mobile {
      font-size: 2.5rem;
      margin-bottom: $spacing-3;
    }
    
    @include xs {
      font-size: 2rem;
      margin-bottom: $spacing-2;
    }
  }
  
  .nav-title {
    font-size: $text-xl;
    margin-bottom: $spacing-4;
    color: $color-highlight;
    
    @include mobile {
      font-size: $text-lg;
      margin-bottom: $spacing-3;
    }
    
    @include xs {
      font-size: $text-base;
      margin-bottom: $spacing-2;
    }
  }
  
  .nav-description {
    color: $color-text-secondary;
    line-height: 1.6;
    margin: 0;
    
    @include mobile {
      font-size: $text-sm;
    }
    
    @include xs {
      font-size: $text-xs;
    }
  }
}
</style>

