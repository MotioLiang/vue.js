import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import router from '@/router'
import store from '@/store/index'
import dayjs from 'dayjs'
import '@/permission'
import '@/components'
import '@/plugins'
import '@/filters'
import '@/assets/icons'

Vue.config.errorHandler = function (err, vm, info) {
    console.log(err, vm, info)
}

Vue.config.productionTip = false

Vue.prototype.$day = dayjs

if (process.env.NODE_ENV !== 'production') {
    Vue.prototype.$log = window.console.log
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
