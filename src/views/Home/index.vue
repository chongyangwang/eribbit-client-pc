<!--
 * @Description: Home
 * @Author: cy2020
 * @Date: 2022-02-20 12:08:08
 * @LastEditTime: 2022-02-23 18:44:40
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
  <HomeProduct />
  <HomeSpecial />
</template>
<script>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
import HomeBrand from './components/home-brand.vue'
import HomeProduct from './components/home-product.vue'
import HomeSpecial from './components/home-special.vue'
export default {
  name: 'Home',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
    HomeBrand,
    HomeProduct,
    HomeSpecial
  }
}
</script>
