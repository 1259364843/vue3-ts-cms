<template>
  <div class="main">
    <el-container class="main-content">
      <!-- 菜单展开与关闭状态 -->
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu :collapse="isCollapse" />
        <nav-menu />
      </el-aside>
      <el-container>
        <el-header height="48px">
          <nav-header @fold-change="handleFoldChange" />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// 导入组件
import NavMenu from '@/components/nav-menu'
import navHeader from '@/components/nav-header'
export default defineComponent({
  components: { NavMenu, navHeader },
  setup() {
    // 菜单折叠按钮点击
    const isCollapse = ref(false)
    const handleFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold
    }
    return {
      isCollapse,
      handleFoldChange
    }
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
