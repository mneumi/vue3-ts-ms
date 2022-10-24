import type { App } from "vue"
import { setupStore } from "@/store"

export default function (app: App) {
  setupStore()
}
