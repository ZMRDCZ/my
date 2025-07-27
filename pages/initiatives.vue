<template>
  <div class="initiatives-page">
    <!-- Hero Section -->
    <section class="initiatives-hero section">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title text-gradient">Инклюзивные инициативы</h1>
          <p class="hero-subtitle">
            Мероприятия и программы для развития инклюзивного образования
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number text-gradient">15+</span>
              <span class="stat-label">Мероприятий</span>
            </div>
            <div class="stat-item">
              <span class="stat-number text-gradient">500+</span>
              <span class="stat-label">Участников</span>
            </div>
            <div class="stat-item">
              <span class="stat-number text-gradient">3</span>
              <span class="stat-label">Года деятельности</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Statement -->
    <section class="mission-section section">
      <div class="container">
        <div class="mission-card card neon-border">
          <div class="mission-content">
            <div class="mission-icon">🌟</div>
            <h2 class="mission-title">Наша миссия</h2>
            <p class="mission-text">
              Создание равных возможностей для получения качественного технического образования 
              людьми с различными потребностями. Мы верим, что инклюзивность - это не просто 
              доступность, это обогащение образовательной среды для всех.
            </p>
            <div class="mission-values">
              <div class="value-item">
                <span class="value-icon">♿</span>
                <span class="value-text">Доступность</span>
              </div>
              <div class="value-item">
                <span class="value-icon">🤝</span>
                <span class="value-text">Равенство</span>
              </div>
              <div class="value-item">
                <span class="value-icon">💡</span>
                <span class="value-text">Инновации</span>
              </div>
              <div class="value-item">
                <span class="value-icon">❤️</span>
                <span class="value-text">Поддержка</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Initiatives Grid -->
    <section class="initiatives-grid-section section">
      <div class="container">
        <h2 class="section-title text-center">Ключевые инициативы</h2>
        <div class="initiatives-grid">
          <div 
            v-for="initiative in initiatives"
            :key="initiative.id"
            class="initiative-card card"
            @click="openInitiativeModal(initiative)"
          >
            <div class="initiative-header">
              <div class="initiative-icon">{{ initiative.icon }}</div>
              <div class="initiative-date">{{ initiative.date }}</div>
            </div>
            <div class="initiative-content">
              <h3 class="initiative-title">{{ initiative.title }}</h3>
              <p class="initiative-description">{{ initiative.shortDescription }}</p>
              <div class="initiative-stats">
                <div class="stat" v-if="initiative.participants">
                  <span class="stat-icon">👥</span>
                  <span class="stat-value">{{ initiative.participants }} участников</span>
                </div>
                <div class="stat" v-if="initiative.duration">
                  <span class="stat-icon">⏰</span>
                  <span class="stat-value">{{ initiative.duration }}</span>
                </div>
                <div class="stat" v-if="initiative.location">
                  <span class="stat-icon">📍</span>
                  <span class="stat-value">{{ initiative.location }}</span>
                </div>
              </div>
              <div class="initiative-tags">
                <span 
                  v-for="tag in initiative.tags"
                  :key="tag"
                  class="tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            <div class="initiative-overlay">
              <div class="overlay-content">
                <span class="view-details">Подробнее</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section class="impact-section section">
      <div class="container">
        <h2 class="section-title text-center">Влияние и результаты</h2>
        <div class="impact-grid">
          <div class="impact-card card">
            <div class="impact-icon">📊</div>
            <h3 class="impact-title">Количественные результаты</h3>
            <div class="impact-stats">
              <div class="impact-stat">
                <span class="stat-number text-gradient">500+</span>
                <span class="stat-description">человек приняли участие в мероприятиях</span>
              </div>
              <div class="impact-stat">
                <span class="stat-number text-gradient">15+</span>
                <span class="stat-description">организованных мероприятий</span>
              </div>
              <div class="impact-stat">
                <span class="stat-number text-gradient">5</span>
                <span class="stat-description">партнерских организаций</span>
              </div>
            </div>
          </div>
          
          <div class="impact-card card">
            <div class="impact-icon">❤️</div>
            <h3 class="impact-title">Качественные изменения</h3>
            <ul class="impact-list">
              <li>Повышение осведомленности об инклюзивности</li>
              <li>Развитие навыков РЖЯ у преподавателей</li>
              <li>Улучшение доступности образовательной среды</li>
              <li>Создание сообщества поддержки</li>
              <li>Формирование инклюзивной культуры</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="partners-section section">
      <div class="container">
        <h2 class="section-title text-center">Партнеры и организации</h2>
        <div class="partners-grid">
          <div class="partner-card card">
            <div class="partner-logo">🏛️</div>
            <h3 class="partner-name">МГТУ им. Н.Э. Баумана</h3>
            <p class="partner-description">Ведущий технический университет России</p>
          </div>
          
          <div class="partner-card card">
            <div class="partner-logo">✈️</div>
            <h3 class="partner-name">ПАО "Яковлев"</h3>
            <p class="partner-description">Авиационная корпорация</p>
          </div>
          
          <div class="partner-card card">
            <div class="partner-logo">🏫</div>
            <h3 class="partner-name">СКОШИ 52</h3>
            <p class="partner-description">Специальная школа для детей с нарушениями слуха</p>
          </div>
          
          <div class="partner-card card">
            <div class="partner-logo">🌟</div>
            <h3 class="partner-name">АНО "Открытые Перспективы"</h3>
            <p class="partner-description">Некоммерческая организация поддержки инклюзивности</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Initiative Modal -->
    <div v-if="selectedInitiative" class="initiative-modal" @click="closeInitiativeModal">
      <div class="modal-content card neon-border" @click.stop>
        <button class="modal-close" @click="closeInitiativeModal">×</button>
        <div class="modal-header">
          <div class="modal-icon">{{ selectedInitiative.icon }}</div>
          <h2 class="modal-title">{{ selectedInitiative.title }}</h2>
          <p class="modal-date">{{ selectedInitiative.date }}</p>
        </div>
        <div class="modal-body">
          <p class="initiative-full-description">{{ selectedInitiative.fullDescription }}</p>
          
          <div v-if="selectedInitiative.objectives" class="initiative-objectives">
            <h3>Цели и задачи:</h3>
            <ul>
              <li v-for="objective in selectedInitiative.objectives" :key="objective">
                {{ objective }}
              </li>
            </ul>
          </div>
          
          <div v-if="selectedInitiative.activities" class="initiative-activities">
            <h3>Проведенные мероприятия:</h3>
            <ul>
              <li v-for="activity in selectedInitiative.activities" :key="activity">
                {{ activity }}
              </li>
            </ul>
          </div>
          
          <div v-if="selectedInitiative.results" class="initiative-results">
            <h3>Достигнутые результаты:</h3>
            <ul>
              <li v-for="result in selectedInitiative.results" :key="result">
                {{ result }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Meta tags
useSeoMeta({
  title: 'Инклюзивные инициативы - Дмитрий Комаров',
  ogTitle: 'Инклюзивные инициативы - Дмитрий Комаров',
  description: 'Мероприятия и программы Дмитрия Комарова для развития инклюзивного образования',
  ogDescription: 'Мероприятия и программы Дмитрия Комарова для развития инклюзивного образования'
})

// Reactive state
const selectedInitiative = ref(null)

// Initiatives data
const initiatives = ref([
  {
    id: 1,
    title: 'Летние интенсивы для глухих школьников',
    shortDescription: 'Образовательные интенсивы в МГТУ им. Н.Э. Баумана для школьников с нарушениями слуха',
    fullDescription: 'Организовал и провел серию летних интенсивов для глухих школьников в ведущем техническом университете России. Программа включала знакомство с инженерными специальностями, практические занятия и экскурсии.',
    icon: '🏫',
    date: 'Июнь 2024',
    participants: '30',
    duration: '2 недели',
    location: 'МГТУ им. Н.Э. Баумана',
    tags: ['Образование', 'Инженерия', 'РЖЯ'],
    objectives: [
      'Познакомить школьников с техническими специальностями',
      'Показать возможности инклюзивного технического образования',
      'Мотивировать к поступлению в технические вузы',
      'Развить интерес к инженерным наукам'
    ],
    activities: [
      'Адаптированные лекции по инженерным дисциплинам',
      'Практические занятия в лабораториях',
      'Экскурсии по университету',
      'Встречи с преподавателями и студентами',
      'Презентация проектов участников'
    ],
    results: [
      '30 участников успешно завершили программу',
      '85% участников выразили желание поступать в технические вузы',
      'Создан банк адаптированных материалов',
      'Налажены связи с образовательными учреждениями'
    ]
  },
  {
    id: 2,
    title: 'Технические лекции на ПАО "Яковлев"',
    shortDescription: 'Проведение технических лекций с переводом на РЖЯ для сотрудников авиационной корпорации',
    fullDescription: 'Организовал серию технических лекций для сотрудников ПАО "Яковлев" с синхронным переводом на русский жестовый язык, обеспечив доступность технической информации для глухих и слабослышащих специалистов.',
    icon: '✈️',
    date: '2024',
    participants: '50',
    duration: 'Серия из 8 лекций',
    location: 'ПАО "Яковлев"',
    tags: ['Авиация', 'Техника', 'Инклюзивность'],
    objectives: [
      'Обеспечить доступность технического образования для всех сотрудников',
      'Повысить квалификацию специалистов с нарушениями слуха',
      'Продемонстрировать возможности инклюзивного обучения',
      'Создать прецедент для других предприятий'
    ],
    activities: [
      'Адаптация технических материалов для РЖЯ',
      'Обучение переводчиков специальной терминологии',
      'Проведение лекций с синхронным переводом',
      'Создание визуальных материалов и схем',
      'Обратная связь от участников'
    ],
    results: [
      '50 специалистов прошли обучение',
      '100% положительная обратная связь',
      'Создан банк технической терминологии на РЖЯ',
      'Предприятие внедрило инклюзивные практики'
    ]
  },
  {
    id: 3,
    title: 'Мастер-классы в СКОШИ 52',
    shortDescription: 'Проведение мастер-классов по техническим дисциплинам в специальной школе',
    fullDescription: 'Регулярно провожу мастер-классы по техническим дисциплинам и программированию для учащихся специальной школы-интерната №52 для детей с нарушениями слуха.',
    icon: '🎓',
    date: '2023-2024',
    participants: '40',
    duration: 'Ежемесячно',
    location: 'СКОШИ 52',
    tags: ['Школьники', 'Программирование', 'Техника'],
    objectives: [
      'Популяризировать технические профессии среди глухих школьников',
      'Развить базовые навыки программирования',
      'Показать возможности современных технологий',
      'Мотивировать к дальнейшему обучению'
    ],
    activities: [
      'Мастер-классы по основам программирования',
      'Знакомство с робототехникой',
      'Создание простых веб-сайтов',
      'Работа с 3D-принтерами',
      'Презентации студенческих проектов'
    ],
    results: [
      '40 школьников изучили основы программирования',
      '15 участников выбрали технические специальности',
      'Создано 20+ учебных проектов',
      'Налажено сотрудничество с школой'
    ]
  },
  {
    id: 4,
    title: 'Экскурсия на производство',
    shortDescription: 'Организация экскурсии на авиационное производство для глухих школьников и студентов',
    fullDescription: 'Организовал и провел образовательную экскурсию на авиационное производство для глухих школьников и студентов, показав современные технологии и возможности трудоустройства.',
    icon: '🏭',
    date: 'Октябрь 2024',
    participants: '25',
    duration: '1 день',
    location: 'Авиационный завод',
    tags: ['Производство', 'Профориентация', 'Экскурсия'],
    objectives: [
      'Показать современное производство изнутри',
      'Познакомить с профессиями на производстве',
      'Продемонстрировать карьерные возможности',
      'Вдохновить на выбор технических профессий'
    ],
    activities: [
      'Экскурсия по производственным цехам',
      'Встреча с инженерами и рабочими',
      'Демонстрация современного оборудования',
      'Рассказ о технологических процессах',
      'Обсуждение карьерных перспектив'
    ],
    results: [
      '25 участников познакомились с производством',
      '90% участников заинтересовались техническими профессиями',
      'Установлены связи с предприятием',
      'Создан видеоотчет о мероприятии'
    ]
  },
  {
    id: 5,
    title: '"Мой первый день в МГТУ"',
    shortDescription: 'Адаптационная программа для первокурсников с мастер-классами и переводом на РЖЯ',
    fullDescription: 'Разработал и провел комплексную адаптационную программу для первокурсников с нарушениями слуха, включающую знакомство с университетом, мастер-классы и полный перевод на русский жестовый язык.',
    icon: '🎒',
    date: 'Сентябрь 2024',
    participants: '20',
    duration: '3 дня',
    location: 'МГТУ им. Н.Э. Баумана',
    tags: ['Адаптация', 'Первокурсники', 'Университет'],
    objectives: [
      'Помочь новым студентам адаптироваться в вузе',
      'Познакомить с возможностями и ресурсами университета',
      'Создать поддерживающую среду',
      'Установить связи между студентами'
    ],
    activities: [
      'Экскурсия по университету с переводом на РЖЯ',
      'Мастер-классы по учебным дисциплинам',
      'Знакомство с преподавателями и сервисами',
      'Командообразующие активности',
      'Презентация студенческих организаций'
    ],
    results: [
      '20 первокурсников успешно адаптировались',
      '100% участников продолжили обучение',
      'Создана система наставничества',
      'Разработаны методические материалы'
    ]
  }
])

// Methods
const openInitiativeModal = (initiative: any) => {
  selectedInitiative.value = initiative
  document.body.style.overflow = 'hidden'
}

const closeInitiativeModal = () => {
  selectedInitiative.value = null
  document.body.style.overflow = 'auto'
}
</script>

<style lang="scss" scoped>
.initiatives-page {
  min-height: 100vh;
}

.initiatives-hero {
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

.hero-stats {
  display: flex;
  justify-content: center;
  gap: $spacing-12;
  
  @include mobile {
    flex-direction: column;
    gap: $spacing-6;
  }
  
  .stat-item {
    text-align: center;
    
    .stat-number {
      display: block;
      font-size: $text-4xl;
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

.mission-section {
  .mission-card {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    padding: $spacing-12;
    
    @include mobile {
      padding: $spacing-8;
    }
    
    .mission-icon {
      font-size: 4rem;
      margin-bottom: $spacing-6;
    }
    
    .mission-title {
      font-size: $text-3xl;
      margin-bottom: $spacing-6;
      color: $color-neon-cyan;
    }
    
    .mission-text {
      font-size: $text-lg;
      color: $color-gray-300;
      line-height: 1.7;
      margin-bottom: $spacing-8;
    }
  }
}

.mission-values {
  display: flex;
  justify-content: center;
  gap: $spacing-8;
  flex-wrap: wrap;
  
  .value-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-2;
    
    .value-icon {
      font-size: 2rem;
    }
    
    .value-text {
      font-size: $text-sm;
      color: $color-neon-purple;
      font-weight: 600;
    }
  }
}

.initiatives-grid-section {
  .section-title {
    margin-bottom: $spacing-12;
  }
}

.initiatives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: $spacing-8;
  
  @include mobile {
    grid-template-columns: 1fr;
  }
}

.initiative-card {
  position: relative;
  cursor: pointer;
  transition: $transition-normal;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px);
    
    .initiative-overlay {
      opacity: 1;
    }
  }
}

.initiative-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $spacing-4;
  
  .initiative-icon {
    font-size: 2.5rem;
  }
  
  .initiative-date {
    color: $color-neon-pink;
    font-weight: 600;
    font-size: $text-sm;
  }
}

