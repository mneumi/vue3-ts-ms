import axios from "axios"
import type { AxiosInstance } from "axios"
import type { RequesterInterceptors, RequesterConfig } from "./types"

import { ElLoading } from "element-plus"
import type { LoadingInstance } from "element-plus/es/components/loading/src/loading"

const DEFAULT_SHOW_LOADING = true

class Requester {
  instance: AxiosInstance
  interceptors?: RequesterInterceptors
  loading?: LoadingInstance
  showLoading: boolean
  private initialShowLoading: boolean

  constructor(config: RequesterConfig) {
    this.instance = axios.create(config)

    this.showLoading = config.showLoading ?? DEFAULT_SHOW_LOADING
    this.initialShowLoading = this.showLoading
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch,
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch,
    )

    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "Loading",
            background: "rgba(0, 0, 0, 0.7)",
          })
        }
        return config
      },
      (error) => error,
    )

    this.instance.interceptors.response.use(
      (response) => {
        this.loading?.close()

        const { data } = response
        if (data.returnCode === "-1001") {
          console.log("请求失败，错误信息")
        }
        return data
      },
      (error) => {
        this.loading?.close()

        if (error.response.status === 404) {
          console.log("404错误")
        }
        return error
      },
    )
  }

  request<T>(config: RequesterConfig<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showLoading !== undefined) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<T, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
        .finally(() => {
          this.showLoading = this.initialShowLoading
        })
    })
  }

  get<T>(config: RequesterConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" })
  }

  post<T>(config: RequesterConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" })
  }

  put<T>(config: RequesterConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PUT" })
  }

  patch<T>(config: RequesterConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" })
  }

  delete<T>(config: RequesterConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" })
  }
}

export default Requester
