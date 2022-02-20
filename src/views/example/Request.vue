<!--
 * @Description: 111
 * @Author: cy2020
 * @Date: 2022-02-19 14:30:10
 * @LastEditTime: 2022-02-20 11:47:06
-->
<template>
  <div>
    <button @click="requestFn">request</button >
  </div>
</template>
<script>
import request from '@/utils/request'
export default {
  name: 'App',
  setup () {
    const requestFn = () => {
      request('/member/profile', 'get', { a: 1 })
    }
    return {
      requestFn
    }
  }
}
</script>
<style lang="less">
</style>
