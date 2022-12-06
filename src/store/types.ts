import { IloginState } from './login/types'

// 根类型
export interface IRootState {
  name: string
  age: number
}
export interface IRootWithModule {
  login: IloginState
}

// 类型结合
export type IStoreType = IRootState & IRootWithModule
