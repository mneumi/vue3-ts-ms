import Requester from "./requester"
import localCache from "@/utils/cache"

const requester = new Requester({
  baseURL: import.meta.env.VITE_REQUESTER_BASE_URL,
  timeout: Number(import.meta.env.VITE_REQUESTER_TIMEOUT),
  interceptors: {
    requestInterceptor(config) {
      const token = localCache.getCache("token") ?? ""

      if (!config.headers) {
        config.headers = {}
      }

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    requestInterceptorCatch(error: any) {
      return error
    },
    responseInterceptor(config) {
      return config
    },
    responseInterceptorCatch(error) {
      return error
    },
  },
})

export default requester
