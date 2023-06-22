<!-- 2022年12月5日 -->
<template>
  <div class="nav-menu">
    <!-- 1.logo -->
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <!-- <span v-show="!isFold" class="title">管理系统</span> -->
      <span v-if="!collapse" class="title">管理系统</span>
    </div>
    <!-- 2.菜单 -->
    <el-menu
      :collapse="collapse"
      default-active="1"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a68bd"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.url">
            <!-- 二级菜单标题 -->
            <template #title>
              <el-icon v-if="item.icon"><Menu /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 拿到二级菜单中的子菜单 -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.url" @click="handleMenuItemClick">
                <el-icon v-if="subitem.icon"><Menu /></el-icon>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.url">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
export default defineComponent({
  name: 'nav-menu',
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    // 使用计算属性,获取store中的用户菜单数据
    const userMenus = computed(() => store.state.login.userMenus)
    // 获取路由
    const router = useRouter()
    // 菜单点击处理方法
    const handleMenuItemClick = (item: any) => {
      console.log(item)
      router.push({
        path: item.index ?? '/notFound'
      })
    }
    return {
      userMenus,
      handleMenuItemClick
    }
  }
})
</script>
<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;
}
.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  .img {
    height: 100%;
    margin: 0 10px;
  }
  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
}
.el-menu {
  border-right: none;
  user-select: none;
}
.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }
  .el-menu-item:hover {
    color: #fff;
  }
  .el-menu-item.is-active {
    background-color: #0a60bd;
    color: #fff;
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 100%;
    height: calc(100% - 48px);
  }
}
</style>
