import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '@/store/types'

import { getPageListData } from '@/service/main/system/system'
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'user':
            return state.userList
          case 'role':
            return state.roleList
          default:
            break
        }
      }
    }
  },
  actions: {
    // 获取整个页面的数据
    async getPageListAction({ commit }, payload: any) {
      console.log(payload)

      const pageName = payload.pageName
      let pageUrl = ''
      switch (pageName) {
        case 'user':
          pageUrl = '/users/list'
          break
        case 'role':
          pageUrl = '/role/list'
          break
        default:
          break
      }
      // 1.发送网络请求
      const pageRes = await getPageListData(pageUrl, payload.queryInfo)
      console.log(pageRes)
      const { list, totalCount } = pageRes.data
      switch (pageName) {
        case 'user':
          commit('changeUserList', list)
          commit('changeUserCount', totalCount)
          break
        case 'role':
          commit('changeRoleList', list)
          commit('changeRoleCount', totalCount)
          break
        default:
          break
      }
    }
  },
  mutations: {
    // 赋值
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, totalCount: number) {
      state.userCount = totalCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, totalCount: number) {
      state.roleCount = totalCount
    }
  }
}
export default systemModule
