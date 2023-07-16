import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '@/store/types'

import { getPageListData } from '@/service/main/system/system'
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
        // switch (pageName) {
        //   case 'users':
        //     return state.usersList
        //   case 'role':
        //     return state.roleList
        //   default:
        //     break
        // }
      }
    },
    // 获取数据总条数
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    // 获取整个页面的数据
    async getPageListAction({ commit }, payload: any) {
      console.log(payload)

      const pageName = payload.pageName
      // let pageUrl = ''
      // switch (pageName) {
      //   case 'user':
      //     pageUrl = '/users/list'
      //     break
      //   case 'role':
      //     pageUrl = '/role/list'
      //     break
      //   default:
      //     break
      // }
      const pageUrl = `/${pageName}/list`
      // 1.发送网络请求
      const pageRes = await getPageListData(pageUrl, payload.queryInfo)
      console.log(pageRes)
      const { list, totalCount } = pageRes.data
      // 将数据存到state中
      const changePageName =
        (pageName.slice(0, 1) as string).toUpperCase() + pageName.slice(1)
      // switch (pageName) {
      //   case 'user':
      //     commit('changeUserList', list)
      //     commit('changeUserCount', totalCount)
      //     break
      //   case 'role':
      //     commit('changeRoleList', list)
      //     commit('changeRoleCount', totalCount)
      //     break
      //   default:
      //     break
      // }
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    }
  },
  mutations: {
    // 赋值
    changeUsersList(state, userList: any[]) {
      state.usersList = userList
    },
    changeUsersCount(state, totalCount: number) {
      state.usersCount = totalCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },

    changeRoleCount(state, totalCount: number) {
      state.roleCount = totalCount
    },
    // 商品列表
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, totalCount: number) {
      state.goodsCount = totalCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, totalCount: number) {
      state.menuCount = totalCount
    }
  }
}
export default systemModule
