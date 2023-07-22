import { IloginState } from './login/types'
import { ISystemState } from './main/system/types'
import { IDashboardState } from './analysis/types'
// 根类型
export interface IRootState {
  name: string
  age: number
  entireDepartment: any[] //全部部门
  entireRole: any[] //全部角色
  entireMenu: any[] //全部菜单
}
export interface IRootWithModule {
  login: IloginState
  system: ISystemState
  dashboard: IDashboardState
}

// 类型结合
export type IStoreType = IRootState & IRootWithModule
