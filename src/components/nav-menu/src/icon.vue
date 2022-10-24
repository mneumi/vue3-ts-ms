<template>
  <template v-if="iconName === 'el-icon-monitor'">
    <el-icon>
      <Monitor />
    </el-icon>
  </template>
  <template v-else-if="iconName === 'el-icon-setting'">
    <el-icon>
      <Setting />
    </el-icon>
  </template>
  <template v-else-if="iconName === 'el-icon-chat-line-round'">
    <el-icon>
      <ChatLineRound />
    </el-icon>
  </template>
  <template v-else-if="iconName === 'el-icon-goods'">
    <el-icon>
      <Goods />
    </el-icon>
  </template>
</template>

<script setup lang="ts">
defineProps<{ iconName: string }>()
</script>

<style scoped></style>
