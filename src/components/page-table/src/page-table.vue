<template>
  <div>
    <!-- 自定义的表格组件 -->
    <CHTable
      :listData="listData"
      :listCount="dataCount"
      v-bind="contentConfig"
      v-model:page="pageInfo"
    >
      <!-- 1.header的插槽 -->
      <template #headerHandler>
        <el-button>新建用户</el-button>
      </template>
      <!-- 2.列里面的插槽 -->
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
      <template #handler>
        <div class="handle-btns">
          <el-button type="primary" size="small">编辑</el-button>
          <el-button type="danger" size="small">删除</el-button>
        </div>
      </template>
      <!-- 3.footer -->
      <template #footer> </template>
    </CHTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'
import CHTable from '@/baseui/table'
export default defineComponent({
  components: { CHTable },
  props: {
    contentConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    // 分页信息
    const pageInfo = ref({
      currentPage: 0,
      pageSize: 10
    })
    const store = useStore()
    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        // pageUrl: '/users/list',
        pageName: props.pageName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...queryInfo
        }
      })
    }
    getPageData()
    // 获取store数据
    // const listData = computed(() => store.state.system.userList)
    //获取list
    const listData = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    // 获取总数
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )
    const handleSizeChange = () => {
      console.log(1)
    }
    const handleCurrentChange = () => {
      console.log(1)
    }
    return {
      listData,
      dataCount,
      handleSizeChange,
      handleCurrentChange,
      getPageData,
      pageInfo
    }
  }
})
</script>

<style scoped></style>
