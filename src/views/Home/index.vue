<!--
 * @Description: Home
 * @Author: cy2020
 * @Date: 2022-02-20 12:08:08
 * @LastEditTime: 2022-02-21 20:03:09
-->
<template>
  <div class="home-entry">
    <div class="container">
      <HomeCategory />
      <HomeBanner />
    </div>
  </div>
</template>

<script>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
export default {
  name: 'Home',
  components: {
    HomeCategory,
    HomeBanner
  }
}
</script>

<style lang='less' scoped>
</style>
