import { defineStore } from 'pinia'

export interface User {
  name: string
  age: number
  email: string
  password: string
  address: Object
  avatar: string
  phone: string
}

export interface UserState {
  user: User
}

const state = (): UserState => ({
  user: {
    name: '',
    age: 0,
    email: '',
    password: '',
    address: {},
    avatar: '',
    phone: '',
  },
})

export const useState = defineStore({
  id: 'user.state',
  state,
})
