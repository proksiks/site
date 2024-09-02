// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    //baseURL: "/site/",
    //pageTransition: { name: "page", mode: "out-in" },  Ошибка перестаёт работать переход по страницам
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
      'shared/*',
    ],
  },

  dir: {
    pages: "app/routes",
  },

  components: [
    {
      path: "~/shared",
      extensions: ['.vue'],
    },
    {
      path: "~/widgets",
      extensions: ['.vue'],
    },
  ],
})
