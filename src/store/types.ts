import { IloginState } from './login/types'
import { ISystemState } from './main/system/types'
// 根类型
export interface IRootState {
  name: string
  age: number
}
export interface IRootWithModule {
  login: IloginState
  system: ISystemState
}

// 类型结合
export type IStoreType = IRootState & IRootWithModule
