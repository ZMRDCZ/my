<template>
  <div class="resume-page">
    <div class="container">
      <div class="resume-actions no-print">
        <p class="resume-hint">{{ t('resume.hint') }}</p>
        <IndustrialButton variant="primary" @click="print">{{ t('resume.download') }}</IndustrialButton>
      </div>

      <article class="resume">
        <header class="resume-head">
          <h1 class="resume-name">{{ profile.name }}</h1>
          <p class="resume-headline">{{ profile.headline }}</p>

          <ul class="resume-contacts">
            <li>{{ contactInfo.city }}</li>
            <li>{{ contactInfo.phone }}</li>
            <li>{{ contactInfo.email }}</li>
            <li v-for="item in profileLinks" :key="item.name">
              {{ item.name }}: {{ item.handle }}
            </li>
          </ul>
        </header>

        <section class="resume-block">
          <h2 class="resume-block-title">{{ t('resume.about') }}</h2>
          <p v-for="(paragraph, index) in profile.bio" :key="index" class="resume-text">
            {{ paragraph }}
          </p>
        </section>

        <section class="resume-block">
          <h2 class="resume-block-title">{{ t('resume.experience') }}</h2>
          <div v-for="item in experience" :key="item.id" class="resume-entry">
            <div class="resume-entry-head">
              <span class="resume-entry-title">{{ item.role }}</span>
              <span class="resume-entry-period">{{ item.period }}</span>
            </div>
            <p class="resume-entry-org">{{ item.organization }}</p>
            <p v-if="item.unit" class="resume-entry-note">{{ item.unit }}</p>
            <ul v-if="item.highlights" class="resume-list">
              <li v-for="line in item.highlights" :key="line">{{ line }}</li>
            </ul>
          </div>
        </section>

        <section class="resume-block">
          <h2 class="resume-block-title">{{ t('resume.education') }}</h2>
          <div v-for="item in education" :key="item.id" class="resume-entry">
            <div class="resume-entry-head">
              <span class="resume-entry-title">{{ item.level }}</span>
              <span class="resume-entry-period">{{ item.period }}</span>
            </div>
            <p class="resume-entry-org">{{ item.institution }}</p>
            <p class="resume-entry-note">{{ item.program }}</p>
            <p v-if="item.thesis" class="resume-entry-note">{{ t('resume.thesis') }} {{ item.thesis }}</p>
          </div>

          <div class="resume-entry">
            <span class="resume-entry-title">{{ t('resume.educationExtra') }}</span>
            <ul class="resume-list">
              <li v-for="item in additionalEducation" :key="item.title">
                {{ item.title }} — {{ item.org }}
              </li>
            </ul>
          </div>
        </section>

        <section class="resume-block">
          <h2 class="resume-block-title">{{ t('resume.roles') }}</h2>
          <ul class="resume-list">
            <li v-for="item in [...projectRoles, ...mentorship]" :key="item.id">
              <strong>{{ item.role }}</strong> — {{ item.organization }}
              <template v-if="item.period">, {{ item.period }}</template>
            </li>
          </ul>
        </section>

        <section class="resume-block">
          <h2 class="resume-block-title">{{ t('resume.achievements') }}</h2>
          <ul class="resume-list">
            <li v-for="item in keyAchievements" :key="item.id">
              {{ item.year }} — {{ item.title }}
            </li>
          </ul>
        </section>

        <section class="resume-block">
          <h2 class="resume-block-title">{{ t('resume.publications') }}</h2>
          <p class="resume-text">
            {{ worksCount(publicationsCountTotal) }},
            {{ publicationYears[publicationYears.length - 1] }}—{{ publicationYears[0] }}.
            eLibrary (Author ID 1306552), ORCID 0009-0006-4805-3701.
          </p>
        </section>

        <section class="resume-block">
          <h2 class="resume-block-title">{{ t('resume.skills') }}</h2>
          <div v-for="group in skillGroups" :key="group.id" class="resume-skills">
            <span class="resume-skills-title">{{ group.title }}:</span>
            {{ group.skills.join(', ') }}
          </div>
        </section>

        <section class="resume-block">
          <h2 class="resume-block-title">{{ t('resume.languages') }}</h2>
          <p class="resume-text">{{ languages.map((item) => item.name).join(', ') }}</p>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import IndustrialButton from '@/components/ui/IndustrialButton.vue'
