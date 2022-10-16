export type IPageType = {
    cellphone: number
    createAt: string
    departmentId: number
    enable: number
    id: number
    name: string
    realname: string
    roleId: number
    updateAt: string
}

export interface PageResultType {
  list: IPageType[]
  totalCount: number
}

export interface IDataType<T = any> {
  code: number
  data: T
}
