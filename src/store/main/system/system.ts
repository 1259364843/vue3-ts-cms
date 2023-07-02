import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '@/store/types'

import { getPageListData } from '@/service/main/system/system'
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  actions: {
    // 获取整个页面的数据
    async getPageListAction({ commit }, payload: any) {
      console.log(payload)
      // 1.发送网络请求
      const pageRes = await getPageListData(payload.pageUrl, payload.queryInfo)
      console.log(pageRes)
      const { list, totalCount } = pageRes.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  },
  mutations: {
    // 赋值
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, totalCount: number) {
      state.userCount = totalCount
    }
  }
}
export default systemModule
