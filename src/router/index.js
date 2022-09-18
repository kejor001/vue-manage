import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
const CommentHome = () => import('../views/commenthome.vue')
const Mall = () => import('../views/mall.vue')
const User = () => import('../views/user.vue')
const pageOne = () => import('../views/pageOne.vue')
const pageTwo = () => import('../views/pageTwo.vue')
const Login = () => import('../views/login.vue')
const Home = () => import('../views/home.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'Main',
    component: Home,
    children: [
      {
        path: '/home',
        component: CommentHome,
        name: 'home'
      },
      {
        path: '/user',
        name: 'user',
        component: User
      },
      {
        path: '/mall',
        name: 'mall',
        component: Mall
      },
      {
        path: '/page1',
        name: 'page1',
        component: pageOne
      },
      {
        path: '/page2',
        name: 'page2',
        component: pageTwo
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
