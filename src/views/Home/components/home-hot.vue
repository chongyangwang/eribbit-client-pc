<!--
 * @Description: 热点
 * @Author: cy2020
 * @Date: 2022-02-22 15:10:48
 * @LastEditTime: 2022-02-23 19:38:11
-->
<template>
  <div class="home-hot">
    <HomePanel title="人气推荐" subTitle="人气爆款 不容错过">
        <div ref="target" style="position:relative;height: 426px;">
          <transition name="fade">
            <ul v-if="list.length" class="goods-list">
                <li v-for="item in list" :key="item.id">
                  <RouterLink to="/">
                    <img v-lazy="item.picture" alt="">
                    <p class="name">{{item.title}}</p>
                    <p class="desc">{{item.alt}}</p>
                  </RouterLink>
                </li>
            </ul>
            <HomeSkeleton v-else/>
          </transition>
        </div>
    </HomePanel>
  </div>
</template>
<script>
import HomePanel from './home-panel.vue'
import HomeSkeleton from './home-skeleton.vue'
import { findHot } from '@/api/home'
import { useLazyData } from '@/hooks/index'
export default {
  name: 'HomeNew',
  components: {
    HomePanel,
    HomeSkeleton
  },
  setup () {
    // const list = ref([])
    // findHot().then(data => {
    //   list.value = data.result
    // })
    const { result, target } = useLazyData(findHot)
    return {
      list: result,
      target
    }
  }
}
</script>
<style lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      // padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
