export default [{
    path: '/login',
    component: () => import(/*  webpackChunkName: "login" */ '@/views/Login.vue')
}]
