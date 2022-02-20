<!--
 * @Description:演示vuex
 * @Author: cy2020
 * @Date: 2022-02-19 14:30:10
 * @LastEditTime: 2022-02-19 16:29:38
-->
<template>
  <div>
    <p>{{$store.state.moduleA.name}}</p>
    <p>{{$store.getters.newName}}</p>
  </div>
  <hr>
  <div>
    <p>{{$store.state.moduleB.name}}</p>
    <p>{{$store.getters['moduleB/newName']}}</p>
    <button @click="mucationFn">mutations</button >
    <button @click="actionFn">actions</button >
  </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    const mucationFn = () => {
      store.commit('moduleB/updateName')
    }
    const actionFn = () => {
      store.dispatch('moduleB/updateName')
    }
    return {
      mucationFn,
      actionFn
    }
  }
}
</script>
<style lang="less">
</style>
