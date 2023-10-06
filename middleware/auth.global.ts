export default defineNuxtRouteMiddleware((to) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  const authenPaths = ['login', 'register']

  const currentPath = to.fullPath

  const isIncludedAuthenPath = () => {
    return authenPaths.some((path) => currentPath.includes(path))
  }

  if (Object.keys(user).length === 0 && isIncludedAuthenPath()) {
    return
  }

  if (Object.keys(user).length !== 0 && isIncludedAuthenPath()) {
    return navigateTo('/shop')
  }

  if (Object.keys(user).length === 0 && !isIncludedAuthenPath()) {
    return navigateTo('/login')
  }
})
