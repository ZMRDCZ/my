<template>
  <div class="about-page">
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">{{ t('about.title') }}</h1>
        <p class="page-subtitle">{{ profile.headline }}</p>
      </div>
    </section>

    <!-- Краткий рассказ -->
    <section class="section section--tight">
      <div class="container">
        <div class="bio card">
          <figure class="bio-photo">
            <img
              :src="assetUrl(aboutPortrait)"
              :alt="`${profile.name} — ${t('home.portraitAlt')}`"
              width="640"
              height="853"
            />
          </figure>
          <div class="bio-copy">
            <p v-for="(paragraph, index) in profile.bio" :key="index" class="bio-text">
              {{ paragraph }}
            </p>
            <div class="bio-meta">
              <span class="bio-meta-item">{{ profile.location }}</span>
              <span class="bio-meta-item">{{ languages.map((l) => l.name).join(' · ') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Образование -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">{{ t('about.education') }}</h2>

        <div class="edu-grid">
          <article
            v-for="item in education"
            :key="item.id"
            class="edu-card card"
            :class="`edu-card--${item.status}`"
          >
            <header class="edu-head">
              <span class="edu-level">{{ item.level }}</span>
              <span class="edu-period">{{ item.period }}</span>
            </header>

            <h3 class="edu-institution">{{ item.institution }}</h3>

            <ul class="edu-lines">
              <li v-if="item.faculty">{{ item.faculty }}</li>
              <li v-if="item.department">{{ item.department }}</li>
              <li class="edu-program">{{ item.program }}</li>
            </ul>

            <p v-if="item.thesis" class="edu-thesis">
              <span class="edu-thesis-label">{{ t('about.thesis') }}</span>
              {{ item.thesis }}
            </p>
          </article>
        </div>

        <h3 class="subsection-title">{{ t('about.educationExtra') }}</h3>
        <ul class="extra-list">
          <li v-for="item in additionalEducation" :key="item.title" class="extra-item">
            <span class="extra-title">{{ item.title }}</span>
            <span class="extra-org">{{ item.org }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Опыт -->
    <section class="section section--sunken">
      <div class="container">
        <h2 class="section-title">{{ t('about.experience') }}</h2>

        <div class="exp-list">
          <article v-for="item in experience" :key="item.id" class="exp-item">
            <div class="exp-period">
              {{ item.period }}
              <span v-if="item.current" class="exp-now">{{ t('common.now') }}</span>
            </div>
            <div class="exp-body">
              <h3 class="exp-role">{{ item.role }}</h3>
              <p class="exp-org">{{ item.organization }}</p>
              <p v-if="item.unit" class="exp-unit">{{ item.unit }}</p>
              <ul v-if="item.highlights" class="exp-highlights">
                <li v-for="line in item.highlights" :key="line">{{ line }}</li>
              </ul>
              <PhotoStrip
                v-if="item.images?.length"
                class="exp-photos"
                :images="item.images"
                :alt="item.organization"
              />
            </div>
          </article>
        </div>

        <div class="roles-grid">
          <div class="roles-block">
            <h3 class="subsection-title">{{ t('about.projectRoles') }}</h3>
            <ul class="roles-list">
              <li v-for="item in projectRoles" :key="item.id" class="roles-item">
                <span class="roles-role">{{ item.role }}</span>
                <span class="roles-org">{{ item.organization }}</span>
                <span v-if="item.period" class="roles-note">{{ item.period }}</span>
              </li>
            </ul>
          </div>

          <div class="roles-block">
            <h3 class="subsection-title">{{ t('about.mentorship') }}</h3>
            <ul class="roles-list">
              <li v-for="item in mentorship" :key="item.id" class="roles-item">
                <span class="roles-role">{{ item.role }}</span>
                <span class="roles-org">{{ item.organization }}</span>
                <span v-if="item.period" class="roles-note">{{ item.period }}</span>
                <span v-if="item.summary" class="roles-note">{{ item.summary }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Навыки -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">{{ t('about.skills') }}</h2>
        <div
          ref="cloudRef"
          class="word-cloud"
          :class="{ 'is-flow': flowMode }"
          :style="flowMode ? undefined : { height: `${cloudHeight}px` }"
        >
          <div
            class="word-cloud-stage"
            :class="{ 'is-ready': cloudReady }"
            :style="stageStyle"
            role="list"
            :aria-label="t('about.skills')"
          >
            <span
              v-for="word in cloudWords"
              :key="word.key"
              ref="wordEls"
              class="cloud-word"
              :class="[
                `cloud-word--${word.group}`,
                { 'is-strong': word.strong, 'is-hero': word.hero }
              ]"
              role="listitem"
              :style="{
                fontSize: `${word.fontSize}px`,
                left: `${word.x}px`,
                top: `${word.y}px`,
                '--rot': `${word.rotate}deg`
              }"
            >
              {{ word.text }}
              <span class="sr-only">, {{ word.groupTitle }}</span>
            </span>
          </div>
        </div>
        <ul class="cloud-legend">
          <li v-for="group in skillGroups" :key="group.id" class="cloud-legend-item">
            <span class="cloud-swatch" :class="`cloud-swatch--${group.id}`" aria-hidden="true"></span>
            {{ group.title }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Цель -->
    <section class="section section--tight">
      <div class="container">
        <blockquote class="quote">
          <p class="quote-text">{{ profile.quote }}</p>
          <cite class="quote-author">— {{ profile.name }}</cite>
        </blockquote>

        <div class="about-cta">
          <router-link to="/achievements" class="about-link">{{ t('about.linkAchievements') }}</router-link>
          <router-link to="/publications" class="about-link">{{ t('about.linkPublications') }}</router-link>
          <router-link to="/contacts" class="about-link">{{ t('about.linkContacts') }}</router-link>
          <router-link to="/resume" class="about-link about-link--accent">{{ t('about.linkResume') }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
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
import PhotoStrip from '@/components/ui/PhotoStrip.vue'
import { aboutPortrait, assetUrl } from '@/constants/gallery'
import { useI18n } from '@/i18n'

const { locale, t } = useI18n()

const profile = computed(() => getProfile(locale.value))
const languages = computed(() => getLanguages(locale.value))
const education = computed(() => getEducation(locale.value))
const additionalEducation = computed(() => getAdditionalEducation(locale.value))
const experience = computed(() => getExperience(locale.value))
const projectRoles = computed(() => getProjectRoles(locale.value))
const mentorship = computed(() => getMentorship(locale.value))
const skillGroups = computed(() => getSkillGroups(locale.value))

// Вес 5 — ядро, 2 — соседние формулировки. Длинные фразы мельче, чтобы облако читалось.
const SKILL_WEIGHTS: Record<string, number[]> = {
  knowledge: [5, 4, 4, 2, 3, 3, 3, 2, 5],
  engineering: [5, 4, 4, 3, 3, 3, 2, 2],
  product: [5, 3, 4, 2],
  people: [2, 4, 5, 2, 2],
  accessibility: [5, 3, 2, 3]
}

interface CloudWord {
  key: string
  text: string
  group: string
  groupTitle: string
  fontSize: number
  rotate: number
  strong: boolean
  hero: boolean
  x: number
  y: number
}

const cloudRef = ref<HTMLElement | null>(null)
const wordEls = ref<HTMLElement[]>([])
const cloudWords = ref<CloudWord[]>([])
const cloudReady = ref(false)
const cloudHeight = ref(360)
const flowMode = ref(false)
const stage = ref({ width: 0, height: 0, scale: 1, offset: 0 })

const stageStyle = computed(() => {
  if (flowMode.value) return {}
  return {
    width: `${stage.value.width}px`,
    height: `${stage.value.height}px`,
    transform: `translateX(${stage.value.offset}px) scale(${stage.value.scale})`
  }
})

const fontSizeFor = (weight: number, text: string, narrow: boolean) => {
  const steps = narrow
    ? { 2: 14, 3: 17, 4: 22, 5: 28 }
    : { 2: 16, 3: 21, 4: 30, 5: 46 }
  let size = steps[weight as 2 | 3 | 4 | 5] ?? (narrow ? 16 : 20)
  if (text.length > 18) size -= Math.round((text.length - 18) * 0.55)
  if (text.length > 28) size -= 4
  return Math.min(narrow ? 28 : 46, Math.max(narrow ? 13 : 15, size))
}

const tiltFor = (text: string, weight: number, reduce: boolean) => {
  if (reduce || weight >= 5 || text.length > 16) return 0
  let hash = 0
  for (let i = 0; i < text.length; i++) hash = (hash * 33 + text.charCodeAt(i)) >>> 0
  return [-8, -4, 0, 5, 8][hash % 5]
}

const buildWords = (narrow: boolean, reduce: boolean): CloudWord[] =>
  skillGroups.value.flatMap((group) =>
    group.skills.map((text, index) => {
      const weight = SKILL_WEIGHTS[group.id]?.[index] ?? 3
      return {
        key: `${group.id}-${index}`,
        text,
        group: group.id,
        groupTitle: group.title,
        fontSize: fontSizeFor(weight, text, narrow),
        rotate: tiltFor(text, weight, reduce),
        strong: weight >= 4,
        hero: weight >= 5,
        x: 0,
        y: 0
      }
    })
  )

const halfExtents = (width: number, height: number, deg: number) => {
  const rad = (Math.abs(deg) * Math.PI) / 180
  const cos = Math.cos(rad)
  const sin = Math.sin(rad)
  return {
    hw: (Math.abs(width * cos) + Math.abs(height * sin)) / 2,
    hh: (Math.abs(width * sin) + Math.abs(height * cos)) / 2
  }
}

const packWords = (items: { key: string; hw: number; hh: number }[]) => {
  const placed: { key: string; hw: number; hh: number; cx: number; cy: number }[] = []
  const gap = 7

  for (const item of items) {
    if (placed.length === 0) {
      placed.push({ ...item, cx: 0, cy: 0 })
      continue
    }

    let hash = 0
    for (let i = 0; i < item.key.length; i++) hash = (hash * 33 + item.key.charCodeAt(i)) >>> 0
    let theta = (hash % 628) / 100
    let cx = 0
    let cy = 0

    for (let guard = 0; guard < 4000; guard++) {
      const radius = 2 + theta * 3.6
      cx = Math.cos(theta) * radius
      cy = Math.sin(theta) * radius * 0.62
      const hits = placed.some(
        (other) =>
          Math.abs(cx - other.cx) < item.hw + other.hw + gap &&
          Math.abs(cy - other.cy) < item.hh + other.hh + gap
      )
      if (!hits) break
      theta += 7 / Math.max(radius, 8)
    }

    placed.push({ ...item, cx, cy })
  }

  return placed
}

let generation = 0
let lastWidth = -1
let frame = 0

const layoutCloud = async (force = false) => {
  const root = cloudRef.value
  if (!root) return
  const width = root.clientWidth
  if (width < 40) return
  if (!force && Math.abs(width - lastWidth) < 2 && cloudReady.value) return

  lastWidth = width
  const gen = ++generation
  const narrow = width < 720
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // На узкой колонке спираль пришлось бы уменьшать целиком — слова стали бы нечитаемыми.
  // Там облако просто переносится по строкам, размер шрифта остаётся настоящим.
  if (narrow) {
    const next = buildWords(true, true)
    const same =
      flowMode.value &&
      cloudWords.value.length === next.length &&
      cloudWords.value.every(
        (word, index) => word.key === next[index].key && word.text === next[index].text
      )
    if (!same) cloudWords.value = next
    flowMode.value = true
    cloudReady.value = true
    return
  }

  flowMode.value = false
  const next = buildWords(false, reduce)
  const same =
    cloudWords.value.length === next.length &&
    cloudWords.value.every(
      (word, index) =>
        word.key === next[index].key &&
        word.text === next[index].text &&
        word.fontSize === next[index].fontSize &&
        word.rotate === next[index].rotate
    )

  if (!same) {
    cloudReady.value = false
    cloudWords.value = next
    await nextTick()
  }
  if (gen !== generation || !cloudRef.value) return

  for (let pass = 0; pass < 3; pass++) {
    await nextTick()
    if (gen !== generation) return
    let shrunk = false
    cloudWords.value.forEach((word, index) => {
      const el = wordEls.value[index]
      if (!el || el.offsetWidth <= width * 0.92 || word.fontSize <= 13) return
      word.fontSize = Math.max(13, Math.floor((word.fontSize * width * 0.9) / el.offsetWidth))
      shrunk = true
    })
    if (!shrunk) break
  }
  await nextTick()
  if (gen !== generation || wordEls.value.length !== cloudWords.value.length) return

  const measured = cloudWords.value.map((word, index) => {
    const el = wordEls.value[index]
    const box = halfExtents(el?.offsetWidth ?? 40, el?.offsetHeight ?? 20, word.rotate)
    return { key: word.key, ...box, area: box.hw * box.hh }
  })
  measured.sort((a, b) => b.area - a.area)

  const packed = packWords(measured)
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity
  for (const item of packed) {
    minX = Math.min(minX, item.cx - item.hw)
    maxX = Math.max(maxX, item.cx + item.hw)
    minY = Math.min(minY, item.cy - item.hh)
    maxY = Math.max(maxY, item.cy + item.hh)
  }

  const pad = 10
  const naturalW = Math.max(1, maxX - minX + pad * 2)
  const naturalH = Math.max(1, maxY - minY + pad * 2)
  const scale = Math.min(1, width / naturalW)
  const byKey = new Map(packed.map((item) => [item.key, item]))

  for (const word of cloudWords.value) {
    const item = byKey.get(word.key)
    if (!item) continue
    word.x = item.cx - minX + pad
    word.y = item.cy - minY + pad
  }

  stage.value = {
    width: naturalW,
    height: naturalH,
    scale,
    offset: Math.max(0, (width - naturalW * scale) / 2)
  }
  cloudHeight.value = Math.ceil(naturalH * scale)
  cloudReady.value = true
}

const scheduleLayout = () => {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    const width = cloudRef.value?.clientWidth ?? 0
    if (Math.abs(width - lastWidth) < 2) return
    void layoutCloud()
  })
}

let observer: ResizeObserver | null = null

const onWindowResize = () => scheduleLayout()

onMounted(async () => {
  await document.fonts?.ready
  await nextTick()
  await layoutCloud(true)
  if (!cloudRef.value) return
  observer = new ResizeObserver(scheduleLayout)
  observer.observe(cloudRef.value)
  window.addEventListener('resize', onWindowResize)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  observer?.disconnect()
  window.removeEventListener('resize', onWindowResize)
})

watch(locale, () => {
  lastWidth = -1
  void layoutCloud(true)
})
</script>

<style lang="scss" scoped>
.section--tight {
  padding: $spacing-8 0;
}

.section--sunken {
  background: $paper-sunken;
  border-block: 1px solid $line;
}

.section-title {
  font-size: $text-3xl;
  margin-bottom: $spacing-8;

  @include mobile {
    font-size: $text-2xl;
    margin-bottom: $spacing-6;
  }
}

.subsection-title {
  font-size: $text-xl;
  margin: $spacing-10 0 $spacing-4;

  @include mobile {
    font-size: $text-lg;
    margin-top: $spacing-8;
  }
}

// --- Биография ---
.bio {
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  gap: $spacing-6 $spacing-8;
  align-items: center;
  max-width: calc(200px + #{$spacing-8} + 72ch);

  @include mobile {
    grid-template-columns: 1fr;
    justify-items: center;
    max-width: 72ch;
  }
}

.bio-photo {
  margin: 0;

  img {
    display: block;
    width: 200px;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    object-position: center center;
    border-radius: $radius-md;
  }
}

.bio-copy {
  min-width: 0;
}

.bio-text {
  font-size: $text-lg;
  color: $color-text-secondary;
  margin-bottom: $spacing-4;

  &:last-of-type {
    margin-bottom: 0;
  }

  @include mobile {
    font-size: $text-base;
  }
}

.bio-meta {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-2 $spacing-4;
  margin-top: $spacing-6;
  padding-top: $spacing-4;
  border-top: 1px solid $line;
  color: $color-text-muted;
  font-size: $text-sm;
}

// --- Образование ---
.edu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-6;

  @include mobile {
    grid-template-columns: 1fr;
    gap: $spacing-4;
  }
}

.edu-card {
  display: flex;
  flex-direction: column;

  &--planned {
    background: transparent;
    border-style: dashed;
    box-shadow: none;
  }
}

.edu-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: $spacing-2;
  margin-bottom: $spacing-3;
}

.edu-level {
  font-family: $font-primary;
  font-weight: 700;
  font-size: $text-sm;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: $accent-ink;
}

.edu-period {
  font-size: $text-sm;
  color: $color-text-muted;
  white-space: nowrap;
}

.edu-institution {
  font-size: $text-xl;
  margin-bottom: $spacing-3;

  @include mobile {
    font-size: $text-lg;
  }
}

.edu-lines {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: $spacing-1;
  color: $color-text-secondary;
  font-size: $text-sm;
}

.edu-program {
  color: $ink;
  font-weight: 500;
}

.edu-thesis {
  margin-top: $spacing-4;
  padding-top: $spacing-4;
  border-top: 1px solid $line;
  font-size: $text-sm;
  color: $color-text-secondary;
}

.edu-thesis-label {
  display: block;
  color: $color-text-muted;
  margin-bottom: $spacing-1;
}

.extra-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: $spacing-3;
}

