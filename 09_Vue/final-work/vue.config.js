// const {defineConfig} = require('@vue/cli-service')
// module.exports = defineConfig({
//     transpileDependencies: true
// })
module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: '@import "~@/assets/scss-modules/_variables.scss";',
            },
        },
    },
    transpileDependencies: true,
};