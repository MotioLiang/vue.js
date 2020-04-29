import asyncRoutes from '@/router/asyncRoutes'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.includes(role))
    } else {
        return true
    }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
    const res = []

    routes.forEach(route => {
        const tmp = { ...route }
        if (hasPermission(roles, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children, roles)
            }
            res.push(tmp)
        }
    })

    return res
}

const actions = {
    // eslint-disable-next-line no-unused-vars
    generateRoutes({ commit }, roles) {
        return new Promise(resolve => {
            let accessedRoutes
            // if (roles.includes('admin')) {
            //     accessedRoutes = asyncRoutes || []
            // } else {
            // accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
            // }
            accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
            resolve(accessedRoutes)
        })
    }
}

export default {
    namespaced: true,
    actions
}
