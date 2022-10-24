<template>
  <el-table :data="userList" border style="width: 100%">
    <template v-for="item in propList" :key="item.prop">
      <el-table-column v-bind="item" align="center" />
    </template>
  </el-table>
</template>

<script setup lang="ts"></script>

<style scoped></style>
