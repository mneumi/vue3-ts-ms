<template>
  <div>{{ title }}</div>
  <div>{{ store.msg }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { userStore } from "@/store/user"

const store = userStore()
const title = ref("Main")
</script>

<style scoped></style>
