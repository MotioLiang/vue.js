import axios from 'axios'
import qs from 'qs'
import store from '@/store'
import { Message } from 'element-ui'
import { showFullScreenLoading, hideFullScreenLoading } from './axiosLoading'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let config = {
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 30 * 1000,
    transformRequest: function (data) {
        return data ? qs.stringify(data) : data
    },
}

// token失效执行结果的开关
// let tokenInvalidFlag = false

// 退出登录
function logoutFn() {
    Message.error('登录信息过期，请重新登录')
    store.dispatch('user/logoutFn').then(() => {
        setTimeout(() => {
            window.location.reload()
        }, 500)
    })
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
    function (config) {
        showFullScreenLoading()
        const token = store.getters.token
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    function (error) {
        hideFullScreenLoading()
        return Promise.reject(error)
    }
)

_axios.interceptors.response.use(
    function (response) {
        hideFullScreenLoading()

        // const { ret_code, result, ret_msg } = response.data

        // // 成功
        // if (ret_code === 200) {
        //     return Promise.resolve({ ret_msg, result })
        // }

        // // 账号不存在
        // if (ret_code === 404) {
        //     Message.error(ret_msg)
        //     return Promise.reject(result, ret_msg)
        // }

        // // token过期
        // if (ret_code === 401) {
        //     // 多个接口异常 执行一次退出
        //     if (!tokenInvalidFlag) logoutFn()
        //     tokenInvalidFlag = true
        //     return Promise.reject(ret_code)
        // }

        // 抛出不处理异常
        // Message.error(ret_msg)
        // return Promise.reject({ result, ret_msg })

        return Promise.resolve(response.data)
    },

    function (error) {
        hideFullScreenLoading()

        // 请求超时，断网状态
        if (!error.response) {
            if (error.message.includes('timeout')) {
                Message.error('请求超时')
                return Promise.reject(error)
            } else {
                Message.error('网络链接失败')
                return Promise.reject(error)
            }
        }

        // 服务器返回的不是2 开头的情况
        const responseCode = error.response.status
        switch (responseCode) {
            case 404:
                Message.error('网络请求不存在')
                break
            case 401:
                logoutFn()
                break
            case 500:
                Message.error('服务异常 500')
                break
            case 502:
                Message.error('服务异常 502')
                break
        }
        return Promise.reject(error)
    }
)

//  上传文件
export const uploadFile = formData => {
    const res = _axios.request({
        method: 'post',
        url: '/upload',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
    return res
}

export default _axios


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