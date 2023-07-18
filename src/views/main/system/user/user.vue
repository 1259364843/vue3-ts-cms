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
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
      >
        <template #enable="scope">
          <el-button plain :type="scope.row.enable ? 'success' : 'danger'">{{
            scope.row.enable ? '启用' : '禁用'
          }}</el-button>
        </template>
      </PageTable>
      <PageModal :modalConfig="modalConfig" ref="pageModalRef"></PageModal>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import PageSearch from '@/components/page-search'
import PageTable from '@/components/page-table'
import PageModal from '@/components/page-modal'
import { searchFormConfig } from './config/search.config'
import { useStore } from '@/store'
import { contentConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
// hook
import { usePageSearch } from '@/hooks/use-page-search'
export default {
  name: 'user',
  components: { PageSearch, PageTable, PageModal },
  setup() {
    // ref
    const pageModalRef = ref<InstanceType<typeof PageModal>>()
    const defaultInfo = ref({})
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

    // 新增处理
    const handleNewData = () => {
      console.log('user新增')
      // 展示弹窗
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
    }
    const handleEditData = (item: any) => {
      console.log('user编辑', item)
      defaultInfo.value = { ...item }
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
    }
    return {
      searchFormConfig,
      contentConfig,
      handleSizeChange,
      handleCurrentChange,
      handleReset,
      handleQuery,
      pageTableRef,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData
    }
  }
}
</script>

<style lang="less" scoped></style>
