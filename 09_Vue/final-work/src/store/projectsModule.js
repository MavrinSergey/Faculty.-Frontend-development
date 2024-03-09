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
            ]
        }
    },
    getters: {
        getProjects: state => {
            return state.projects;
        },
        lastFourProjects: state => {
            return state.projects.slice(-4, state.projects.length)
        },
    },
    namespaced: true
}