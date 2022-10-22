import type { App } from "vue"
import initElementPlus from "./init-element-plus"
import initLocalStorage from "./init-local-storage"

export default function (app: App) {
  app.use(initElementPlus)
  app.use(initLocalStorage)
}
