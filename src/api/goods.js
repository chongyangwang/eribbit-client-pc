/*
 * @Description: goods
 * @Author: cy2020
 * @Date: 2022-03-04 10:00:35
 * @LastEditTime: 2022-03-04 10:00:35
 */

import request from '@/utils/request'

export const findGoods = (id) => {
  return request('/goods', 'get', { id })
}
