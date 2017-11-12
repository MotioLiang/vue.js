// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResuorce from 'vue-resource'
import Routers from './routers'

Vue.config.productionTip = false

Vue.use(VueResuorce)
Vue.use(VueRouter)
const router = new VueRouter({
   routes:Routers,
   mode:"history"
})
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
