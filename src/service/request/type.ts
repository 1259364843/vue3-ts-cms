import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ZLRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestIntercetorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseIntercetorCatch?: (error: any) => any
}

export interface ZLRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ZLRequestInterceptors<T>
  showLoading?: boolean
}
