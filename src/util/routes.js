import OverView from '../components/OverView.vue';
import Detail from '../components/Detail.vue';

export default [
    {path: '/', component:OverView, name:'home'},
    {path: '/movie/:id', component:Detail, name:'movie'},
    {path: '*', redirect:{name:'home'}},
];