import { IForm } from '@/baseui/form'

//配置search的格式
export const formConfig: IForm = {
  //文字长度
  labelWidth: '120px',
  //间距
  itemStyle: {
    padding: '10px 40px'
  },
  //每行多少个
  colLayout: {
    span: 8
  },
  //form的内容
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
