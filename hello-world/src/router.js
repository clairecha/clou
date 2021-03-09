import Vue from 'vue';
import store from './store';
import Dashboard from './components/Dashboard';
import Salon from './components/Salon';
import Jumbo from './components/Jumbo';
import Menu from './components/Menu';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/salon',
    name: 'Salon',
    component: Salon,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/sign-in',
    component: SignIn,
  },
  {
    path: '/sign-up',
    component: SignUp,
  },
  {
    path: '/menu',
    component: Menu,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: {
      requireAuth: true,
    },
  },

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
    if (store.getters.token == false) {
      next({path: '/'});
    } else if (store.getters.token) {
      next();
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
