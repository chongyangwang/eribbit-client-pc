/*
 * @Description: main.js
 * @Author: cy2020
 * @Date: 2022-02-19 14:30:10
 * @LastEditTime: 2022-02-20 15:35:06
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
// 2. 自己项目的重置样式和公用样式
import '@/assets/styles/common.less'

createApp(App).use(store).use(router).mount('#app')
