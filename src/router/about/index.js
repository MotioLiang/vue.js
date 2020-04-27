export default [{
    path: '/about',
    component: () => import(/*  webpackChunkName: "about" */ '@/views/About.vue')
}]
