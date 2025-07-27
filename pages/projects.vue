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
              v-for="filter in filters"
              :key="filter.value"
              @click="activeFilter = filter.value"
              :class="{ 'active': activeFilter === filter.value }"
              class="filter-btn neon-button"
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
          <div 
            v-for="project in filteredProjects"
            :key="project.id"
            class="project-card card"
            @click="openProjectModal(project)"
          >
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
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <div v-if="selectedProject" class="project-modal" @click="closeProjectModal">
      <div class="modal-content card neon-border" @click.stop>
        <button class="modal-close" @click="closeProjectModal" aria-label="Закрыть">×</button>
        <div class="modal-header">
          <div class="modal-icon">{{ selectedProject.icon }}</div>
          <h2 class="modal-title">{{ selectedProject.title }}</h2>
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
              <div class="video-icon">🎥</div>
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
                  rel="noopener"
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Meta tags
useSeoMeta({
  title: 'Проекты - Дмитрий Комаров',
  ogTitle: 'Проекты - Дмитрий Комаров',
  description: 'Технические проекты, веб-разработка и инновационные решения Дмитрия Комарова',
  ogDescription: 'Технические проекты, веб-разработка и инновационные решения Дмитрия Комарова'
})

// Reactive state
const activeFilter = ref('all')
const selectedProject = ref(null)

// Filters
const filters = [
  { value: 'all', label: 'Все проекты' },
  { value: 'web', label: 'Веб-разработка' },
  { value: 'inclusive', label: 'Инклюзивные инициативы' },
  { value: 'education', label: 'Образование' },
  { value: 'organization', label: 'Организационные' }
]

