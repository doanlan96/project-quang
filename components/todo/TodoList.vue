<template>
  <div>
    <h3 class="text-4xl font-bold mb-5">
      {{ $t('text.global.lbl_todo_list') }}
    </h3>
    <template v-if="!todoStore.items.length">
      <p class="text-center">{{ $t('text.global.txt_no_todo') }}</p>
    </template>
    <div class="flex flex-col gap-7">
      <template v-for="todo in todoStore.items" :key="todo.id">
        <TodoItem :todo="todo" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoItem from './TodoItem.vue'
import { useTodoStore } from '@/store/todo/index'

export default defineComponent({
  components: { TodoItem },
  setup() {
    const todoStore = useTodoStore()
    return {
      todoStore,
    }
  },
})
</script>
