<template>
  <header class="app-header" :class="{ scrolled: isScrolled }">
    <div class="container">
      <nav class="navbar">
        <router-link to="/" class="logo" @click="closeMobileMenu">
          <span class="logo-text">{{ profile.name }}</span>
        </router-link>

        <!-- Меню: на широком экране в одну строку, ниже 1024px — панель -->
        <ul class="nav-menu" :class="{ active: isMobileMenuOpen }">
          <li v-for="item in navigationItems" :key="item.path" class="nav-item">
            <router-link :to="item.path" class="nav-link" @click="closeMobileMenu">
              {{ t(item.key) }}
            </router-link>
          </li>

          <li class="nav-item nav-item--lang">
            <LanguageSwitcher />
          </li>
        </ul>

        <div class="header-lang">
          <LanguageSwitcher />
        </div>

        <button
          class="mobile-menu-btn"
          type="button"
          :class="{ active: isMobileMenuOpen }"
          :aria-label="isMobileMenuOpen ? t('common.closeMenu') : t('common.openMenu')"
          :aria-expanded="isMobileMenuOpen"
          @click="toggleMobileMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>

    <Transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="mobile-menu-overlay"
        aria-hidden="true"
        @click="closeMobileMenu"
      ></div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import { navigationItems } from '@/constants/navigation'
import { getProfile } from '@/constants/about'
import { useScroll } from '@/composables/useScroll'
import { useMobileMenu } from '@/composables/useMobileMenu'
import { useI18n } from '@/i18n'

const { locale, t } = useI18n()
const profile = computed(() => getProfile(locale.value))

const { isScrolled } = useScroll(50)
const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu()
</script>

<style lang="scss" scoped>
// Порог переключения на бургер — планшет и ниже
@mixin compact {
  @media (max-width: #{$breakpoint-lg - 1px}) {
    @content;
  }
}

@mixin wide {
  @media (min-width: $breakpoint-lg) {
    @content;
  }
}

.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: $z-header;
  backdrop-filter: blur(12px);
  background: rgba($paper, 0.88);
  border-bottom: 1px solid $line;
  transition: box-shadow $transition-normal, background $transition-normal;

  &.scrolled {
    background: rgba($paper, 0.97);
    box-shadow: $shadow-sm;
  }
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $spacing-3;
  height: 72px;

  @include mobile {
    height: 60px;
  }
}

.logo {
  flex-shrink: 0;
  text-decoration: none;
  z-index: $z-header + 1;

  .logo-text {
    font-family: $font-primary;
    font-weight: 800;
    font-size: $text-xl;
    color: $ink;
    white-space: nowrap;
    transition: color $transition-normal;

    @media (max-width: #{$breakpoint-xl - 1px}) {
      font-size: $text-lg;
    }

    @include xs {
      font-size: $text-base;
    }
  }

  &:hover .logo-text {
    color: $accent-ink;
  }
}

.nav-menu {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 2px;
  flex-wrap: nowrap;

  @include compact {
    position: fixed;
    inset: 0 0 0 auto;
    width: min(320px, 82vw);
    height: 100dvh;
    background: $paper-raised;
    border-left: 1px solid $line;
    box-shadow: $shadow-xl;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 0;
    padding: calc(72px + #{$spacing-4}) $spacing-4 $spacing-8;
    overflow-y: auto;
    transform: translateX(100%);
    transition: transform $transition-normal;
    z-index: $z-header;

    &.active {
      transform: translateX(0);
    }
  }
}

// Переключатель языка внутри панели — только на узких экранах
.nav-item--lang {
  display: none;

  @include compact {
    display: flex;
    justify-content: center;
    margin-top: $spacing-6;
    padding-top: $spacing-6;
    border-top: 1px solid $line;
  }
}

// ...и рядом с меню — только на широких
.header-lang {
  display: none;

  @include wide {
    display: block;
  }
}

.nav-link {
  display: flex;
  align-items: center;
  font-family: $font-secondary;
  font-weight: 500;
  font-size: $text-sm;
  color: $color-text-secondary;
  text-decoration: none;
  white-space: nowrap;
  padding: $spacing-2 $spacing-3;
  border-radius: $radius-md;
  transition: color $transition-normal, background $transition-normal;

  @media (min-width: $breakpoint-lg) and (max-width: #{$breakpoint-xl - 1px}) {
    padding: $spacing-2 6px;
  }

  &:hover {
    color: $ink;
    background: $paper-sunken;
  }

  &.router-link-active {
    color: $accent-ink;
    background: $accent-soft;
  }

  @include compact {
    font-size: $text-lg;
    padding: $spacing-3 $spacing-4;
    min-height: 48px;
    border-radius: $radius-md;
  }
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  min-width: 44px;
  min-height: 44px;
  padding: $spacing-2;
  border-radius: $radius-md;
  z-index: $z-header + 1;

  @include compact {
    display: flex;
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    background: $ink;
    border-radius: 2px;
    transition: transform $transition-normal, opacity $transition-fast;
  }

  &.active {
    span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  }
}

.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  background: $bg-overlay;
  z-index: $z-header - 1;

  @include wide {
    display: none;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
