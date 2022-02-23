/*
 * @Description: home
 * @Author: cy2020
 * @Date: 2022-02-21 12:56:19
 * @LastEditTime: 2022-02-23 18:45:28
 */
import request from '@/utils/request'

export const findbrand = (limit = 6) => {
  return request('/home/brand', 'get', { limit })
}

export const findBanner = () => {
  return request('/home/banner', 'get')
}

export const findNew = () => {
  return request('/home/new', 'get')
}

export const findHot = () => {
  return request('/home/hot', 'get')
}

export const findGoods = () => {
  return request('/home/goods', 'get')
}

export const findSpecial = () => {
  return request('/home/special', 'get')
}
