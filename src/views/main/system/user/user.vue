<template>
  <div class="user">
    <page-search :form-config="searchFormConfig" />
    <div class="content">
      <el-table :data="userList" border style="width: 100%">
        <template v-for="item in propList" :key="item.prop">
          <el-table-column v-bind="item" align="center" />
        </template>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageSearch from "@/components/page-search"
import { computed } from "vue"
import { searchFormConfig } from "./config/search"
import { systemStore as getSystemStore } from "@/store/main/system/system"
import { ElTable, ElTableColumn } from "element-plus"

const systemStore = getSystemStore()
systemStore.getPageListAction({
  pageUrl: "/users/list",
  queryInfo: {
    offset: 0,
    size: 10,
  },
})

const userList = computed(() => systemStore.userList)
const userCount = computed(() => systemStore.userCount)

const propList = [
  { prop: "name", label: "用户名", minWidth: "100" },
  { prop: "realname", label: "真实姓名", minWidth: "100" },
  { prop: "cellphone", label: "手机号", minWidth: "120" },
  { prop: "enable", label: "状态", minWidth: "100" },
  { prop: "createAt", label: "创建时间", minWidth: "250" },
  { prop: "createAt", label: "更新时间", minWidth: "250" },
]
</script>

<style lang="less" scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
