
require('./bootstrap');

window.Vue = require('vue');

// intiliasisai component
Vue.component('navigation', require('./components/Navigation.vue').default);

// intialisasi id app, di views/app.blade
const app = new Vue({
    el: '#app',
});
