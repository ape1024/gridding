import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../components/homepage/homepage'
import functional from '../components/functional/functional'
import login from '../components/login/login'
import region from '../components/region/region'
import role from '../components/role/role'
import scheduling from '../components/scheduling/scheduling'
import subscriber from '../components/subscriber/subscriber'
import trainNumber from '../components/trainNumber/trainNumber'
import working from '../components/working/working'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/homepage',
      component: homepage,
      children: [
        {
          path: 'functional',
          name: 'functional',
          component: functional
        },
        {
          path: 'functional',
          name: 'functional',
          component: functional
        },
        {
          path: 'region',
          name: 'region',
          component: region
        },
        {
          path: 'role',
          name: 'role',
          component: role
        },
        {
          path: 'scheduling',
          name: 'scheduling',
          component: scheduling
        },
        {
          path: 'subscriber',
          name: 'subscriber',
          component: subscriber
        },
        {
          path: 'trainNumber',
          name: 'trainNumber',
          component: trainNumber
        },
        {
          path: 'working',
          name: 'working',
          component: working
        }
      ]
    }
  ]
})
