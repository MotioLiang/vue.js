import Vue from 'vue'

let filters = {}

const requireAll = require.context('./', true, /\.js$/)

requireAll.keys().forEach(url => {
  if (url === './index.js') return
  const routerModule = requireAll(url)
  filters = {
    ...filters,
    ...routerModule.default
  }
})


// 过滤器
for (const key in filters) {
  if (filters.hasOwnProperty(key)) {
    Vue.filter(`${key}`, filters[key])
  }
}




