import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { ZLRequestInterceptors, ZLRequestConfig } from './type'
import { ElLoading } from 'element-plus/lib/index'

class ZLRequest {
  instance: AxiosInstance
  interceptors?: ZLRequestInterceptors
  loading?: any
  showLoading: boolean

  constructor(config: ZLRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? true

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestIntercetorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.requestIntercetorCatch
    )
    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            background: 'rgba(0, 0, 0, .5)',
            text: '加载中请稍候...'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败~, 错误信息')
        } else {
          return data
        }
      },
      (err) => {
        if (err.response.status === 404) {
          console.log('404的错误')
        }
        return err
      }
    )
  }

  request<T = any>(config: ZLRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求config对数据处理
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.requestInterceptor) {
            res = config.interceptors.responseInterceptor!(res)
          }
          // 将showloading  = true 不影响下一个请求
          this.showLoading = true
          resolve(res)
        })
        .catch((err) => {
          // 将showloading  = true 不影响下一个请求
          this.showLoading = true
          reject(err)
          return err
        })
    })
  }

  get<T = any>(config: ZLRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'GET'
    })
  }

  post<T = any>(config: ZLRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'post'
    })
  }

  delete<T = any>(config: ZLRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'delete'
    })
  }

  patch<T = any>(config: ZLRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'patch'
    })
  }
}

export default ZLRequest
