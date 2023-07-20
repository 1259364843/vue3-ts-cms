import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { IRootState, IStoreType } from './types'

import { getPageListData } from '@/service/main/system/system'
// 导入各个子模块
import login from './login/login'
// 系统管理
import system from './main/system/system'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'sch',
      age: 22,
      entireDepartment: [],
      entireRole: []
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    }
  },
  getters: {},
  actions: {
    // 获取初始化数据
    async getInitialDataAction({ commit }) {
      // 1.请求部门角色数据
      const departmentRes = await getPageListData('/department/list', {
        offset: 0,
        size: 100
      })
      const { list: departmentList } = departmentRes.data
      commit('changeEntireDepartment', departmentList)
      const roleRes = await getPageListData('/role/list', {
        offset: 0,
        size: 100
      })
      const { list: roleList } = roleRes.data
      commit('changeEntireRole', roleList)
    }
  },
  // 模块
  modules: {
    login, //登录模块
    system //系统管理模块
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  store.dispatch('getInitialDataAction')
  // store.dispatch('enter/watchData')
  // store.dispatch('dashboard/getDashboarDataAction')
  // store.dispatch('enter/getInitialDataAction')
}
// 自己的useStore
export function useStore(): Store<IStoreType> {
  return baseUseStore()
}
export default store
