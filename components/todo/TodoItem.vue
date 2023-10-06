<template>
  <div
    class="rounded-md bg-white shadow-md py-3 px-8 grid align-middle cursor-pointer relative"
  >
    <div class="flex justify-between" @click="toggleComplete()">
      <img v-if="todo.completed" src="@/assets/images/tick-solid.svg" />
      <img v-else src="@/assets/images/tick-outlined.svg" />
      <h3>{{ todo.title }}</h3>
    </div>
    <span
      class="absolute bottom-0 right-0 transform translate-y-full bg-red-100 text-red-800 shadow-sm text-xs mr-2 px-2.5 py-0.5 rounded-b-md rounded-t-none dark:bg-red-200 dark:text-red-900"
      @click="removeTodo()"
      >Remove</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Todo } from '@/store/todo/state'
import { useTodoStore } from '@/store/todo/index'

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  setup(props) {
    const todoStore = useTodoStore()
    const toggleComplete = () => {
      todoStore.update(props.todo.id, { completed: !props.todo.completed })
    }
    const removeTodo = () => {
      todoStore.remove(props.todo.id)
    }
    return {
      toggleComplete,
      removeTodo,
    }
  },
})
</script>

<style scoped>
img {
  width: 30px;
  height: 30px;
}
</style>
