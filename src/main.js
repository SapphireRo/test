import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import alovaInstance from '@/request/request.js'
const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.use(alovaInstance)
app.mount('#app')
