import { IForm } from '@/baseui/form'
export const modalConfig: IForm = {
  //独占一行
  colLayout: {
    span: 24
  },
  //去掉padding和margin
  itemStyle: {},
  //标题
  title: '新建角色',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    }
    // },
    // {
    //   field: 'role',
    //   type: 'select',
    //   label: '选择角色',
    //   placeholder: '请选择角色'
    // },
    // {
    //   field: 'department',
    //   type: 'select',
    //   label: '选择部门',
    //   placeholder: '请选择部门'
    // }
  ]
}
