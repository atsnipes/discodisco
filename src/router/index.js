import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import RamenScraper from '../views/RamenScraper.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RamenScraper',
    component: RamenScraper
  },
  {
    path: '/*',
    name: '404',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pups" */ '../views/FourOhFour.vue')
  }
  // {
  //   path: '/pups',
  //   name: 'pups',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "pups" */ '../views/Puppies.vue')
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/vinyl',
  //   name: 'Vinyl',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Vinyl.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
