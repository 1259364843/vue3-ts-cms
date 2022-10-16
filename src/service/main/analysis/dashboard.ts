import zlRequest from '../../index'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCagegoryGoodsCount () {
  return zlRequest.get({
    url: DashboardAPI.categoryGoodsCount
  })
}

export function getCategoryGoodsSale () {
  return zlRequest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCagegoryGoodsFavor () {
  return zlRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getAddGoodsressSale () {
  return zlRequest.get({
    url: DashboardAPI.addressGoodsSale
  })
}
