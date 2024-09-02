// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'ru',
      },
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],

  css: ["normalize.css", "~/app/css/global.css"],

  imports: {
    dirs: [
      "shared/composables",
      "shared/utils",
    ],
  },

  dir: {
    pages: "app/routes",
  },

  components: {
    dirs: [
      {
        path: "~/shared",
        extensions: ['.vue'],
      },
      {
        path: "~/widgets",
        extensions: ['.vue'],
      },
    ],
  },
})
