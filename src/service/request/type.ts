import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ACRequestInterceptors<T = AxiosResponse> {
  // 请求拦截
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  // 请求错误拦截
  requestInterceptorCatch?: (error: any) => any
  // 响应拦截
  responseInterceptor?: (res: T) => T
  // 响应错误拦截
  responseInterceptorCatch?: (error: any) => any
}

export interface ACRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ACRequestInterceptors<T>
  showLoading?: boolean
}
