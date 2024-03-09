import Vue from "vue";
import Router from 'vue-router';
import AboutContent from "@/pages/AboutContent.vue";
import DashboardComponent from "@/pages/DashboardComponent.vue";
import NotFound from "@/pages/NotFound.vue";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardComponent,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutContent,
        },
        {
            path: '*',
            redirect: '/404',
        },
        {
            path: '/404',
            name: 'NotFound',
            component: NotFound,
        },
    ]
})