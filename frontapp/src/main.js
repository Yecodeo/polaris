import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css'
import Route from './routes/route';
import store from './store';
import capitalize from './helper/capitalize';

Vue.config.productionTip = false
Vue.use(Buefy);
Vue.use(VueRouter);
Vue.filter('capitalize', capitalize);

const router = new VueRouter({
  linkActiveClass: 'is-active',
  routes: Route,
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
