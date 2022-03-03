/*
 * @Description: 分类api
 * @Author: cy2020
 * @Date: 2022-02-20 16:54:18
 * @LastEditTime: 2022-03-03 10:50:47
 */

import request from '@/utils/request'

export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}

export const findTopCateGory = (id) => {
  return request('/category', 'get', { id })
}

export const findSubCategoryFilter = (id) => {
  return request('/category/sub/filter', 'get', { id })
}

export const findSubCategoryGoods = (params) => {
  return request('/category/goods/temporary', 'post', params)
}
