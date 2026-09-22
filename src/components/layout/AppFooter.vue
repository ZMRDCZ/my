<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-info">
          <p class="footer-title">{{ profile.name }}</p>
          <p class="footer-description">{{ profile.headline }}</p>
          <p class="footer-place">{{ contactInfo.city }} · {{ contactInfo.timezone }}</p>
        </div>

        <nav class="footer-links" :aria-label="t('footer.nav')">
          <h2 class="footer-section-title">{{ t('footer.sections') }}</h2>
          <ul class="footer-nav">
            <li v-for="item in navigationItems" :key="item.path">
              <router-link :to="item.path" class="footer-link">
                {{ t(item.key) }}
              </router-link>
            </li>
            <li>
              <router-link to="/resume" class="footer-link">{{ t('nav.resume') }}</router-link>
            </li>
          </ul>
        </nav>

        <div class="footer-contact">
          <h2 class="footer-section-title">{{ t('footer.contact') }}</h2>
          <ul class="footer-nav">
            <li v-for="item in directContacts" :key="item.name">
              <a
                :href="item.url"
                class="footer-link"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="item.ariaLabel"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-profiles">
          <h2 class="footer-section-title">{{ t('footer.profiles') }}</h2>
          <ul class="footer-nav">
            <li v-for="item in profileLinks" :key="item.name">
              <a
                :href="item.url"
                class="footer-link"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="item.ariaLabel"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-year">{{ currentYear }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { navigationItems } from '@/constants/navigation'
import { getContactInfo, getDirectContacts, getProfileLinks } from '@/constants/contacts'
import { getProfile } from '@/constants/about'
import { useI18n } from '@/i18n'

const { locale, t } = useI18n()

const profile = computed(() => getProfile(locale.value))
const contactInfo = computed(() => getContactInfo(locale.value))
const directContacts = computed(() => getDirectContacts(locale.value, t))
const profileLinks = computed(() => getProfileLinks(locale.value, t))

const currentYear = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped>
.app-footer {
  background: $paper-sunken;
  border-top: 1px solid $line;
  padding: $spacing-12 0 $spacing-6;
  margin-top: auto;

  @include mobile {
    padding: $spacing-8 0 $spacing-4;
  }
}

.footer-content {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: $spacing-8;
  margin-bottom: $spacing-8;

  @include mobile-and-tablet {
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-6;
  }

  @include xs {
    grid-template-columns: 1fr;
    gap: $spacing-5;
  }
}

.footer-info {
  @include mobile-and-tablet {
    grid-column: 1 / -1;
  }
}

.footer-title {
  font-family: $font-primary;
  font-weight: 800;
  font-size: $text-xl;
  color: $ink;
  margin-bottom: $spacing-2;
}

.footer-description {
  color: $color-text-secondary;
  max-width: 40ch;
}

.footer-place {
  margin-top: $spacing-2;
  color: $color-text-muted;
  font-size: $text-sm;
}

.footer-section-title {
  font-size: $text-sm;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: $color-text-muted;
  font-family: $font-secondary;
  font-weight: 600;
  margin-bottom: $spacing-3;
}

.footer-nav {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: $spacing-2;
}

.footer-link {
  color: $color-text-secondary;
  text-decoration: none;
  font-size: $text-sm;
  display: inline-block;
  padding: $spacing-1 0;

  &:hover {
    color: $accent-ink;
  }
}

.footer-bottom {
  padding-top: $spacing-6;
  border-top: 1px solid $line;
}

.footer-year {
  color: $color-text-muted;
  font-size: $text-sm;
}
</style>
