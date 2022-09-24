import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { ACRequestInterceptors, ACRequestConfig } from './type'

import { ElLoading } from 'element-plus/lib/index'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading.js'
const SHOW_LOADING = true
// 创建请求类
class ACRequest {
  // 实例
  instance: AxiosInstance
  interceptors?: ACRequestInterceptors
  // 加载数据，可选
  loading?: LoadingInstance
  // 是否显示加载
  // showLoading: boolean = SHOW_LOADING
  showLoading: boolean
  // 构造函数，传入config
  constructor(config: ACRequestConfig) {
    // 创建axios实例对象
    this.instance = axios.create(config)
    // 保存基本信息
    this.showLoading = config.showLoading ?? SHOW_LOADING
    this.interceptors = config.interceptors
    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    // 请求拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 响应拦截
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例都有的拦截器，请求拦截成功')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求后台数据...',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log('所有实例都有的拦截器，请求失败成功')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例都有的拦截器，响应拦截成功')
        // 移出loading
        this.loading?.close()
        const data = res.data
        // if (data.returnCode === '-1001') {
        //   console.log('请求失败')
        // } else {
        //   return data
        // }
        return data
      },
      (err) => {
        this.loading?.close()
        console.log('所有实例都有的拦截器，响应失败成功')
        return err
      }
    )
  }

  // 发送请求方法
  request<T>(config: ACRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 为false，则不显示加载动画
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res: any) => {
          // 1.单个对请求数据的处理
          if (config.interceptors?.requestInterceptor) {
            res = config.interceptors.requestInterceptor(res)
          }
          // 2.将loading状态设置true，不影响下一个请求
          this.showLoading = SHOW_LOADING
          // 3.将结果返回出去
          resolve(res)
        })
        .catch((err) => {
          console.log(err)
          // 还原loading状态
          this.showLoading = SHOW_LOADING
          reject(err)
        })
    })
  }
  get<T>(config: ACRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: ACRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: ACRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: ACRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default ACRequest
