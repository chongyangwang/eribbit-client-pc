<!--
 * @Description:
 * @Author: cy2020
 * @Date: 2022-02-20 11:29:05
 * @LastEditTime: 2022-02-20 16:57:33
-->
<template>
  <div>
    <p>{{$store.state.user.profile.account}}</p>
    <button @click="mucationFn">mutations</button >
  </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    const mucationFn = () => {
      store.commit('user/setUser', { account: 'zsy' })
    }
    return {
      mucationFn
    }
  }
}
</script>
<style lang="less">
</style>
