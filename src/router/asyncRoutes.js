export default [{
    path: '/about',
    meta: { roles: ['admin'] },
    component: () => import(/*  webpackChunkName: "about" */ '@/views/About.vue')
}]
