<template>
  <div class="user">
    <m-form v-bind="formConfig" />
  </div>
</template>

<script setup lang="ts">
import MForm from "@/base-ui/form"
import { formConfig } from "./config/search"
</script>

<style lang="less" scoped></style>
