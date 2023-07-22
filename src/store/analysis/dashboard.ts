import { Module } from 'vuex'
import { IDashboardState } from './types'
import { IRootState } from '../types'
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/analysis/dashboard'
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCctegoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const res1 = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', res1.data)
      const res2 = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', res2.data)
      const res3 = await getCategoryGoodsFavor()
      commit('changeCctegoryGoodsFavor', res3.data)
      const res4 = await getAddressGoodsSale()
      commit('changeAddressGoodsSale', res4.data)
    }
  }
}
export default dashboardModule
