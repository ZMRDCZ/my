<template>
  <div class="home-page">
    <!-- Первый экран -->
    <section class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-text">
            <p class="hero-eyebrow">{{ profile.location }}</p>
            <h1 class="hero-title">{{ profile.name }}</h1>
            <p class="hero-headline">{{ profile.headline }}</p>
            <p class="hero-summary">{{ profile.summary }}</p>

            <div class="hero-actions">
              <IndustrialButton to="/projects" variant="primary">{{ t('home.ctaProjects') }}</IndustrialButton>
              <IndustrialButton to="/publications" variant="secondary">{{ t('home.ctaPublications') }}</IndustrialButton>
              <IndustrialButton to="/contacts" variant="tertiary">{{ t('home.ctaContact') }}</IndustrialButton>
            </div>
          </div>

          <figure class="hero-photo">
            <img
              :src="assetUrl(heroPortrait)"
              :alt="`${profile.name} — ${t('home.portraitAlt')}`"
              width="640"
              height="853"
            />
          </figure>
        </div>
      </div>
    </section>

    <!-- Чем занимаюсь -->
    <section class="section section--sunken">
      <div class="container">
        <h2 class="section-title">{{ t('home.focus') }}</h2>

        <div class="focus-grid">
          <article v-for="item in focusAreas" :key="item.title" class="focus-card">
            <span class="focus-icon" aria-hidden="true">
              <AppIcon :name="item.icon" />
            </span>
            <h3 class="focus-title">{{ item.title }}</h3>
            <p class="focus-text">{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Сейчас -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">{{ t('home.now') }}</h2>

        <ul class="now-list">
          <li v-for="item in currentRoles" :key="item.id" class="now-item">
            <span class="now-role">{{ item.role }}</span>
            <span class="now-org">{{ item.organization }}</span>
            <span v-if="item.unit" class="now-unit">{{ item.unit }}</span>
          </li>
          <li class="now-item">
            <span class="now-role">{{ t('home.master') }}</span>
            <span class="now-org">{{ masterProgram?.institution }}</span>
            <span class="now-unit">{{ masterProgram?.program }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Навигация -->
    <section class="section section--sunken">
      <div class="container">
        <h2 class="section-title">{{ t('home.sections') }}</h2>

        <div class="nav-grid">
          <router-link v-for="card in navCards" :key="card.to" :to="card.to" class="nav-card">
            <span class="nav-card-title">{{ card.title }}</span>
            <span class="nav-card-text">{{ card.text }}</span>
            <span class="nav-card-arrow" aria-hidden="true">→</span>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import IndustrialButton from '@/components/ui/IndustrialButton.vue'
import { getEducation, getExperience, getProfile } from '@/constants/about'
import { assetUrl, heroPortrait } from '@/constants/gallery'
import { type L, pick, useI18n } from '@/i18n'

const { locale, t } = useI18n()

const profile = computed(() => getProfile(locale.value))
const currentRoles = computed(() => getExperience(locale.value).filter((item) => item.current))
const masterProgram = computed(() =>
  getEducation(locale.value).find((item) => item.id === 'master')
)

const focusData: { icon: string; title: L; text: L }[] = [
  {
    icon: 'puzzle',
    title: {
      ru: 'Онтологии и знания',
      en: 'Ontologies and knowledge',
      cs: 'Ontologie a znalosti',
      de: 'Ontologien und Wissen'
    },
    text: {
      ru: 'Формализация нормативных требований и инженерных данных, версионирование моделей, ИИ в инженерных контурах.',
      en: 'Formalising regulatory requirements and engineering data, versioning models, AI in engineering workflows.',
      cs: 'Formalizace normativních požadavků a inženýrských dat, verzování modelů, AI v inženýrských procesech.',
      de: 'Formalisierung von Normanforderungen und Engineering-Daten, Versionierung von Modellen, KI in Engineering-Prozessen.'
    }
  },
  {
    icon: 'factory',
    title: {
      ru: 'Цифровизация эксплуатации',
      en: 'Digitalisation of operation',
      cs: 'Digitalizace provozu',
      de: 'Digitalisierung des Betriebs'
    },
    text: {
      ru: 'Техническое обслуживание и ремонт оборудования ТЭК: от описания объектов до предиктивных подходов.',
      en: 'Maintenance and repair of energy equipment: from describing assets to predictive approaches.',
      cs: 'Údržba a opravy energetických zařízení: od popisu objektů po prediktivní přístupy.',
      de: 'Wartung und Instandhaltung von Energieanlagen: von der Anlagenbeschreibung bis zu vorausschauenden Verfahren.'
    }
  },
  {
    icon: 'robot',
    title: { ru: 'Робототехника', en: 'Robotics', cs: 'Robotika', de: 'Robotik' },
    text: {
      ru: 'Проектирование и расчёт мобильных робототехнических комплексов, имитационное моделирование.',
      en: 'Design and analysis of mobile robotic systems, simulation modelling.',
      cs: 'Návrh a výpočty mobilních robotických komplexů, simulační modelování.',
      de: 'Entwurf und Berechnung mobiler Robotersysteme, Simulationsmodellierung.'
    }
  },
  {
    icon: 'hand',
    title: {
      ru: 'Доступная среда',
      en: 'Accessibility',
      cs: 'Přístupnost',
      de: 'Barrierefreiheit'
    },
    text: {
      ru: 'Перевод технических лекций на РЖЯ, адаптация интерфейсов и информационных материалов.',
      en: 'Interpreting technical lectures into Russian Sign Language, adapting interfaces and materials.',
      cs: 'Tlumočení technických přednášek do ruského znakového jazyka, úpravy rozhraní a materiálů.',
      de: 'Dolmetschen technischer Vorlesungen in Gebärdensprache, Anpassung von Oberflächen und Materialien.'
    }
  }
]

const focusAreas = computed(() =>
  focusData.map((item) => ({
    icon: item.icon,
    title: pick(item.title, locale.value),
    text: pick(item.text, locale.value)
  }))
)

const navData: { to: string; titleKey: string; text: L }[] = [
  {
    to: '/about',
    titleKey: 'nav.about',
    text: {
      ru: 'Образование, опыт, навыки и языки',
      en: 'Education, experience, skills and languages',
      cs: 'Vzdělání, praxe, dovednosti a jazyky',
      de: 'Ausbildung, Erfahrung, Fähigkeiten und Sprachen'
    }
  },
  {
    to: '/achievements',
    titleKey: 'nav.achievements',
    text: {
      ru: 'Конкурсы, стипендии и конференции по годам',
      en: 'Competitions, scholarships and conferences by year',
      cs: 'Soutěže, stipendia a konference podle let',
      de: 'Wettbewerbe, Stipendien und Konferenzen nach Jahren'
    }
  },
  {
    to: '/projects',
    titleKey: 'nav.projects',
    text: {
      ru: 'Инженерные, научные и веб-проекты',
      en: 'Engineering, research and web projects',
      cs: 'Inženýrské, vědecké a webové projekty',
      de: 'Technik-, Forschungs- und Webprojekte'
    }
  },
  {
    to: '/publications',
    titleKey: 'nav.publications',
    text: {
      ru: 'Статьи и доклады, профили eLibrary и ORCID',
      en: 'Papers and talks, eLibrary and ORCID profiles',
      cs: 'Články a příspěvky, profily eLibrary a ORCID',
      de: 'Aufsätze und Vorträge, eLibrary- und ORCID-Profile'
    }
  },
  {
    to: '/initiatives',
    titleKey: 'nav.initiatives',
    text: {
      ru: 'Инклюзивные программы и лекции на РЖЯ',
      en: 'Inclusive programmes and sign language lectures',
      cs: 'Inkluzivní programy a přednášky ve znakovém jazyce',
      de: 'Inklusive Programme und Vorlesungen in Gebärdensprache'
    }
  },
  {
    to: '/gallery',
    titleKey: 'nav.gallery',
    text: {
      ru: 'Фотографии с событий и проектов',
      en: 'Photos from events and projects',
      cs: 'Fotografie z akcí a projektů',
      de: 'Fotos von Veranstaltungen und Projekten'
    }
  }
]

const navCards = computed(() =>
  navData.map((item) => ({
    to: item.to,
    title: t(item.titleKey),
    text: pick(item.text, locale.value)
  }))
)
</script>

<style lang="scss" scoped>
.section--sunken {
  background: $paper-sunken;
  border-block: 1px solid $line;
}

.section-title {
  font-size: $text-2xl;
  margin-bottom: $spacing-6;

  @include mobile {
    font-size: $text-xl;
  }
}

// --- Первый экран ---
.hero {
  padding: $spacing-16 0;

  @include mobile {
    padding: $spacing-8 0 $spacing-10;
  }
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: $spacing-12;
  align-items: center;

  @include mobile-and-tablet {
    grid-template-columns: 1fr;
    gap: $spacing-8;
  }
}

.hero-eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: $text-xs;
  color: $color-text-muted;
  margin-bottom: $spacing-3;
}

.hero-title {
  font-size: $text-6xl;
  line-height: 1.05;
  margin-bottom: $spacing-4;

  @media (max-width: #{$breakpoint-lg - 1px}) {
    font-size: $text-5xl;
  }

  @include mobile {
    font-size: $text-4xl;
  }
}

.hero-headline {
  font-family: $font-primary;
  font-size: $text-2xl;
  color: $accent-ink;
  margin-bottom: $spacing-4;

  @include mobile {
    font-size: $text-xl;
  }
}

.hero-summary {
  font-size: $text-lg;
  color: $color-text-secondary;
  max-width: 58ch;
  margin-bottom: $spacing-8;

  @include mobile {
    font-size: $text-base;
    margin-bottom: $spacing-6;
  }
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-3;
}

.hero-photo {
  position: relative;

  img {
    width: 100%;
    max-width: 420px;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    object-position: center center;
    border-radius: $radius-xl;
    border: 1px solid $line;
    box-shadow: $shadow-lg;
  }

  @include mobile-and-tablet {
    order: -1;

    img {
      max-width: 280px;
    }
  }
}

// --- Направления ---
.focus-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: $spacing-4;
}

