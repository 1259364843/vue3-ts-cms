<template>
  <div class="overview">
    <h2>overview</h2>
    <CHFrom :formItem="formItems" :itemStyle="itemStyle" />
    <!-- <CHFrom v-bind="formConfig" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { formConfig } from './config/search.config'
import CHFrom, { IFormItem, IForm } from '@/baseui/form'

export default defineComponent({
  name: 'overview',
  components: { CHFrom },
  setup() {
    const formItems: IFormItem[] = [
      {
        type: 'input',
        label: '用户名',
        placeholder: '请输入用户名'
      },
      {
        type: 'password',
        label: '密码',
        placeholder: '请输入密码'
      },
      {
        type: 'select',
        label: '爱好',
        placeholder: '请选择爱好',
        options: [
          {
            label: '唱歌',
            value: '001'
          },
          {
            label: '跳舞',
            value: '002'
          },
          {
            label: 'rap',
            value: '003'
          },
          {
            label: '篮球',
            value: '004'
          }
        ]
      },
      {
        type: 'datepicker',
        label: '创建时间',
        placeholder: '请选择创建时间',
        otherOptions: {
          type: 'daterange',
          startPlaceholder: '开始日期',
          endPlaceholder: '结束日期'
        }
      }
    ]
    // 自定义组件样式
    const itemStyle = {
      padding: '10px 40px'
    }
    console.log(formConfig)

    return {
      formItems,
      itemStyle,
      formConfig
    }
  }
})
</script>

<style scoped></style>
