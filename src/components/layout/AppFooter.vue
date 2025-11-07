<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-info">
          <h3 class="footer-title text-gradient">Дмитрий Комаров</h3>
          <p class="footer-description">
            Инженер, исследователь и организатор инклюзивных инициатив
          </p>
        </div>
        
        <div class="footer-links">
          <h4 class="footer-section-title">Навигация</h4>
          <ul class="footer-nav">
            <li v-for="item in navigationItems" :key="item.path">
              <router-link :to="item.path" class="footer-link">
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <div class="footer-contact">
          <h4 class="footer-section-title">Контакты</h4>
          <p class="footer-text">
            Свяжитесь со мной для сотрудничества
          </p>
          <router-link to="/contacts" class="footer-cta">
            Написать мне
          </router-link>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} Дмитрий Комаров. Все права защищены.
        </p>
        <p class="powered-by">
          Разработано с использованием Vue 3 + Vite
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { navigationItems } from '@/constants/navigation'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped>
.app-footer {
  background: $bg-secondary;
  border-top: 1px solid rgba($color-accent, 0.2);
  padding: $spacing-12 0 $spacing-6;
  margin-top: auto;
  
  @include mobile {
    padding: $spacing-8 0 $spacing-4;
  }
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing-8;
  margin-bottom: $spacing-8;
  
  @include mobile-and-tablet {
    grid-template-columns: 1fr;
    gap: $spacing-6;
    text-align: center;
  }
}

.footer-title {
  font-size: $text-2xl;
  margin-bottom: $spacing-3;
  font-family: $font-primary;
  
  @include mobile {
    font-size: $text-xl;
  }
}

.footer-description {
  color: $color-text-secondary;
  line-height: 1.6;
}

.footer-section-title {
  font-size: $text-lg;
  color: $color-accent;
  margin-bottom: $spacing-4;
  font-family: $font-primary;
}

.footer-nav {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: $spacing-2;
  
  @include mobile-and-tablet {
    align-items: center;
  }
}

.footer-link {
  color: $color-text-secondary;
  text-decoration: none;
  transition: $transition-normal;
  display: inline-block;
  padding: $spacing-1 0;
  
  &:hover {
    color: $color-industrial-cyan;
    transform: translateX(5px);
    
    @include mobile-and-tablet {
      transform: none;
    }
  }
}

.footer-text {
  color: $color-text-secondary;
  margin-bottom: $spacing-4;
  line-height: 1.6;
}

.footer-cta {
  display: inline-block;
  padding: $spacing-3 $spacing-6;
  background: $gradient-industrial;
  color: $color-white;
  text-decoration: none;
  border-radius: $radius-md;
  font-weight: 600;
  transition: $transition-normal;
  
  &:hover {
    transform: translateY(-2px);
    @include industrial-glow($color-accent, 5px);
  }
}

.footer-bottom {
  padding-top: $spacing-6;
  border-top: 1px solid rgba($color-accent, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @include mobile {
    flex-direction: column;
    gap: $spacing-2;
    text-align: center;
  }
}

.copyright,
.powered-by {
  color: $color-text-muted;
  font-size: $text-sm;
}
</style>

