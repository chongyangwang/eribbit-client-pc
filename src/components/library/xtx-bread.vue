<!--
 * @Description: Bread
 * @Author: cy2020
 * @Date: 2022-02-24 16:33:47
 * @LastEditTime: 2022-02-24 17:06:02
-->
<script>
import { h } from 'vue'
export default {
  name: 'XtxBread',
  render () {
    // createElement
    const elements = this.$slots.default()
    const domanic = []
    elements.forEach((ele, index) => {
      domanic.push(ele)
      if (index < elements.length - 1) {
        domanic.push(h('i', { class: 'iconfont icon-angle-right' }))
      }
    })
    return h('div', { class: 'xtx-bread' }, domanic)
  }
}
</script>
<style lang='less'>
// 去除 scoped 属性，目的：然样式作用到xtx-bread-item组件
.xtx-bread{
  display: flex;
  padding: 25px 10px;
  // ul li:last-child {}
  // 先找到父元素，找到所有的子元素，找到最后一个，判断是不是LI，是就是选中，不是就是无效选择器
  // ul li:last-of-type {}
  // 先找到父元素，找到所有的类型为li的元素，选中最后一个
  &-item {
    a {
      color: #666;
      transition: all .4s;
      &:hover {
        color: @xtxColor;
      }
    }
  }
  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
    // 样式的方式，不合理
    // &:last-child {
    //   display: none;
    // }
  }
}
</style>
