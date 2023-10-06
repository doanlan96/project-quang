import { defineStore } from 'pinia'
import { extractStore } from '../extractStore'
import { useActions } from './actions'
import { useGetters } from './getters'
import { useState } from './state'

export const useUserStore = defineStore('userStore', () => {
  return {
    ...extractStore(useState()),
    ...extractStore(useGetters()),
    ...extractStore(useActions()),
  }
})
