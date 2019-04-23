import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import router from './routes'
import App from './App.vue'

Vue.config.productionTip = false;

/**
 * Подключить библиотеку
 */
Vue.use(VueResource);
Vue.use(Vuelidate);
Vue.use(VueRouter);

/**
 * Глобальная настройка vue-resource
 * Устанавливаем Base Url
 * Для root url не забывать ставить на конце слэш
 * @type {string}
 */
Vue.http.options.root = 'http://localhost:3000/';

/**
 * Интерсепторы
 * Глобальная настройка заголовков запроса
 * Можно использовать например для авторизации
 */
Vue.http.interceptors.push(request => {
  request.headers.set('Authorization', 'Bearer TOKEN')
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
