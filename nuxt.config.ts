// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  srcDir: 'src/',

  dir: {
    //plugins: 'app/plugins',
    assets: 'app/assets',
    public: 'app/public',
    layouts: 'app/layouts',
    //middleware: 'app/providers/router/middleware',
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

  modules: ['@nuxt/eslint', '@vite-pwa/nuxt'],
  css: ["normalize.css", "~/app/assets/style/global.css"],
  pwa: {
    manifest: {
      name: "Nuxt 3",
      short_name: "Nuxt 3",
      description: "Nuxt 3",
      theme_color: "#ffffff",
      icons: [
        {
          src: "/site/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/site/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      cleanupOutdatedCaches: true,
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    }
  }
})