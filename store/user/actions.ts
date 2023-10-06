import { defineStore } from 'pinia'
import { useState } from './state'
import { user, token } from '@/api/user.json'

export const useActions = defineStore('user.actions', () => {
  const state = useState()
  const router = useRouter()

  async function login(emailInput: string, password: string) {
    const data = await user
    if (emailInput === data.email && password === data.password) {
      state.user = data
      localStorage.setItem('token', JSON.stringify(token))
      localStorage.setItem('user', JSON.stringify(data))
    } else {
      throw new Error('Email or password is incorrect')
    }
  }

  function logout() {
    state.user = {
      name: '',
      age: 0,
      email: '',
      password: '',
      address: {},
      avatar: '',
      phone: '',
    }
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/login')
  }

  return {
    login,
    logout,
  }
})
