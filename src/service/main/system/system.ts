import acRequest from '@/service'
import { IDataType } from '../../types'
// 获取页面数据
export function getPageListData(url: string, queryInfo: any) {
  return acRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}
// 删除一条记录
export function deletePageData(url: string) {
  return acRequest.delete<IDataType>({
    url
  })
}
// 创建用户
export function createPageData(url: string, newData: any) {
  return acRequest.post<IDataType>({
    url,
    data: newData
  })
}
// 编辑用户
export function editPageData(url: string, newData: any) {
  return acRequest.patch<IDataType>({
    url,
    data: newData
  })
}
