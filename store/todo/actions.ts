import { defineStore } from 'pinia'
import { Todos, Todo, useState } from './state'

export interface TodoAdd {
  title: string
  completed: false
}

export interface TodoUpdate {
  completed?: boolean
}

export const useActions = defineStore('todo.actions', () => {
  const state = useState()

  function add(todo: TodoAdd) {
    state.items.push({ id: Math.random(), ...todo })
  }

  function remove(id: number) {
    state.items = state.items.filter((item) => item.id !== id)
  }

  function update(id: number, updatedTodo: TodoUpdate) {
    const items = state.items as Todos | any[]
    const index = items.findIndex((item) => !!item && (item as Todo).id === id)
    items[index] = { ...items[index], ...updatedTodo }
  }

  return {
    add,
    remove,
    update,
  }
})
