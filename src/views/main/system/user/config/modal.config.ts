import { IForm } from '@/baseui/form'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      clearable: true,
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      clearable: true,
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'password',
      type: 'password',
      clearable: true,
      label: '密码',
      placeholder: '请输入密码',
      isHidden: false
    },
    {
      field: 'cellphone',
      type: 'input',
      clearable: true,
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'roleId',
      type: 'select',
      clearable: true,
      label: '角色',
      placeholder: '请选择角色',
      options: []
    },
    {
      field: 'department',
      type: 'select',
      clearable: true,
      label: '选择部门',
      placeholder: '请选择部门',
      options: []
    }
  ],
  itemStyle: {},
  colLayout: { span: 24 }
}
