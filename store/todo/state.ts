import { defineStore } from 'pinia'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export type Todos = Todo[] | any[]

export interface TodoState {
  items: Todos
}

const state = (): TodoState => ({
  items: [
    {
      id: 1,
      title: 'Complete this task',
      completed: true,
    },
  ],
})

export const useState = defineStore({
  id: 'todo.state',
  state,
})