.extra-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: $spacing-3 $spacing-4;
  background: $paper-raised;
  border: 1px solid $line;
  border-radius: $radius-md;
}

.extra-title {
  font-weight: 600;
}

.extra-org {
  font-size: $text-sm;
  color: $color-text-muted;
}

// --- Опыт ---
.exp-list {
  display: flex;
  flex-direction: column;
}

.exp-item {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: $spacing-6;
  padding: $spacing-6 0;
  border-top: 1px solid $line;

  &:last-child {
    border-bottom: 1px solid $line;
  }

  @include mobile-and-tablet {
    grid-template-columns: 1fr;
    gap: $spacing-2;
    padding: $spacing-5 0;
  }
}

.exp-period {
  color: $color-text-muted;
  font-size: $text-sm;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: $spacing-2;
}

.exp-now {
  padding: 2px $spacing-2;
  background: $second-soft;
  color: $second;
  border-radius: $radius-full;
  font-size: $text-xs;
}

.exp-role {
  font-size: $text-lg;
  margin-bottom: $spacing-1;
}

.exp-org {
  font-weight: 600;
  color: $accent-ink;
}

.exp-unit {
  color: $color-text-secondary;
  font-size: $text-sm;
  margin-top: 2px;
}

.exp-photos {
  margin-top: $spacing-4;
}

