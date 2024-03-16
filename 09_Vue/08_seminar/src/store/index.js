import Vuex from 'vuex';
import Vue from 'vue';
import { articlesModule } from "@/store/articlesModule";
import { projectsModule } from "@/store/projectsModule";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:  {
        articles: articlesModule,
        projects: projectsModule,
    },
});