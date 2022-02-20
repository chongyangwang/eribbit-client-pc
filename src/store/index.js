/*
 * @Description: vuex
 * @Author: cy2020
 * @Date: 2022-02-19 14:30:10
 * @LastEditTime: 2022-02-19 17:32:10
 */
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user.js'
import cart from './modules/cart.js'
import goods from './modules/goods.js'

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
    goods
  },
  plugins: [
    createPersistedState({
      key: 'key',
      plugins: [user, cart]
    })
  ]
})