.exp-highlights {
  margin-top: $spacing-3;
  padding-left: $spacing-5;
  color: $color-text-secondary;
  font-size: $text-sm;

  li {
    margin-bottom: $spacing-1;
  }
}

.roles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-6;
}

.roles-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
}

.roles-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-left: $spacing-4;
  border-left: 2px solid rgba($accent, 0.35);
}

.roles-role {
  font-weight: 600;
}

.roles-org {
  color: $color-text-secondary;
  font-size: $text-sm;
}

.roles-note {
  color: $color-text-muted;
  font-size: $text-sm;
}

// --- Навыки: облако слов ---
$cloud-knowledge: $ink;
$cloud-engineering: #8C4A22;
$cloud-product: #1E5344;
$cloud-people: #5C4636;
$cloud-access: #7A4A28;

.word-cloud {
  position: relative;
  width: 100%;
  min-height: 240px;

  &.is-flow {
    height: auto;
    min-height: 0;
  }
}

.word-cloud-stage {
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: top left;
  opacity: 0;

  &.is-ready {
    opacity: 1;
    transition: opacity 0.25s ease;
  }
}

.word-cloud.is-flow .word-cloud-stage {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.35rem 0.7rem;
  width: 100%;
  height: auto;
  padding: $spacing-2 0;
}

