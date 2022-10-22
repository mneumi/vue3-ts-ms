type keys = "token" | "userInfo" | "userMenus" | "name" | "password"

class LocalCache {
  setCache(key: keys, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: keys): any {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: keys): void {
    window.localStorage.removeItem(key)
  }

  clearCache(): void {
    window.localStorage.clear()
  }
}

export default new LocalCache()
