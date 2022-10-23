<template>
  <div class="m-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :rules="item.rules" :style="itemStyle">
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  :placeholder="item.placeholader"
                  :show-password="item.type === 'password'"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholader" style="width: 100%">
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker style="width: 100%" v-bind="item.otherOptions"> </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
        <!-- <el-col :span="8">
          <el-form-item label="用户名">
            <el-input />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="密码">
            <el-input />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="喜欢的运动">
            <el-select style="width: 100%">
              <el-option>篮球</el-option>
              <el-option>足球</el-option>
            </el-select>
          </el-form-item>
        </el-col> -->
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import {
  ElRow,
  ElForm,
  ElCol,
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElDatePicker,
} from "element-plus"
import type { IFormItem, colLayoutType } from "../types"

withDefaults(
  defineProps<{
    formItems: IFormItem[]
    labelWidth?: string
    itemStyle: { [index: string]: any }
    colLayout: colLayoutType
  }>(),
  {
    labelWidth: "100px",
    itemStyle: () => ({ padding: "10px 40px" }),
    colLayout: () => ({
      span: 8,
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24,
    }),
  },
)
</script>

<style lang="less" scoped>
.m-form {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;

  .form-item {
    margin-bottom: 20px !important;
  }
}
</style>
