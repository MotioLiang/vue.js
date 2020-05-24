'use strict'

import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'

// 根据不同的状态码，生成不同的提示信息
// const showStatus = (status) => {
//   let message = ''
//   switch (status) {
//     case 400:
//       message = '请求错误(400)'
//       break
//     case 401:
//       message = '未授权，请重新登录(401)'
//       break
//     case 403:
//       message = '拒绝访问(403)'
//       break
//     case 404:
//       message = '请求出错(404)'
//       break
//     case 408:
//       message = '请求超时(408)'
//       break
//     case 500:
//       message = '服务器错误(500)'
//       break
//     case 501:
//       message = '服务未实现(501)'
//       break
//     case 502:
//       message = '网络错误(502)'
//       break
//     case 503:
//       message = '服务不可用(503)'
//       break
//     case 504:
//       message = '网络超时(504)'
//       break
//     case 505:
//       message = 'HTTP版本不受支持(505)'
//       break
//     default:
//       message = `连接出错(${status})!`
//   }
//   return `${message}，请检查网络或联系管理员！`
// }

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let config = {
    baseURL: process.env.VUE_APP_BASE_API || process.env.apiUrl || '',
    timeout: 60 * 1000 // Timeout
    // withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error)
    }
)

// Add a response interceptor
_axios.interceptors.response.use(
    function (response) {
        // Do something with response data
        const responseCode = response.status
        if (responseCode === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    function (error) {
        // Do something with response error
        // 请求超时，断网状态
        if (!error.response) {
            if (error.message.includes('timeout')) {
                return Message('请求超时')
            } else {
                return Message('网络已断开')
            }
        }

        // 服务器返回的不是2 开头的情况，根据返回的状态码进行不同的操作
        const responseCode = error.response.status
        switch (responseCode) {
            case 404:
                Message('网络请求不存在404！')
                break
        }
        return Promise.reject(error)
    }
)

Plugin.install = function (Vue) {
    Vue.axios = _axios
    window.axios = _axios
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios
            }
        },
        $axios: {
            get() {
                return _axios
            }
        }
    })
}

Vue.use(Plugin)

export default Plugin
