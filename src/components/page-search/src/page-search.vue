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
          <el-button type="primary"
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
  setup() {
    const formData = ref({
      username: '',
      password: '',
      like: '',
      date: ''
    })
    return {
      // formConfig,
      formData
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
