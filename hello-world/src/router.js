import Vue from 'vue';
import store from './store';
import Dashboard from './components/Dashboard';
import Jumbo from './components/Jumbo';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requireAuth: true,
    },
  },
  { path: '/sign-in', component: SignIn },
  { path: '/sign-up', component: SignUp },
  {
    path: '/',
    component: Jumbo,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  console.log('to', to);

  if (to.matched.some((record) => record.meta.requireAuth == true)) {
    if (store.getters.tokens == false) {
      next({ path: '/' });
    } else if (store.getters.tokens) {
      next();
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
