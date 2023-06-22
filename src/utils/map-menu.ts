// 路由对象的类型
import { RouteRecordRaw } from 'vue-router'
// 将菜单的url映射为路由的path
// 参数为数组
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  // console.log(userMenus)
  const routes: RouteRecordRaw[] = []
  // 1.加载默认所有的routes路由对象
  const allRoutes: RouteRecordRaw[] = []
  // 匹配目录下所有的ts文件
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    // 获取main所有路由文件
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require('../router/main' + key.split('.')[1])
    // 将路由对象push进数组
    allRoutes.push(route.default)
  })
  // 2.根据菜单userMenus获取需要加载的routes
  // 递归判断菜单类型
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        // 将菜单url和路由path匹配
        const route = allRoutes.find((route) => {
          return route.path === menu.url
        })
        if (route) routes.push(route)
      } else {
        // 如果有子菜单，递归
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routes
}
