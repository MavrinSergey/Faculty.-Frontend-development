export const projectsModule = {
    state: () => {
        return {
            projects: [
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
            ],
            currentPage: 0,
            projectsPerPage: 8,
            filterProjects: [],
            tagsForFiltering: [
                {name: 'Bathroom', isActive: false},
                {name: 'Bed Room', isActive: false},
                {name: 'Kitchen', isActive: false},
                {name: 'Living Area', isActive: false},
            ],
        }
    },
    mutations: {
        setTagsForFiltering(state, tagName) {
            state.tagsForFiltering.forEach(item => {
                if (item.name === tagName) {
                    item.isActive = !item.isActive;
                }
            })
        },
        setFilterProjects(state, filterProjects) {
            state.filterProjects = filterProjects;
        },
        setCurrentPage(state, pagination_pageNumber) {
            state.currentPage = pagination_pageNumber;
        },
    },
    getters: {
        getFilterProjects: state => {
            return state.filterProjects;
        },
        getActiveTags: state => {
            return state.tagsForFiltering.filter(item => item.isActive === true)
        },
        lastFourProjects: state => {
            return state.projects.slice(-4, state.projects.length)
        },
        getPaginatedData: state => {
            const start = state.currentPage * state.projectsPerPage;
            const end = start + state.projectsPerPage;
            return state.filterProjects.slice(start, end);
        },
        getPagination_items_total: (state) => {
            return state.filterProjects.length;
        },
        getPageCount(state, getters) {
            return Math.ceil(getters.getPagination_items_total / state.projectsPerPage);
        },
        isPagination(state, getters) {
            return getters.getPagination_items_total > state.projectsPerPage;
        },
    },
    actions: {
        clickTagFilter({getters, commit, state}, event) {
            if (event) {
                const tagName = event.target.textContent.trim();
                commit('setTagsForFiltering', tagName);
                const filteredProjects = state.projects.filter(project => {
                    return getters.getActiveTags.some(tag => project.title.includes(tag.name));
                });
                commit('setFilterProjects', filteredProjects);
            } else {
                const filteredProjects = state.projects;
                commit('setFilterProjects', filteredProjects);
            }
        },
        nextPage({state, commit, getters}) {
            if (state.currentPage < getters.getPageCount - 1) {
                commit('setCurrentPage', state.currentPage + 1);
            }
        },
        prevPage({state, commit}) {
            if (state.currentPage > 0) {
                commit('setCurrentPage', state.currentPage - 1)
            }
        }
    },
    namespaced: true
}