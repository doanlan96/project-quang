import { createI18n } from 'vue-i18n'
import { useI18nStore } from '@/store/i18n'
import en from '@/locales/en.json'
import ja from '@/locales/ja.json'

export default defineNuxtPlugin((nuxtApp) => {
  const i18nStore = useI18nStore()
  const i18n = createI18n({
    locale: i18nStore.$state.locale,
    fallbackLocale: 'en',
    messages: {
      en,
      ja,
    },
  })
  nuxtApp.vueApp.use(i18n)
})
