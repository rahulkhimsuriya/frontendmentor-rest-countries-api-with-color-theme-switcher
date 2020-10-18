import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/country/:code',
    name: 'country-detail',
    component: () =>
      import(
        /* webpackChunkName: "country-detail" */ '@/views/CountryDetail.vue'
      ),
    props: true,
    beforeEnter(to, from, next) {
      store.dispatch('fetchCountry', to.params.code).then(data => {
        to.params.country = data
        next()
      })
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
