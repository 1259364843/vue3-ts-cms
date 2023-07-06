<template>
  <div class="user">
    <div class="content">
      <page-search :searchFormConfig="searchFormConfig" />
    </div>
    <div class="list">
      <PageTable :contentConfig="contentConfig" :pageName="'users'"></PageTable>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import PageSearch from '@/components/page-search'
import PageTable from '@/components/page-table'
import { searchFormConfig } from './config/search.config'
import { useStore } from '@/store'
import { contentConfig } from './config/content.config'
export default {
  name: 'user',
  components: { PageSearch, PageTable },
  setup() {
    const store = useStore()
    // store.dispatch('system/getPageListAction', {
    //   pageUrl: '/users/list',
    //   queryInfo: {
    //     offset: 0,
    //     size: 10
    //   }
    // })
    // // 获取store数据
    // const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)
    const handleSizeChange = () => {
      console.log(1)
    }
    const handleCurrentChange = () => {
      console.log(1)
    }
    return {
      searchFormConfig,
      contentConfig,
      handleSizeChange,
      handleCurrentChange
    }
  }
}
</script>

<style lang="less" scoped></style>
