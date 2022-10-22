import type { App } from "vue"
import { loadLocalStorage } from "@/store"

export default function (app: App) {
  app.use(loadLocalStorage)
}
