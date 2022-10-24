<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item>
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ElBreadcrumb, ElBreadcrumbItem } from "element-plus"
import type { IBreadcrumb } from "../types"

withDefaults(
  defineProps<{
    breadcrumbs: IBreadcrumb[]
  }>(),
  {
    breadcrumbs: () => [],
  },
)
</script>

<style lang="less" scoped>
.nav-breadcrumb {
  margin-left: 15px;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
