// 统一出口
import ACRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
// 新建一个请求类对象
const acRequest = new ACRequest({
  // 请求根路径
  baseURL: BASE_URL,
  // 超时时间
  timeout: TIME_OUT,
  // 拦截器
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token
      const token = ''
      if (token) {
        // config.headers.Authorization = `Bearer${}`
      }
      console.log('请求成功拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败拦截')
      return err
    },
    responseInterceptor: (config) => {
      console.log('响应成功拦截')
      return config
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败拦截')
      return err
    }
  }
})
export default acRequest
