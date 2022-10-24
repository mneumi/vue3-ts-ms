import { createApp } from "vue"

import App from "@/App.vue"
import router from "@/router"
import store from "@/store"
import init from "@/init"

import "@/assets/css/index.less"
import "normalize.css"
import "element-plus/theme-chalk/index.css"

// use(init) 必须在 use(store) 之后，use(router) 之前
// 因为 use(init) 中会初始化 store 和初始化路由对象
// use(router) 中需要使用初始化后的路由对象
createApp(App).use(store).use(init).use(router).mount("#app")
