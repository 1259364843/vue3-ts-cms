import { createApp } from 'vue'
import { registerApp } from './global'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// 导入样式
import 'normalize.css'
import './assets/css/index.less'
import acRequset from './service'
import App from './App.vue'
import router from './router'
import store from './store'

// createApp(App).use(router).use(store).use(ElementPlus).mount('#app')

// createApp(App).use(router).use(store).mount('#app')

const app = createApp(App)
registerApp(app)
app.use(router)
app.use(store)
app.mount('#app')

interface DataType {
  data: any
}

acRequset
  .get<DataType>({
    url: '/',
    showLoading: true
  })
  .then((res) => {
    console.log(res, '1')
  })
