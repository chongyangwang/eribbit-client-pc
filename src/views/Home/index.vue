<!--
 * @Description: Home
 * @Author: cy2020
 * @Date: 2022-02-20 12:08:08
 * @LastEditTime: 2022-02-22 19:05:13
-->
<template>
  <div class="home-entry">
    <div class="container">
      <HomeCategory />
      <HomeBanner />
    </div>
  </div>
  <HomeNew />
  <HomeHot />
  <HomeBrand />
</template>
<script>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
import HomeBrand from './components/home-brand.vue'
export default {
  name: 'Home',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
    HomeBrand
  }
}
</script>
