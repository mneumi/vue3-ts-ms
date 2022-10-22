<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/images/logo.svg" alt="logo" />
      <span class="title">mneumi</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bbc3"
      active-text-color="#0a60bd"
      :collapse="props.collapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <icon :icon-name="item.icon" />
              <span>{{ item.name }}</span>
            </template>
            <!-- 二级菜单内容 -->
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.id + ''" @click="handleMenuItemClick(subItem)">
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <icon :icon-name="item.icon" />
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
import { userStore as useUserStore } from "@/store/user"
import { storeToRefs } from "pinia"
import Icon from "./icon.vue"
import { useRouter } from "vue-router"

const { userMenus } = storeToRefs(useUserStore())

const props = defineProps<{
  collapse: boolean
}>()

const router = useRouter()

const handleMenuItemClick = (item: any) => {
  router.push(item.url)
}
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
      margin-left: 4px;
    }
  }

  .el-submenu {
    background-color: #001529 !important;
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  .el-menu {
    border-right: none;
  }

  :v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  .el-menu-item:hover {
    color: #fff !important;
  }
  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60db !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
