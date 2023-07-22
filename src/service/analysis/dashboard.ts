import acRequest from '..'
// import { IAccount, ILoginResult } from './types'
import { IDataType } from '../types'
enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return acRequest.get({
    url: DashboardAPI.categoryGoodsCount,
    showLoading: false
  })
}
export function getCategoryGoodsSale() {
  return acRequest.get({
    url: DashboardAPI.categoryGoodsSale,
    showLoading: false
  })
}
export function getCategoryGoodsFavor() {
  return acRequest.get({
    url: DashboardAPI.categoryGoodsFavor,
    showLoading: false
  })
}
export function getAddressGoodsSale() {
  return acRequest.get({
    url: DashboardAPI.addressGoodsSale,
    showLoading: false
  })
}
