<!--
 * @Description: TopCategory
 * @Author: cy2020
 * @Date: 2022-02-20 17:54:38
 * @LastEditTime: 2022-03-01 16:00:51
-->
<template>
  <div class="top-category">
    <div class="container">
      <xtx-bread>
        <xtx-bread-item>首页</xtx-bread-item>
        <transition name="fade-right" mode="out-in">
          <xtx-bread-item :key="category && category.id">{{category && category.name}}</xtx-bread-item >
        </transition >
      </xtx-bread>
      <xtx-carousel :sliders="sliders" autoPlay style="height:500px"></xtx-carousel >
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="sub in category && category.children" :key="sub.id">
            <a href="javascript:;">
              <img :src="sub.picture" >
              <p>{{sub.name}}</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="ref-goods" v-for="sub in sublist" :key="sub.id">
        <div class="head">
          <h3>- {{sub.name}} -</h3>
          <p class="tag">温暖柔软，品质之选</p>
          <XtxMore :path="`/category/sub/${sub.id}`" />
        </div>
        <div class="body">
          <goods-item v-for="goods in sub.goods" :key="goods.id" :goods="goods"></goods-item>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed, ref, watch } from 'vue'
import { findBanner } from '@/api/home'
import { findTopCateGory } from '@/api/category'
import GoodsItem from './components/goods-item.vue'
export default {
  name: 'TopCategory',
  components: {
    GoodsItem
  },
  setup () {
    const store = useStore()
    const currentRoute = useRoute()
    const category = computed(() => {
      return store.state.category.list.find(cate => {
        return cate.id === currentRoute.params.id
      })
    })
    const sliders = ref([])
    findBanner().then(res => {
      sliders.value = res.result
    })
    const sublist = ref([])
    const getSubList = () => {
      findTopCateGory(currentRoute.params.id).then(res => {
        sublist.value = res.result.children
      })
    }
    watch(() => currentRoute.params.id, (newVal) => {
      if (newVal && `/category/${newVal}` === currentRoute.path) {
        getSubList()
      }
    }, { immediate: true })
    return {
      category,
      sliders,
      sublist
    }
  }
}
</script>

<style scoped lang="less">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      min-height: 160px;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
  // 推荐商品
  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }
    .body {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0 65px 30px;
    }
  }
}
</style>
