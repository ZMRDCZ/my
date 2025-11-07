import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/styles/main.scss'

// Import pages
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import AchievementsPage from './pages/AchievementsPage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'
import PublicationsPage from './pages/PublicationsPage.vue'
import InitiativesPage from './pages/InitiativesPage.vue'
import GalleryPage from './pages/GalleryPage.vue'
import ContactsPage from './pages/ContactsPage.vue'

// Create router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'Дмитрий Комаров - Портфолио'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
      meta: {
        title: 'О себе - Дмитрий Комаров'
      }
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: AchievementsPage,
      meta: {
        title: 'Достижения - Дмитрий Комаров'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage,
      meta: {
        title: 'Проекты - Дмитрий Комаров'
      }
    },
    {
      path: '/publications',
      name: 'publications',
      component: PublicationsPage,
      meta: {
        title: 'Публикации - Дмитрий Комаров'
      }
    },
    {
      path: '/initiatives',
      name: 'initiatives',
      component: InitiativesPage,
      meta: {
        title: 'Инициативы - Дмитрий Комаров'
      }
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryPage,
      meta: {
        title: 'Галерея - Дмитрий Комаров'
      }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsPage,
      meta: {
        title: 'Контакты - Дмитрий Комаров'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Update document title on route change
router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || 'Дмитрий Комаров - Портфолио'
  next()
})

const app = createApp(App)
app.use(router)
app.mount('#app')

