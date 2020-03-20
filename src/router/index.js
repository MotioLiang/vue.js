import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

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

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
