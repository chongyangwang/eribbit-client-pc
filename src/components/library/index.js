/*
 * @Description: 组件库文件
 * @Author: cy2020
 * @Date: 2022-02-21 15:59:50
 * @LastEditTime: 2022-02-24 17:33:50
 */
import defaultPng from '@/assets/images/200.png'
// import XtxSkeleton from './xtx-skeleton.vue'
// import XtxCarousel from './xtx-carousel.vue'
// import XtxMore from './xtx-more.vue'
// import XtxBread from './xtx-bread.vue'
// import XtxBreadItem from './xtx-bread-item.vue'

const importFn = require.context('./', false, /\.vue$/)

export default {
  install (app) {
    // app.component(XtxSkeleton.name, XtxSkeleton)
    // app.component(XtxCarousel.name, XtxCarousel)
    // app.component(XtxMore.name, XtxMore)
    // app.component(XtxBread.name, XtxBread)
    // app.component(XtxBreadItem.name, XtxBreadItem)
    // 动态查找 并批量注册
    importFn.keys().forEach(path => {
      const component = importFn(path).default
      app.component(component.name, component)
    })
    defineDirective(app)
  }
}

function defineDirective (app) {
  app.directive('lazy', {
    mounted (el, binding) {
      const observe = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          observe.unobserve(el)
          el.src = binding.value
          el.onerror = () => {
            el.src = defaultPng
          }
        }
      }, {
        threshold: 0
      })
      observe.observe(el)
    }
  })
}
