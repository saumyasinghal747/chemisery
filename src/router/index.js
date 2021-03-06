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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/gas-laws',
    name: 'Gas Laws',
    component: () => import(/* webpackChunkName: "gaslaws" */ '../views/GasLaws.vue'),
    children:[
      {
        path: 'pv-nt',
        component: () => import(/* webpackChunkName: "pv-nt" */ '../views/GasLaws/pv-nt.vue')
      },
      {
        path: 'effusion',
        component: () => import(/* webpackChunkName: "effusion" */ '../views/GasLaws/effusion.vue')
      },
      {
        path: 'partial-pressure',
        component: () => import(/* webpackChunkName: "effusion" */ '../views/GasLaws/PartialPressure')
      }
    ]
  }
]

const router = new VueRouter({
  mode: process.env.NODE_ENV === 'production'
      ? 'hash'
      : 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
