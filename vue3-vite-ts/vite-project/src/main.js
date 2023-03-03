import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局样式
import './styles/index.scss'

import ElementPlus from 'plugins/element-plus.js'

const app = createApp(App);

app.use(router).use(store).use(ElementPlus).mount('#app')