.initiative-content {
  .initiative-title {
    font-size: $text-xl;
    color: $color-white;
    margin-bottom: $spacing-4;
  }
  
  .initiative-description {
    color: $color-gray-300;
    line-height: 1.6;
    margin-bottom: $spacing-6;
  }
}

.initiative-stats {
  display: flex;
  flex-direction: column;
  gap: $spacing-2;
  margin-bottom: $spacing-4;
  
  .stat {
    display: flex;
    align-items: center;
    gap: $spacing-2;
    font-size: $text-sm;
    color: $color-gray-400;
    
    .stat-icon {
      font-size: $text-base;
    }
  }
}

.initiative-tags {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-2;
  
  .tag {
    background: rgba(255, 255, 255, 0.1);
    color: $color-neon-cyan;
    padding: $spacing-1 $spacing-3;
    border-radius: $radius-full;
    font-size: $text-xs;
    font-weight: 500;
  }
}

.initiative-overlay {
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
    }
  }
}

.impact-section {
  .section-title {
    margin-bottom: $spacing-12;
  }
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: $spacing-8;
  
  @include mobile {
    grid-template-columns: 1fr;
  }
}

.impact-card {
  padding: $spacing-8;
  
  .impact-icon {
    font-size: 3rem;
    text-align: center;
    margin-bottom: $spacing-4;
  }
  
  .impact-title {
    color: $color-neon-purple;
    font-size: $text-xl;
    margin-bottom: $spacing-6;
    text-align: center;
  }
}

