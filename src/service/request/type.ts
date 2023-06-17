import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ACRequestInterceptors<T = AxiosResponse> {
  // 请求拦截器
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  // 请求错误拦截器
  requestInterceptorCatch?: (error: any) => any
  // 响应拦截器
  responseInterceptor?: (config: T) => T
  // 响应错误拦截器
  responseInterceptorCatch?: (error: any) => any
}

export interface ACRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  // 自定义配置参数
  interceptors?: ACRequestInterceptors<T>
  showLoading?: boolean
}
