/*
 * @Description: 组件库文件
 * @Author: cy2020
 * @Date: 2022-02-21 15:59:50
 * @LastEditTime: 2022-02-21 20:07:43
 */

import XtxSkeleton from './xtx-skeleton.vue'
import XtxCarousel from './xtx-carousel.vue'
export default {
  install (app) {
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
  }
}
