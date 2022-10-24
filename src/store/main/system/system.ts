import { defineStore } from "pinia"
import type { IGetPageListAction, ISystemStoreState } from "./types"
import { getPageListData } from "@/service/main/system/system"

export const systemStore = defineStore("system", {
  state: (): ISystemStoreState => ({
    userList: [],
    userCount: 0,
  }),
  getters: {},
  actions: {
    getPageListAction: async function (payload: IGetPageListAction) {
      const result = await getPageListData(payload)
      const { list, totalCount } = result.data
      this.userList = list
      this.userCount = totalCount
    },
  },
})
