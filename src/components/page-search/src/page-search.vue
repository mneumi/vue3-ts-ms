<template>
  <div class="page-search">
    <m-form v-model="formData" v-bind="formConfig">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="primary" icon="el-icon-search">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </m-form>
  </div>
</template>

<script setup lang="ts">
import MForm from "@/base-ui/form"
import type { IForm } from "@/base-ui/form/types"
import { ElButton } from "element-plus"
import { ref } from "vue"

const formData = ref({
  id: "",
  name: "",
  password: "",
  sport: "",
  createTime: "",
})

defineProps<{
  formConfig: IForm
}>()
</script>

<style lang="less" scoped>
.header {
  color: red;
}

.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
