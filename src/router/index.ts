import { createWebHashHistory,createRouter,RouteRecordRaw, createWebHistory } from "vue-router";
import main from "../layout/main.vue";
import demo from "../layout/demo.vue";
import documentation from "../layout/documentation.vue";
const routes: Array<RouteRecordRaw>=[
    {
        path: '/',
        name: 'home',
        component:()=>import('../views/Home.vue'),
        meta:{
            layout: main
        }
    },
    {
        path: '/demo',
        name: 'demo',
        component:()=>import('../views/Demo.vue'),
        meta:{
            layout: demo
        }
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router