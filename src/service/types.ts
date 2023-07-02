// 网络请求公共type

// 1.接口返回数据接口
export interface IDataType<T = any> {
  code: number
  data: T
}
