// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Tradewood',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  plugins: ['~/plugins/i18n.ts'],
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  css: [
    '@/assets/style/style.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  ssr: false,
  components: [
    '~/components/**/*',
    {
      path: '~/components',
      extensions: ['vue'],
      pathPrefix: false,
    },
  ],
})
