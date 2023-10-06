import { ref } from 'vue'
/** Mock Nuxt's useState to be a simple ref for unit testing. **/
jest.mock('#app', () => ({
  useState: (_key, init) => {
    return ref(init())
  },
}))
