import { createPinia } from "pinia"
import { setupUserStore } from "./user"

const pinia = createPinia()

export function loadLocalStorage() {
  setupUserStore()
}

export default pinia
