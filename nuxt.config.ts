// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  debug: false,
  devtools: { enabled: false },

  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt'
  ],

  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  alias: {},

  app: {
    head: {
      title: '西木工作室 / 西木Nishiki',
      viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
      htmlAttrs: {
        lang: 'zh-CN'
      },
      link: [{ rel: 'icon', href: '/favicon.ico' }],
      meta: [],
      script: []
    }
  },

  unocss: {
    preflight: true
  },

  compatibilityDate: '2025-02-12'
})