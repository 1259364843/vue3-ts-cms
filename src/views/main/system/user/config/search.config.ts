import { IForm } from '@/baseui/form'

export const searchFormConfig: IForm = {
  labelWidth: '100px',
  formItems: [
    {
      field: 'id',
      type: 'input',
      clearable: true,
      label: 'id',
      placeholder: '请输入ID'
    },
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
      field: 'cellphone',
      type: 'input',
      clearable: true,
      label: '手机号码',
      placeholder: '请输入手机号码'
    },
    {
      field: 'enable',
      type: 'select',
      clearable: true,
      label: '用户状态',
      placeholder: '请选择用户状态',
      options: [
        {
          label: '启用',
          value: 1
        },
        {
          label: '禁用',
          value: 0
        }
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker',
      clearable: true,
      label: '创建时间',
      placeholder: '请选择创建时间',
      otherOptions: {
        type: 'daterange',
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期'
      }
    }
  ],
  itemStyle: { padding: '10px 40px' },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6, //>1920
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
}
