<template>
  <div class="dashboard">
    <h2>dashboard</h2>
    <!-- <div id="chart" ref="divRef" style="width: 500px; height: 200px"></div> -->
    <el-row gutter="10">
      <el-col :span="7">
        <Card title="饼图"></Card>
      </el-col>
      <el-col :span="10">
        <Card title="不同城市销量">
          <PieEchart :pieData="categoryGoodsCount" /> </Card
      ></el-col>
      <el-col :span="7"> <Card title="饼图"></Card></el-col>
    </el-row>
    <el-row gutter="10" class="content-row">
      <el-col :span="12"> <Card title="分类商品销量"></Card></el-col>
      <el-col :span="12"> <Card title="分类商品收藏"></Card></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue'

import { useStore } from '@/store'
import Card from '@/baseui/card/card.vue'
import { PieEchart } from '@/components/page-echart'
export default defineComponent({
  name: 'dashboard',
  components: { Card, PieEchart },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    console.log(categoryGoodsCount, 1111)
    return { categoryGoodsCount }
  }
})
</script>

<style lang="less" scoped>
.content-row {
  margin-top: 10px;
}
</style>
