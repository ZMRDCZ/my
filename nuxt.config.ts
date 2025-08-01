// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // GitHub Pages configuration
  app: {
    baseURL: '/my/',
    
    // Recommended for GitHub Pages, avoids issues with Jekyll
    buildAssetsDir: 'assets',

    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Дмитрий Комаров - Портфолио',
      meta: [
        { name: 'description', content: 'Интерактивное портфолио Дмитрия Комарова - инженера, исследователя и организатора инклюзивных инициатив' },
        { name: 'keywords', content: 'портфолио, веб-разработка, инклюзивность, инженер, исследователь' },
        { name: 'author', content: 'Дмитрий Комаров' },
        { property: 'og:title', content: 'Дмитрий Комаров - Портфолио' },
        { property: 'og:description', content: 'Интерактивное портфолио Дмитрия Комарова' },
        { property: 'og:type', content: 'website' }
      ]
    }
  },

  // Compatibility date
  compatibilityDate: '2024-04-03',
  
  // CSS Configuration
  css: [
    '~/assets/scss/main.scss'
  ],

  // Modules
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts'
  ],

  // Google Fonts
  googleFonts: {
    families: {
      'Orbitron': [300, 400, 500, 700, 900],
      'Roboto': [300, 400, 500, 700],
      'Inter': [300, 400, 500, 600, 700]
    }
  },

  // SCSS Configuration
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;'
        }
      }
    }
  },

  // Build configuration for GitHub Pages
  experimental: {
    payloadExtraction: false
  }
}) 