<template>
  <div class="achievements-page">
    <!-- Hero Section -->
    <section class="achievements-hero section">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title text-gradient">Достижения</h1>
          <p class="hero-subtitle">
            Награды, стипендии и признание в научной и технической сферах
          </p>
        </div>
      </div>
    </section>

    <!-- Main Achievement Highlight -->
    <section class="main-achievement section">
      <div class="container">
        <div class="achievement-spotlight card neon-border">
          <div class="spotlight-content">
            <div class="spotlight-icon">👑</div>
            <h2 class="spotlight-title">Главное достижение</h2>
            <h3 class="spotlight-name text-gradient">
              Стипендия Правительства Российской Федерации
            </h3>
            <p class="spotlight-description">
              Государственная стипендия Правительства РФ за выдающиеся достижения 
              в области образования и науки. Присуждается студентам за высокие 
              академические результаты и активную научную деятельность.
            </p>
            <div class="spotlight-details">
              <div class="detail-item">
                <span class="detail-label">Год получения:</span>
                <span class="detail-value text-gradient">2024</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Статус:</span>
                <span class="detail-value text-gradient">Действующая</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Категория:</span>
                <span class="detail-value text-gradient">Образование и наука</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="timeline-section section">
      <div class="container">
        <h2 class="section-title text-center">Временная шкала достижений</h2>
        <div class="timeline">
          <div 
            v-for="(achievement, index) in achievements" 
            :key="index"
            class="timeline-item"
            :class="{ 'left': index % 2 === 0, 'right': index % 2 === 1 }"
          >
            <div class="timeline-marker">
              <div class="marker-icon">{{ achievement.icon }}</div>
            </div>
            <div class="timeline-content card">
              <div class="timeline-date">{{ achievement.date }}</div>
              <h3 class="timeline-title">{{ achievement.title }}</h3>
              <p class="timeline-description">{{ achievement.description }}</p>
              <div v-if="achievement.details" class="timeline-details">
                <ul>
                  <li v-for="detail in achievement.details" :key="detail">
                    {{ detail }}
                  </li>
                </ul>
              </div>
              <div v-if="achievement.category" class="timeline-category">
                {{ achievement.category }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Areas Section -->
    <section class="key-areas-section section">
      <div class="container">
        <h2 class="section-title text-center">Ключевые направления деятельности</h2>
        <div class="areas-grid">
          <div class="area-card card">
            <div class="area-icon">🤟</div>
            <h3 class="area-title">Инклюзивное образование</h3>
            <p class="area-description">
              Развитие доступного образования для лиц с ограниченными возможностями здоровья, 
              создание инклюзивных технологических решений и адаптация образовательного контента.
            </p>
            <div class="area-achievements">
              <h4>Ключевые достижения:</h4>
              <ul>
                <li>Летние интенсивы для глухих школьников в МГТУ</li>
                <li>Мастер-классы по робототехнике и 3D-моделированию с переводом на РЖЯ</li>
                <li>Проект базы знаний для лиц с ОВЗ (1 место в номинации)</li>
                <li>Деятельность в АНО "Открытые Перспективы"</li>
              </ul>
            </div>
          </div>
          
          <div class="area-card card">
            <div class="area-icon">🔬</div>
            <h3 class="area-title">Научные исследования</h3>
            <p class="area-description">
              Активная научная деятельность в области прикладной механики, автоматизации 
              производства и инженерных систем с публикациями и участием в конференциях.
            </p>
            <div class="area-achievements">
              <h4>Ключевые достижения:</h4>
              <ul>
                <li>Диплом I степени на "Виттевских чтениях"</li>
                <li>1 место на конференции "СНК-2024"</li>
                <li>Победитель секции "Конструирование и инжиниринг"</li>
                <li>Множественные победы во всероссийских конкурсах</li>
              </ul>
            </div>
          </div>
          
          <div class="area-card card">
            <div class="area-icon">🏭</div>
            <h3 class="area-title">Инновационные проекты</h3>
            <p class="area-description">
              Разработка и реализация инновационных проектов в области промышленной 
              автоматизации, энергетики и технологических решений для крупных компаний.
            </p>
            <div class="area-achievements">
              <h4>Ключевые достижения:</h4>
              <ul>
                <li>Статус "Технологический лидер Ростеха"</li>
                <li>Проекты в топ-100 Ростеха и ПАО "ОАК"</li>
                <li>Гран-при конкурса "Мособлгаз"</li>
                <li>2 место в конкурсе "Газпром Линде Инжиниринг"</li>
              </ul>
            </div>
          </div>
          
          <div class="area-card card">
            <div class="area-icon">👥</div>
            <h3 class="area-title">Лидерство и наставничество</h3>
            <p class="area-description">
              Организационная деятельность, создание студенческих сообществ и 
              развитие программ наставничества для младших курсов.
            </p>
            <div class="area-achievements">
              <h4>Ключевые достижения:</h4>
              <ul>
                <li>Создание и руководство студенческим советом факультета РК</li>
                <li>Главный организатор межвузовской конференции по наставничеству</li>
                <li>Программа наставничества для младших курсов</li>
                <li>Обучение более 500 участников</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="stats-section section">
      <div class="container">
        <h2 class="section-title text-center">Достижения в цифрах</h2>
        <div class="stats-grid">
          <div class="stat-card card">
            <div class="stat-icon">🏆</div>
            <div class="stat-number text-gradient">30+</div>
            <div class="stat-label">Наград и признаний</div>
          </div>
          
          <div class="stat-card card">
            <div class="stat-icon">📚</div>
            <div class="stat-number text-gradient">8+</div>
            <div class="stat-label">Научных публикаций</div>
          </div>
          
          <div class="stat-card card">
            <div class="stat-icon">🎓</div>
            <div class="stat-number text-gradient">500+</div>
            <div class="stat-label">Обученных участников</div>
          </div>
          
          <div class="stat-card card">
            <div class="stat-icon">💡</div>
            <div class="stat-number text-gradient">25+</div>
            <div class="stat-label">Реализованных проектов</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Meta tags
useSeoMeta({
  title: 'Достижения - Дмитрий Комаров',
  ogTitle: 'Достижения - Дмитрий Комаров',
  description: 'Награды, стипендии и признание Дмитрия Комарова в научной и технической сферах',
  ogDescription: 'Награды, стипендии и признание Дмитрия Комарова в научной и технической сферах'
})

// Achievements data
const achievements = ref([
  {
    date: '2025',
    title: 'Конкурс инновационных проектов от "Мособлгаз"',
    description: 'Множественные победы в конкурсе инновационных проектов от компании "Мособлгаз".',
    icon: '🏆',
    category: 'Конкурс',
    details: [
      'Один проект удостоен гран-при конкурса',
      'Два проекта заняли 1 место и были приглашены на Научно-технический совет',
      'Один проект занял 2 место',
      'Проект по созданию базы знаний для лиц с ОВЗ занял 1 место в номинации'
    ]
  },
  {
    date: '2025',
    title: 'Конкурс творческих проектов от "Газпром Линде Инжиниринг"',
    description: 'Занял 2 место с проектом по ТОиР заводов СПГ.',
    icon: '🏭',
    category: 'Конкурс'
  },
  {
    date: '2025',
    title: 'Полуфиналист конкурса ВИК',
    description: 'Успешно прошел отбор и стал полуфиналистом конкурса ВИК.',
    icon: '🎖️',
    category: 'Конкурс'
  },
  {
    date: '2024',
    title: 'Программа "Вектор" от ГК "Ростех"',
    description: 'Два проекта вошли в топ-100 проектов Ростеха, присвоен статус "Технологический лидер Ростеха".',
    icon: '⚡',
    category: 'Программа развития',
    details: [
      'Два проекта в топ-100 проектов Ростеха',
      'Статус "Технологический лидер Ростеха"'
    ]
  },
  {
    date: '2024',
    title: 'Конкурс "Будущее Авиации" от ПАО "ОАК"',
    description: 'Два проекта вошли в топ-100 проектов ПАО "ОАК".',
    icon: '✈️',
    category: 'Конкурс',
    details: [
      'Два проекта в топ-100 проектов ПАО "ОАК"'
    ]
  },
  {
    date: '2024',
    title: 'Программа "Новаторы Москвы"',
    description: 'Успешно подана заявка и пройдено обучение в программе "Новаторы Москвы".',
    icon: '🔬',
    category: 'Программа развития'
  },
  {
    date: '2024',
    title: 'Конкурс "Политехника" - 1 место',
    description: 'Занял 1 место в номинации "Прикладная механика и автоматизация".',
    icon: '🥇',
    category: 'Конкурс'
  },
  {
    date: '2024',
    title: 'XXIV Международный конгресс молодой науки "Виттевские чтения"',
    description: 'Получил диплом I степени на международном конгрессе молодой науки.',
    icon: '🎓',
    category: 'Научная конференция'
  },
  {
    date: '2024',
    title: 'Открытая международная студенческая научная конференция "СНК-2024"',
    description: 'Занял 1 место на международной студенческой научной конференции Московского Политеха.',
    icon: '🏅',
    category: 'Научная конференция'
  },
  {
    date: '2024',
    title: 'II Весенняя научная сессия СНО НИЯУ МИФИ',
    description: 'Победитель секции "Конструирование и инжиниринг".',
    icon: '🔧',
    category: 'Научная конференция'
  },
  {
    date: '2024',
    title: 'XVII Международный конкурс научных, учебных и творческих работ',
    description: 'Победитель I степени в международном конкурсе.',
    icon: '🌍',
    category: 'Международный конкурс'
  },
  {
    date: '2024',
    title: 'VIII Всероссийский конкурс научных работ "Научный прорыв 2024"',
    description: 'Победитель I степени во всероссийском конкурсе научных работ.',
    icon: '🚀',
    category: 'Всероссийский конкурс'
  },
  {
    date: '2024',
    title: 'VIII Всероссийский конкурс научных статей "Молодые учёные – гордость страны"',
    description: 'Победитель I степени во всероссийском конкурсе научных статей.',
    icon: '📝',
    category: 'Всероссийский конкурс'
  },
  {
    date: '2024',
    title: 'Межвузовская конференция по наставничеству',
    description: 'Выступил в качестве главного организатора и спикера конференции.',
    icon: '🎤',
    category: 'Организация мероприятий'
  },
  {
    date: '2024',
    title: 'Летние интенсивы для глухих школьников МГТУ им. Н.Э. Баумана',
    description: 'Организовал и провел летние интенсивы для глухих школьников с мастер-классами по робототехнике и 3D-моделированию с переводом на РЖЯ.',
    icon: '🤟',
    category: 'Инклюзивное образование',
    details: [
      'Мастер-классы по робототехнике с переводом на РЖЯ',
      'Мастер-классы по 3D-моделированию с переводом на РЖЯ',
      'Поддержка приёмной комиссии (Сидельников И.Д.)'
    ]
  },
  {
    date: '2024',
    title: 'Общеуниверситетская конференция "Студенческая научная весна"',
    description: 'Занял 3 место в секции "Системы автоматизации производства".',
    icon: '🏆',
    category: 'Научная конференция'
  },
  {
    date: '2024',
    title: 'Вторая молодёжная конференция "КАПП(М)-2024"',
    description: 'Участие в конференции "Комплексная автоматизация проектирования производства" с международным участием.',
    icon: '🌐',
    category: 'Международная конференция'
  },
  {
    date: '2023',
    title: 'Конкурс "Политехника" - 2 место',
    description: 'Занял 2 место в конкурсе "Политехника".',
    icon: '🥈',
    category: 'Конкурс'
  },
  {
    date: '2024',
    title: 'Стипендия Правительства РФ',
    description: 'Получил государственную стипендию Правительства Российской Федерации за выдающиеся достижения в области образования и науки.',
    icon: '👑',
    category: 'Государственная награда',
    details: [
      'Высокие академические результаты',
      'Активная научная деятельность',
      'Социальная значимость проектов'
    ]
  },
  {
    date: '2024',
    title: 'Грант Росмолодёжи "Открытые Перспективы"',
    description: 'Успешно получил и реализовал грант на развитие инклюзивных образовательных инициатив.',
    icon: '💰',
    category: 'Грант',
    details: [
      'Сумма гранта: 300,000 рублей',
      'Успешная реализация проекта',
      'Охват более 200 участников'
    ]
  },
  {
    date: '2023-2024',
    title: 'Создание студенческого совета факультета РК',
    description: 'Основал и возглавил студенческий совет факультета ракетно-космической техники.',
    icon: '🚀',
    category: 'Лидерство'
  },
  {
    date: '2023',
    title: 'Проект "Наставничество"',
    description: 'Запустил программу наставничества для студентов младших курсов.',
    icon: '👥',
    category: 'Образование'
  },
  {
    date: '2023',
    title: 'Участие в конкурсе "Твой ход"',
    description: 'Принял участие в федеральном конкурсе молодежных проектов.',
    icon: '🎯',
    category: 'Конкурс'
  },
  {
    date: '2022-2024',
    title: 'Деятельность в АНО "Открытые Перспективы"',
    description: 'Активная работа в автономной некоммерческой организации по развитию инклюзивного образования.',
    icon: '🌟',
    category: 'Общественная деятельность'
  }
])
</script>

<style lang="scss" scoped>
.achievements-page {
  min-height: 100vh;
}

.achievements-hero {
  padding-top: $spacing-16;
  text-align: center;
  
  .hero-content {
    max-width: 800px;
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
  }
}

.main-achievement {
  .achievement-spotlight {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    padding: $spacing-12;
    
    @include mobile {
      padding: $spacing-8;
    }
    
    .spotlight-icon {
      font-size: 5rem;
      margin-bottom: $spacing-6;
    }
    
    .spotlight-title {
      font-size: $text-2xl;
      color: $color-neon-cyan;
      margin-bottom: $spacing-4;
    }
    
    .spotlight-name {
      font-size: $text-4xl;
      margin-bottom: $spacing-6;
      
      @include mobile {
        font-size: $text-2xl;
      }
    }
    
    .spotlight-description {
      font-size: $text-lg;
      color: $color-gray-300;
      line-height: 1.7;
      margin-bottom: $spacing-8;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
  }
}

.spotlight-details {
  display: flex;
  justify-content: center;
  gap: $spacing-8;
  
  @include mobile {
    flex-direction: column;
    gap: $spacing-4;
  }
  
  .detail-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-2;
    
    .detail-label {
      font-size: $text-sm;
      color: $color-gray-400;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .detail-value {
      font-size: $text-lg;
      font-weight: 600;
    }
  }
}

.timeline-section {
  .section-title {
    margin-bottom: $spacing-16;
    
    @include mobile {
      margin-bottom: $spacing-12;
    }
  }
}

.timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, $color-neon-pink, $color-neon-cyan);
    transform: translateX(-50%);
    
    @include mobile {
      left: 30px;
    }
  }
}

