import { defineStore } from "pinia"

export const userStore = defineStore("user", {
  state: () => {
    return {
      msg: "Hello World",
    }
  },
  getters: {},
  actions: {},
})
