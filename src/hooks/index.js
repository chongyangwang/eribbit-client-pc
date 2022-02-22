/*
 * @Description: hooks
 * @Author: cy2020
 * @Date: 2022-02-22 17:58:20
 * @LastEditTime: 2022-02-22 18:32:38
 */
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
export const useLazyData = (apiFn) => {
  const result = ref([])
  const target = ref(null)
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        stop()
        // 执行请求函数
        apiFn().then(data => {
          result.value = data.result
        })
      }
    },
    {
      threshold: 0
    }
  )
  return {
    result,
    target
  }
}
