import { createPinia } from "pinia"
import { setupUserStore } from "./user"

const pinia = createPinia()

export default pinia

export function setupStore() {
  setupUserStore()
}
