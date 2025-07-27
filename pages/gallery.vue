<template>
  <div class="gallery-page">
    <!-- Hero Section -->
    <section class="gallery-hero section">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title text-gradient">Галерея</h1>
          <p class="hero-subtitle">
            Фотографии с мероприятий, конференций и проектной деятельности
          </p>
          
          <!-- Gallery Filters -->
          <div class="gallery-filters">
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

    <!-- Gallery Grid -->
    <section class="gallery-grid-section section">
      <div class="container">
        <div class="gallery-stats">
          <div class="stat-item">
            <span class="stat-number text-gradient">{{ filteredItems.length }}</span>
            <span class="stat-label">медиафайлов</span>
          </div>
          <div class="stat-item">
            <span class="stat-number text-gradient">{{ eventCount }}</span>
            <span class="stat-label">мероприятий</span>
          </div>
        </div>

        <div class="gallery-grid">
          <div 
            v-for="item in filteredItems"
            :key="item.id"
            class="gallery-item card"
            @click="openLightbox(item)"
          >
            <div class="item-media">
              <div class="media-placeholder">
                <div class="placeholder-icon">
                  {{ item.type === 'video' ? '🎥' : '📸' }}
                </div>
                <div class="placeholder-overlay">
                  <div class="overlay-content">
                    <span class="media-type">{{ item.type === 'video' ? 'Видео' : 'Фото' }}</span>
                    <span class="view-media">Просмотр</span>
                  </div>
                </div>
              </div>
              <div class="item-type-badge">{{ item.type === 'video' ? '🎬' : '📷' }}</div>
            </div>
            <div class="item-content">
              <h3 class="item-title">{{ item.title }}</h3>
              <p class="item-description">{{ item.description }}</p>
              <div class="item-meta">
                <span class="item-date">{{ item.date }}</span>
                <span class="item-category">{{ item.category }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Empty State -->
        <div v-if="filteredItems.length === 0" class="empty-state">
          <div class="empty-icon">📷</div>
          <h3>Медиафайлы не найдены</h3>
          <p>Попробуйте изменить фильтр или сбросить его</p>
          <button @click="resetFilter" class="neon-button">
            Показать все
          </button>
        </div>
      </div>
    </section>

    <!-- Featured Events -->
    <section class="featured-events section">
      <div class="container">
        <h2 class="section-title text-center">Ключевые мероприятия</h2>
        <div class="events-timeline">
          <div 
            v-for="event in featuredEvents"
            :key="event.id"
            class="event-item"
          >
            <div class="event-date">{{ event.date }}</div>
            <div class="event-content card">
              <div class="event-header">
                <div class="event-icon">{{ event.icon }}</div>
                <h3 class="event-title">{{ event.title }}</h3>
              </div>
              <p class="event-description">{{ event.description }}</p>
              <div class="event-stats">
                <div class="stat" v-if="event.photos">
                  <span class="stat-icon">📸</span>
                  <span class="stat-value">{{ event.photos }} фото</span>
                </div>
                <div class="stat" v-if="event.videos">
                  <span class="stat-icon">🎥</span>
                  <span class="stat-value">{{ event.videos }} видео</span>
                </div>
                <div class="stat" v-if="event.participants">
                  <span class="stat-icon">👥</span>
                  <span class="stat-value">{{ event.participants }} участников</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div v-if="selectedItem" class="lightbox-modal" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">×</button>
        <div class="lightbox-media">
          <div class="media-placeholder-large">
            <div class="placeholder-icon-large">
              {{ selectedItem.type === 'video' ? '🎥' : '📸' }}
            </div>
            <p class="placeholder-text">
              {{ selectedItem.type === 'video' ? 'Видео' : 'Фото' }} будет предоставлено заказчиком
            </p>
          </div>
        </div>
        <div class="lightbox-info">
          <h3 class="lightbox-title">{{ selectedItem.title }}</h3>
          <p class="lightbox-description">{{ selectedItem.description }}</p>
          <div class="lightbox-meta">
            <span class="meta-item">
              <span class="meta-label">Дата:</span>
              <span class="meta-value">{{ selectedItem.date }}</span>
            </span>
            <span class="meta-item">
              <span class="meta-label">Категория:</span>
              <span class="meta-value">{{ selectedItem.category }}</span>
            </span>
            <span class="meta-item" v-if="selectedItem.location">
              <span class="meta-label">Место:</span>
              <span class="meta-value">{{ selectedItem.location }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Meta tags
useSeoMeta({
  title: 'Галерея - Дмитрий Комаров',
  ogTitle: 'Галерея - Дмитрий Комаров',
  description: 'Фотографии и видео с мероприятий, конференций и проектной деятельности Дмитрия Комарова',
  ogDescription: 'Фотографии и видео с мероприятий, конференций и проектной деятельности Дмитрия Комарова'
})

// Reactive state
const activeFilter = ref('all')
const selectedItem = ref(null)

// Filter options
const filters = [
  { value: 'all', label: 'Все медиа' },
  { value: 'photos', label: 'Фотографии' },
  { value: 'videos', label: 'Видео' },
  { value: 'events', label: 'Мероприятия' },
  { value: 'lectures', label: 'Лекции' },
  { value: 'conferences', label: 'Конференции' }
]

// Gallery items data
const galleryItems = ref([
  {
    id: 1,
    title: 'Летние интенсивы МГТУ',
    description: 'Фотографии с летних интенсивов для глухих школьников в МГТУ им. Н.Э. Баумана',
    type: 'photo',
    category: 'Мероприятия',
    date: 'Июнь 2024',
    location: 'МГТУ им. Н.Э. Баумана',
    filterType: 'events'
  },
  {
    id: 2,
    title: 'Техническая лекция на ПАО "Яковлев"',
    description: 'Видеозапись технической лекции с переводом на РЖЯ',
    type: 'video',
    category: 'Лекции',
    date: 'Август 2024',
    location: 'ПАО "Яковлев"',
    filterType: 'lectures'
  },
  {
    id: 3,
    title: 'Мастер-класс в СКОШИ 52',
    description: 'Фотографии с мастер-класса по программированию для школьников',
    type: 'photo',
    category: 'Образование',
    date: 'Сентябрь 2024',
    location: 'СКОШИ 52',
    filterType: 'events'
  },
  {
    id: 4,
    title: 'Конференция "Цифровое образование"',
    description: 'Выступление на международной конференции по цифровым технологиям',
    type: 'photo',
    category: 'Конференции',
    date: 'Май 2024',
    location: 'Москва',
    filterType: 'conferences'
  },
  {
    id: 5,
    title: 'Экскурсия на авиационный завод',
    description: 'Видеоотчет об экскурсии для глухих школьников и студентов',
    type: 'video',
    category: 'Экскурсии',
    date: 'Октябрь 2024',
    location: 'Авиационный завод',
    filterType: 'events'
  },
  {
    id: 6,
    title: 'Презентация проекта "Наставничество"',
    description: 'Фотографии с презентации программы наставничества',
    type: 'photo',
    category: 'Проекты',
    date: 'Март 2024',
    location: 'МГТУ им. Н.Э. Баумана',
    filterType: 'events'
  },
  {
    id: 7,
    title: 'Адаптированная лекция по веб-разработке',
    description: 'Видео лекции с синхронным переводом на русский жестовый язык',
    type: 'video',
    category: 'Лекции',
    date: 'Февраль 2024',
    location: 'МГТУ им. Н.Э. Баумана',
    filterType: 'lectures'
  },
  {
    id: 8,
    title: 'Встреча с выпускниками',
    description: 'Фотографии со встречи выпускников инклюзивных программ',
    type: 'photo',
    category: 'Встречи',
    date: 'Декабрь 2023',
    location: 'Москва',
    filterType: 'events'
  },
  {
    id: 9,
    title: 'Научная конференция молодых ученых',
    description: 'Выступление с докладом о инклюзивных технологиях',
    type: 'video',
    category: 'Конференции',
    date: 'Ноябрь 2023',
    location: 'МГТУ им. Н.Э. Баумана',
    filterType: 'conferences'
  },
  {
    id: 10,
    title: 'Церемония награждения',
    description: 'Фотографии с церемонии получения стипендии Правительства РФ',
    type: 'photo',
    category: 'Награды',
    date: 'Январь 2024',
    location: 'Москва',
    filterType: 'events'
  }
])

// Featured events
const featuredEvents = ref([
  {
    id: 1,
    title: 'Летние интенсивы МГТУ',
    description: 'Образовательная программа для глухих школьников',
    date: 'Июнь 2024',
    icon: '🏫',
    photos: 25,
    videos: 3,
    participants: 30
  },
  {
    id: 2,
    title: 'Техническая конференция',
    description: 'Международная конференция по инклюзивным технологиям',
    date: 'Май 2024',
    icon: '🎤',
    photos: 40,
    videos: 5,
    participants: 200
  },
  {
    id: 3,
    title: 'Мастер-классы в школах',
    description: 'Серия образовательных мастер-классов',
    date: '2023-2024',
    icon: '🎓',
    photos: 60,
    videos: 8,
    participants: 150
  }
])

// Computed properties
const filteredItems = computed(() => {
  if (activeFilter.value === 'all') {
    return galleryItems.value
  }
  
  if (activeFilter.value === 'photos') {
    return galleryItems.value.filter(item => item.type === 'photo')
  }
  
  if (activeFilter.value === 'videos') {
    return galleryItems.value.filter(item => item.type === 'video')
  }
  
  return galleryItems.value.filter(item => item.filterType === activeFilter.value)
})

const eventCount = computed(() => {
  return [...new Set(galleryItems.value.map(item => item.category))].length
})

// Methods
const resetFilter = () => {
  activeFilter.value = 'all'
}

const openLightbox = (item: any) => {
  selectedItem.value = item
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  selectedItem.value = null
  document.body.style.overflow = 'auto'
}
</script>

<style lang="scss" scoped>
.gallery-page {
  min-height: 100vh;
}

.gallery-hero {
  padding-top: $spacing-16;
  text-align: center;
  
  .hero-content {
    max-width: 900px;
    margin: 0 auto;
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
    margin-bottom: $spacing-12;
  }
}

.gallery-filters {
  display: flex;
  justify-content: center;
  gap: $spacing-3;
  flex-wrap: wrap;
  
  .filter-btn {
    padding: $spacing-2 $spacing-4;
    font-size: $text-sm;
    
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

.gallery-stats {
  display: flex;
  justify-content: center;
  gap: $spacing-12;
  margin-bottom: $spacing-12;
  
  @include mobile {
    flex-direction: column;
    gap: $spacing-6;
    margin-bottom: $spacing-8;
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

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: $spacing-8;
  
  @include mobile {
    grid-template-columns: 1fr;
    gap: $spacing-6;
  }
}

.gallery-item {
  cursor: pointer;
  overflow: hidden;
  transition: $transition-normal;
  
  &:hover {
    transform: translateY(-10px);
    
    .placeholder-overlay {
      opacity: 1;
    }
    
    .placeholder-icon {
      transform: scale(1.2);
    }
  }
}

.item-media {
  position: relative;
  height: 250px;
  overflow: hidden;
  
  .media-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, $color-gray-800, $color-gray-700);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    .placeholder-icon {
      font-size: 4rem;
      transition: $transition-normal;
      opacity: 0.7;
    }
  }
  
  .placeholder-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: $transition-normal;
    
    .overlay-content {
      text-align: center;
      
      .media-type {
        display: block;
        color: $color-neon-cyan;
        font-weight: 600;
        margin-bottom: $spacing-2;
      }
      
      .view-media {
        color: $color-white;
        font-size: $text-lg;
        @include neon-text($color-neon-cyan);
      }
    }
  }
  
  .item-type-badge {
    position: absolute;
    top: $spacing-3;
    right: $spacing-3;
    background: linear-gradient(45deg, $color-neon-pink, $color-neon-cyan);
    color: $color-white;
    padding: $spacing-1 $spacing-2;
    border-radius: $radius-full;
    font-size: $text-sm;
  }
}

.item-content {
  padding: $spacing-6;
  
  .item-title {
    font-size: $text-xl;
    color: $color-white;
    margin-bottom: $spacing-3;
  }
  
  .item-description {
    color: $color-gray-300;
    line-height: 1.6;
    margin-bottom: $spacing-4;
    font-size: $text-sm;
  }
  
  .item-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .item-date {
      color: $color-neon-purple;
      font-weight: 600;
      font-size: $text-sm;
    }
    
    .item-category {
      background: rgba(255, 255, 255, 0.1);
      color: $color-neon-cyan;
      padding: $spacing-1 $spacing-3;
      border-radius: $radius-full;
      font-size: $text-xs;
      font-weight: 500;
    }
  }
}

.empty-state {
  text-align: center;
  padding: $spacing-16 $spacing-4;
  
  .empty-icon {
    font-size: 4rem;
    margin-bottom: $spacing-6;
    opacity: 0.5;
  }
  
  h3 {
    color: $color-gray-400;
    margin-bottom: $spacing-4;
  }
  
  p {
    color: $color-gray-500;
    margin-bottom: $spacing-8;
  }
}

.featured-events {
  .section-title {
    margin-bottom: $spacing-12;
  }
}

.events-timeline {
  display: flex;
  flex-direction: column;
  gap: $spacing-8;
  max-width: 800px;
  margin: 0 auto;
}

.event-item {
  display: flex;
  gap: $spacing-6;
  align-items: flex-start;
  
  @include mobile {
    flex-direction: column;
    gap: $spacing-4;
  }
  
  .event-date {
    min-width: 120px;
    color: $color-neon-pink;
    font-weight: 600;
    font-size: $text-lg;
    
    @include mobile {
      min-width: auto;
    }
  }
  
  .event-content {
    flex: 1;
    padding: $spacing-6;
  }
}

.event-header {
  display: flex;
  align-items: center;
  gap: $spacing-4;
  margin-bottom: $spacing-4;
  
  .event-icon {
    font-size: 2rem;
  }
  
  .event-title {
    color: $color-white;
    font-size: $text-xl;
  }
}

.event-description {
  color: $color-gray-300;
  line-height: 1.6;
  margin-bottom: $spacing-4;
}

.event-stats {
  display: flex;
  gap: $spacing-6;
  flex-wrap: wrap;
  
  .stat {
    display: flex;
    align-items: center;
    gap: $spacing-2;
    color: $color-gray-400;
    font-size: $text-sm;
    
    .stat-icon {
      font-size: $text-base;
    }
  }
}

// Lightbox styles
.lightbox-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: $z-modal;
  padding: $spacing-4;
}

