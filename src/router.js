import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NewQuiz from './views/New-Quiz'
import Results from './views/Results'
import Login from './views/Login'
import Quizs from './views/ViewQuiz'
import Settings from './views/Settings'
import Users from './views/Users'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
        path: '/',
        name: 'login',
        component: Login
      },
      {
        path: '/home',
        name: 'home',
        component: Home,
        props: true
      },
      {
        path: '/new-quiz',
        name: 'new-quiz',
        component: NewQuiz,
        props: true
      },
      {
        path: '/results',
        name: 'results',
        component: Results,
        props: true
      },
      {
        path: '/quizs',
        name: 'quiz',
        component: Quizs,
        props: true
      },
      {
          path: '/users',
          name: 'users',
          component: Users,
          props: true
      },
      {
          path: '/settings',
          name: 'settings',
          component: Settings,
          props: true
      }
  ]
})
