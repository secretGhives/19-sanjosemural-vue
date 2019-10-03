import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Who from './views/Who.vue'
import What from './views/What.vue'
import Where from './views/Where.vue'
import How from './views/How.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/who',
      name: 'who',
      component: Who
    },
    {
      path: '/what',
      name: 'what',
      component: What
    },
    {
      path: '/where',
      name: 'where',
      component: Where
    },
    {
      path: '/how',
      name: 'how',
      component: How
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
