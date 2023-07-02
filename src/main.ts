import { createApp } from 'vue'
import { registerApp } from './global'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 导入样式
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'

// createApp(App).use(router).use(store).use(ElementPlus).mount('#app')

// createApp(App).use(router).use(store).mount('#app')

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
registerApp(app)
setupStore()
app.use(router)
app.use(store)
app.mount('#app')
