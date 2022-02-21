<!--
 * @Description: Layout
 * @Author: cy2020
 * @Date: 2022-02-19 14:51:45
 * @LastEditTime: 2022-02-20 19:01:33
-->
<template>
  <AppNavBar />
  <AppHeader />
  <AppHeaderSticky />
  <div class="app-body">
    <router-view></router-view>
  </div >
  <AppFooter />
</template>

<script>
import AppNavBar from '../components/app-navbar.vue'
import AppHeader from '../components/app-header.vue'
import AppFooter from '../components/app-footer.vue'
import AppHeaderSticky from '../components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  name: 'Layout',
  components: {
    AppNavBar,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>
