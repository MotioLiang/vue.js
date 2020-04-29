/* eslint-disable no-async-promise-executor */
import router, { resetRouter } from '@/router'

const state = {
    userName: 'motioLiang',
    roles: []
}

const mutations = {
    SET_ROLES: (state, roles) => {
        sessionStorage['roles'] = JSON.stringify(roles)
        state.roles = roles
    }
}

const actions = {
    login({ commit, dispatch }, roles) {
        return new Promise(async (resolve) => {
            commit('SET_ROLES', roles)
            const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
            router.addRoutes(accessRoutes)
            resolve()
        })
    },

    logout({ commit }) {
        return new Promise((resolve) => {
            commit('SET_ROLES', [])
            resetRouter()
            resolve()
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
