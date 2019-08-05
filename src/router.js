import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NewQuiz from './views/New-Quiz'
import Results from './views/Results'
import Login from './views/Login'

Vue.use(Router);

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
        path: '/new-quiz',
        name: 'new-quiz',
        component: NewQuiz
      },
      {
          path: '/results',
          name: 'results',
          component: Results
      },
      {
          path: '/login',
          name: 'login',
          component: Login
      }
  ]
})
