// 登录表单校验规则

import { FormItemRule } from 'element-plus'
import { Arrayable } from 'element-plus/lib/utils'

export const rules: Partial<Record<string, Arrayable<FormItemRule>>> = {
  name: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10个字母或者数字'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      message: '用户密码不能为空'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '用户名必须是3位以上字母或者数字',
      trigger: 'blur'
    }
  ]
}
