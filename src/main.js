import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Tabs from './components/tabs'

Vue.config.productionTip = false

const iview = {
  tabs: Tabs,
  tabPane: Tabs.Pane
}

Object.keys(iview).forEach(key => Vue.component(key, iview[key]))

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
