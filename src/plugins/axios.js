'use strict'

import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let config = {
  baseURL: process.env.VUE_APP_baseURL || process.env.apiUrl || '',
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

Plugin.install = function (Vue, options) {
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
