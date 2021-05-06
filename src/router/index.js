import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/MIN-CONCEPT',
    name: 'MIN-CONCEPT',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MIN-CONCEPT.vue')
  },
  {
    path: '/VIDEO',
    name: 'video',
    component: () => import(/* webpackChunkName: "about" */ '../views/VIDEO.vue')
  },
  {
    path: '/ART-WORKS',
    name: 'ART-WORKS',
    component: () => import(/* webpackChunkName: "about" */ '../views/ART-WORKS.vue')
  },
  {
    path: '/OM-MIG',
    name: 'OM-MIG',
    component: () => import(/* webpackChunkName: "about" */ '../views/OM-MIG.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
