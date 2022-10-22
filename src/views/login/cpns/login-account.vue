<template>
  <div class="login-account">
    <el-form label-width="70px" :rules="accountRules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { ElForm } from "element-plus"
import { ref, reactive } from "vue"
import { accountRules } from "../config/account-config"
import { userStore } from "@/store/user"
import localCache from "@/utils/cache"

const account = reactive({
  name: localCache.getCache("name") ?? "",
  password: localCache.getCache("password") ?? "",
})

const formRef = ref<InstanceType<typeof ElForm>>()
const store = userStore()

const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      if (isKeepPassword) {
        localCache.setCache("name", account.name)
        localCache.setCache("password", account.password)
      } else {
        localCache.deleteCache("name")
        localCache.deleteCache("password")
      }

      store.accountLoginAction({
        name: account.name,
        password: account.password,
      })
    }
  })
}

defineExpose({
  loginAction,
})
</script>

<style lang="less" scoped></style>
