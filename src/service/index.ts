import ACRequest from './request'
import { TIME_OUT, BASE_URL } from './request/config'

import LocalCache from '@/utils/cache'
console.log(BASE_URL)

const acRequest = new ACRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 自定义拦截器
  interceptors: {
    requestInterceptor: (config) => {
      console.log('自定义请求拦截器')
      // 从本地缓存获取token
      const token = LocalCache.getCache('token')
      if (token) {
        // 携带token
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      console.log('自定义响应拦截器')

      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
export default acRequest
