import type { RouteRecordRaw } from "vue-router"

type ModuleType = {
  [index: string]: { default: any }
}

export function mapMenusToRoutes(userMenus: any): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 加载所有 routes
  const allRoutes: RouteRecordRaw[] = []

  const routeFiles = import.meta.glob("../router/main/**/*.ts", { eager: true }) as ModuleType
  for (const item in routeFiles) {
    allRoutes.push(routeFiles[item].default)
  }

  // 根据菜单过滤 routes
  const _recurseGetRoute = (menus: any[]) => {
    if (menus) {
      for (const menu of menus) {
        if (menu.type === 2) {
          const route = allRoutes.find((route) => route.path === menu.url)
          if (route) {
            routes.push(route)
          }
        } else {
          if (menu.children) {
            _recurseGetRoute(menu.children)
          }
        }
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}
