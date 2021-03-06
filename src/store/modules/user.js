/*
 * @Description: user
 * @Author: cy2020
 * @Date: 2022-02-19 16:58:03
 * @LastEditTime: 2022-02-20 11:29:45
 */
export default {
  namespaced: true,
  state: () => {
    return {
      profile: {
        account: '',
        token: ''
      }
    }
  },
  mutations: {
    setUser (state, payload) {
      state.profile = payload
    }
  },
  actions: {},
  modules: {}
}
