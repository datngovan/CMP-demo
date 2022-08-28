import { createWebHashHistory,createRouter,RouteRecordRaw, createWebHistory } from "vue-router";
import main from "../layout/main.vue";
import blank from "../layout/blank.vue";
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
        path: '/add',
        name: 'add',
        component:()=>import('../views/add.vue'),
        meta:{
            layout: blank
        }
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router