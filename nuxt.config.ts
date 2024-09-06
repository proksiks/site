// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  srcDir: 'src/',

  dir: {
		//plugins: 'app/plugins',
		assets: 'app/assets',
		public: 'app/public',
		layouts: 'app/layouts',
		middleware: 'app/providers/router/middleware',
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
  css: ["normalize.css", "~/app/assets/style/global.css"],
})