.lightbox-content {
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  background: $bg-card;
  border-radius: $radius-xl;
  overflow: hidden;
  position: relative;
  
  @include mobile {
    max-height: 95vh;
  }
}

.lightbox-close {
  position: absolute;
  top: $spacing-4;
  right: $spacing-4;
  background: rgba(0, 0, 0, 0.8);
  border: none;
  color: $color-white;
  font-size: $text-3xl;
  cursor: pointer;
  z-index: 10;
  width: 50px;
  height: 50px;
  border-radius: $radius-full;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: $color-neon-pink;
    background: rgba(0, 0, 0, 0.9);
  }
}

.lightbox-media {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  
  .media-placeholder-large {
    text-align: center;
    padding: $spacing-12;
    
    .placeholder-icon-large {
      font-size: 6rem;
      margin-bottom: $spacing-6;
      opacity: 0.7;
    }
    
    .placeholder-text {
      color: $color-gray-400;
      font-size: $text-lg;
      margin: 0;
    }
  }
}

.lightbox-info {
  padding: $spacing-8;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  .lightbox-title {
    font-size: $text-2xl;
    color: $color-white;
    margin-bottom: $spacing-4;
  }
  
  .lightbox-description {
    color: $color-gray-300;
    line-height: 1.6;
    margin-bottom: $spacing-6;
  }
  
  .lightbox-meta {
    display: flex;
    gap: $spacing-6;
    flex-wrap: wrap;
    
    .meta-item {
      display: flex;
      align-items: center;
      gap: $spacing-2;
      
      .meta-label {
        color: $color-neon-cyan;
        font-weight: 600;
        font-size: $text-sm;
      }
      
      .meta-value {
        color: $color-white;
        font-size: $text-sm;
      }
    }
  }
}

.text-center {
  text-align: center;
}
</style> 