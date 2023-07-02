import { IForm } from '@/baseui/form'

export const searchFormConfig: IForm = {
  labelWidth: '100px',
  formItems: [
    {
      field: 'username',
      type: 'input',
      clearable: true,
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      type: 'password',
      clearable: true,
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'like',
      type: 'select',
      clearable: true,
      label: '爱好',
      placeholder: '请选择爱好',
      options: [
        {
          label: '唱歌',
          value: '001'
        },
        {
          label: '跳舞',
          value: '002'
        },
        {
          label: 'rap',
          value: '003'
        },
        {
          label: '篮球',
          value: '004'
        }
      ]
    },
    {
      field: 'date',
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
