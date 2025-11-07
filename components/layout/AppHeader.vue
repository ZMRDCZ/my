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
          <li 
            v-for="item in navigationItems" 
            :key="item.path" 
            class="nav-item"
          >
            <NuxtLink 
              :to="item.path" 
              class="nav-link" 
              @click="closeMobileMenu"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <button 
          class="mobile-menu-btn"
          @click="toggleMobileMenu"
          :class="{ 'active': isMobileMenuOpen }"
          :aria-label="isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'"
          :aria-expanded="isMobileMenuOpen"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
    
    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div 
        v-if="isMobileMenuOpen" 
        class="mobile-menu-overlay"
        @click="closeMobileMenu"
        aria-hidden="true"
      ></div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { navigationItems } from '~/constants/navigation'
import { useScroll } from '~/composables/useScroll'
import { useMobileMenu } from '~/composables/useMobileMenu'

const { isScrolled } = useScroll(50)
const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu()
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

// Fade transition for overlay
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 