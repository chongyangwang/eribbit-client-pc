/*
 * @Description: 组件库文件
 * @Author: cy2020
 * @Date: 2022-02-21 15:59:50
 * @LastEditTime: 2022-02-23 19:34:18
 */

import XtxSkeleton from './xtx-skeleton.vue'
import XtxCarousel from './xtx-carousel.vue'
import XtxMore from './xtx-more.vue'
import defaultPng from '@/assets/images/200.png'
export default {
  install (app) {
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
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
