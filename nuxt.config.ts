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
    plugins: 'app/plugins',
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
      link: [
        { rel: "icon", type: "image/x-icon", href: "/site/favicon.ico" },
        { rel: "stylesheet", href: "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" },
      ],
    }
  },

  modules: ['@nuxt/eslint', '@vite-pwa/nuxt'],
  css: ["normalize.css", "~/app/assets/style/global.css"],
  pwa: {
    registerType: "autoUpdate",
    //includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.png"],
    manifestFilename: "site.webmanifest",
    client: {
      installPrompt: true,
      //promptOptions: {
      //  skip: true,
      //},
    },
    manifest: {
      name: "Nuxt 3",
      short_name: "Nuxt 3",
      description: "Nuxt 3",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
      lang: "ru",
      //start_url: "/site/",
      //scope: "/site/",
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
      globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      cleanupOutdatedCaches: true,
      //modifyURLPrefix: {
      //  "/site/": "/",
      //},
      //globIgnores: ["**/sw.js", "**/sw.js.map"],
      //runtimeCaching: [{
      //  urlPattern: /^https:\/\/fonts\.googleapis\.com/,
      //  handler: "CacheFirst",
      //  options: {
      //    cacheName: "google-fonts-cache",
      //    expiration: {
      //      maxEntries: 10,
      //      maxAgeSeconds: 60 * 60 * 24 * 30,
      //    },
      //    cacheableResponse: {
      //      statuses: [0, 200],
      //    },
      //  },
      //}],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
})