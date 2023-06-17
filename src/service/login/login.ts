import acRequest from '..'
import { IAccount, IDataType, ILoginResult } from './types'

enum loginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // /user/1   用户信息
  UserMenus = '/role/' // role/1/menu  菜单信息
}

export function accountLoginRequest(account: IAccount) {
  return acRequest.post<IDataType<ILoginResult>>({
    url: loginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return acRequest.get<IDataType>({
    url: loginAPI.LoginUserInfo + id,
    showLoading: false
  })
}
// 获取用户菜单信息
export function requestUserMenusByRoleId(id: number) {
  return acRequest.get<IDataType>({
    url: loginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
