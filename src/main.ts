import { createApp, watch } from 'vue'
import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import App from './App.vue'
import './assets/styles/main.scss'

import { LOCALES, locale } from './i18n/core'
import { t } from './i18n/ui'

// Страницы
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import AchievementsPage from './pages/AchievementsPage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'
import PublicationsPage from './pages/PublicationsPage.vue'
import InitiativesPage from './pages/InitiativesPage.vue'
import GalleryPage from './pages/GalleryPage.vue'
import ContactsPage from './pages/ContactsPage.vue'
import ResumePage from './pages/ResumePage.vue'

const SITE_NAME = 'Дмитрий Комаров'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage, meta: { titleKey: '' } },
    { path: '/about', name: 'about', component: AboutPage, meta: { titleKey: 'nav.about' } },
    {
      path: '/achievements',
      name: 'achievements',
      component: AchievementsPage,
      meta: { titleKey: 'nav.achievements' }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage,
      meta: { titleKey: 'nav.projects' }
    },
    {
      path: '/publications',
      name: 'publications',
      component: PublicationsPage,
      meta: { titleKey: 'nav.publications' }
    },
    {
      path: '/initiatives',
      name: 'initiatives',
      component: InitiativesPage,
      meta: { titleKey: 'nav.initiatives' }
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryPage,
      meta: { titleKey: 'nav.gallery' }
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumePage,
      meta: { titleKey: 'nav.resume' }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsPage,
      meta: { titleKey: 'nav.contacts' }
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0, behavior: 'smooth' }
  }
})

/** Заголовок вкладки зависит и от маршрута, и от выбранного языка. */
const updateTitle = (route: RouteLocationNormalized) => {
  const key = (route.meta.titleKey as string) || ''
  document.title = key ? `${t(key, locale.value)} — ${SITE_NAME}` : `${SITE_NAME} — ${t('nav.home', locale.value)}`
}

router.afterEach((to) => updateTitle(to))

watch(locale, (value) => {
  const meta = LOCALES.find((item) => item.code === value)
  if (meta) document.documentElement.lang = meta.htmlLang
  updateTitle(router.currentRoute.value)
})

// Стартовое состояние языка
const startMeta = LOCALES.find((item) => item.code === locale.value)
if (startMeta) document.documentElement.lang = startMeta.htmlLang

const app = createApp(App)
app.use(router)
app.mount('#app')
