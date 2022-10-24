<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="30" :src="circleUrl" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
          <el-dropdown-item>用户信息</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <span class="user-name">{{ userInfo.name }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { userStore as useUserStore } from "@/store/user"
import { storeToRefs } from "pinia"

const circleUrl = ref("https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png")
const { userInfo } = storeToRefs(useUserStore())
</script>

<style lang="less" scoped>
.user-info {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 40px;
  .user-name {
    margin-left: 10px;
  }
}
</style>
