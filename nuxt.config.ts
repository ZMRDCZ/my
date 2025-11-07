import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'pathe'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  app: {
    baseURL: '/',
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

  css: [
    '~/assets/scss/main.scss'
  ],

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts'
  ],

  // @ts-ignore - googleFonts is provided by @nuxtjs/google-fonts module
  googleFonts: {
    families: {
      'Orbitron': [300, 400, 500, 700, 900],
      'Roboto': [300, 400, 500, 700],
      'Inter': [300, 400, 500, 600, 700]
    },
    display: 'swap',
    preload: true
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;\n@use "@/assets/scss/_responsive.scss" as *;',
          includePaths: [resolve(process.cwd(), 'assets/scss')]
        }
      }
    }
  },

  typescript: {
    strict: true,
    typeCheck: true
  },

  experimental: {
    payloadExtraction: false
  },

  compatibilityDate: '2024-04-03'
})
