// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  debug: false,
  devtools: { enabled: false },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxt/eslint' // https://eslint.nuxt.com/packages/module
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
      title: '西木工作室官方网站',
      viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
      htmlAttrs: {
        lang: 'zh-CN'
      },
      link: [{ rel: 'icon', href: '/favicon.png' }],
      meta: [],
      script: []
    }
  },
  unocss: {
    preflight: true
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2, // 2空格缩进
        semi: false, // 语句末尾需要分号
        commaDangle: 'never', // 不允许逗号结尾
        braceStyle: '1tbs' // 1tbs大括号风格, https://eslint.style/rules/js/brace-style
      }
    }
  }
})