.focus-card {
  padding: $spacing-5;
  background: $paper-raised;
  border: 1px solid $line;
  border-radius: $radius-lg;
}

.focus-icon {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  color: $accent-ink;
  background: $paper-sunken;
  border-radius: $radius-md;
  margin-bottom: $spacing-3;
}

.focus-title {
  font-size: $text-lg;
  margin-bottom: $spacing-2;
}

.focus-text {
  color: $color-text-secondary;
  font-size: $text-sm;
}

// --- Сейчас ---
.now-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: $spacing-5;
}

.now-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-left: $spacing-4;
  border-left: 2px solid rgba($accent, 0.4);
}

.now-role {
  font-weight: 600;
}

.now-org {
  color: $accent-ink;
  font-size: $text-sm;
}

.now-unit {
  color: $color-text-muted;
  font-size: $text-sm;
}

// --- Разделы ---
.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: $spacing-3;
}

.nav-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: $spacing-1;
  padding: $spacing-5 $spacing-10 $spacing-5 $spacing-5;
  background: $paper-raised;
  border: 1px solid $line;
  border-radius: $radius-lg;
  text-decoration: none;
  transition: border-color $transition-normal, box-shadow $transition-normal, transform $transition-normal;

  &:hover {
    border-color: rgba($accent, 0.5);
    box-shadow: $shadow-md;
    transform: translateY(-2px);
  }
}

.nav-card-title {
  font-family: $font-primary;
  font-weight: 700;
  font-size: $text-lg;
  color: $ink;
}

.nav-card-text {
  color: $color-text-secondary;
  font-size: $text-sm;
}

.nav-card-arrow {
  position: absolute;
  top: $spacing-5;
  right: $spacing-5;
  color: $color-text-muted;
}
</style>
