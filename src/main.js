import Vue from 'vue';
import './style.scss';


import VueResources from 'vue-resource';
Vue.use(VueResources);

import moment from 'moment-timezone';

Object.defineProperty(Vue.prototype, '$moment', {get() {return this.$root.moment}});
moment.tz.setDefault('UTC');

import { checkFilter, setDay } from './util/bus';
const bus = new Vue();

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from './util/routes'
const router = new VueRouter({ routes });

import Tooltip from './util/tooltip';
Vue.use(Tooltip);


Object.defineProperty(Vue.prototype, '$bus', {get() {return this.$root.bus}});

new Vue({
    el:'#app',
    data:{
        genre:[],
        time:[],
        movies:[],
        moment,
        day: moment(),
        bus
    },
    methods:{

    },
    created(){
        this.$http.get('/api').then(response => {
            this.movies = response.data;
        });
        this.$bus.$on('check-filter', checkFilter.bind(this));
        this.$bus.$on('set-day', setDay.bind(this));
    },
    router
});



