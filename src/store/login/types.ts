// login模块的类型定义
export interface IloginState {
  token: string
  userInfo: any
  // 用户菜单
  userMenus: any
  // 用户按钮权限
  permissions: string[]
}
