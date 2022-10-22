import Requester from ".."
import type { IAccount, IDataType, ILoginResult, IUserInfo } from "./types"

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users",
  UserMenus = "/role",
}

export function accountLoginRequest(account: IAccount) {
  return Requester.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account,
  })
}

export function requestUserInfoByID(id: number) {
  return Requester.get<IDataType<IUserInfo>>({
    url: `${LoginAPI.LoginUserInfo}/${id}`,
    showLoading: false,
  })
}

export function requestUserMenuByRoleID(roleID: number) {
  return Requester.get<IDataType>({
    url: `${LoginAPI.UserMenus}/${roleID}/menu`,
    showLoading: false,
  })
}
