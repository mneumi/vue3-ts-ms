import type { IBreadcrumb } from "@/base-ui/breadcrumb"
import type { RouteRecordRaw } from "vue-router"

let firstMenu: any

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
          if (!firstMenu) {
            firstMenu = menu
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

export function pathMapToMneu(
  uesrMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[],
): any {
  for (const menu of uesrMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMneu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMneu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

export { firstMenu }
