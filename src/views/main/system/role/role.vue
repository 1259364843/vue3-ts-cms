<template>
  <div class="role">
    <h2>role</h2>
    <div class="content">
      <page-search :searchFormConfig="formConfig" />
    </div>
    <page-table
      :contentConfig="contentConfig"
      :pageName="'role'"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-table>
    <PageModal
      :pageName="'role'"
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      ref="pageModalRef"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="defaultProps"
          @check="handleCheckChange"
        />
      </div>
    </PageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, nextTick } from 'vue'
import PageSearch from '@/components/page-search'
import PageTable from '@/components/page-table'
import PageModal from '@/components/page-modal'
import { contentConfig } from './config/content-config'
import { formConfig } from './config/search-config'
import { modalConfig } from './config/modal-config'
import { useStore } from '@/store'
import { menuMapLeafKeys } from '@/utils/map-menu'
import { ElTree } from 'element-plus'
export default defineComponent({
  name: 'role',
  components: { PageSearch, PageTable, PageModal },
  setup() {
    // 树型选择器选择事件
    const handleCheckChange = (data1: any, data2: any) => {
      console.log(data1, data2)
      const { checkedKeys, halfCheckedKeys } = data2
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }
    const otherInfo = ref()
    const store = useStore()
    const menus = computed(() => store.state.entireMenu)
    const defaultProps = {
      children: 'children',
      // 接口数据中文本字段为name
      label: 'name'
    }
    const defaultInfo = ref({})
    const pageModalRef = ref<InstanceType<typeof PageModal>>()
    const handleNewData = () => {
      defaultInfo.value = {}
      console.log('role新增', pageModalRef)
      // 展示弹窗
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
    }
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const handleEditData = (item: any) => {
      console.log('role编辑', item)
      defaultInfo.value = { ...item }
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
      const leafKeys = menuMapLeafKeys(item.menuList)
      console.log(leafKeys)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    const modalConfigRef = computed(() => {
      return modalConfig
    })
    return {
      contentConfig,
      formConfig,
      defaultInfo,
      handleNewData,
      handleEditData,
      modalConfigRef,
      pageModalRef,
      defaultProps,
      menus,
      otherInfo,
      handleCheckChange,
      elTreeRef
    }
  }
})
</script>

<style lang="less" scoped>
.menu-tree {
  margin-left: 20px;
}
</style>
