import { createApp } from "vue"

import App from "@/App.vue"
import router from "@/router"
import store from "@/store"
import init from "@/init"

import "@/assets/css/index.less"
import "normalize.css"
import "element-plus/theme-chalk/index.css"

createApp(App).use(router).use(store).use(init).mount("#app")
