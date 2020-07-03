import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import { routes } from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({ 
  routes: routes, //poderia ser só routes 1x pq a propriedade tem o mesmo nome do valor da variável
  mode: 'history'
}) 


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
