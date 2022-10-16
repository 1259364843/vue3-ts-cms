import { createStore } from 'vuex'
import { IRootState } from './types'
// 导入各个子模块
import login from './login/login'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'sch',
      age: 22
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  // 模块
  modules: {
    login
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  // store.dispatch('enter/watchData')
  // store.dispatch('dashboard/getDashboarDataAction')
  // store.dispatch('enter/getInitialDataAction')
}
export default store
