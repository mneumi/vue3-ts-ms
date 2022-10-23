<template>
  <div class="nav-header">
    <el-icon :size="20" class="icon" @click="handleClick">
      <template v-if="isFold">
        <Fold />
      </template>
      <template v-else>
        <Expand />
      </template>
    </el-icon>
    <div class="guide">面包屑</div>
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
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue"
import { userStore as useUserStore } from "@/store/user"
import { storeToRefs } from "pinia"

const isFold = ref(false)
const circleUrl = ref("https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png")
const { userInfo } = storeToRefs(useUserStore())

const handleClick = () => {
  isFold.value = !isFold.value
  emit("changeFold", isFold.value)
}

const emit = defineEmits<{
  (e: "changeFold", isFold: boolean): void
}>()
</script>

<style lang="less" scoped>
.nav-header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon {
    cursor: pointer;
  }
  .guide {
    margin-left: 15px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

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
}
</style>
