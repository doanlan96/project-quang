<template>
  <ul
    v-if="Object.keys(user).length === 0"
    class="hidden absolute right-[20px] text-md pt-1 group-hover:block bg-white rounded"
  >
    <li class="">
      <NuxtLink
        class="rounded-t hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
        to="/login"
        >Sign in</NuxtLink
      >
    </li>
    <li class="">
      <NuxtLink
        class="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
        to="/register"
        >Sign up</NuxtLink
      >
    </li>
  </ul>
  <ul
    v-else
    class="hidden absolute right-[20px] text-md pt-1 group-hover:block bg-white rounded"
  >
    <li class="">
      <NuxtLink
        class="rounded-t hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
        to="/"
        >Profile</NuxtLink
      >
    </li>
    <li class="">
      <a
        class="hover:bg-gray-400 hover:cursor-pointer py-2 px-4 block whitespace-no-wrap"
        @click="userStore.logout"
        >Log out</a
      >
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/user'

const user = JSON.parse(localStorage.getItem('user') || '{}')
const userStore = useUserStore()
</script>
