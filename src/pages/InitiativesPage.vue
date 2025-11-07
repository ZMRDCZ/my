<template>
  <div class="initiatives-page">
    <section class="page-header section">
      <div class="container">
        <h1 class="page-title text-gradient">Инклюзивные инициативы</h1>
        <p class="page-description">
          Мероприятия и программы для развития инклюзивного образования
        </p>
      </div>
    </section>

    <section class="initiatives-section section">
      <div class="container">
        <div class="initiatives-grid">
          <div class="initiative-card card">
            <div class="initiative-icon">🤟</div>
            <h3 class="initiative-title">Адаптация лекций на РЖЯ</h3>
            <p class="initiative-description">
              Разработка методологии и практическая адаптация технических лекций 
              на русский жестовый язык. Создание доступного образовательного 
              контента для студентов с нарушениями слуха.
            </p>
            <div class="initiative-stats">
              <span class="stat">20+ лекций</span>
              <span class="stat">50+ студентов</span>
            </div>
          </div>

          <div class="initiative-card card">
            <div class="initiative-icon">💰</div>
            <h3 class="initiative-title">Грант "Открытые Перспективы"</h3>
            <p class="initiative-description">
              Реализация гранта Росмолодёжи на сумму 300,000 рублей. 
              Создание инклюзивной образовательной среды и поддержка людей 
              с нарушениями слуха.
            </p>
            <div class="initiative-stats">
              <span class="stat">300,000₽</span>
              <span class="stat">200+ участников</span>
            </div>
          </div>

          <div class="initiative-card card">
            <div class="initiative-icon">🌟</div>
            <h3 class="initiative-title">АНО "Открытые Перспективы"</h3>
            <p class="initiative-description">
              Активная работа в автономной некоммерческой организации, 
              направленной на развитие инклюзивного образования и поддержку 
              людей с ограниченными возможностями здоровья.
            </p>
            <div class="initiative-stats">
              <span class="stat">5+ проектов</span>
              <span class="stat">500+ бенефициаров</span>
            </div>
          </div>

          <div class="initiative-card card">
            <div class="initiative-icon">👥</div>
            <h3 class="initiative-title">Программа наставничества</h3>
            <p class="initiative-description">
              Комплексная программа наставничества для студентов младших курсов. 
              Академическая поддержка, профориентация и личностное развитие.
            </p>
            <div class="initiative-stats">
              <span class="stat">15 наставников</span>
              <span class="stat">80+ студентов</span>
            </div>
          </div>

          <div class="initiative-card card">
            <div class="initiative-icon">🎯</div>
            <h3 class="initiative-title">Конкурс "Твой ход"</h3>
            <p class="initiative-description">
              Участие в федеральном конкурсе "Твой ход" с проектом по развитию 
              инклюзивного образования. Создание доступной образовательной среды 
              для студентов с ОВЗ.
            </p>
            <div class="initiative-stats">
              <span class="stat">Федеральный уровень</span>
              <span class="stat">2023</span>
            </div>
          </div>

          <div class="initiative-card card">
            <div class="initiative-icon">🚀</div>
            <h3 class="initiative-title">Студенческий совет</h3>
            <p class="initiative-description">
              Основание и руководство студенческим советом факультета 
              ракетно-космической техники. Организация мероприятий и поддержка 
              студентов.
            </p>
            <div class="initiative-stats">
              <span class="stat">10+ мероприятий</span>
              <span class="stat">150+ студентов</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="impact-section section">
      <div class="container">
        <h2 class="section-title text-center">Влияние и результаты</h2>
        <div class="impact-grid">
          <div class="impact-card card">
            <div class="impact-number text-gradient-gold">500+</div>
            <p class="impact-label">Людей охвачено программами</p>
          </div>
          <div class="impact-card card">
            <div class="impact-number text-gradient-gold">300K</div>
            <p class="impact-label">Привлечено на проекты</p>
          </div>
          <div class="impact-card card">
            <div class="impact-number text-gradient-gold">15+</div>
            <p class="impact-label">Реализованных инициатив</p>
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

.initiatives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: $spacing-6;
  
  @include mobile {
    grid-template-columns: 1fr;
    gap: $spacing-4;
  }
}

.initiative-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  
  @include mobile {
    padding: $spacing-5;
  }
}

.initiative-icon {
  font-size: 3rem;
  margin-bottom: $spacing-4;
  text-align: center;
  
  @include mobile {
    font-size: 2.5rem;
    margin-bottom: $spacing-3;
  }
}

.initiative-title {
  font-size: $text-xl;
  color: $color-accent;
  margin-bottom: $spacing-3;
  text-align: center;
  
  @include mobile {
    font-size: $text-lg;
  }
}

.initiative-description {
  color: $color-text-secondary;
  line-height: 1.6;
  margin-bottom: $spacing-4;
  flex: 1;
  
  @include mobile {
    font-size: $text-sm;
  }
}

.initiative-stats {
  display: flex;
  gap: $spacing-3;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: $spacing-3;
  border-top: 1px solid rgba($color-accent, 0.2);
}

.stat {
  padding: $spacing-2 $spacing-3;
  background: rgba($color-highlight, 0.2);
  border: 1px solid rgba($color-highlight, 0.3);
  border-radius: $radius-sm;
  font-size: $text-xs;
  color: $color-highlight;
  font-weight: 600;
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

.impact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing-6;
  max-width: 1000px;
  margin: 0 auto;
  
  @include mobile-and-tablet {
    grid-template-columns: 1fr;
    gap: $spacing-4;
  }
}

.impact-card {
  text-align: center;
  padding: $spacing-10;
  
  @include mobile {
    padding: $spacing-8;
  }
}

.impact-number {
  font-size: $text-5xl;
  font-weight: 700;
  font-family: $font-primary;
  display: block;
  margin-bottom: $spacing-3;
  
  @include mobile {
    font-size: $text-4xl;
  }
}

.impact-label {
  color: $color-text-secondary;
  font-size: $text-base;
  
  @include mobile {
    font-size: $text-sm;
  }
}
</style>

