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
    <nav-breadcrumb :breadcrumbs="breadcurmbs" />
    <user-info />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import UserInfo from "./user-info.vue"
import NavBreadcrumb, { type IBreadcrumb } from "@/base-ui/breadcrumb"
import { pathMapBreadcrumbs } from "@/utils/map-menus"
import { userStore as getUserStore } from "@/store/user"
import { storeToRefs } from "pinia"
import { useRoute } from "vue-router"

const isFold = ref(false)

const handleClick = () => {
  isFold.value = !isFold.value
  emit("changeFold", isFold.value)
}

const userStore = getUserStore()

const breadcurmbs = computed(() => {
  const { userMenus } = storeToRefs(userStore)
  const route = useRoute()
  return pathMapBreadcrumbs(userMenus.value, route.path)
})

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
}
</style>
