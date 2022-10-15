<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs
      type="border-card"
      stretch
      class="demo-tabs"
      v-model="activeName"
      @tab-change="tabChange"
    >
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <!-- 使用子组件 -->
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef" />
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
    // 1.属性
    const activeName = ref('account')
    // 是否记住密码
    const isKeepPassword = ref(true)
    // 账号登录ref
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    // 手机登录ref
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    // 当前的面板
    const currenTab = ref('account')
    // 2.方法
    // tab切换
    const tabChange = (tabName: string) => {
      console.log(tabName)
    }
    // 登录按钮点击
    const handleLoginClick = () => {
      console.log(1)
      // 判断是账号登录还是手机登录
      if (currenTab.value === 'account') {
        // 调用子组件的方法并传值
        // value有值的时候调用，没值的时候不调用

        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        // 手机登录
        phoneRef.value?.loginAction()
      }
    }

    return {
      activeName,
      isKeepPassword,
      accountRef,
      phoneRef,
      currenTab,
      tabChange,
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
