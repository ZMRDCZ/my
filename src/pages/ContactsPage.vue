<template>
  <div class="contacts-page">
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">{{ t('contacts.title') }}</h1>
        <p class="page-subtitle">{{ contactInfo.availability }}</p>
      </div>
    </section>

    <!-- Прямая связь -->
    <section class="section section--tight">
      <div class="container">
        <div class="direct-grid">
          <a
            v-for="item in directContacts"
            :key="item.name"
            :href="item.url"
            class="direct-card"
            :aria-label="item.ariaLabel"
            :target="item.url.startsWith('mailto:') ? undefined : '_blank'"
            rel="noopener noreferrer"
          >
            <span class="direct-icon" v-html="icons[item.icon]" aria-hidden="true"></span>
            <span class="direct-body">
              <span class="direct-action">{{ actionLabel(item.icon) }}</span>
              <span class="direct-handle">{{ item.handle }}</span>
            </span>
            <span class="direct-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Реквизиты -->
    <section class="section">
      <div class="container">
        <div class="info-grid">
          <div class="info-card card">
            <h2 class="info-title">{{ t('contacts.mail') }}</h2>
            <a :href="`mailto:${contactInfo.email}`" class="info-value">{{ contactInfo.email }}</a>
            <a
              v-if="contactInfo.emailAlt"
              :href="`mailto:${contactInfo.emailAlt}`"
              class="info-value info-value--secondary"
            >
              {{ contactInfo.emailAlt }}
            </a>
          </div>

          <div class="info-card card">
            <h2 class="info-title">{{ t('contacts.phone') }}</h2>
            <a :href="`tel:${contactInfo.phoneHref}`" class="info-value">{{ contactInfo.phone }}</a>
            <p class="info-note">{{ t('contacts.phoneNote') }}</p>
          </div>

          <div class="info-card card">
            <h2 class="info-title">{{ t('contacts.where') }}</h2>
            <p class="info-value">{{ contactInfo.city }}</p>
            <p class="info-note">{{ contactInfo.timezone }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Профили -->
    <section class="section section--sunken">
      <div class="container">
        <h2 class="section-title">{{ t('contacts.profiles') }}</h2>
        <div class="profiles-grid">
          <a
            v-for="item in profileLinks"
            :key="item.name"
            :href="item.url"
            class="profile-card"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="item.ariaLabel"
          >
            <span class="profile-icon" v-html="icons[item.icon]" aria-hidden="true"></span>
            <span class="profile-body">
              <span class="profile-name">{{ item.name }}</span>
              <span class="profile-handle">{{ item.handle }}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  directContactActionKeys,
  getContactInfo,
  getDirectContacts,
  getProfileLinks
} from '@/constants/contacts'
import { useI18n } from '@/i18n'

const { locale, t } = useI18n()

const contactInfo = computed(() => getContactInfo(locale.value))
const directContacts = computed(() => getDirectContacts(locale.value, t))
const profileLinks = computed(() => getProfileLinks(locale.value, t))

/** Подпись действия подбирается по иконке канала. */
const actionLabel = (icon: string): string => t(directContactActionKeys[icon] ?? 'contacts.profiles')

// Простые контурные иконки, чтобы не тянуть библиотеку
const icons: Record<string, string> = {
  telegram:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 4 3 11l6 2.4L11.5 20l3-4.5L21 4Z"/><path d="M9 13.4 21 4l-8.5 11.5"/></svg>',
  vk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7c.8 6.5 4.2 10 9 10h1.5v-3.4c1.9.4 3.4 1.8 4.1 3.4H21c-.8-2.4-2.4-4.1-4.4-4.9 1.8-.9 3.2-2.6 3.9-5.1h-2.6c-.7 2.1-2.1 3.6-4.4 4.1V7h-2.6v5.5C8.7 11.6 7.2 9.5 6.6 7H3Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/></svg>',
  github:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4 1.4-4-2.2-6-2.8m12 5v-3.6a3.1 3.1 0 0 0-.9-2.4c2.9-.3 6-1.4 6-6.4a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12.4 12.4 0 0 0-6.4 0C6.1 1.7 5 2 5 2a4.6 4.6 0 0 0-.1 3.5A5 5 0 0 0 3.5 9c0 5 3.1 6.1 6 6.4a3.1 3.1 0 0 0-.9 2.4V21"/></svg>',
  science:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/><path d="M9 7h7"/><path d="M9 11h5"/></svg>',
  orcid:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 8.5v7"/><path d="M13 15.5v-7h1.5a3.5 3.5 0 0 1 0 7H13Z"/></svg>'
}
</script>

<style lang="scss" scoped>
.section--tight {
  padding: $spacing-8 0;
}

.section--sunken {
  background: $paper-sunken;
  border-top: 1px solid $line;
}

.section-title {
  font-size: $text-2xl;
  margin-bottom: $spacing-6;
}

// --- Прямая связь ---
.direct-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: $spacing-4;
}

.direct-card {
  display: flex;
  align-items: center;
  gap: $spacing-4;
  padding: $spacing-5;
  min-height: 88px;
  background: $paper-raised;
  border: 1px solid $line;
  border-radius: $radius-lg;
  text-decoration: none;
  color: $ink;
  box-shadow: $shadow-sm;
  transition: border-color $transition-normal, box-shadow $transition-normal, transform $transition-normal;

  &:hover {
    border-color: rgba($accent, 0.5);
    box-shadow: $shadow-lg;
    transform: translateY(-2px);
    color: $ink;
  }

  @include mobile {
    padding: $spacing-4;
    gap: $spacing-3;
    min-height: 72px;
  }
}

.direct-icon {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: $radius-md;
  background: $accent-soft;
  color: $accent-ink;

  :deep(svg) {
    width: 22px;
    height: 22px;
  }
}

.direct-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.direct-action {
  font-weight: 600;
  font-size: $text-base;
}

.direct-handle {
  color: $color-text-muted;
  font-size: $text-sm;
  overflow-wrap: anywhere;
}

.direct-arrow {
  margin-left: auto;
  color: $color-text-muted;
  flex-shrink: 0;
}

// --- Реквизиты ---
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: $spacing-4;
}

.info-title {
  font-size: $text-sm;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: $color-text-muted;
  margin-bottom: $spacing-3;
  font-family: $font-secondary;
  font-weight: 600;
}

.info-value {
  display: block;
  font-size: $text-base;
  font-weight: 500;
  color: $ink;
  text-decoration: none;
  overflow-wrap: anywhere;

  &:hover {
    color: $accent-ink;
  }

  &--secondary {
    margin-top: $spacing-2;
    color: $color-text-secondary;
    font-weight: 400;
  }
}

.info-note {
  margin-top: $spacing-2;
  color: $color-text-muted;
  font-size: $text-sm;
}

// --- Профили ---
.profiles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: $spacing-4;
}

.profile-card {
  display: flex;
  align-items: center;
  gap: $spacing-3;
  padding: $spacing-4;
  background: $paper-raised;
  border: 1px solid $line;
  border-radius: $radius-md;
  text-decoration: none;
  color: $ink;
  min-height: 64px;

  &:hover {
    border-color: rgba($accent, 0.5);
    color: $ink;
  }
}

.profile-icon {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  color: $accent-ink;
  flex-shrink: 0;

  :deep(svg) {
    width: 20px;
    height: 20px;
  }
}

.profile-body {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.profile-name {
  font-weight: 600;
  font-size: $text-sm;
}

.profile-handle {
  color: $color-text-muted;
  font-size: $text-sm;
  overflow-wrap: anywhere;
}
</style>
