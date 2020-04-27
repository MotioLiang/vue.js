export default [{
    path: '/',
    component: () => import(/*  webpackChunkName: "home" */ '@/views/Home.vue')
}]
