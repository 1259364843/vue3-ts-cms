<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch class="demo-tabs">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <!-- 使用子组件 -->
        <login-account ref="accourtRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <!-- 按钮部分 -->
    <div class="account-control">
      <ElCheckbox v-model="isKeepPassword">记住密码</ElCheckbox>
      <ElLink :underline="false" class="account-link" type="primary"
        >忘记密码</ElLink
      >
    </div>
    <ElButton type="primary" @click="handleLoginClick" class="login-btn"
      >立即登录</ElButton
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { User, Cellphone } from '@element-plus/icons-vue'
// 子组件
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
export default defineComponent({
  components: { User, Cellphone, LoginAccount, LoginPhone },
  setup() {
    // 属性
    const isKeepPassword = ref(true)
    // 账号登录ref
    const accourtRef = ref<InstanceType<typeof LoginAccount>>()
    const currenTab = ref('account')
    // 方法
    const handleLoginClick = () => {
      console.log(1)
      // 调用子组件的方法
      // value有值的时候调用，没值的时候不调用
      accourtRef.value?.loginAction()
    }
    return {
      isKeepPassword,
      accourtRef,
      currenTab,
      handleLoginClick
    }
  }
})
</script>

<style scoped lang="less">
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
.login-panel {
  width: 320px;
  margin-bottom: 150px;
  .title {
    text-align: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
