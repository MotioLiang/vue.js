import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routers = []

const requireAll = require.context('./', true, /\.js$/)

requireAll.keys().forEach(url => {
  if (url === './index.js') return
  const routerModule = requireAll(url)
  routers = [...routers, ...routerModule.default]
})

// 添加404
routers.push({
  path: '*',
  component: () => import(/*  webpackChunkName: "error404"  */ '@/views/error/404/Index.vue')
})

let router = new Router({
  routes: routers
})

export default router
