<template>
  <div class="nav-header">
    <div class="menu-icon" @click="handleFoldClick">
      <el-icon size="28px">
        <!-- 动态切换渲染的组件 -->
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="content">
      <nav-breadcrumb :breadcrumbs="breadcrumbs" />
      <!-- <header-crumb /> -->
      <!-- <header-info /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import NavBreadcrumb from '@/baseui/breadcrumb'
import { mapPathToBreadcrumbs } from '@/utils/map-menu'
export default defineComponent({
  name: 'nav-header',
  components: { NavBreadcrumb },
  emits: ['foldChange'],
  setup(prop, { emit }) {
    const isFold = ref(false)
    // 折叠按钮点击
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      // 向父组件传递事件
      emit('foldChange', isFold.value)
    }
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return mapPathToBreadcrumbs(userMenus, currentPath)
    })
    return { isFold, handleFoldClick, breadcrumbs }
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
