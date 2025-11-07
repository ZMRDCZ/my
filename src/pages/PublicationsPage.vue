<template>
  <div class="publications-page">
    <section class="page-header section">
      <div class="container">
        <h1 class="page-title text-gradient">Публикации</h1>
        <p class="page-description">
          Научные статьи, исследования и публикации в профильных изданиях
        </p>
      </div>
    </section>

    <section class="publications-section section">
      <div class="container">
        <div class="placeholder-card card">
          <div class="placeholder-icon">📚</div>
          <h2 class="placeholder-title">Раздел в разработке</h2>
          <p class="placeholder-text">
            Информация о публикациях будет добавлена после предоставления 
            материалов заказчиком. Здесь будут представлены научные статьи, 
            исследования и публикации в профильных изданиях.
          </p>
        </div>

        <div class="info-grid">
          <div class="info-card card">
            <h3 class="info-title">Что будет включено:</h3>
            <ul class="info-list">
              <li>Научные статьи</li>
              <li>Конференционные доклады</li>
              <li>Тезисы исследований</li>
              <li>Публикации в журналах</li>
              <li>Материалы симпозиумов</li>
            </ul>
          </div>

          <div class="info-card card">
            <h3 class="info-title">Формат представления:</h3>
            <ul class="info-list">
              <li>Название публикации</li>
              <li>Авторы и соавторы</li>
              <li>Издание и год</li>
              <li>Аннотация</li>
              <li>Ссылки на полный текст</li>
            </ul>
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

.placeholder-card {
  max-width: 800px;
  margin: 0 auto $spacing-12;
  text-align: center;
  padding: $spacing-12;
  
  @include mobile {
    padding: $spacing-8;
    margin-bottom: $spacing-8;
  }
  
  @include xs {
    padding: $spacing-6;
  }
}

.placeholder-icon {
  font-size: 5rem;
  margin-bottom: $spacing-6;
  
  @include mobile {
    font-size: 4rem;
    margin-bottom: $spacing-4;
  }
}

.placeholder-title {
  font-size: $text-3xl;
  color: $color-accent;
  margin-bottom: $spacing-4;
  
  @include mobile {
    font-size: $text-2xl;
  }
  
  @include xs {
    font-size: $text-xl;
  }
}

.placeholder-text {
  font-size: $text-lg;
  color: $color-text-secondary;
  line-height: 1.7;
  
  @include mobile {
    font-size: $text-base;
  }
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $spacing-6;
  max-width: 1000px;
  margin: 0 auto;
  
  @include mobile-and-tablet {
    grid-template-columns: 1fr;
    gap: $spacing-4;
  }
}

.info-card {
  padding: $spacing-8;
  
  @include mobile {
    padding: $spacing-6;
  }
}

.info-title {
  font-size: $text-xl;
  color: $color-highlight;
  margin-bottom: $spacing-4;
  
  @include mobile {
    font-size: $text-lg;
  }
}

.info-list {
  list-style: none;
  
  li {
    color: $color-text-secondary;
    padding: $spacing-2 0;
    border-bottom: 1px solid rgba($color-accent, 0.1);
    
    &:last-child {
      border-bottom: none;
    }
    
    &::before {
      content: '→';
      color: $color-accent;
      margin-right: $spacing-2;
    }
  }
}
</style>

