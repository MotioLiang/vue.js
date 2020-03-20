import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import router from './router'
import store from './store/index'
import './components'
import './filters/index'
import './plugins/element.js'
import './plugins/axios'

import "./assets/icons";



Vue.config.errorHandler = function (err, vm, info) {
  console.log(err, vm, info)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
