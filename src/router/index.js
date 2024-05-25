import { createMemoryHistory, createRouter } from 'vue-router'

import MyDinner from '@/components/MyDinner.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import MyLunch from '@/components/MyLunch.vue'
import DeliveryToYou from '@/components/DeliveryToYou.vue'


const routes = [
{
  path: "/hi",
  component: MyDinner
},

{
  path: "/",
  component: HelloWorld
},
{
  path: "/lu",
  component: MyLunch
},
{
  path: "/de",
  component: DeliveryToYou
}

 
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router