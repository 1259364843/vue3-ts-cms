export const modalConfig = {
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
      placeholder: '请输入密码'
    },
    {
      field: 'cellphone',
      type: 'input',
      clearable: true,
      label: '电话号码',
      placeholder: '请输入电话号码'
    }
  ],
  itemStyle: {},
  colLayout: { span: 24 }
}
