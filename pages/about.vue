<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text fade-in" :class="{ 'visible': isVisible }">
            <h1 class="page-title text-gradient">О себе</h1>
            <p class="hero-subtitle">
              Инженер, исследователь и организатор инклюзивных образовательных инициатив
            </p>
          </div>
          <div class="hero-image fade-in" :class="{ 'visible': isVisible }">
            <div class="image-placeholder">
              <div class="image-frame neon-border">
                <div class="placeholder-content">
                  <div class="placeholder-icon">🎓</div>
                  <p>Видео или фото будет предоставлено</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Biography Section -->
    <section class="biography-section section">
      <div class="container">
        <div class="bio-card card">
          <h2 class="section-title">Профессиональная биография</h2>
          <div class="bio-content">
            <p>
              Студент МГТУ им. Н.Э. Баумана, специализирующийся на разработке инновационных 
              технических решений и организации инклюзивных образовательных программ. 
              Активно участвую в научной деятельности и социальных проектах.
            </p>
            <p>
              Мой путь в технической сфере начался с глубокого интереса к инженерным наукам 
              и желания создавать решения, которые делают мир более доступным и инклюзивным. 
              Особое внимание уделяю разработке технологий для людей с ограниченными возможностями здоровья.
            </p>
            <p>
              Получатель стипендии Правительства РФ, активный участник центров компетенций 
              и организатор множества мероприятий, направленных на развитие инклюзивного образования.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section section">
      <div class="container">
        <h2 class="section-title text-center">Навыки и компетенции</h2>
        <div class="skills-grid">
          <!-- Technical Skills -->
          <div class="skill-category card">
            <div class="category-icon">💻</div>
            <h3 class="category-title">Технические навыки</h3>
            <div class="skills-list">
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">Веб-разработка</span>
                  <span class="skill-level">90%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 90%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">JavaScript/TypeScript</span>
                  <span class="skill-level">85%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 85%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">Vue.js/Nuxt.js</span>
                  <span class="skill-level">88%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 88%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">HTML/CSS/SCSS</span>
                  <span class="skill-level">92%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 92%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Engineering Skills -->
          <div class="skill-category card">
            <div class="category-icon">⚙️</div>
            <h3 class="category-title">Инженерные навыки</h3>
            <div class="skills-list">
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">Проектирование</span>
                  <span class="skill-level">80%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 80%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">Техническое моделирование</span>
                  <span class="skill-level">75%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 75%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">Исследования</span>
                  <span class="skill-level">85%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 85%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">Аналитика</span>
                  <span class="skill-level">82%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 82%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Soft Skills -->
          <div class="skill-category card">
            <div class="category-icon">🤝</div>
            <h3 class="category-title">Социальные навыки</h3>
            <div class="skills-list">
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">Организация мероприятий</span>
                  <span class="skill-level">95%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 95%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">Публичные выступления</span>
                  <span class="skill-level">90%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 90%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">Командная работа</span>
                  <span class="skill-level">88%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 88%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">Лидерство</span>
                  <span class="skill-level">85%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 85%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Highlight -->
    <section class="experience-section section">
      <div class="container">
        <div class="experience-card card neon-border">
          <div class="experience-content">
            <div class="experience-icon">🎤</div>
            <h2 class="experience-title">Опыт выступлений и лекций</h2>
            <p class="experience-description">
              Большой опыт проведения технических и инклюзивных лекций, презентаций 
              и мастер-классов. Специализируюсь на адаптации технических материалов 
              для различных аудиторий, включая людей с нарушениями слуха.
            </p>
            <div class="experience-stats">
              <div class="stat-item">
                <span class="stat-number text-gradient">50+</span>
                <span class="stat-label">Выступлений</span>
              </div>
              <div class="stat-item">
                <span class="stat-number text-gradient">20+</span>
                <span class="stat-label">Лекций на РЖЯ</span>
              </div>
              <div class="stat-item">
                <span class="stat-number text-gradient">500+</span>
                <span class="stat-label">Участников</span>
              </div>
            </div>
            <div class="experience-highlights">
              <h3>Ключевые направления:</h3>
              <ul>
                <li>Технические лекции с переводом на русский жестовый язык</li>
                <li>Мастер-классы по веб-разработке</li>
                <li>Презентации на научных конференциях</li>
                <li>Организация инклюзивных мероприятий</li>
                <li>Наставничество и менторинг</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Meta tags
