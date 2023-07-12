<template>
  <div class="page-search">
    <CHForm v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <div class="hanlde-btns">
          <el-button type="primary"
            ><el-icon><Search /></el-icon>搜索</el-button
          >
          <el-button type="primary" @click="handleResetClick"
            ><el-icon><RefreshLeft /></el-icon>重置</el-button
          >
        </div>
      </template>
    </CHForm>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import CHForm from '@/baseui/form'
export default {
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: { CHForm },
  setup(props: any) {
    // 双向数据绑定的属性由配置文件的field决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      console.log(item)
      formOriginData[item.field] = ''
    }
    // 动态的双向数据绑定
    const formData = ref(formOriginData)
    // const formData = ref({
    //   username: '',
    //   password: '',
    //   like: '',
    //   date: ''
    // })
    // 重置输入框
    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
      // formData.value = formOriginData
    }
    return {
      formData,
      handleResetClick
    }
  }
}
</script>

<style lang="less" scoped>
.hanlde-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
