<template>
  <div class="ch-form">
    <!-- 封装搜索表单组件 -->
    <!-- <h1>表单</h1> -->
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
              v-if="!item.isHidden"
            >
              <!-- 1.判断输入组件类型 -->
              <!-- 1.1输入框 -->
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :clearable="item.clearable"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                  v-bind="item.otherOptions"
                ></el-input>
              </template>
              <!-- 1.2选择器 -->
              <template v-else-if="item.type === 'select'">
                <el-select
                  :clearable="item.clearable"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    :label="option.label"
                    v-bind="item.otherOptions"
                  >
                    {{ option.label }}
                  </el-option>
                </el-select>
              </template>
              <!-- 1.3日期新选择器 -->
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  :clearable="item.clearable"
                  type="date"
                  align="right"
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
                  v-bind="item.otherOptions"
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

<script lang="ts">
import { defineComponent, PropType, ref, watch, computed } from 'vue'
import { IFormItem } from '../types/index'
export default defineComponent({
  emits: ['update:modelValue'],
  props: {
    // 双向数据绑定
    modelValue: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    // 表单配置
    formItems: {
      type: Array as PropType<IFormItem[]>,
      // 默认值空数组
      default: () => []
    },
    // 表单元素的样式
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    // 布局
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, //>1920
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  setup(props, { emit }) {
    // 拷贝一份prop属性
    const formData = ref({ ...props.modelValue })
    // const formData = computed(() => ({ ...props.modelValue }))
    watch(
      () => props.modelValue,
      (newValue) => {
        // console.log(newValue)
        formData.value = { ...newValue }
      }
    )
    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      { deep: true }
    )
    return { formData }
  }
})
</script>

<style lang="less" scoped>
.header {
  text-align: center;
}
</style>
