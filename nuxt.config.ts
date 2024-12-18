// https://nuxt.com/docs/api/configuration/nuxt-config
const isProduction = process.env.CURRENT_BRANCH === 'prod'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  //devtools: { enabled: true },
  nitro: {
    compressPublicAssets: true,
    minify: true,
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      routes: ['/', '/articles'],
    },
  },
  runtimeConfig: {
    public: {
      CURRENT_BRANCH: process.env.CURRENT_BRANCH,
      STARWARS_PLACEHOLDER: process.env.STARWARS_PLACEHOLDER,
      JSON_PLACEHOLDER: process.env.JSON_PLACEHOLDER,
    }
  },

  appConfig: {
    buildDate: new Date().toISOString(),
  },

  ignoreOptions: {
    ignoreCase: false,
  },

  srcDir: 'src/',

  devServer: {
    port: 7777
  },

  dir: {
    assets: 'app/assets',
    public: 'app/public',
    layouts: 'app/layouts',
    plugins: 'app/plugins',
    //middleware: 'app/providers/router/middleware',
  },

  fonts: {
    assets: {
      prefix: '/_fonts',
    },
  },

  robots: {
    rules: [
      { UserAgent: '*' },
      { Host: 'https://delicate-biscochitos-943cd3.netlify.app' },
    ]
  },

  image: {
    provider: isProduction ? 'netlify' : '',
  },

  icon: {
    //provider: 'server',
    customCollections: [
      {
        prefix: 'icon',
        dir: './src/app/assets/icons'
      },
    ],
  },

  build: {
    transpile: ['gsap'],
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
    {
      path: "~/features",
      extensions: ['.vue'],
    },
    {
      path: "~/entities",
      extensions: ['.vue'],
    },
  ],
  vite: {
    build: {
      minify: 'terser',
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    }
  },
  app: {
    //baseURL: "/site/",
    //buildAssetsDir: "/",
    pageTransition: { name: "page", mode: "out-in", },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: process.env.APP_NAME,
      htmlAttrs: { lang: 'ru' },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'My amazing site' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' },
        { hid:'og:url', property: 'og:url', content: process.env.APP_URL },
        { hid:'og:type', property: 'og:type', content: 'app' },
        { hid:'og:title', property: 'og:title', content: process.env.APP_NAME },
        { hid:'og:description', property: 'og:description', content: process.env.APP_NAME },
        { hid:'og:image', property: 'og:image', content: 'https://dummyimage.com/16:9x1080/' },
      ]
    }
  },
  //fonts: {
  //  src: "~/app/assets/fonts",
  //  lazy: true,
  //  prefetch: true,
  //  preload: true,
  //  preconnect: true,
  //  crossorigin: true,
  //  display: "swap",
  //  formats: ["woff2", "woff"],
  //  injectTo: 'head',
  //  global: true,
  //},
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@vite-pwa/nuxt',
    "@nuxt/icon",
    "@nuxt/scripts",
    "@nuxt/image",
    "@nuxtjs/robots",
    // 'nuxt-purgecss', // удаляет стили в папке assets
  ],
  imports: { dirs: ['app/stores', '**/model/*.ts', 'app/composables', 'app/utils'] },
  css: ["normalize.css", "~/app/assets/style/global.css"],

  pwa: {
    registerType: 'autoUpdate',
    //strategies: 'generateSW',
    //includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.png"],
    manifestFilename: "site.webmanifest",
    client: {
      installPrompt: true,
      //promptOptions: {
      //  skip: true,
      //},
    },

    // Раскоментить pwa-assets.config.ts
    //pwaAssets: {
    //  config: true,
    //},
    manifest: {
      name: process.env.APP_NAME,
      short_name: process.env.APP_NAME,
      description: process.env.APP_NAME,
      theme_color: "#161a1d",
      background_color: "#161a1d",
      display: "standalone",
      lang: "ru",
      //start_url: "/site/",
      //scope: "/site/",
      icons: [
        {
          src: "/android-chrome-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          src: "/android-chrome-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          src: "/android-chrome-180x180.png",
          sizes: "180x180",
          type: "image/png",
        },
        {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/android-chrome-512x512.png",
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
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
})