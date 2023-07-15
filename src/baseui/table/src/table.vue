<template>
  <div class="page-content">
    <!-- 1.头部 -->
    <div class="header">
      <slot name="header">
        <!-- 表格标题 -->
        <div class="title">{{ title }}</div>
        <!-- 表格头部操作 -->
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <!-- 2.表格 -->
    <el-table
      :data="listData"
      border
      stripe
      height="250"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <!-- 是否是多选列 -->
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="60"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <!-- 将row传到上一层 -->
            <slot :name="propItem.slotName" :row="scope.row">
              <!-- 默认值 -->
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 3.页脚 -->
    <div class="footer">
      <slot name="footer">
        <el-pagination
          :page-size="page.pageSize"
          :current-page="page.currentPage"
          :page-sizes="[100, 200, 300, 400]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
        <!-- <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        /> -->
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    // 表格标题
    title: {
      type: String,
      required: true
    },
    listData: {
      type: Array,
      required: true
    },
    // 数据总条数
    listCount: {
      type: Number,
      default: 0
    },
    propList: {
      type: Array,
      required: true
    },
    // 是否显示序号
    showIndexColumn: {
      type: Boolean,
      required: false
    },
    //是否可以多选列
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    page: {
      type: Object,
      default: () => ({
        currentPage: 0,
        pageSize: 10
      })
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    // 表格数据选中
    const handleSelectionChange = (value: any) => {
      emit('selectionChange', value)
    }
    //分页大小改变
    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
      console.log('table-改变分页大小')
    }
    // 页码改变
    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
      console.log('table-改变页码')
    }
    return { handleSelectionChange, handleSizeChange, handleCurrentChange }
  }
})
</script>

<style lang="less" scoped>
.page-content {
  padding: 10px;
  border-top: 20px solid #f5f5f5;

  .header {
    display: flex;
    height: 45px;
    margin: 0 5px;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 25px;
      font-weight: 700;
    }

    .handler {
      align-items: center;
    }
  }
  .footer {
    text-align: right;
    padding-top: 5px;
  }
}
.el-pagination {
  justify-content: flex-end !important;
}
</style>