useSeoMeta({
  title: 'О себе - Дмитрий Комаров',
  ogTitle: 'О себе - Дмитрий Комаров',
  description: 'Биография, навыки и профессиональный опыт Дмитрия Комарова - инженера и организатора инклюзивных инициатив',
  ogDescription: 'Биография, навыки и профессиональный опыт Дмитрия Комарова - инженера и организатора инклюзивных инициатив'
})

// Animation state
const isVisible = ref(false)

// Initialize animations
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 300)
})
</script>

<style lang="scss" scoped>
.about-page {
  min-height: 100vh;
}

.about-hero {
  padding-top: $spacing-16;
  
  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-12;
    align-items: center;
    
    @include tablet {
      grid-template-columns: 1fr;
      gap: $spacing-8;
      text-align: center;
    }
  }
  
  .page-title {
    font-size: $text-6xl;
    margin-bottom: $spacing-6;
    
    @include mobile {
      font-size: $text-4xl;
    }
  }
  
  .hero-subtitle {
    font-size: $text-xl;
    color: $color-neon-cyan;
    line-height: 1.6;
  }
}

.hero-image {
  .image-placeholder {
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
    
    .image-frame {
      aspect-ratio: 4/3;
      padding: $spacing-6;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(15, 15, 15, 0.8);
      
      .placeholder-content {
        text-align: center;
        
        .placeholder-icon {
          font-size: 3rem;
          margin-bottom: $spacing-4;
        }
        
        p {
          color: $color-gray-400;
          font-size: $text-sm;
          margin: 0;
        }
      }
    }
  }
}

.biography-section {
  .bio-card {
    max-width: 800px;
    margin: 0 auto;
    
    .section-title {
      text-align: center;
      margin-bottom: $spacing-8;
      color: $color-neon-pink;
    }
    
    .bio-content {
      p {
        font-size: $text-lg;
        line-height: 1.8;
        color: $color-gray-300;
        margin-bottom: $spacing-6;
        
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

.skills-section {
  .section-title {
    margin-bottom: $spacing-12;
    
    @include mobile {
      margin-bottom: $spacing-8;
    }
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: $spacing-6;
  
  @include mobile {
    grid-template-columns: 1fr;
  }
}

.skill-category {
  padding: $spacing-8;
  
  .category-icon {
    font-size: 3rem;
    text-align: center;
    margin-bottom: $spacing-4;
  }
  
  .category-title {
    text-align: center;
    color: $color-neon-cyan;
    margin-bottom: $spacing-6;
    font-size: $text-xl;
  }
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
}

.skill-item {
  .skill-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: $spacing-2;
    
    .skill-name {
      font-weight: 600;
      color: $color-white;
    }
    
    .skill-level {
      color: $color-neon-pink;
      font-weight: 600;
    }
  }
  
  .skill-bar {
    width: 100%;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: $radius-full;
    overflow: hidden;
    
    .skill-progress {
      height: 100%;
      background: linear-gradient(45deg, $color-neon-pink, $color-neon-cyan);
      border-radius: $radius-full;
      transition: width 1s ease;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        animation: shimmer 2s infinite;
      }
    }
  }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.experience-section {
  .experience-card {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    
    .experience-icon {
      font-size: 4rem;
      margin-bottom: $spacing-6;
    }
    
    .experience-title {
      font-size: $text-3xl;
      margin-bottom: $spacing-6;
      color: $color-white;
    }
    
    .experience-description {
      font-size: $text-lg;
      color: $color-gray-300;
      line-height: 1.7;
      margin-bottom: $spacing-8;
    }
  }
}

.experience-stats {
  display: flex;
  justify-content: center;
  gap: $spacing-8;
  margin-bottom: $spacing-8;
  
  @include mobile {
    flex-direction: column;
    gap: $spacing-4;
  }
  
  .stat-item {
    text-align: center;
    
    .stat-number {
      display: block;
      font-size: $text-3xl;
      font-weight: 700;
      font-family: $font-primary;
      margin-bottom: $spacing-2;
    }
    
    .stat-label {
      color: $color-gray-400;
      font-size: $text-sm;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
}

.experience-highlights {
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
  
  h3 {
    color: $color-neon-purple;
    margin-bottom: $spacing-4;
    font-size: $text-xl;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      position: relative;
      padding-left: $spacing-6;
      margin-bottom: $spacing-3;
      color: $color-gray-300;
      
      &::before {
        content: '→';
        position: absolute;
        left: 0;
        color: $color-neon-cyan;
        font-weight: bold;
      }
    }
  }
}

.text-center {
  text-align: center;
}
</style> 