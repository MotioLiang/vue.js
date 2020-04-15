import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import router from '@/router'
import store from '@/store/index'
import '@/permission'
import '@/components'
import '@/plugins'
import '@/filters'
import '@/assets/icons'

Vue.config.errorHandler = function (err, vm, info) {
  console.log(err, vm, info)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
