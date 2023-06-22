<template>
  <div class="nav-header">
    <div class="menu-icon" @click="handleFoldClick">
      <el-icon size="28px">
        <!-- 动态切换渲染的组件 -->
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="content">
      <!-- <header-crumb /> -->
      <!-- <header-info /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'nav-header',
  emits: ['foldChange'],
  setup(prop, { emit }) {
    const isFold = ref(false)
    // 折叠按钮点击
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      // 向父组件传递事件
      emit('foldChange', isFold.value)
    }
    return { isFold, handleFoldClick }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;
  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
