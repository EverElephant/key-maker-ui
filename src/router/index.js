import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Register from '../views/Register'
import Home from '../views/Home'
import MakeKey from '../views/MakeKey'
import Download from '../views/Download'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Login
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[
      {
          path:'/makeKey',
          name:'makeKey',
          component:MakeKey
      },{
        path:'/download',
        name:'download',
        component:Download
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
