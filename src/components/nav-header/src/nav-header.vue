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
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue"

const isFold = ref(false)

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
  .icon {
    cursor: pointer;
  }
  .guide {
    margin-left: 5px;
  }
}
</style>
