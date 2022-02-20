/*
 * @Description: vue.config.js
 * @Author: cy2020
 * @Date: 2022-02-20 13:59:40
 * @LastEditTime: 2022-02-20 14:06:00
 */
const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 需要那些文件自动引入
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  }
}
