/*
 * @Description: home
 * @Author: cy2020
 * @Date: 2022-02-21 12:56:19
 * @LastEditTime: 2022-02-21 12:59:01
 */
import request from '@/utils/request'

export const findbrand = (limit = 6) => {
  return request('/home/brand', 'get', { limit })
}
