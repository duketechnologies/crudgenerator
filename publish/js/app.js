import { InertiaApp } from '@inertiajs/inertia-vue'
import { InertiaProgress } from '@inertiajs/progress'
import Vue from 'vue'


Vue.use(InertiaApp)

InertiaProgress.init({
    // The delay after which the progress bar will
    // appear during navigation, in milliseconds.
    delay: 1000,

    duration : 2000,

    // The color of the progress bar.
    color: '#29d',

    // Whether to include the default NProgress styles.
    includeCSS: true,

    // Whether the NProgress spinner will be shown.
    showSpinner: true,
})

const el = document.getElementById('app')


new Vue({
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app)
