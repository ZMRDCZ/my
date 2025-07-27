<template>
  <header class="app-header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <nav class="navbar">
        <!-- Logo -->
        <NuxtLink to="/" class="logo">
          <span class="logo-text text-gradient">Дмитрий Комаров</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <ul class="nav-menu" :class="{ 'active': isMobileMenuOpen }">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link" @click="closeMobileMenu">
              Главная
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/about" class="nav-link" @click="closeMobileMenu">
              О себе
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/achievements" class="nav-link" @click="closeMobileMenu">
              Достижения
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/projects" class="nav-link" @click="closeMobileMenu">
              Проекты
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/publications" class="nav-link" @click="closeMobileMenu">
              Публикации
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/initiatives" class="nav-link" @click="closeMobileMenu">
              Инициативы
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/gallery" class="nav-link" @click="closeMobileMenu">
              Галерея
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/contacts" class="nav-link" @click="closeMobileMenu">
              Контакты
            </NuxtLink>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <button 
          class="mobile-menu-btn"
          @click="toggleMobileMenu"
          :class="{ 'active': isMobileMenuOpen }"
          aria-label="Открыть меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
    
    <!-- Mobile Menu Overlay -->
    <div 
      v-if="isMobileMenuOpen" 
      class="mobile-menu-overlay"
      @click="closeMobileMenu"
    ></div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  
  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = 'auto'
}

// Close menu on escape key
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

// Close menu on window resize
const handleResize = () => {
  if (window.innerWidth > 640 && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', handleResize)
  document.body.style.overflow = 'auto'
})
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: $z-header;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: $transition-normal;

  &.scrolled {
    background: rgba(0, 0, 0, 0.95);
    @include neon-glow($color-neon-purple, 2px);
  }
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  
  @include mobile {
    height: 70px;
  }
  
  @include xs {
    height: 60px;
  }
}

.logo {
  font-size: $text-2xl;
  font-weight: 700;
  text-decoration: none;
  z-index: $z-header + 1;
  
  @include mobile {
    font-size: $text-xl;
  }
  
  @include xs {
    font-size: $text-lg;
  }
  
  .logo-text {
    font-family: $font-primary;
    transition: $transition-normal;
    
    &:hover {
      @include neon-text($color-neon-cyan);
    }
  }
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: $spacing-6;
  
  @include mobile {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.98);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: $spacing-20;
    transform: translateX(-100%);
    transition: transform $transition-normal;
    z-index: $z-header;
    
    &.active {
      transform: translateX(0);
    }
  }
  
  @include xs {
    gap: $spacing-4;
  }
}

.nav-item {
  position: relative;
}

.nav-link {
  font-family: $font-secondary;
  font-weight: 500;
  color: $color-white;
  text-decoration: none;
  padding: $spacing-2 $spacing-4;
  border-radius: $radius-md;
  transition: $transition-normal;
  position: relative;
  display: block;
  
  // Ensure touch targets are large enough
  min-height: 44px;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, $color-neon-pink, $color-neon-cyan);
    transition: $transition-normal;
    transform: translateX(-50%);
  }
  
  &:hover {
    color: $color-neon-cyan;
    @include neon-text($color-neon-cyan);
    
    &::before {
      width: 100%;
    }
  }
  
  &.router-link-active {
    color: $color-neon-pink;
    
    &::before {
      width: 100%;
      background: $color-neon-pink;
    }
  }
  
  @include mobile {
    font-size: $text-xl;
    padding: $spacing-4 $spacing-6;
    margin-bottom: $spacing-2;
    text-align: center;
    width: 100%;
    justify-content: center;
    
    &::before {
      bottom: 0;
    }
  }
  
  @include xs {
    font-size: $text-lg;
    padding: $spacing-3 $spacing-4;
  }
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: $spacing-2;
  z-index: $z-header + 1;
  min-height: 44px;
  min-width: 44px;
  align-items: center;
  justify-content: center;
  
  @include mobile {
    display: flex;
  }
  
  span {
    width: 25px;
    height: 2px;
    background: $color-white;
    margin: 3px 0;
    transition: $transition-normal;
    transform-origin: center;
    
    @include xs {
      width: 20px;
      height: 2px;
    }
  }
  
  &.active {
    span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
      background: $color-neon-pink;
    }
    
    span:nth-child(2) {
      opacity: 0;
    }
    
    span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
      background: $color-neon-pink;
    }
  }
  
  // Touch device optimizations
  @include touch-device {
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-radius: $radius-md;
    }
  }
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: $z-header - 1;
  
  @include tablet-and-desktop {
    display: none;
  }
}
</style> 