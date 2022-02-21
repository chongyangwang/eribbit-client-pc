/*
 * @Description: vuex
 * @Author: cy2020
 * @Date: 2022-02-19 16:57:33
 * @LastEditTime: 2022-02-19 16:57:33
 */
import { createStore } from 'vuex'

const moduleA = {
  state: {
    name: 'zs'
  },
  getters: {
    newName (state) {
      return state.name + '!!!!!!'
    }
  }
}

const moduleB = {
  namespaced: true,
  state: {
    name: 'ls'
  },
  getters: {
    newName (state) {
      return state.name + '-----'
    }
  },
  mutations: {
    updateName (state) {
      state.name = 'ls hellow'
    }
  },
  actions: {
    updateName (ctx) {
      ctx.commit('updateName')
    }
  }
}
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    moduleA,
    moduleB
  }
})
