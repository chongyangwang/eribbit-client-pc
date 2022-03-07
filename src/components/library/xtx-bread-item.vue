<!--
 * @Description: breaditem
 * @Author: cy2020
 * @Date: 2022-02-24 16:42:52
 * @LastEditTime: 2022-03-07 15:29:18
-->
<template>
    <div class="xtx-bread-item">
      <router-link v-if="to" :to="to"><slot></slot></router-link>
      <span v-else><slot></slot></span>
    </div >
</template>
<script>
export default {
  name: 'XtxBreadItem',
  props: {
    to: {
      type: [String || Object],
      default: ''
    }
  }
}
</script>
