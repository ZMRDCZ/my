<template>
  <div class="about-page">
    <section class="page-header section">
      <div class="container">
        <h1 class="page-title text-gradient">О себе</h1>
        <p class="page-description">
          Инженер, исследователь и организатор инклюзивных инициатив
        </p>
      </div>
    </section>

    <section class="content-section section">
      <div class="container">
        <div class="content-grid">
          <div class="content-card card">
            <div class="card-icon">🎓</div>
            <h2 class="card-title">Образование</h2>
            <p class="card-text">
              Студент МГТУ им. Н.Э. Баумана, факультет ракетно-космической техники.
              Изучаю современные инженерные дисциплины и активно применяю знания 
              в реальных проектах.
            </p>
          </div>

          <div class="content-card card">
            <div class="card-icon">💡</div>
            <h2 class="card-title">Навыки</h2>
            <div class="skills-list">
              <span class="skill-tag">Веб-разработка</span>
              <span class="skill-tag">Vue.js / React</span>
              <span class="skill-tag">TypeScript</span>
              <span class="skill-tag">Проектный менеджмент</span>
              <span class="skill-tag">Инклюзивные технологии</span>
              <span class="skill-tag">Организация мероприятий</span>
            </div>
          </div>

          <div class="content-card card">
            <div class="card-icon">🎯</div>
            <h2 class="card-title">Цели</h2>
            <p class="card-text">
              Развитие инклюзивного образования, создание доступных технологий
              и организация мероприятий, способствующих интеграции людей 
              с ограниченными возможностями здоровья в образовательную и 
              профессиональную среду.
            </p>
          </div>

          <div class="content-card card">
            <div class="card-icon">🌟</div>
            <h2 class="card-title">Достижения</h2>
            <ul class="achievements-list">
              <li>Стипендия Правительства РФ (2024)</li>
              <li>Грант Росмолодёжи 300,000 рублей</li>
              <li>Основатель студенческого совета</li>
              <li>15+ реализованных проектов</li>
              <li>100+ участников в инициативах</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="quote-section section">
      <div class="container">
        <blockquote class="quote card">
          <p class="quote-text">
            "Инклюзивность — это не просто доступность технологий, 
            это создание среды, где каждый может реализовать свой потенциал"
          </p>
          <cite class="quote-author text-gradient">— Дмитрий Комаров</cite>
        </blockquote>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// No additional logic needed for this page
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

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-6;
  
  @include mobile {
    grid-template-columns: 1fr;
    gap: $spacing-4;
  }
}

.content-card {
  text-align: center;
  
  @include mobile {
    padding: $spacing-5;
  }
}

.card-icon {
  font-size: 3rem;
  margin-bottom: $spacing-4;
  
  @include mobile {
    font-size: 2.5rem;
    margin-bottom: $spacing-3;
  }
}

.card-title {
  font-size: $text-2xl;
  margin-bottom: $spacing-4;
  color: $color-accent;
  
  @include mobile {
    font-size: $text-xl;
    margin-bottom: $spacing-3;
  }
}

.card-text {
  color: $color-text-secondary;
  line-height: 1.7;
  text-align: left;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-2;
  justify-content: center;
}

.skill-tag {
  padding: $spacing-2 $spacing-3;
  background: rgba($color-accent, 0.2);
  border: 1px solid rgba($color-accent, 0.3);
  border-radius: $radius-sm;
  font-size: $text-sm;
  color: $color-accent;
  font-weight: 500;
  transition: $transition-normal;
  
  &:hover {
    background: rgba($color-accent, 0.3);
    border-color: $color-accent;
    transform: translateY(-2px);
  }
}

.achievements-list {
  list-style: none;
  text-align: left;
  
  li {
    color: $color-text-secondary;
    padding: $spacing-2 0;
    border-bottom: 1px solid rgba($color-accent, 0.1);
    
    &:last-child {
      border-bottom: none;
    }
    
    &::before {
      content: '✓';
      color: $color-highlight;
      margin-right: $spacing-2;
      font-weight: bold;
    }
  }
}

.quote-section {
  .quote {
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
  
  .quote-text {
    font-size: $text-2xl;
    font-style: italic;
    color: $color-text-primary;
    margin-bottom: $spacing-6;
    line-height: 1.6;
    
    @include mobile {
      font-size: $text-xl;
      margin-bottom: $spacing-4;
    }
    
    @include xs {
      font-size: $text-lg;
    }
  }
  
  .quote-author {
    font-size: $text-xl;
    font-style: normal;
    font-family: $font-primary;
    
    @include mobile {
      font-size: $text-lg;
    }
  }
}
</style>

