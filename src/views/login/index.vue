<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>

<script setup lang="ts">
import LoginPanel from "./cpns/login-panel.vue"
import { useRouter } from "vue-router"
import localCache from "@/utils/cache"

const router = useRouter()
if (localCache.getCache("token")) {
  router.replace("/main")
}
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("@/assets/images/bg.jpg");
}
</style>
