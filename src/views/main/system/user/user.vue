<template>
  <div class="user">
    <div class="content">
      <page-search :searchFormConfig="searchFormConfig" />
    </div>
    <div class="list">
      <!-- 自定义的表格组件 -->
      <CHTable :listData="userList" :propList="contentConfig.propList">
        <template #enable="scope">
          <el-button plain :type="scope.row.enable ? 'success' : 'danger'">{{
            scope.row.enable ? '启用' : '禁用'
          }}</el-button>
        </template>
        <template #createAt="scope">
          <strong type="">{{ $filters.formatTime(scope.row.createAt) }}</strong>
        </template>
        <template #updateAt="scope">
          <strong type="">{{ $filters.formatTime(scope.row.updateAt) }}</strong>
        </template>
      </CHTable>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import { useStore } from '@/store'
import { contentConfig } from './config/content.config'
import CHTable from '@/baseui/table'
export default {
  name: 'user',
  components: { PageSearch, CHTable },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    // 获取store数据
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    return {
      searchFormConfig,
      userList,
      userCount,
      contentConfig
    }
  }
}
</script>

<style lang="less" scoped></style>
