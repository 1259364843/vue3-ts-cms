// 缓存用
class LocalCache {
  /**
   * 保存缓存
   * @param key
   * @param value
   */
  setCache(key: string, value: any) {
    // 不管value是什么类型，转换为字符串类型
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  // 获取
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  // 删除
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
    return true
  }
  // 清除
  clearCache() {
    window.localStorage.clear()
    return true
  }
}
// 导出一个新的对象
export default new LocalCache()
