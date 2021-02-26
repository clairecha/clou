import Vue from 'vue';
import App from './App.vue';
import vuex from 'vuex';
import router from './router';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// ----------------------------------------
// import socketio from 'socket.io';
// import VueSocketIO from 'vue-socket.io';

// export const SocketInstance = socketio('http://localhost:4113');

// Vue.use(VueSocketIO, SocketInstance)
// // ----------------------------------------

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(vuex);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
