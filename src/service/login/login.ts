// 登录接口

import acRequest from '../index'
import { IAccount, IloginResult, IDataType } from './type'

enum LoginAPI {
  AccountLogin = '/login'
}
export function accountLoginRequest(account: IAccount) {
  // post返回数据是IDataType类型，内部是IloginResult类型
  return acRequest.post<IDataType<IloginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
