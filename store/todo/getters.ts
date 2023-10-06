import { defineStore } from 'pinia'
import { Todo, TodoState } from './state'

export const useGetters = defineStore('todo.getters', () => {
  const getTodoById = (state: TodoState) => {
    return (id: number) =>
      state.items.find((item) => !!item && (item as Todo).id === id)
  }
  return {
    getTodoById,
  }
})
