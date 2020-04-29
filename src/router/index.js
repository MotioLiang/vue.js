import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const requireAll = require.context('./modules', true, /\.js$/)

// 静态路由表
let constantRoutes = requireAll.keys().reduce((modules, modulePath) => {
    const routerModule = requireAll(modulePath)
    return [...modules, ...routerModule.default]
}, [])

// 添加404
constantRoutes.push({
    path: '*',
    component: () => import(/*  webpackChunkName: "error404"  */ '@/views/error/404/Index.vue')
})

const createRouter = () => new Router({
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
// 重置路由
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
