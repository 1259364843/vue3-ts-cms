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

export default defineComponent({
  setup() {
    const loginForm = reactive({
      name: '',
      password: ''
    })
    // 表单ref
    const ruleFormRef = ref<InstanceType<typeof ElForm>>()
    // 登录方法
    const loginAction = () => {
      // 表单预校验
      ruleFormRef.value?.validate((valid) => {
        console.log(valid)
        // 判断是否经过预校验
        if (valid) {
          console.log('账号登录')
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
