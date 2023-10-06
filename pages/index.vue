<template>
  <NuxtPage :key="$route.path" />
</template>

<script setup lang="ts">
onMounted(() => {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  const router = useRouter()
  if (Object.keys(user).length === 0) {
    router.push('/login')
  } else {
    router.push('/shop')
  }
})
</script>
