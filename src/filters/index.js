import Vue from 'vue'

const requireAll = require.context('./', true, /\.js$/)

let filters = requireAll.keys().reduce((modules, modulePath) => {
    if (modulePath === './index.js') {
        return modules
    }
    const obj = requireAll(modulePath)
    return { ...modules, ...obj.default }
}, {})


// 过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})




