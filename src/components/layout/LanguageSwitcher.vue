<template>
  <div class="lang" role="group" :aria-label="t('common.language')">
    <button
      v-for="item in locales"
      :key="item.code"
      type="button"
      class="lang-btn"
      :class="{ active: locale === item.code }"
      :title="item.title"
      :aria-pressed="locale === item.code"
      :lang="item.htmlLang"
      @click="setLocale(item.code)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/i18n'

const { locale, locales, setLocale, t } = useI18n()
</script>

<style lang="scss" scoped>
.lang {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 2px;
  background: $paper-sunken;
  border: 1px solid $line;
  border-radius: $radius-full;
  flex-shrink: 0;
}

.lang-btn {
  min-width: 34px;
  min-height: 30px;
  padding: 0 $spacing-2;
  border-radius: $radius-full;
  font-size: $text-xs;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: $color-text-muted;
  background: transparent;

  &:hover {
    color: $ink;
  }

  &.active {
    background: $paper-raised;
    border: 1px solid $line;
    color: $accent-ink;
  }

  // На узких экранах переключатель живёт в панели меню и может быть крупнее
  @media (max-width: #{$breakpoint-lg - 1px}) {
    min-width: 44px;
    min-height: 44px;
    font-size: $text-sm;
  }
}
</style>