// Projects data
const projects = ref([
  {
    id: 1,
    title: 'Студенческий совет факультета РК',
    shortDescription: 'Создание и развитие студенческого совета факультета ракетно-космической техники',
    fullDescription: 'Основал и возглавил студенческий совет факультета ракетно-космической техники МГТУ им. Н.Э. Баумана. Совет занимается организацией мероприятий, поддержкой студентов и развитием академической среды.',
    category: 'Организационный проект',
    icon: '🚀',
    technologies: ['Менеджмент', 'Организация', 'Лидерство'],
    participants: '150',
    duration: '2023-2024',
    status: 'Активный',
    type: 'organization',
    achievements: [
      'Создание структуры совета',
      'Организация 10+ мероприятий',
      'Участие 150+ студентов',
      'Улучшение студенческой жизни'
    ]
  },
  {
    id: 2,
    title: 'Проект "Наставничество"',
    shortDescription: 'Программа наставничества для студентов младших курсов',
    fullDescription: 'Разработал и запустил комплексную программу наставничества, направленную на адаптацию и поддержку студентов младших курсов. Программа включает академическую поддержку, профориентацию и личностное развитие.',
    category: 'Образовательная инициатива',
    icon: '👥',
    technologies: ['Психология', 'Педагогика', 'Менеджмент'],
    participants: '80',
    duration: '2023-настоящее время',
    status: 'Активный',
    type: 'education',
    achievements: [
      'Создание методологии наставничества',
      'Обучение 15 наставников',
      'Поддержка 80+ студентов',
      'Повышение успеваемости на 25%'
    ]
  },
  {
    id: 3,
    title: 'Конкурс "Твой ход"',
    shortDescription: 'Участие в федеральном конкурсе молодежных проектов',
    fullDescription: 'Принял участие в федеральном конкурсе "Твой ход" с проектом по развитию инклюзивного образования. Проект был направлен на создание доступной образовательной среды для студентов с ОВЗ.',
    category: 'Конкурсный проект',
    icon: '🎯',
    technologies: ['Инновации', 'Социальные технологии'],
    duration: '2023',
    status: 'Завершён',
    type: 'inclusive',
    achievements: [
      'Разработка инновационного решения',
      'Участие в федеральном конкурсе',
      'Презентация проекта экспертам',
      'Получение обратной связи'
    ]
  },
  {
    id: 4,
    title: 'Грант Росмолодёжи "Открытые Перспективы"',
    shortDescription: 'Реализация гранта на развитие инклюзивных образовательных инициатив',
    fullDescription: 'Успешно получил и реализовал грант Росмолодёжи "Открытые Перспективы" на сумму 300,000 рублей. Проект был направлен на создание инклюзивной образовательной среды и поддержку людей с нарушениями слуха.',
    category: 'Грантовый проект',
    icon: '💰',
    technologies: ['Проектный менеджмент', 'Инклюзивные технологии'],
    participants: '200',
    duration: '2024',
    status: 'Завершён успешно',
    type: 'inclusive',
    achievements: [
      'Получение гранта 300,000 рублей',
      'Охват 200+ участников',
      'Создание методических материалов',
      'Успешная отчётность'
    ],
    videoReport: 'Интерактивный видеоотчёт о реализации проекта будет доступен после предоставления материалов заказчиком'
  },
  {
    id: 5,
    title: 'АНО "Открытые Перспективы"',
    shortDescription: 'Деятельность в автономной некоммерческой организации',
    fullDescription: 'Активная работа в АНО "Открытые Перспективы", направленной на развитие инклюзивного образования и поддержку людей с ограниченными возможностями здоровья. Участие в стратегическом планировании и реализации проектов.',
    category: 'Общественная деятельность',
    icon: '🌟',
    technologies: ['НКО', 'Социальные проекты', 'Инклюзивность'],
    participants: '500',
    duration: '2022-настоящее время',
    status: 'Активный',
    type: 'inclusive',
    achievements: [
      'Участие в управлении НКО',
      'Реализация 5+ проектов',
      'Охват 500+ бенефициаров',
      'Развитие партнёрской сети'
    ]
  },
  {
    id: 6,
    title: 'Адаптация лекций на РЖЯ',
    shortDescription: 'Адаптация технических лекций на русский жестовый язык',
    fullDescription: 'Разработка методологии и практическая адаптация технических лекций на русский жестовый язык. Создание доступного образовательного контента для студентов с нарушениями слуха.',
    category: 'Инклюзивный проект',
    icon: '🤟',
    technologies: ['РЖЯ', 'Педагогика', 'Инклюзивные технологии'],
    participants: '50',
    duration: '2023-настоящее время',
    status: 'Активный',
    type: 'inclusive',
    achievements: [
      'Адаптация 20+ лекций',
      'Обучение 50+ студентов',
      'Создание методических рекомендаций',
      'Подготовка переводчиков'
    ]
  },
  {
    id: 7,
    title: 'Лендинг АНО "Открытые Перспективы"',
    shortDescription: 'Разработка официального сайта организации',
    fullDescription: 'Создание современного адаптивного сайта для АНО "Открытые Перспективы" с акцентом на доступность и инклюзивность. Сайт включает информацию о проектах, возможности для участия и обратную связь.',
    category: 'Веб-разработка',
    icon: '🌐',
    technologies: ['Vue.js', 'Nuxt.js', 'SCSS', 'Доступность'],
    duration: '2024',
    status: 'Завершён',
    type: 'web',
    achievements: [
      'Создание адаптивного дизайна',
      'Обеспечение веб-доступности',
      'SEO-оптимизация',
      'Интеграция с CMS'
    ],
    links: [
      { title: 'Посетить сайт', url: '#' }
    ]
  },
  {
    id: 8,
    title: 'Сайт Технекона',
    shortDescription: 'Разработка сайта для технической конференции',
    fullDescription: 'Создание интерактивного сайта для технической конференции "Технекон" с регистрацией участников, программой мероприятий и онлайн-трансляциями.',
    category: 'Веб-разработка',
    icon: '💻',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC'],
    participants: '300',
    duration: '2023',
    status: 'Завершён',
    type: 'web',
    achievements: [
      'Регистрация 300+ участников',
      'Онлайн-трансляции событий',
      'Система управления контентом',
      'Мобильная оптимизация'
    ],
    links: [
      { title: 'Посетить сайт', url: '#' }
    ]
  }
])

// Computed properties
const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects.value
  }
  return projects.value.filter(project => project.type === activeFilter.value)
})

// Methods
const openProjectModal = (project: any) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeProjectModal = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}

// Close modal on escape key
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && selectedProject.value) {
    closeProjectModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'auto'
})
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
    
    .project-image .placeholder-icon {
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
      margin-bottom: $spacing-4;
      transition: $transition-normal;
      
      @include mobile {
        font-size: 3rem;
        margin-bottom: $spacing-3;
      }
      
      @include xs {
        font-size: 2.5rem;
        margin-bottom: $spacing-2;
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
  margin-bottom: $spacing-4;
  line-height: 1.3;
  
  @include mobile {
    font-size: $text-lg;
    margin-bottom: $spacing-3;
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
</style> 