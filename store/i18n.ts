import { defineStore } from 'pinia'

const state = () => ({
  // locales: [
  //   // { value: 'ja', label: 'text.setting.language.lbl_japanese', name: 'Japan' },
  //   { value: 'en', label: 'text.setting.language.lbl_english', name: 'English' }
  // ],
  locale: 'ja',
})

export const useI18nStore = defineStore('i18n', { state })
