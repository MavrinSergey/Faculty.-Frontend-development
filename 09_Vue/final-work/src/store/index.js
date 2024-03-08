import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        articles: [
            {
                id: 1,
                fileImg: "article_1.png",
                title: "Let’s Get Solution For Building Construction Work",
                date: "26 December,2022 ",
                tag: ["Kitchen"]
            },
            {
                id: 2,
                fileImg: "article_2.png",
                title: "Low Cost Latest Invented Interior Designing Ideas.",
                date: "22 December,2022 ",
                tag: ["Bedroom"]
            },
            {
                id: 3,
                fileImg: "article_3.png",
                title: "Best For Any Office & Business Interior Solution",
                date: "25 December,2022 ",
                tag: ["Building"]
            },
            {
                id: 4,
                fileImg: "article_4.png",
                title: "Let’s Get Solution For Building Construction Work",
                date: "26 December,2022 ",
                tag: ["Architecture"]
            },
            {
                id: 5,
                fileImg: "article_5.png",
                title: "Low Cost Latest Invented Interior Designing Ideas.",
                date: "22 December,2022 ",
                tag: ["Kitchen Planning"]
            },
            {
                id: 6,
                fileImg: "article_6.png",
                title: "Best For Any Office & Business Interior Solution",
                date: "25 December,2022 ",
                tag: ["Bedroom"]
            }
        ],
        projects:  [
            {
                id: 1,
                fileImg: "project_1.png",
                title: "Modern Bathroom",
                subTitle: "Decor / Artchitecture",
            },
            {
                id: 2,
                fileImg: "project_2.png",
                title: "Modern Bathroom",
                subTitle: "Decor / Artchitecture",
            },
            {
                id: 3,
                fileImg: "project_3.png",
                title: "Modern Bathroom",
                subTitle: "Decor / Artchitecture",
            },
            {
                id: 4,
                fileImg: "project_4.png",
                title: "Modern Bed Room",
                subTitle: "Decor / Artchitecture",
            },
            {
                id: 5,
                fileImg: "project_5.png",
                title: "Minimal Bed Room",
                subTitle: "Decor / Artchitecture",
            },
            {
                id: 6,
                fileImg: "project_6.png",
                title: "Minimal Bed Room",
                subTitle: "Decor / Artchitecture",
            },
            {
                id: 7,
                fileImg: "project_7.png",
                title: "Classic Minimal Kitchen",
                subTitle: "Decor / Artchitecture",
            },
            {
                id: 8,
                fileImg: "project_8.png",
                title: "Modern Kitchen",
                subTitle: "Decor / Artchitecture",
            },
            {
                id: 9,
                fileImg: "project_9.png",
                title: "Minimal Kitchen table",
                subTitle: "Decor / Artchitecture",
            },
            {
                id: 10,
                fileImg: "project_10.png",
                title: "System Living Area",
                subTitle: "Decor / Artchitecture",
            },
            {
                id: 11,
                fileImg: "project_11.png",
                title: "Modern Living Area",
                subTitle: "Decor / Artchitecture",
            },
            {
                id: 12,
                fileImg: "project_12.png",
                title: "Modern Living Area",
                subTitle: "Decor / Artchitecture",
            },
        ]
    },
    mutations: {
        SET_ARTICLES(state, articles) {
            state.articles = articles
        },
    },
    getters: {
        articlesItem: state => {
            return state.articles;
        },
        firstThreeArticles: state => {
            return state.articles.slice(3, state.projects.length)
        },
        projectsItem: state => {
            return state.projects;
        },
        lastFourProjects: state => {
            return state.projects.slice(-4, state.projects.length)
        },
    },
});


export default store;