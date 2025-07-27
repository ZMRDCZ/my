<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <!-- Contact Info -->
        <div class="footer-section">
          <h3 class="footer-title">Контакты</h3>
          <div class="contact-info">
            <a href="mailto:dmitry@example.com" class="contact-link">
              <i class="icon-email">✉</i>
              <span class="contact-text">dmitry@example.com</span>
            </a>
            <a href="tel:+79999999999" class="contact-link">
              <i class="icon-phone">📞</i>
              <span class="contact-text">+7 (999) 999-99-99</span>
            </a>
          </div>
        </div>

        <!-- Social Links -->
        <div class="footer-section">
          <h3 class="footer-title">Социальные сети</h3>
          <div class="social-links">
            <a href="#" class="social-link telegram" target="_blank" rel="noopener">
              <span class="social-icon">📱</span>
              <span class="social-text">Telegram</span>
            </a>
            <a href="#" class="social-link vk" target="_blank" rel="noopener">
              <span class="social-icon">🔗</span>
              <span class="social-text">VKontakte</span>
            </a>
            <a href="#" class="social-link linkedin" target="_blank" rel="noopener">
              <span class="social-icon">💼</span>
              <span class="social-text">LinkedIn</span>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h3 class="footer-title">Быстрые ссылки</h3>
          <nav class="quick-links">
            <NuxtLink to="/about" class="quick-link">О себе</NuxtLink>
            <NuxtLink to="/projects" class="quick-link">Проекты</NuxtLink>
            <NuxtLink to="/achievements" class="quick-link">Достижения</NuxtLink>
            <NuxtLink to="/contacts" class="quick-link">Контакты</NuxtLink>
          </nav>
        </div>
      </div>

      <!-- Copyright -->
      <div class="footer-bottom">
        <div class="copyright">
          <p>&copy; {{ currentYear }} Дмитрий Комаров. Все права защищены.</p>
        </div>
        <div class="made-with">
          <p>Сделано с <span class="heart">💜</span> и Vue.js</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.app-footer {
  background: linear-gradient(135deg, rgba(15, 15, 15, 0.95), rgba(30, 30, 30, 0.95));
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: auto;
  backdrop-filter: blur(10px);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-8;
  padding: $spacing-12 0;
  
  @include mobile {
    grid-template-columns: 1fr;
    gap: $spacing-6;
    padding: $spacing-8 0;
  }
  
  @include xs {
    gap: $spacing-4;
    padding: $spacing-6 0;
  }
}

.footer-section {
  .footer-title {
    color: $color-neon-cyan;
    font-size: $text-lg;
    margin-bottom: $spacing-4;
    font-family: $font-primary;
    @include neon-text($color-neon-cyan);
    
    @include mobile {
      font-size: $text-base;
      margin-bottom: $spacing-3;
    }
    
    @include xs {
      font-size: $text-sm;
      margin-bottom: $spacing-2;
    }
  }
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: $spacing-3;
  
  @include mobile {
    gap: $spacing-2;
  }
}

.contact-link {
  display: flex;
  align-items: center;
  gap: $spacing-3;
  color: $color-gray-300;
  text-decoration: none;
  transition: $transition-normal;
  min-height: 44px;
  
  @include mobile {
    gap: $spacing-2;
    min-height: 40px;
  }
  
  @include xs {
    gap: $spacing-2;
    min-height: 36px;
  }
  
  &:hover {
    color: $color-neon-pink;
    @include neon-text($color-neon-pink);
  }
  
  i {
    font-size: $text-lg;
    
    @include mobile {
      font-size: $text-base;
    }
    
    @include xs {
      font-size: $text-sm;
    }
  }
  
  .contact-text {
    @include mobile {
      font-size: $text-sm;
    }
    
    @include xs {
      font-size: $text-xs;
    }
  }
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: $spacing-3;
  
  @include mobile {
    gap: $spacing-2;
  }
}

.social-link {
  display: flex;
  align-items: center;
  gap: $spacing-3;
  color: $color-gray-300;
  text-decoration: none;
  transition: $transition-normal;
  padding: $spacing-2;
  border-radius: $radius-md;
  min-height: 44px;
  
  @include mobile {
    gap: $spacing-2;
    padding: $spacing-2;
    min-height: 40px;
  }
  
  @include xs {
    gap: $spacing-2;
    padding: $spacing-1;
    min-height: 36px;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(5px);
  }
  
  &.telegram:hover {
    color: #0088cc;
    @include neon-text(#0088cc);
  }
  
  &.vk:hover {
    color: #4c75a3;
    @include neon-text(#4c75a3);
  }
  
  &.linkedin:hover {
    color: #0077b5;
    @include neon-text(#0077b5);
  }
  
  .social-icon {
    font-size: $text-lg;
    
    @include mobile {
      font-size: $text-base;
    }
    
    @include xs {
      font-size: $text-sm;
    }
  }
  
  .social-text {
    @include mobile {
      font-size: $text-sm;
    }
    
    @include xs {
      font-size: $text-xs;
    }
  }
}

.quick-links {
  display: flex;
  flex-direction: column;
  gap: $spacing-3;
  
  @include mobile {
    gap: $spacing-2;
  }
}

.quick-link {
  color: $color-gray-300;
  text-decoration: none;
  transition: $transition-normal;
  padding: $spacing-2 0;
  border-bottom: 1px solid transparent;
  min-height: 44px;
  display: flex;
  align-items: center;
  
  @include mobile {
    padding: $spacing-1 0;
    min-height: 40px;
  }
  
  @include xs {
    padding: 0.5rem 0;
    min-height: 36px;
  }
  
  &:hover {
    color: $color-neon-purple;
    border-bottom-color: $color-neon-purple;
    @include neon-text($color-neon-purple);
  }
  
  @include mobile {
    font-size: $text-sm;
  }
  
  @include xs {
    font-size: $text-xs;
  }
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $spacing-6 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @include mobile {
    flex-direction: column;
    gap: $spacing-4;
    text-align: center;
    padding: $spacing-4 0;
  }
  
  @include xs {
    gap: $spacing-3;
    padding: $spacing-3 0;
  }
  
  p {
    margin: 0;
    color: $color-gray-400;
    font-size: $text-sm;
    
    @include mobile {
      font-size: $text-xs;
    }
    
    @include xs {
      font-size: 0.7rem;
    }
  }
}

.heart {
  color: $color-neon-pink;
  animation: pulse 2s ease-in-out infinite;
}
</style> 