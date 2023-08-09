export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ['@/assets/css/bootstrap.min.css'],
    modules: ['nuxt-icon', '@sidebase/nuxt-auth', '@pinia/nuxt'],
    app: {
        head: {
            script: [
                "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
            ]
        }
    },
})
