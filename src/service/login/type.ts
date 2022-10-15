// 登录interface定义
export interface IAccount {
  name: string
  password: string
}
// 登录接口的返回数据interface
export interface IloginResult {
  id: number
  name: string
  token: string
}
// 接口返回数据的interface
export interface IDataType<T = any> {
  code: number
  data: T
}
