import Vue from "vue";
import Router from 'vue-router';
import Page1Home from "@/pages/Page1Home.vue";
import Page2Blog from "@/pages/Page2Blog.vue";
import Page3Project from "@/pages/Page3Project.vue";
import Page4BlogDetails from "@/pages/Page4BlogDetails.vue";
import Page5ProjectDetails from "@/pages/Page5ProjectDetails.vue";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/users/:id',
            name: 'users',
            component: Page5ProjectDetails,
            props: true,
        },
        {
            path: '/home',
            name: 'home',
            component: Page1Home,
        },
        {
            path: '/blog',
            name: 'blog',
            component: Page2Blog,
        },
        {
            path: '/project',
            name: 'project',
            component: Page3Project,
        },
        {
            path: '/blog-details',
            name: 'blogDetails',
            component: Page4BlogDetails,
        },
        // {
        //     path: '*',
        //     redirect: '/404',
        // },
        // {
        //     path: '/404',
        //     name: 'NotFound',
        //     component: NotFound,
        // },
    ]
})