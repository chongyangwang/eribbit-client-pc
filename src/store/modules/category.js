/*
 * @Description: category
 * @Author: cy2020
 * @Date: 2022-02-19 16:58:40
 * @LastEditTime: 2022-02-20 18:05:57
 */
import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'
export default {
  namespaced: true,
  state: () => {
    return {
      list: topCategory.map(item => ({ name: item }))
    }
  },
  mutations: {
    setList (state, payload) {
      state.list = payload
    },
    show (state, payload) {
      const category = state.list.find(item => item.id === payload.id)
      category.open = true
    },
    hide (state, payload) {
      const category = state.list.find(item => item.id === payload.id)
      category.open = false
    }
  },
  actions: {
    async getList ({ commit }) {
      const data = await findAllCategory()
      data.result.forEach(item => { item.open = false })
      commit('setList', data.result)
    }
  },
  modules: {}
}
