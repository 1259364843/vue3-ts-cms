// 登录interface定义
export interface IAccount {
  name: string
  password: string
}
// 登录接口的返回data数据interface
export interface ILoginResult {
  id: number
  name: string
  token: string
}
