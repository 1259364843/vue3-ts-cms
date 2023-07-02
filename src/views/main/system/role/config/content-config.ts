//配置tabel的格式
export const contentConfig = {
  //是否展示序列和多选功能
  showIndexColumn: true,
  showSelectColumn: true,
  //用户标题
  title: '角色列表',
  header: '新建角色',
  //表格列的参数
  propList: [
    { prop: 'name', label: '角色名', minWidth: '100' },
    { prop: 'intro', label: '权限介绍', minWidth: '100' },
    {
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
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handler'
    }
  ]
}
