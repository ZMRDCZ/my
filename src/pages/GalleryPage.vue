<template>
  <div class="gallery-page">
    <section class="page-header section">
      <div class="container">
        <h1 class="page-title text-gradient">Галерея</h1>
        <p class="page-description">
          Фотографии с мероприятий, конференций и проектной деятельности
        </p>
      </div>
    </section>

    <section class="gallery-section section">
      <div class="container">
        <div class="placeholder-card card">
          <div class="placeholder-icon">📸</div>
          <h2 class="placeholder-title">Раздел в разработке</h2>
          <p class="placeholder-text">
            Фотографии с мероприятий, конференций и проектной деятельности будут 
            добавлены после предоставления материалов заказчиком. Здесь будут 
            представлены яркие моменты из жизни проектов и инициатив.
          </p>
        </div>

        <div class="gallery-preview">
          <div class="preview-card card">
            <div class="preview-icon">🎯</div>
            <h3 class="preview-title">Мероприятия</h3>
            <p class="preview-text">Фото с организованных событий</p>
          </div>

          <div class="preview-card card">
            <div class="preview-icon">🏆</div>
            <h3 class="preview-title">Награждения</h3>
            <p class="preview-text">Церемонии вручения наград</p>
          </div>

          <div class="preview-card card">
            <div class="preview-icon">🤝</div>
            <h3 class="preview-title">Встречи</h3>
            <p class="preview-text">Встречи с партнёрами</p>
          </div>

          <div class="preview-card card">
            <div class="preview-icon">📚</div>
            <h3 class="preview-title">Конференции</h3>
            <p class="preview-text">Выступления на конференциях</p>
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

.gallery-preview {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $spacing-6;
  max-width: 1200px;
  margin: 0 auto;
  
  @include mobile-and-tablet {
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-4;
  }
  
  @include xs {
    grid-template-columns: 1fr;
  }
}

.preview-card {
  text-align: center;
  padding: $spacing-8;
  
  @include mobile {
    padding: $spacing-6;
  }
}

.preview-icon {
  font-size: 3rem;
  margin-bottom: $spacing-3;
  
  @include mobile {
    font-size: 2.5rem;
    margin-bottom: $spacing-2;
  }
}

.preview-title {
  font-size: $text-xl;
  color: $color-highlight;
  margin-bottom: $spacing-2;
  
  @include mobile {
    font-size: $text-lg;
  }
}

.preview-text {
  color: $color-text-muted;
  font-size: $text-sm;
}
</style>