.timeline-item {
  position: relative;
  margin-bottom: $spacing-12;
  width: 100%;
  
  &.left {
    .timeline-content {
      margin-right: 55%;
      
      @include mobile {
        margin-right: 0;
        margin-left: 70px;
      }
    }
  }
  
  &.right {
    .timeline-content {
      margin-left: 55%;
      
      @include mobile {
        margin-left: 70px;
      }
    }
  }
}

.timeline-marker {
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  background: $color-primary;
  border: 4px solid $color-neon-cyan;
  border-radius: $radius-full;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  @include neon-glow($color-neon-cyan, 5px);
  
  @include mobile {
    left: 30px;
  }
  
  .marker-icon {
    font-size: 1.5rem;
  }
}

.timeline-content {
  padding: $spacing-6;
  position: relative;
  
  .timeline-date {
    font-size: $text-sm;
    color: $color-neon-pink;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: $spacing-3;
  }
  
  .timeline-title {
    font-size: $text-xl;
    color: $color-white;
    margin-bottom: $spacing-4;
  }
  
  .timeline-description {
    color: $color-gray-300;
    line-height: 1.6;
    margin-bottom: $spacing-4;
  }
  
  .timeline-details {
    margin-bottom: $spacing-4;
    
    ul {
      list-style: none;
      padding: 0;
      
      li {
        position: relative;
        padding-left: $spacing-5;
        margin-bottom: $spacing-2;
        color: $color-gray-400;
        font-size: $text-sm;
        
        &::before {
          content: '•';
          position: absolute;
          left: 0;
          color: $color-neon-cyan;
          font-weight: bold;
        }
      }
    }
  }
  
  .timeline-category {
    display: inline-block;
    background: linear-gradient(45deg, $color-neon-pink, $color-neon-cyan);
    color: $color-white;
    padding: $spacing-1 $spacing-3;
    border-radius: $radius-full;
    font-size: $text-xs;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}

.key-areas-section {
  .section-title {
    margin-bottom: $spacing-12;
  }
}

.areas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: $spacing-8;
  
  @include mobile {
    grid-template-columns: 1fr;
  }
}