import {
  getAdditionalEducation,
  getEducation,
  getExperience,
  getLanguages,
  getMentorship,
  getProfile,
  getProjectRoles,
  getSkillGroups
} from '@/constants/about'
import { getContactInfo, getProfileLinks } from '@/constants/contacts'
import { getCurrentAchievements } from '@/constants/achievements'
import { publicationYears, publicationsCountTotal } from '@/constants/publications'
import { useI18n } from '@/i18n'

const { locale, t, worksCount } = useI18n()

const profile = computed(() => getProfile(locale.value))
const languages = computed(() => getLanguages(locale.value))
const education = computed(() => getEducation(locale.value))
const additionalEducation = computed(() => getAdditionalEducation(locale.value))
const experience = computed(() => getExperience(locale.value))
const projectRoles = computed(() => getProjectRoles(locale.value))
const mentorship = computed(() => getMentorship(locale.value))
const skillGroups = computed(() => getSkillGroups(locale.value))
const contactInfo = computed(() => getContactInfo(locale.value))
const profileLinks = computed(() => getProfileLinks(locale.value, t))

const keyAchievementIds = [
  'aprngk-2026',
  'gazprom-linde-2025',
  'innovatika-2025',
  'gordyukhin-2025',
  'oil-gas-2025',
  'government-scholarship-2025',
  'rostec-vector-2024',
  'politehnika-2024',
  'council-scholarship-2024',
  'rosmolodezh-2024'
]

const keyAchievements = computed(() => {
  const all = getCurrentAchievements(locale.value)
  return keyAchievementIds
    .map((id) => all.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
})

const print = () => window.print()
</script>

<style lang="scss" scoped>
.resume-page {
  padding: $spacing-10 0 $spacing-16;

  @include mobile {
    padding: $spacing-6 0 $spacing-10;
  }
}

.resume-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: $spacing-4;
  margin-bottom: $spacing-6;
}

.resume-hint {
  color: $color-text-muted;
  font-size: $text-sm;
  max-width: 52ch;
}

.resume {
  max-width: 820px;
  margin: 0 auto;
  padding: $spacing-10;
  background: $paper-raised;
  border: 1px solid $line;
  border-radius: $radius-lg;

  @include mobile {
    padding: $spacing-5;
  }
}

.resume-head {
  padding-bottom: $spacing-5;
  border-bottom: 2px solid $ink;
  margin-bottom: $spacing-6;
}

.resume-name {
  font-size: $text-4xl;
  margin-bottom: $spacing-2;

  @include mobile {
    font-size: $text-3xl;
  }
}

.resume-headline {
  color: $accent-ink;
  font-size: $text-lg;
  margin-bottom: $spacing-4;
}

.resume-contacts {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-2 $spacing-5;
  color: $color-text-secondary;
  font-size: $text-sm;
}

.resume-block {
  margin-bottom: $spacing-8;

  &:last-child {
    margin-bottom: 0;
  }
}

.resume-block-title {
  font-size: $text-sm;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: $color-text-muted;
  font-family: $font-secondary;
  font-weight: 700;
  padding-bottom: $spacing-2;
  border-bottom: 1px solid $line;
  margin-bottom: $spacing-4;
}

.resume-text {
  color: $color-text-secondary;
  margin-bottom: $spacing-2;
}

.resume-entry {
  margin-bottom: $spacing-5;

  &:last-child {
    margin-bottom: 0;
  }
}

.resume-entry-head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: $spacing-2;
}

.resume-entry-title {
  font-weight: 700;
}

.resume-entry-period {
  color: $color-text-muted;
  font-size: $text-sm;
}

.resume-entry-org {
  color: $accent-ink;
  font-size: $text-sm;
  font-weight: 600;
}

.resume-entry-note {
  color: $color-text-secondary;
  font-size: $text-sm;
}

.resume-list {
  margin-top: $spacing-2;
  padding-left: $spacing-5;
  color: $color-text-secondary;
  font-size: $text-sm;

  li {
    margin-bottom: $spacing-1;
  }
}

.resume-skills {
  color: $color-text-secondary;
  font-size: $text-sm;
  margin-bottom: $spacing-2;
}

.resume-skills-title {
  color: $ink;
  font-weight: 600;
}

// --- Печать ---
@media print {
  .resume-page {
    padding: 0;
  }

  .resume {
    max-width: none;
    padding: 0;
    border: none;
    border-radius: 0;
    background: #fff;
  }

  .resume-block {
    break-inside: avoid;
    margin-bottom: 16pt;
  }

  .resume-entry {
    break-inside: avoid;
  }
}
</style>
