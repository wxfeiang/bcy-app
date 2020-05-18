
import { Button, NavBar, Toast } from 'vant';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './utis/requst';


Vue.config.productionTip = false
Vue.use(Button)
Vue.use(NavBar) 
Vue.use(Toast)
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
