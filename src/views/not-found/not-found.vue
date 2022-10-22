<template>
  <div class="not-found">
    <div class="title">
      <div>404 NOT FOUND</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.not-found {
  width: 100%;
  height: 100%;
  background: url("@/assets/images/login_bg.webp") no-repeat;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    width: 1000px;
    padding: 10px 30px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.8);
    text-align: center;
    color: white;
    font-size: 120px;
    z-index: 10;
  }
}
</style>
