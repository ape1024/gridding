// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui'
import './common/stylus/index.styl'
import 'element-ui/lib/theme-chalk/index.css'
import animated from 'animate.css'
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(ElementUI)
Vue.use(animated)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
