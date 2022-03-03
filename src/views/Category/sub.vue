<!--
 * @Description: TopCategory
 * @Author: cy2020
 * @Date: 2022-02-20 17:54:38
 * @LastEditTime: 2022-03-03 11:14:20
-->
<template>
<div class="sub-categroy">
  <div class="container">
    <XtxBread>
      <XtxBreadItem to="/">首页</XtxBreadItem>
      <XtxBreadItem :key="category.top.id" v-if="category.top" :to="`/category/${category.top.id}`">{{category.top.name}}</XtxBreadItem>
      <Transition name="fade-right" mode="out-in">
        <XtxBreadItem :key="category.sub.id" v-if="category.sub">{{category.sub.name}}</XtxBreadItem>
      </Transition>
    </XtxBread>
    <SubFilter />
    <div class="goods-list">
      <SubSort> </SubSort>
      <ul>
        <li v-for="item in goodsList" :key="item.id">
          <GoodsItem :goods="item"></GoodsItem >
        </li>
      </ul>
      <XtxInfiniteLoading :loading="loading" :finished="finished" @infinite="getData"></XtxInfiniteLoading >
    </div>
  </div>
</div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { findSubCategoryGoods } from '@/api/category'
import SubFilter from './components/sub-filter.vue'
import SubSort from './components/sub-sort.vue'
import GoodsItem from './components/goods-item.vue'
export default {
  name: 'SubCategory',
  components: {
    SubFilter,
    SubSort,
    GoodsItem
  },
  setup () {
    const route = useRoute()
    const store = useStore()
    const loading = ref(false)
    const finished = ref(false)
    const goodsList = ref([])
    let requestParams = {
      page: 1,
      pageSize: 20
    }
    const category = computed(() => {
      const cate = { }
      store.state.category.list.forEach(top => {
        if (top.children) {
          const sub = top.children.find(sub => { return sub.id === route.params.id })
          if (sub) {
            cate.top = { id: top.id, name: top.name }
            cate.sub = { id: sub.id, name: sub.name }
          }
        }
      })
      return cate
    })
    const getData = () => {
      requestParams.categoryId = route.params.id
      findSubCategoryGoods(requestParams).then(res => {
        if (res.result.items.length) {
          goodsList.value.push(...res.result.items)
          requestParams.page++
        } else {
          finished.value = true
        }
        loading.value = false
      })
    }
    watch(() => route.params.id, (newVal) => {
      if (newVal && `/category/sub/${newVal}` === route.path) {
        goodsList.value = []
        finished.value = false
        requestParams = {
          page: 1,
          pageSize: 20
        }
      }
    })
    return {
      category, loading, finished, goodsList, getData
    }
  }
}
</script>
<style scoped lang="less">
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
    li {
      margin-right: 20px;
      margin-bottom: 20px;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
}
</style>
