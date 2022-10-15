import { Module } from 'vuex'
// 导入类型
import { IloginState } from './types'
import { IRootState } from '../types'

// 登录接口
import { IAccount } from '@/service/login/type'
import { accountLoginRequest } from '@/service/login/login'
const loginModule: Module<IloginState, IRootState> = {
  // 命名空间
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {
    // 修改state唯一的方法就是mutation
    changeToken(state, token: string) {
      state.token = token
    }
  },
  getters: {},
  actions: {
    // 账号登录action
    async accountLoginAction({ commit }, payload: IAccount) {
      console.log('accountLoginAction', payload)
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      console.log(loginResult)
      const { id, token } = loginResult.data
      // 发起mutations
      commit('changeToken', token)
    }
  }
}

// 导出登录模块
export default loginModule
