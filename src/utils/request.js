/*
 * @Description: request
 * @Author: cy2020
 * @Date: 2022-02-20 11:04:15
 * @LastEditTime: 2022-02-21 16:37:15
 */

import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 实现请求拦截
// 携带token
// 处理请求未授权
// 测试请求是否生效
const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseURL,
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const { profile } = store.state.user
  if (profile.token) {
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  if (error.response && error.response.status === 401) {
    // 清除用户信息
    store.commit('user/setUser', {})
    // 携带当前页面的路径 至登录页面
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirect=' + fullPath)
  }
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default (url, method, data) => {
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: data
  })
}
