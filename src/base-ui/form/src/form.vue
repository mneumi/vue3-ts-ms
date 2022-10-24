<template>
  <div class="m-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :rules="item.rules" :style="itemStyle">
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  :placeholder="item.placeholader"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholader"
                  v-model="formData[`${item.field}`]"
                  style="width: 100%"
                >
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
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                >
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
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
import type { IFormItem, colLayoutType, IFormData } from "../types"
import { ref, watch } from "vue"

const props = withDefaults(
  defineProps<{
    modelValue: IFormData
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

const emit = defineEmits(["update:modelValue"])

// 拷贝对象，实际watch和绑定新对象，避免对 props 进行修改
const formData = ref({ ...props.modelValue })

watch(
  formData,
  (newValue) => {
    console.log("wwww")
    emit("update:modelValue", newValue)
  },
  { deep: true },
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
