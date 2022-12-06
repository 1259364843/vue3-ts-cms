<template>
  <div class="main">
    <el-container class="main-content">
      <!-- <el-aside :width="isFold ? '60px' : '210px'"> -->
      <el-aside :width="'210px'">
        <!-- <nav-menu :is-fold="isFold" /> -->
        <nav-menu />
      </el-aside>
      <el-container>
        <el-header height="48px">
          <h2>header</h2>
          <!-- <nav-header @fold-change="handleFoldChange" /> -->
        </el-header>
        <el-main>
          <router-view />
          <h1>main</h1>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// 导入组件
import NavMenu from '@/components/nav-menu'
export default defineComponent({
  components: { NavMenu },
  setup() {
    return {}
  }
})
</script>
<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
}
.main-content {
  height: 100%;
  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    transition: width 0.3s linear;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
