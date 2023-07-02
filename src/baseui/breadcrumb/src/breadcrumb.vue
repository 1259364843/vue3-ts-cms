<!-- 面包屑 -->
<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Ibreadcrumb } from '../types'
export default defineComponent({
  name: 'nav-breadcrumb',
  props: {
    // 传入面包屑的name
    breadcrumbs: {
      type: Array as PropType<Ibreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>
<style lang="css" scoped></style>
