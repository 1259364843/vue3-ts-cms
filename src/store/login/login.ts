import { Module } from 'vuex'
// 导入类型
import { IloginState } from './types'
import { IRootState } from '../types'
// 登录接口
import { IAccount } from '@/service/login/types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/map-menu'
// 路由对象
import router from '@/router'
// Module必须传入泛型类型,两个参数,第一个是模块中state类型,第二个是根state的类型
const loginModule: Module<IloginState, IRootState> = {
  // 命名空间
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}, //用户信息
      userMenus: [] //用户菜单信息
    }
  },
  mutations: {
    // 修改state唯一的方法就是mutation
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      // 动态获取用户的菜单和路由
      const routes = mapMenusToRoutes(userMenus)
      console.log(routes)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      console.log(routes)
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
      // 存储token到本地
      localCache.setCache('token', token)
      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      console.log(userInfoResult)
      const userInfo = userInfoResult.data
      // 存储用户信息
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3.请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      console.log(userMenus)
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4.跳转到后台首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

// 导出登录模块
export default loginModule
