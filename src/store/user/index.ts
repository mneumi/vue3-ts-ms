import { defineStore } from "pinia"
import {
  accountLoginRequest,
  requestUserInfoByID,
  requestUserMenuByRoleID,
} from "@/service/login/login"
import type { IAccount, IUserInfo } from "@/service/login/types"
import localCache from "@/utils/cache"
import router from "@/router"
import { mapMenusToRoutes } from "@/utils/map-menus"

export function setupUserStore() {
  userStore().loadLocalLogin()
}

let userInfo: IUserInfo

export const userStore = defineStore("user", {
  state: () => {
    return {
      token: "",
      userInfo: userInfo,
      userMenus: {} as any,
    }
  },
  getters: {},
  actions: {
    async accountLoginAction(payload: IAccount) {
      // 获取token
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      this.token = token
      localCache.setCache("token", token)

      // 获取用户信息
      const userInfoResult = await requestUserInfoByID(id)
      const userInfo = userInfoResult.data
      this.userInfo = userInfo
      localCache.setCache("userInfo", userInfo)

      // 获取菜单与权限信息
      const userMenuResult = await requestUserMenuByRoleID(userInfo.role.id)
      const userMenus = userMenuResult.data
      this.userMenus = userMenus
      localCache.setCache("userMenus", userMenus)

      // 动态注册路由
      const routes = mapMenusToRoutes(userMenus)
      for (const route of routes) {
        router.addRoute("main", route)
      }
      console.log("路由加载完成")

      // 去首页
      router.push("/main")
    },
    phoneLoginAction(payload: { phone: string; code: string }) {
      const { phone, code } = payload
      console.log("执行 phoneLoginAction ", phone, code)
    },
    loadLocalLogin() {
      const token = localCache.getCache("token")
      if (token) {
        this.token = token
      }

      const userInfo = localCache.getCache("userInfo")
      if (userInfo) {
        this.userInfo = userInfo
      }

      const userMenus = localCache.getCache("userMenus")
      if (userMenus) {
        this.userMenus = userMenus
      }
    },
  },
})
