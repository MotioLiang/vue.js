import Vue from 'vue'

const requireAll = require.context('./global', true, /\.js$/)

requireAll.keys().forEach(url => {
    const componentConfig = requireAll(url)
    const ctr = componentConfig.default
    Vue.component(ctr.name, ctr)
})
