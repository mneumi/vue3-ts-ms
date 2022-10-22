import type { AxiosRequestConfig, AxiosResponse } from "axios"

export interface RequesterInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface RequesterConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequesterInterceptors<T>
  showLoading?: boolean
}
