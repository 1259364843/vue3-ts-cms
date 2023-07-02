import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { IRootState, IStoreType } from './types'
// 导入各个子模块
import login from './login/login'
// 系统管理
import system from './main/system/system'
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
    login, //登录模块
    system //系统管理模块
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  // store.dispatch('enter/watchData')
  // store.dispatch('dashboard/getDashboarDataAction')
  // store.dispatch('enter/getInitialDataAction')
}
// 自己的useStore
export function useStore(): Store<IStoreType> {
  return baseUseStore()
}
export default store
