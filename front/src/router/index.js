import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' /* V*/
import Board from '../views/BoardDetails.vue'
import EditTask from '../views/EditTask.vue'
import Login from '../views/EditTask.vue' /* V*/
import Signup from '../views/Signup.vue'  /* V*/


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/board/:_id',
    name: 'board',
    component: Board,
    children: [
      {
        path: '/task/edit/:_id?',
        component: EditTask,
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
