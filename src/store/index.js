/*
 * @Description: vuex
 * @Author: cy2020
 * @Date: 2022-02-19 14:30:10
 * @LastEditTime: 2022-02-21 16:42:41
 */
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user.js'
import cart from './modules/cart.js'
import category from './modules/category.js'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    cart,
    category
  },
  plugins: [
    createPersistedState({
      key: 'key',
      paths: ['user', 'cart']
    })
  ]
})