.area-card {
  padding: $spacing-8;
  transition: $transition-normal;
  
  &:hover {
    transform: translateY(-5px);
    
    .area-icon {
      transform: scale(1.1);
    }
  }
  
  .area-icon {
    font-size: 3rem;
    text-align: center;
    margin-bottom: $spacing-4;
    transition: $transition-normal;
  }
  
  .area-title {
    color: $color-neon-purple;
    font-size: $text-xl;
    margin-bottom: $spacing-4;
    text-align: center;
  }
  
  .area-description {
    color: $color-gray-300;
    line-height: 1.6;
    margin-bottom: $spacing-6;
  }
  
  .area-achievements {
    h4 {
      color: $color-neon-cyan;
      margin-bottom: $spacing-3;
      font-size: $text-lg;
    }
    
    ul {
      list-style: none;
      padding: 0;
      
      li {
        position: relative;
        padding-left: $spacing-5;
        margin-bottom: $spacing-2;
        color: $color-gray-400;
        font-size: $text-sm;
        
        &::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: $color-neon-cyan;
          font-weight: bold;
        }
      }
    }
  }
}

.stats-section {
  .section-title {
    margin-bottom: $spacing-12;
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: $spacing-6;
}

.stat-card {
  text-align: center;
  padding: $spacing-8;
  transition: $transition-normal;
  
  &:hover {
    transform: translateY(-10px);
    
    .stat-icon {
      transform: scale(1.2);
    }
  }
  
  .stat-icon {
    font-size: 3rem;
    margin-bottom: $spacing-4;
    transition: $transition-normal;
  }
  
  .stat-number {
    display: block;
    font-size: $text-4xl;
    font-weight: 700;
    font-family: $font-primary;
    margin-bottom: $spacing-2;
    
    @include mobile {
      font-size: $text-3xl;
    }
  }
  
  .stat-label {
    color: $color-gray-400;
    font-size: $text-sm;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}

.text-center {
  text-align: center;
}
</style> 