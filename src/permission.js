import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    if (to.path === '/login') {
        sessionStorage.removeItem('roles')
        next()
        NProgress.done()
    } else {
        const hasRoles = store.getters.roles && store.getters.roles.length > 0
        if (hasRoles) {
            next()
        } else {
            let roles = sessionStorage.getItem('roles')
            if (roles) {
                let arr = JSON.parse(roles)
                await store.commit('user/SET_ROLES', arr)
                const accessRoutes = await store.dispatch('permission/generateRoutes', arr)
                router.addRoutes(accessRoutes)
                next({ ...to, replace: true })
                NProgress.done()
            } else {
                next({ path: '/login' })
                NProgress.done()
            }
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})
