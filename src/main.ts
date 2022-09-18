import { createApp } from 'vue'
import { registerApp } from './global'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
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
