<!--
 * @Description: xtx-more
 * @Author: cy2020
 * @Date: 2022-02-22 14:57:44
 * @LastEditTime: 2022-02-22 15:26:50
-->
<template>
    <router-link :to="path" class="xtx-more">
        <span>查看更多</span>
        <i class="iconfont icon-angle-right"></i>
    </router-link >
</template>
<script>
export default {
  name: 'XtxMore',
  props: {
    path: {
      type: String,
      default: '/'
    }
  }
}
</script>
<style lang="less" scoped>
.xtx-more {
  margin-bottom: 2px;
  span {
    font-size: 16px;
    vertical-align: middle;
    margin-right: 4px;
    color: #999;
  }
  i {
    font-size: 14px;
    vertical-align: middle;
    position: relative;
    top: 2px;
    color: #ccc;
  }
  &:hover {
    span,i {
      color: @xtxColor;
    }
  }
}
</style>