.word-cloud.is-flow .cloud-word {
  position: static;
  transform: none;

  &:hover {
    transform: scale(1.06);
  }
}

.cloud-word {
  position: absolute;
  white-space: nowrap;
  line-height: 1.05;
  font-family: $font-primary;
  font-weight: 600;
  letter-spacing: -0.02em;
  transform: translate(-50%, -50%) rotate(var(--rot, 0deg));
  transform-origin: center;
  transition: transform 0.2s ease;

  &.is-strong {
    font-weight: 700;
  }

  &.is-hero {
    font-weight: 800;
    letter-spacing: -0.03em;
  }

  &:hover {
    transform: translate(-50%, -50%) rotate(var(--rot, 0deg)) scale(1.06);
    z-index: 2;
  }

  &--knowledge { color: $cloud-knowledge; }
  &--engineering { color: $cloud-engineering; }
  &--product { color: $cloud-product; }
  &--people { color: $cloud-people; }
  &--accessibility { color: $cloud-access; }
}

.cloud-legend {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: $spacing-2 $spacing-5;
  margin-top: $spacing-6;
  list-style: none;
  color: $ink-2;
  font-size: $text-sm;
}

.cloud-legend-item {
  display: inline-flex;
  align-items: center;
  gap: $spacing-2;
}

