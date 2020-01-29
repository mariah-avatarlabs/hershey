import Vue from 'vue'
import VueRouter from 'vue-router'

import Intro from '../views/Intro.vue'
import Legal from '../views/Legal.vue'
import Results from '../views/Results.vue'
import Confirmation from '../views/Confirmation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro
  },

  {
    path: '/legal',
    name: 'Legal',
    component: Legal
  },

  {
    path: '/results',
    name: 'Results',
    component: Results
  },

  {
    path: '/confirmation',
    name: 'Confirmation',
    component: Confirmation
  },


  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
