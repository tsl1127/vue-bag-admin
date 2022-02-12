// 实列化router
import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'
import type { App } from 'vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'web',
            component: () => import('@www/web/layout/index.vue'),
            children: [
                { path: '', redirect: 'home' },
                {
                    path: '/home', name: 'home', meta: { title: '首页' },
                    component: () => import('@www/web/views/home/index.vue'),
                },
            ],
        },
    ],
} as RouterOptions)

const setupRouter = (app: App) => {
    app.use(router)
}

export {
    setupRouter,
}