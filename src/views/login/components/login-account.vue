<!-- 账号登录 -->
<template>
  <div class="login-account">
    <el-form
      ref="ruleFormRef"
      :model="loginForm"
      label-width="60px"
      :rules="rules"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="loginForm.name" clearable />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" clearable />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
// 登录表单校验规则
import { rules } from '../config/account-config'
import { defineComponent, reactive, ref } from 'vue'
// 拿到类型
import { ElForm } from 'element-plus/lib/index'
// 缓存用
import localCache from '@/utils/cache'

// vuex
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    // 1.属性
    // 获取store
    const store = useStore()
    // 表单input绑定属性
    const loginForm = reactive({
      // 从本地缓存中获取记住的账号和密码
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    // 表单ref
    const ruleFormRef = ref<InstanceType<typeof ElForm>>()

    // 2.方法
    // 登录方法
    const loginAction = (isKeepPassword: boolean) => {
      // 表单预校验
      ruleFormRef.value?.validate((valid) => {
        console.log(valid)
        // 判断是否经过预校验:开始执行登录逻辑
        if (valid) {
          console.log('账号登录')
          // 1.判断是否记住密码
          if (isKeepPassword) {
            console.log('记住密码')
            localCache.setCache('name', loginForm.name)
            localCache.setCache('password', loginForm.password)
            // 本地缓存账号密码
          } else {
            // 清除缓存
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          // 2.开始登录验证
          // 调用login模块的accountLoginAction，并把loginForm传递过去
          store.dispatch('login/accountLoginAction', { ...loginForm })
        }
      })
    }
    // 返回数据
    return {
      loginForm,
      rules,
      ruleFormRef,
      loginAction
    }
  }
})
</script>

<style scoped></style>
