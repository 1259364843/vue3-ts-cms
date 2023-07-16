<template>
  <div class="goods">
    <h2>goods</h2>
    <page-table :contentConfig="contentTableConfig" pageName="goods">
      <!-- 图片 -->
      <template #oldPrice="scope">
        {{ '¥' + scope.row.oldPrice }}
      </template>
      <template #image="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
    </page-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageTable from '@/components/page-table'
import { contentTableConfig } from './config/content.config'
import goods from '@/router/main/product/goods/goods'
export default defineComponent({
  name: 'goods',
  components: { PageTable },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
