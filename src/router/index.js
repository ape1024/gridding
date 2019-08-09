import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../components/homepage/homepage'
import operationSetting from '../components/operationSetting/operationSetting'
import messageSettings from '../components/messageSettings/messageSettings'
import login from '../components/login/login'
import typographicSettings from '../components/typographicSettings/typographicSettings'
import role from '../components/role/role'
import taskManagement from '../components/taskManagement/taskManagement'
import subscriber from '../components/subscriber/subscriber'
import trainNumber from '../components/trainNumber/trainNumber'

import management from '../components/management/management'
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
          path: 'operationSetting',
          name: 'operationSetting',
          component: operationSetting
        },
        {
          path: 'messageSettings',
          name: 'messageSettings',
          component: messageSettings
        },
        {
          path: 'typographicSettings',
          name: 'typographicSettings',
          component: typographicSettings
        },
        {
          path: 'role',
          name: 'role',
          component: role
        },
        {
          path: 'taskManagement',
          name: 'taskManagement',
          component: taskManagement
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
          path: 'management',
          name: 'management',
          component: management
        }
      ]
    }
  ]
})
