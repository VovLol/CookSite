import { createMemoryHistory, createRouter } from 'vue-router'

import MyDinner from './components/MyDinner.vue'
import HelloWorld from './components/HelloWorld.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/dinner', component: MyDinner },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})