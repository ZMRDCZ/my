<template>
  <div class="publications-page">
    <!-- Hero Section -->
    <section class="publications-hero section">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title text-gradient">Публикации</h1>
          <p class="hero-subtitle">
            Научные статьи, исследования и публикации в профильных изданиях
          </p>
          
          <!-- Filters -->
          <div class="publication-filters">
            <div class="filter-group">
              <h3>Фильтр по типу:</h3>
              <div class="filter-buttons">
                <button 
                  v-for="type in publicationTypes"
                  :key="type.value"
                  @click="activeTypeFilter = type.value"
                  :class="{ 'active': activeTypeFilter === type.value }"
                  class="filter-btn neon-button"
                >
                  {{ type.label }}
                </button>
              </div>
            </div>
            
            <div class="filter-group">
              <h3>Фильтр по году:</h3>
              <div class="filter-buttons">
                <button 
                  v-for="year in years"
                  :key="year"
                  @click="activeYearFilter = year"
                  :class="{ 'active': activeYearFilter === year }"
                  class="filter-btn neon-button"
                >
                  {{ year === 'all' ? 'Все' : year }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Publications List -->
    <section class="publications-list-section section">
      <div class="container">
        <div class="publications-stats">
          <div class="stat-item">
            <span class="stat-number text-gradient">{{ filteredPublications.length }}</span>
            <span class="stat-label">Найдено публикаций</span>
          </div>
          <div class="stat-item">
            <span class="stat-number text-gradient">{{ totalCitations }}</span>
            <span class="stat-label">Общее количество цитирований</span>
          </div>
        </div>

        <div class="publications-list">
          <div 
            v-for="publication in filteredPublications"
            :key="publication.id"
            class="publication-item card"
          >
            <div class="publication-header">
              <div class="publication-type">{{ publication.type }}</div>
              <div class="publication-year">{{ publication.year }}</div>
            </div>
            
            <div class="publication-content">
              <h3 class="publication-title">{{ publication.title }}</h3>
              <p class="publication-authors">
                <span class="authors-label">Авторы:</span>
                {{ publication.authors }}
              </p>
              <p class="publication-journal" v-if="publication.journal">
                <span class="journal-label">Издание:</span>
                {{ publication.journal }}
              </p>
              <p class="publication-abstract">{{ publication.abstract }}</p>
              
              <div class="publication-details">
                <div class="detail-item" v-if="publication.doi">
                  <span class="detail-label">DOI:</span>
                  <span class="detail-value">{{ publication.doi }}</span>
                </div>
                <div class="detail-item" v-if="publication.pages">
                  <span class="detail-label">Страницы:</span>
                  <span class="detail-value">{{ publication.pages }}</span>
                </div>
                <div class="detail-item" v-if="publication.citations">
                  <span class="detail-label">Цитирования:</span>
                  <span class="detail-value text-gradient">{{ publication.citations }}</span>
                </div>
              </div>
              
              <div class="publication-keywords" v-if="publication.keywords">
                <span class="keywords-label">Ключевые слова:</span>
                <div class="keywords-list">
                  <span 
                    v-for="keyword in publication.keywords"
                    :key="keyword"
                    class="keyword-tag"
                  >
                    {{ keyword }}
                  </span>
                </div>
              </div>
              
              <div class="publication-actions">
                <a 
                  v-if="publication.link"
                  :href="publication.link"
                  target="_blank"
                  rel="noopener"
                  class="publication-link neon-button"
                >
                  Читать полный текст
                </a>
                <button 
                  @click="copyReference(publication)"
                  class="copy-reference neon-button secondary"
                >
                  Скопировать ссылку
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Empty State -->
        <div v-if="filteredPublications.length === 0" class="empty-state">
          <div class="empty-icon">📚</div>
          <h3>Публикации не найдены</h3>
          <p>Попробуйте изменить фильтры или сбросить их</p>
          <button @click="resetFilters" class="neon-button">
            Сбросить фильтры
          </button>
        </div>
      </div>
    </section>

    <!-- Upcoming Publications -->
    <section class="upcoming-publications section">
      <div class="container">
        <h2 class="section-title text-center">Ожидаемые публикации</h2>
        <div class="upcoming-grid">
          <div 
            v-for="publication in upcomingPublications"
            :key="publication.id"
            class="upcoming-card card"
          >
            <div class="upcoming-icon">📝</div>
            <h3 class="upcoming-title">{{ publication.title }}</h3>
            <p class="upcoming-conference">{{ publication.conference }}</p>
            <p class="upcoming-date">{{ publication.date }}</p>
            <div class="upcoming-status">
              <span class="status-badge">В процессе</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Research Areas -->
    <section class="research-areas section">
      <div class="container">
        <h2 class="section-title text-center">Области исследований</h2>
        <div class="research-grid">
          <div 
            v-for="area in researchAreas"
            :key="area.title"
            class="research-card card"
          >
            <div class="research-icon">{{ area.icon }}</div>
            <h3 class="research-title">{{ area.title }}</h3>
            <p class="research-description">{{ area.description }}</p>
            <div class="research-stats">
              <div class="research-stat">
                <span class="stat-number text-gradient">{{ area.publications }}</span>
                <span class="stat-label">публикаций</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Meta tags
useSeoMeta({
  title: 'Публикации - Дмитрий Комаров',
  ogTitle: 'Публикации - Дмитрий Комаров',
  description: 'Научные статьи, исследования и публикации Дмитрия Комарова в профильных изданиях',
  ogDescription: 'Научные статьи, исследования и публикации Дмитрия Комарова в профильных изданиях'
})

// Reactive state
const activeTypeFilter = ref('all')
const activeYearFilter = ref('all')

// Filter options
const publicationTypes = [
  { value: 'all', label: 'Все типы' },
  { value: 'journal', label: 'Журнальные статьи' },
  { value: 'conference', label: 'Конференции' },
  { value: 'thesis', label: 'Диссертации' },
  { value: 'book', label: 'Книги/главы' }
]

const years = ['all', '2025', '2024', '2023', '2022', '2021']

// Publications data
const publications = ref([
  {
    id: 1,
    title: 'Проектирование и первичный расчёт многоцелевого мобильного робототехнического комплекса КДМЕ-23',
    authors: 'Морозов Е.П., Комаров Д.А., Сащенко Д.В.',
    year: '2024',
    type: 'conference',
    journal: 'Сборник статей LXXII Международной научно-практической конференции №2 (63). Новосибирск: ООО «СибАК»',
    abstract: 'Статья посвящена проектированию и первичному расчёту многоцелевого мобильного робототехнического комплекса КДМЕ-23.',
    keywords: ['робототехника', 'мобильные роботы', 'проектирование', 'расчёты'],
    pages: '29',
    citations: 0,
    link: '#'
  },
  {
    id: 2,
    title: 'Проектирование и первичный расчёт многоцелевого мобильного робототехнического комплекса КДМЕ-23 – адаптивные колёса',
    authors: 'Морозов Е.П., Комаров Д.А., Сащенко Д.В.',
    year: '2024',
    type: 'journal',
    journal: 'Международный журнал «Наука Плюс». Саратов',
    abstract: 'Исследование адаптивных колёс для многоцелевого мобильного робототехнического комплекса КДМЕ-23.',
    keywords: ['адаптивные колёса', 'робототехника', 'мобильные роботы'],
    pages: '215',
    citations: 0,
    link: '#'
  },
  {
    id: 3,
    title: 'Проектирование и первичный расчёт многоцелевого мобильного робототехнического комплекса КДМЕ-23 – подвеска Кристи',
    authors: 'Морозов Е.П., Комаров Д.А., Сащенко Д.В.',
    year: '2024',
    type: 'journal',
    journal: 'Международный журнал «Наука Плюс». Саратов',
    abstract: 'Анализ и проектирование подвески Кристи для мобильного робототехнического комплекса.',
    keywords: ['подвеска Кристи', 'робототехника', 'мобильные роботы'],
    pages: '231',
    citations: 0,
    link: '#'
  },
  {
    id: 4,
    title: 'Проектирование и первичный расчёт многоцелевого мобильного робототехнического комплекса КДМЕ-23 – система «Развал»',
    authors: 'Морозов Е.П., Комаров Д.А., Сащенко Д.В.',
    year: '2024',
    type: 'journal',
    journal: 'Международный журнал «Наука Плюс». Саратов',
    abstract: 'Разработка системы «Развал» для многоцелевого мобильного робототехнического комплекса.',
    keywords: ['система развал', 'робототехника', 'мобильные роботы'],
    pages: '249',
    citations: 0,
    link: '#'
  },
  {
    id: 5,
    title: 'Проектирование и первичный расчёт многоцелевого мобильного робототехнического комплекса КДМЕ-23 – подвеска Кристи',
    authors: 'Морозов Е.П., Комаров Д.А., Сащенко Д.В.',
    year: '2024',
    type: 'conference',
    journal: 'Виттевские чтения – 2024: материалы XXIV Международного конгресса молодой науки. Москва: ЧОУВО «МУ им. С.Ю. Витте»',
    abstract: 'Презентация подвески Кристи для мобильного робототехнического комплекса на международном конгрессе.',
    keywords: ['подвеска Кристи', 'конференция', 'робототехника'],
    pages: '1707',
    citations: 0,
    link: '#'
  },
  {
    id: 6,
    title: 'Проектирование и первичный расчёт многоцелевого мобильного робототехнического комплекса КДМЕ-23 – адаптивные колёса',
    authors: 'Морозов Е.П., Комаров Д.А., Сащенко Д.В.',
    year: '2024',
    type: 'conference',
    journal: 'II Весенняя научная сессия СНО НИЯУ МИФИ. Москва',
    abstract: 'Доклад об адаптивных колёсах для мобильного робототехнического комплекса на научной сессии.',
    keywords: ['адаптивные колёса', 'научная сессия', 'робототехника'],
    pages: '',
    citations: 0,
    link: '#'
  },
  {
    id: 7,
    title: 'Расчёт на прочность портально-ферменной конструкции для перевозки крупногабаритных грузов',
    authors: 'Беличенко Д.А., Комаров Д.А., Морозов Е.П., Гаврюшин С.С.',
    year: '2024',
    type: 'conference',
    journal: 'Всероссийская студенческая конференция «Студенческая научная весна», посвящённая 110-летию со дня рождения академика В.Н. Челомея. Москва: МГТУ им. Н.Э. Баумана',
    abstract: 'Исследование прочностных характеристик портально-ферменной конструкции для транспортировки крупногабаритных грузов.',
    keywords: ['прочность', 'портально-ферменная конструкция', 'крупногабаритные грузы'],
    pages: '449',
    citations: 0,
    link: '#'
  },
  {
    id: 8,
    title: 'Роль технологий робототехники в достижении целей устойчивого развития',
    authors: 'Комаров Д.А., Кузнецов А.А.',
    year: '2024',
    type: 'conference',
    journal: '«Наука и бизнес: пути развития»',
    abstract: 'Анализ влияния робототехнических технологий на достижение целей устойчивого развития.',
    keywords: ['робототехника', 'устойчивое развитие', 'технологии'],
    pages: '',
    citations: 0,
    link: '#'
  }
])

// Upcoming publications
const upcomingPublications = ref([
  {
    id: 1,
    title: 'Статьи по итогам конференции БГТУ «Военмех»',
    conference: 'Конференция БГТУ «Военмех»',
    date: 'Март 2025'
  },
  {
    id: 2,
    title: 'Статья по итогам конференции «Нефть и Газ»',
    conference: 'Конференция Губкинского университета «Нефть и Газ»',
    date: 'Апрель 2025'
  }
])

// Research areas
const researchAreas = ref([
  {
    title: 'Робототехника',
    description: 'Исследования в области проектирования и разработки мобильных робототехнических комплексов',
    icon: '🤖',
    publications: 7
  },
  {
    title: 'Механика и прочность',
    description: 'Расчёты прочности конструкций и механических систем',
    icon: '⚙️',
    publications: 1
  }
])

// Computed properties
const filteredPublications = computed(() => {
  let filtered = publications.value
  
  if (activeTypeFilter.value !== 'all') {
    filtered = filtered.filter((pub: any) => pub.type === activeTypeFilter.value)
  }
  
  if (activeYearFilter.value !== 'all') {
    filtered = filtered.filter((pub: any) => pub.year === activeYearFilter.value)
  }
  
  return filtered.sort((a: any, b: any) => parseInt(b.year) - parseInt(a.year))
})

const totalCitations = computed(() => {
  return publications.value.reduce((total: number, pub: any) => total + (pub.citations || 0), 0)
})

// Methods
const resetFilters = () => {
  activeTypeFilter.value = 'all'
  activeYearFilter.value = 'all'
}

const copyReference = (publication: any) => {
  const reference = `${publication.authors} (${publication.year}). ${publication.title}. ${publication.journal}.`
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(reference)
  }
  
  // Show notification (можно добавить toast уведомление)
  alert('Ссылка скопирована в буфер обмена!')
}
</script>

