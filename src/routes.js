import VueRouter from 'vue-router'
import Home from './components/Home'
import Cars from './components/Cars'
import Car from './components/Car'
import ErrorComponent from './components/Error'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/cars',
            component: Cars
        },
        {
            path: '/car/:id',
            component: Car
        },
        {
            path: '*',
            component: ErrorComponent
        }
    ],
    mode: 'history'
});