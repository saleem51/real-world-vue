import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventDetails from '@/views/EventDetails.vue';
import AboutVue from '../views/AboutVue.vue'


const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props : true,
    component: EventDetails
  },
  {
    path: '/about',
    name: 'AboutVue',
    component: AboutVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
