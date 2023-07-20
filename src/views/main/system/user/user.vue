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
      <PageModal
        :pageName="'users'"
        :modalConfig="modalConfigRef"
        :defaultInfo="defaultInfo"
        ref="pageModalRef"
      ></PageModal>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
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
    const passwordItem = modalConfig.formItems.find(
      (item) => item.field === 'password'
    )
    // 新增处理
    const handleNewData = () => {
      passwordItem!.isHidden = false
      defaultInfo.value = {}
      console.log('user新增')
      // 展示弹窗
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
    }
    const handleEditData = (item: any) => {
      // 隐藏密码输入框
      passwordItem!.isHidden = true
      console.log('user编辑', item)
      defaultInfo.value = { ...item }
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
    }
    // 动态添加选择器选项数据
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === 'department'
      )
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { label: item.name, value: item.id }
      })
      const roleItem = modalConfig.formItems.find(
        (item) => item.field === 'roleId'
      )
      roleItem!.options = store.state.entireRole.map((item) => {
        return { label: item.name, value: item.id }
      })
      return modalConfig
    })

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
      handleEditData,
      modalConfigRef
    }
  }
}
</script>

<style lang="less" scoped></style>
