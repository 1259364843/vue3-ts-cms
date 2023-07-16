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
      <!-- 动态插槽start -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
      <!-- 动态插槽end -->

      <!-- 3.footer -->
      <template #footer> </template>
    </CHTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
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
    // 1.
    // 分页信息
    const pageInfo = ref({
      currentPage: 0,
      pageSize: 10
    })
    watch(pageInfo, () => getPageData())
    const store = useStore()
    // 2.发送网络请求
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
    // 3.获取store数据
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
    // 4.获取动态插槽
    const otherPropSlots = props.contentConfig?.propList.filter((item: any) => {
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'updateAt') return false
      if (item.slotName === 'handler') return false
      // 返回ture的item才会被返回
      return true
    })
    return {
      listData,
      dataCount,
      handleSizeChange,
      handleCurrentChange,
      getPageData,
      pageInfo,
      otherPropSlots
    }
  }
})
</script>

<style scoped></style>
