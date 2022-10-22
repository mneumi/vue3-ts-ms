<template>
  <div class="login-account">
    <el-form label-width="70px" :rules="phoneRules" :model="phoneAccount">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phoneAccount.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="verifyCode">
        <div class="get-code">
          <el-input v-model="phoneAccount.verifyCode" />
          <el-button type="primary" class="btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { phoneRules } from "../config/account-config"

const phoneAccount = reactive({
  phone: "",
  verifyCode: "",
})

const loginAction = () => {
  console.log("Phone Login")
}

defineExpose({
  loginAction,
})
</script>

<style lang="less" scoped>
.get-code {
  display: flex;
  .btn {
    margin-left: 10px;
  }
}
</style>