.cloud-swatch {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  flex-shrink: 0;

  &--knowledge { background: $cloud-knowledge; }
  &--engineering { background: $cloud-engineering; }
  &--product { background: $cloud-product; }
  &--people { background: $cloud-people; }
  &--accessibility { background: $cloud-access; }
}

// --- Цитата ---
.quote {
  max-width: 68ch;
  margin: 0 auto;
  padding: $spacing-8;
  background: $accent-soft;
  border: 1px solid rgba($accent, 0.3);
  border-radius: $radius-lg;
  text-align: center;

  @include mobile {
    padding: $spacing-5;
  }
}

.quote-text {
  font-family: $font-primary;
  font-size: $text-xl;
  line-height: 1.5;
  color: $ink;
  margin-bottom: $spacing-4;

  @include mobile {
    font-size: $text-lg;
  }
}

.quote-author {
  color: $accent-ink;
  font-style: normal;
  font-size: $text-sm;
}

.about-cta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: $spacing-4;
  margin-top: $spacing-8;
}

.about-link {
  padding: $spacing-2 $spacing-4;
  border: 1px solid $line;
  border-radius: $radius-md;
  background: $paper-raised;
  text-decoration: none;
  font-weight: 500;
  min-height: 44px;
  display: inline-flex;
  align-items: center;

  &:hover {
    border-color: rgba($accent, 0.5);
  }

  &--accent {
    background: $accent-soft;
    border-color: rgba($accent, 0.35);
    color: $accent-ink;
  }
}
</style>
