import acRequest from '@/service'
import { IDataType } from '../../types'
// 获取页面数据
export function getPageListData(url: string, queryInfo: any) {
  return acRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}