.impact-stats {
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
  
  .impact-stat {
    text-align: center;
    
    .stat-number {
      display: block;
      font-size: $text-3xl;
      font-weight: 700;
      font-family: $font-primary;
      margin-bottom: $spacing-2;
    }
    
    .stat-description {
      color: $color-gray-300;
      font-size: $text-sm;
    }
  }
}

.impact-list {
  list-style: none;
  padding: 0;
  
  li {
    position: relative;
    padding-left: $spacing-5;
    margin-bottom: $spacing-3;
    color: $color-gray-300;
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: $color-neon-green;
      font-weight: bold;
    }
  }
}

.partners-section {
  .section-title {
    margin-bottom: $spacing-12;
  }
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-6;
}

.partner-card {
  text-align: center;
  padding: $spacing-6;
  transition: $transition-normal;
  
  &:hover {
    transform: translateY(-5px);
    
    .partner-logo {
      transform: scale(1.1);
    }
  }
  
  .partner-logo {
    font-size: 3rem;
    margin-bottom: $spacing-4;
    transition: $transition-normal;
  }
  
  .partner-name {
    color: $color-neon-pink;
    margin-bottom: $spacing-3;
    font-size: $text-lg;
  }
  
  .partner-description {
    color: $color-gray-300;
    font-size: $text-sm;
    margin: 0;
  }
}

// Modal styles
.initiative-modal {
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
}

.modal-content {
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
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
  
  &:hover {
    color: $color-neon-pink;
  }
}

.modal-header {
  text-align: center;
  padding: $spacing-8 $spacing-6 $spacing-6;
  
  .modal-icon {
    font-size: 4rem;
    margin-bottom: $spacing-4;
  }
  
  .modal-title {
    font-size: $text-3xl;
    margin-bottom: $spacing-3;
  }
  
  .modal-date {
    color: $color-neon-cyan;
    font-weight: 600;
  }
}

.modal-body {
  padding: 0 $spacing-6 $spacing-8;
  
  .initiative-full-description {
    font-size: $text-lg;
    line-height: 1.7;
    color: $color-gray-300;
    margin-bottom: $spacing-8;
  }
  
  .initiative-objectives,
  .initiative-activities,
  .initiative-results {
    margin-bottom: $spacing-8;
    
    h3 {
      color: $color-neon-purple;
      margin-bottom: $spacing-4;
    }
    
    ul {
      list-style: none;
      padding: 0;
      
      li {
        position: relative;
        padding-left: $spacing-5;
        margin-bottom: $spacing-2;
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
}

.text-center {
  text-align: center;
}
</style> 