import zlRequest from '@/service'
import { IDataType, PageResultType } from './types'

export function getPageListData(url: string, queryInfo: any) {
  return zlRequest.post<IDataType<PageResultType>>({
    url: url,
    data: queryInfo
  })
}

export function deletePage(url: string) {
  return zlRequest.delete<IDataType>({
    url
  })
}

export function createPageData(url: string, newData: any) {
  return zlRequest.post<IDataType>({
    url,
    data: newData
  })
}
export function editPageData(url: string, editData: any) {
  return zlRequest.patch<IDataType>({
    url,
    data: editData
  })
}
