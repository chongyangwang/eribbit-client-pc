/*
 * @Description: main.js
 * @Author: cy2020
 * @Date: 2022-02-19 14:30:10
 * @LastEditTime: 2022-02-19 15:00:49
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Layout from '@/views/Layout.vue'

createApp(App).use(store).use(router).mount('#app')
