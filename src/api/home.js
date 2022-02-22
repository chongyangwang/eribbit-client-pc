/*
 * @Description: home
 * @Author: cy2020
 * @Date: 2022-02-21 12:56:19
 * @LastEditTime: 2022-02-22 15:18:20
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
