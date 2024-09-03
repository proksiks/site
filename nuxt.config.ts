// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
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

  app: {
    baseURL: "/site/",
    pageTransition: { name: "page" },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'ru',
      },
    }
  },
  
  modules: ['@nuxt/eslint'],
  css: ["normalize.css", "~/app/css/global.css"],
})
