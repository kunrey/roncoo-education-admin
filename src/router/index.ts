import {createRouter, createWebHashHistory} from 'vue-router'
import Layout from '@/layout/index.vue'
import {useUserStore} from '@/store/modules/user';
import {getToken} from "@/utils/cookie";
import {PATH_403, PATH_404, PATH_LOGIN} from "@/utils/constants/system";

// 静态路由
const constantRoutes = [
    {
        path: PATH_LOGIN,
        component: () => import('@/views/login.vue')
    },
    {
        path: PATH_404,
        component: () => import('@/views/404.vue'),
        meta: {title: '404'}
    },
    {
        path: PATH_403,
        component: () => import('@/views/403.vue'),
        meta: {title: '403'}
    }
]

const createRouters = (routerList: any) => createRouter({
    history: createWebHashHistory(),
    routes: routerList,
    strict: true
})

const router = createRouters(constantRoutes)

// 路由加载前
router.beforeEach(async (to, from, next) => {
    if (to.path === PATH_LOGIN || to.path === PATH_404 || to.path === PATH_403) {
        next();
        return;
    }
    if (!getToken()) {
        next({path: PATH_LOGIN});
        return;
    }
    //console.info(from)
    // 获取路由
    //let toRouterInfo = routerMap.get(to.name);
    next();
})

export default router

// 路由对象
const routerMap = new Map();

// 创建路由
export function createNewRouter(data: any) {
    data = data ? data : useUserStore().routerList || []
    const menuList = data.filter((e: any) => e.path);
    const routerList = [];
    const modules = import.meta.glob('../views/**/**.vue');
    for (const e of menuList) {
        const route = {
            path: e.path,
            name: e.id.toString(),
            meta: {
                // 数据库菜单(页面)id
                id: e.id.toString(),
                // 组件名称
                componentName: e.id.toString(),
                // 菜单展示
                title: e.menuName,
                // 菜单图标展示
                icon: e.menuIcon
            },
            component: {}
        }
        route.component = modules[`../views${e.component}`];
        routerList.push(route);
        routerMap.set(e.id.toString(), route);
    }

    router.addRoute({
        path: '/',
        meta: {},
        component: Layout,
        children: routerList
    });
}