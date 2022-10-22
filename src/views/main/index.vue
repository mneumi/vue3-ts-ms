<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="collapse ? '63px' : '210px'">
        <nav-menu :collapse="collapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @change-fold="handleChangFold" />
        </el-header>
        <el-main class="page-content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from "vue"
import NavMenu from "@/components/nav-menu"
import NavHeader from "@/components/nav-header"

const collapse = ref(false)

const handleChangFold = (isFold: boolean) => {
  collapse.value = isFold
}

defineExpose({
  collapse,
})
</script>

<style lang="less" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
}

.el-header {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: black;
  transition: width 0.3s linear;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
