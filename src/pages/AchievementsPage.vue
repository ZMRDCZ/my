<template>
  <div class="achievements-page">
    <section class="page-header section">
      <div class="container">
        <h1 class="page-title text-gradient">Достижения</h1>
        <p class="page-description">
          Награды, стипендии и признание в научной и технической сферах
        </p>
      </div>
    </section>

    <section class="main-achievement section">
      <div class="container">
        <div class="featured-card card">
          <div class="featured-icon">🏆</div>
          <h2 class="featured-title text-gradient-gold">
            Стипендия Правительства Российской Федерации
          </h2>
          <p class="featured-year">2024</p>
          <p class="featured-description">
            Получил государственную стипендию Правительства Российской Федерации 
            за выдающиеся достижения в области образования и науки. Признание вклада 
            в развитие инклюзивного образования и технических проектов.
          </p>
        </div>
      </div>
    </section>

    <section class="achievements-section section">
      <div class="container">
        <h2 class="section-title text-center">Все достижения</h2>
        <div class="achievements-grid">
          <div class="achievement-card card">
            <div class="achievement-icon">💰</div>
            <h3 class="achievement-title">Грант Росмолодёжи</h3>
            <p class="achievement-year">2024</p>
            <p class="achievement-description">
              Получение и успешная реализация гранта "Открытые Перспективы" 
              на сумму 300,000 рублей
            </p>
          </div>

          <div class="achievement-card card">
            <div class="achievement-icon">🎯</div>
            <h3 class="achievement-title">Конкурс "Твой ход"</h3>
            <p class="achievement-year">2023</p>
            <p class="achievement-description">
              Участие в федеральном конкурсе молодежных проектов с 
              инновационным решением для инклюзивного образования
            </p>
          </div>

          <div class="achievement-card card">
            <div class="achievement-icon">🚀</div>
            <h3 class="achievement-title">Студенческий совет РК</h3>
            <p class="achievement-year">2023</p>
            <p class="achievement-description">
              Основание и руководство студенческим советом факультета 
              ракетно-космической техники МГТУ им. Н.Э. Баумана
            </p>
          </div>

          <div class="achievement-card card">
            <div class="achievement-icon">🤟</div>
            <h3 class="achievement-title">Адаптация лекций на РЖЯ</h3>
            <p class="achievement-year">2023-2024</p>
            <p class="achievement-description">
              Разработка методологии и адаптация 20+ технических лекций 
              на русский жестовый язык
            </p>
          </div>

          <div class="achievement-card card">
            <div class="achievement-icon">👥</div>
            <h3 class="achievement-title">Программа наставничества</h3>
            <p class="achievement-year">2023</p>
            <p class="achievement-description">
              Создание и запуск программы наставничества для 80+ студентов 
              младших курсов
            </p>
          </div>

          <div class="achievement-card card">
            <div class="achievement-icon">🌟</div>
            <h3 class="achievement-title">АНО "Открытые Перспективы"</h3>
            <p class="achievement-year">2022-настоящее время</p>
            <p class="achievement-description">
              Активная работа в организации, охват 500+ бенефициаров, 
              реализация 5+ проектов
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="stats-section section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card card">
            <div class="stat-number text-gradient-gold">15+</div>
            <div class="stat-label">Реализованных проектов</div>
          </div>
          <div class="stat-card card">
            <div class="stat-number text-gradient-gold">500+</div>
            <div class="stat-label">Участников</div>
          </div>
          <div class="stat-card card">
            <div class="stat-number text-gradient-gold">300K</div>
            <div class="stat-label">Привлечённых средств</div>
          </div>
          <div class="stat-card card">
            <div class="stat-number text-gradient-gold">3</div>
            <div class="stat-label">Года активности</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// No additional logic needed
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

.featured-card {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: $spacing-12;
  
  @include mobile {
    padding: $spacing-8;
  }
  
  @include xs {
    padding: $spacing-6;
  }
}

.featured-icon {
  font-size: 5rem;
  margin-bottom: $spacing-6;
  
  @include mobile {
    font-size: 4rem;
    margin-bottom: $spacing-4;
  }
}

.featured-title {
  font-size: $text-4xl;
  margin-bottom: $spacing-4;
  
  @include mobile {
    font-size: $text-3xl;
  }
  
  @include xs {
    font-size: $text-2xl;
  }
}

.featured-year {
  font-size: $text-2xl;
  color: $color-highlight;
  margin-bottom: $spacing-6;
  font-weight: 700;
  font-family: $font-primary;
  
  @include mobile {
    font-size: $text-xl;
    margin-bottom: $spacing-4;
  }
}

.featured-description {
  font-size: $text-lg;
  color: $color-text-secondary;
  line-height: 1.8;
  
  @include mobile {
    font-size: $text-base;
  }
}

.section-title {
  font-size: $text-4xl;
  margin-bottom: $spacing-12;
  
  @include mobile {
    font-size: $text-3xl;
    margin-bottom: $spacing-8;
  }
  
  @include xs {
    font-size: $text-2xl;
    margin-bottom: $spacing-6;
  }
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: $spacing-6;
  
  @include mobile {
    grid-template-columns: 1fr;
    gap: $spacing-4;
  }
}

.achievement-card {
  text-align: center;
  
  @include mobile {
    padding: $spacing-5;
  }
}

.achievement-icon {
  font-size: 3rem;
  margin-bottom: $spacing-4;
  
  @include mobile {
    font-size: 2.5rem;
    margin-bottom: $spacing-3;
  }
}

.achievement-title {
  font-size: $text-xl;
  color: $color-accent;
  margin-bottom: $spacing-2;
  
  @include mobile {
    font-size: $text-lg;
  }
}

.achievement-year {
  font-size: $text-sm;
  color: $color-highlight;
  font-weight: 700;
  margin-bottom: $spacing-3;
  font-family: $font-primary;
}

.achievement-description {
  color: $color-text-secondary;
  line-height: 1.6;
  font-size: $text-sm;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $spacing-6;
  
  @include mobile-and-tablet {
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-4;
  }
  
  @include xs {
    grid-template-columns: 1fr;
  }
}

.stat-card {
  text-align: center;
  padding: $spacing-8;
  
  @include mobile {
    padding: $spacing-6;
  }
}

.stat-number {
  font-size: $text-5xl;
  font-weight: 700;
  font-family: $font-primary;
  display: block;
  margin-bottom: $spacing-3;
  
  @include mobile {
    font-size: $text-4xl;
  }
  
  @include xs {
    font-size: $text-3xl;
  }
}

.stat-label {
  color: $color-text-secondary;
  font-size: $text-base;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  @include mobile {
    font-size: $text-sm;
  }
}
</style>

