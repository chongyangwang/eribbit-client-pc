<!--
 * @Description: Home
 * @Author: cy2020
 * @Date: 2022-02-20 12:08:08
 * @LastEditTime: 2022-02-20 19:30:12
-->
<template>
  <div class="home-entry">
    <div class="container">
      <HomeCategory />
    </div>
  </div>
</template>

<script>
import HomeCategory from './components/home-category.vue'
export default {
  name: 'Home',
  components: {
    HomeCategory
  }
}
</script>

<style lang='less' scoped>
</style>