<style lang="scss" scoped>
.publications-page {
  min-height: 100vh;
}

.publications-hero {
  padding-top: $spacing-16;
  text-align: center;
  
  .hero-content {
    max-width: 1000px;
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

.publication-filters {
  display: flex;
  flex-direction: column;
  gap: $spacing-8;
  
  @include mobile {
    gap: $spacing-6;
  }
  
  .filter-group {
    h3 {
      color: $color-neon-purple;
      font-size: $text-lg;
      margin-bottom: $spacing-4;
      text-align: left;
    }
    
    .filter-buttons {
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
  }
}

.publications-stats {
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

.publications-list {
  display: flex;
  flex-direction: column;
  gap: $spacing-8;
}

.publication-item {
  padding: $spacing-8;
  transition: $transition-normal;
  
  &:hover {
    transform: translateX(5px);
    @include neon-glow($color-neon-purple, 2px);
  }
}

.publication-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $spacing-4;
  
  .publication-type {
    background: linear-gradient(45deg, $color-neon-pink, $color-neon-cyan);
    color: $color-white;
    padding: $spacing-1 $spacing-3;
    border-radius: $radius-full;
    font-size: $text-xs;
    font-weight: 600;
    text-transform: uppercase;
  }
  
  .publication-year {
    color: $color-neon-purple;
    font-weight: 600;
    font-size: $text-lg;
  }
}

.publication-content {
  .publication-title {
    font-size: $text-xl;
    color: $color-white;
    margin-bottom: $spacing-4;
    line-height: 1.4;
  }
  
  .publication-authors,
  .publication-journal {
    margin-bottom: $spacing-3;
    color: $color-gray-300;
    
    .authors-label,
    .journal-label {
      color: $color-neon-cyan;
      font-weight: 600;
      margin-right: $spacing-2;
    }
  }
  
  .publication-abstract {
    color: $color-gray-300;
    line-height: 1.6;
    margin-bottom: $spacing-6;
    font-style: italic;
  }
}

.publication-details {
  display: flex;
  gap: $spacing-6;
  margin-bottom: $spacing-4;
  flex-wrap: wrap;
  
  .detail-item {
    display: flex;
    align-items: center;
    gap: $spacing-2;
    
    .detail-label {
      color: $color-gray-400;
      font-size: $text-sm;
      font-weight: 600;
    }
    
    .detail-value {
      color: $color-white;
      font-size: $text-sm;
    }
  }
}

.publication-keywords {
  margin-bottom: $spacing-6;
  
  .keywords-label {
    color: $color-neon-purple;
    font-weight: 600;
    margin-bottom: $spacing-3;
    display: block;
  }
  
  .keywords-list {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-2;
  }
  
  .keyword-tag {
    background: rgba(255, 255, 255, 0.1);
    color: $color-neon-cyan;
    padding: $spacing-1 $spacing-3;
    border-radius: $radius-full;
    font-size: $text-xs;
    font-weight: 500;
  }
}

.publication-actions {
  display: flex;
  gap: $spacing-4;
  flex-wrap: wrap;
  
  .publication-link,
  .copy-reference {
    padding: $spacing-2 $spacing-4;
    font-size: $text-sm;
    text-decoration: none;
    
    &.secondary {
      background: transparent;
      border: 1px solid $color-neon-cyan;
      
      &:hover {
        background: $color-neon-cyan;
        color: $color-primary;
      }
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

.research-areas {
  .section-title {
    margin-bottom: $spacing-12;
  }
}

.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-8;
  
  @include mobile {
    grid-template-columns: 1fr;
  }
}

.research-card {
  text-align: center;
  padding: $spacing-8;
  transition: $transition-normal;
  
  &:hover {
    transform: translateY(-5px);
    
    .research-icon {
      transform: scale(1.1);
    }
  }
  
  .research-icon {
    font-size: 3rem;
    margin-bottom: $spacing-4;
    transition: $transition-normal;
  }
  
  .research-title {
    color: $color-neon-pink;
    margin-bottom: $spacing-4;
    font-size: $text-xl;
  }
  
  .research-description {
    color: $color-gray-300;
    line-height: 1.6;
    margin-bottom: $spacing-6;
  }
  
  .research-stats {
    .research-stat {
      .stat-number {
        display: block;
        font-size: $text-2xl;
        font-weight: 700;
        font-family: $font-primary;
        margin-bottom: $spacing-1;
      }
      
      .stat-label {
        color: $color-gray-400;
        font-size: $text-sm;
      }
    }
  }
}

.upcoming-publications {
  .section-title {
    margin-bottom: $spacing-12;
  }
}

.upcoming-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-8;
  
  @include mobile {
    grid-template-columns: 1fr;
  }
}

.upcoming-card {
  text-align: center;
  padding: $spacing-8;
  transition: $transition-normal;
  border: 1px solid $color-neon-cyan;
  background: rgba(0, 255, 255, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    @include neon-glow($color-neon-cyan, 2px);
    
    .upcoming-icon {
      transform: scale(1.1);
    }
  }
  
  .upcoming-icon {
    font-size: 3rem;
    margin-bottom: $spacing-4;
    transition: $transition-normal;
  }
  
  .upcoming-title {
    color: $color-neon-cyan;
    margin-bottom: $spacing-4;
    font-size: $text-lg;
  }
  
  .upcoming-conference {
    color: $color-gray-300;
    margin-bottom: $spacing-2;
    font-size: $text-sm;
  }
  
  .upcoming-date {
    color: $color-gray-400;
    margin-bottom: $spacing-6;
    font-size: $text-sm;
    font-weight: 600;
  }
  
  .upcoming-status {
    .status-badge {
      background: linear-gradient(45deg, $color-neon-cyan, $color-neon-purple);
      color: $color-white;
      padding: $spacing-1 $spacing-3;
      border-radius: $radius-full;
      font-size: $text-xs;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
}

.text-center {
  text-align: center;
}
</style> 