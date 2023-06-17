import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { ACRequestInterceptors, ACRequestConfig } from './type'
import { ElLoading } from 'element-plus/lib/index'

// 使用类封装
class ACRequest {
  instance: AxiosInstance
  interceptors?: ACRequestInterceptors //拦截器,可选
  loading?: any
  showLoading: boolean //是否显示加载动画
  // 配置信息
  constructor(config: ACRequestConfig) {
    // 根据config创建axios实例对象
    this.instance = axios.create(config)
    // 保存自定义的拦截器
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? true
    // 全局拦截器
    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局请求拦截器')
        // 显示加载动画
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
        console.log('全局响应拦截器')
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
    // 实例的拦截器,可选
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch
    )
  }

  /**
   * 1.请求方法
   * @param config
   * @returns Promise
   */
  request<T = any>(config: ACRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求config对数据处理
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      // 如果有自定义的拦截器,使用自定义拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 调用axios的request方法
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

  get<T = any>(config: ACRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'GET'
    })
  }

  post<T = any>(config: ACRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'post'
    })
  }

  delete<T = any>(config: ACRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'delete'
    })
  }

  patch<T = any>(config: ACRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'patch'
    })
  }
}

export default ACRequest
