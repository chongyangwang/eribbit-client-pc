/*
 * @Description: 分类api
 * @Author: cy2020
 * @Date: 2022-02-20 16:54:18
 * @LastEditTime: 2022-02-20 17:07:13
 */

import request from '@/utils/request'

export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}
