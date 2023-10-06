import { defineStore } from 'pinia'
import { useState } from './state'

export const useGetters = defineStore('user.getters', () => {
  const state = useState()
  const getUser = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    state.user = user
    // return state.user
  }
  return {
    getUser,
  }
})
