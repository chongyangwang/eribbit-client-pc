/*
 * @Description: 分类api
 * @Author: cy2020
 * @Date: 2022-02-20 16:54:18
 * @LastEditTime: 2022-02-24 19:19:58
 */

import request from '@/utils/request'

export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}

export const findTopCateGory = (id) => {
  return request('/category', 'get', { id })
}
