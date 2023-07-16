<template>
  <div class="user">
    <div class="content">
      <page-search
        :searchFormConfig="searchFormConfig"
        @resetBtnClick="handleReset"
        @queryBtnClick="handleQuery"
      />
    </div>
    <div class="list">
      <PageTable
        :contentConfig="contentConfig"
        :pageName="'users'"
        ref="pageTableRef"
      >
        <template #enable="scope">
          <el-button plain :type="scope.row.enable ? 'success' : 'danger'">{{
            scope.row.enable ? '启用' : '禁用'
          }}</el-button>
        </template>
      </PageTable>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import PageSearch from '@/components/page-search'
import PageTable from '@/components/page-table'
import { searchFormConfig } from './config/search.config'
import { useStore } from '@/store'
import { contentConfig } from './config/content.config'
// hook
import { usePageSearch } from '@/hooks/use-page-search'
export default {
  name: 'user',
  components: { PageSearch, PageTable },
  setup() {
    // hooks
    const [pageTableRef, handleReset, handleQuery] = usePageSearch()
    // const pageTableRef = ref<InstanceType<typeof PageTable>>()
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
    // 重置
    // const handleReset = () => {
    //   console.log('user-重置')
    // }
    // const handleQuery = (queryInfo: any) => {
    //   console.log('user-搜索')
    //   pageTableRef.value?.getPageData(queryInfo)
    // }
    return {
      searchFormConfig,
      contentConfig,
      handleSizeChange,
      handleCurrentChange,
      handleReset,
      handleQuery,
      pageTableRef
    }
  }
}
</script>

<style lang="less" scoped></style>
