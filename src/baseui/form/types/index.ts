// 输入组件类型
type IFormType = 'input' | 'password' | 'select' | 'datepicker'
// 表单配置项
export interface IFormItem {
  field: string // 指定字段
  type: IFormType
  label: string
  placeholder?: any //可选
  rules?: any[] //校验规则,可选
  options?: any[] //下拉选择器选项
  // 其他特殊属性
  otherOptions?: any
}
// 合并类型
export interface IForm {
  // 表单项目
  formItems: IFormItem[]
  // 标签宽度
  labelWidth?: string
  // 自定义样式
  itemStyle?: any
  // 布局
  colLayout?: any
}
