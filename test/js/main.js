import {foo} from 'js/test1.js';

const Foo = {template: foo};
const Bar = {template: '<div>bar</div>'};


const router = new VueRouter({
    routes: [
        {path: '/foo', component: Foo},
        {path: '/bar', component: Bar}
    ]
});

new Vue({
    router,
    el: '#app'
});

// const app = new Vue({
//     router
// }).$mount('#app');

// router.push({ path: 'register', query: { plan: 'private' }})


