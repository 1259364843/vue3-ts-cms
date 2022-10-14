<!-- 手机登录 -->
<template>
  <div class="login-phone">
    <ElForm :model="phone" :rules="rules">
      <ElFormItem label="手机号" prop="num">
        <ElInput v-model="phone.num" />
      </ElFormItem>
      <ElFormItem label="验证码" prop="code">
        <div class="get-code">
          <ElInput v-model="phone.code" class="codeStyle" />
          <ElButton type="primary" class="codeButton">获取验证码</ElButton>
        </div>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<script lang="ts">
import { FormItemRule } from 'element-plus'
import { Arrayable } from 'element-plus/lib/utils'
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'LoginPhone',
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })
    const rules: Partial<Record<string, Arrayable<FormItemRule>>> = {
      num: [
        {
          required: true,
          trigger: 'blur',
          message: '用户名不能为空'
        },
        {
          pattern: /^1[3-9]\d{9}$/,
          message: '手机号格式不对'
        }
      ],
      code: [
        {
          required: true,
          trigger: 'blur',
          message: '验证码不能为空'
        },
        {
          pattern: /^\d{6}$/,
          message: '请输入6位数字验证码'
        }
      ]
    }
    return { phone, rules }
  }
})
</script>
<style scoped>
.get-code {
  display: flex;
}

.codeButton {
  margin-left: 8px;
}
</style>
