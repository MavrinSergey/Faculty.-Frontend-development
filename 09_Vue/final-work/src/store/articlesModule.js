export const articlesModule = {
    state: () => {
        return {
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
                },
                {
                    id: 7,
                    fileImg: "article_1.png",
                    title: "Let’s Get Solution For Building Construction Work",
                    date: "26 December,2022 ",
                    tag: ["Kitchen"]
                },
                {
                    id: 8,
                    fileImg: "article_2.png",
                    title: "Low Cost Latest Invented Interior Designing Ideas.",
                    date: "22 December,2022 ",
                    tag: ["Bedroom"]
                },
                {
                    id: 9,
                    fileImg: "article_3.png",
                    title: "Best For Any Office & Business Interior Solution",
                    date: "25 December,2022 ",
                    tag: ["Building"]
                },
                {
                    id: 10,
                    fileImg: "article_4.png",
                    title: "Let’s Get Solution For Building Construction Work",
                    date: "26 December,2022 ",
                    tag: ["Architecture"]
                },
                {
                    id: 11,
                    fileImg: "article_5.png",
                    title: "Low Cost Latest Invented Interior Designing Ideas.",
                    date: "22 December,2022 ",
                    tag: ["Kitchen Planning"]
                },
                {
                    id: 12,
                    fileImg: "article_6.png",
                    title: "Best For Any Office & Business Interior Solution",
                    date: "25 December,2022 ",
                    tag: ["Bedroom"]
                }
            ],
            currentPage: 0,
            articlesPerPage: 8,
        }
    },
    mutations: {
        setArticles(state, articles) {
            state.articles = articles;
        },
        setPagination_pageNumber(state, pagination_pageNumber) {
            state.currentPage = pagination_pageNumber;
            console.log(pagination_pageNumber)
        },
    },
    getters: {
        firstThreeArticles: state => {
            return state.articles.slice(0, 3)
        },
        getArticles: state => {
            return state.articles;
        },
        getPagination_pageNumber: state => {
            return state.currentPage;
        },
        getPagination_numberItems: (state) => {
            return state.articlesPerPage;
        },
        getPaginatedData: (state, getters) => {
            const start = getters.getPagination_pageNumber * getters.getPagination_numberItems;
            const end = start + getters.getPagination_numberItems;
            return state.articles.slice(start, end);
        },
        getPagination_items_total: (state) => {
            return state.articles.length;
        },
        getPageCount(state, getters) {
            return Math.ceil(getters.getPagination_items_total / getters.getPagination_numberItems);
        }
    },
    actions: {
        nextPage({state, commit, getters}) {
            return state.currentPage === getters.getPageCount - 1
                ? null
                : commit('setPagination_pageNumber', state.currentPage + 1);
        },
        prevPage({state, commit}) {
            return state.currentPage === 0
                ? null
                : commit('setPagination_pageNumber', state.currentPage - 1)
        }
    },
    namespaced: true
}