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

const router = new Router({
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
        props: true,
          meta:{
            requiresAuth: true
          }
      },
      {
        path: '/new-quiz',
        name: 'new-quiz',
        component: NewQuiz,
        props: true,
          meta:{
              requiresAuth: true
          }
      },
      {
        path: '/results',
        name: 'results',
        component: Results,
        props: true,
          meta:{
              requiresAuth: true
          }
      },
      {
        path: '/quizs',
        name: 'quiz',
        component: Quizs,
        props: true,
          meta:{
              requiresAuth: true
          }
      },
      {
          path: '/users',
          name: 'users',
          component: Users,
          props: true,
          meta:{
              requiresAuth: true
          }
      },
      {
          path: '/settings',
          name: 'settings',
          component: Settings,
          props: true,
          meta:{
              requiresAuth: true
          }
      }
  ]
});


router.beforeEach((to,from,next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if(requiresAuth){
        if(!window.Acme.store.loggedInState){
            next({
                path: '/'
            })
        } else {
            next();
        }
    } else {
        next()
    }
});

export default router;