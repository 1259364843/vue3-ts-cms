import axios from 'axios'
// axios的配置选项
// axios.defaults.baseURL = 'http://httpbin.org'
// axios.defaults.timeout = 5000

// axios的拦截器
// 请求拦截器
// fn1: 请求发生成功
// fn2: 请求失败执行函数
// axios.interceptors.request.use(fn1, fn2)

axios.interceptors.request.use(
  (config) => {
    // 向做一些操作
    // 1.给请求添加token
    // 2.isLoading动画
    return config
  },
  (err) => {
    return err
  }
)

// 响应拦截器
// fn: 数据响应成功
axios.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    return err
  }
)
