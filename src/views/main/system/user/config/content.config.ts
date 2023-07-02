//配置tabel的格式
export const contentConfig = {
  //用户标题
  title: '用户列表',
  //header插槽的控制
  header: '新建用户',
  //是否展示序列和多选功能
  showIndexColumn: true,
  showSelectColumn: true,
  //表格列的参数
  propList: [
    { prop: 'name', label: '用户名', minWidth: '100' },
    { prop: 'realname', label: '真实姓名', minWidth: '100' },
    { prop: 'cellphone', label: '手机号码', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    { prop: 'enable', label: '状态', minWidth: '100', slotName: 'enable' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ]
}
