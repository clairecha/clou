import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: false,
    member: '',
  },
  mutations: {
    ADD_TOKEN: (state, token) => {
      state.token = token;
      console.log(state.token);
    },
    REMOVE_TOKEN: (state) => {
      state.token = false;
    },
    GET_MEMBER: (state, member) => {
      state.member = member;
    },
  },
  getters: {
    token: (state) => {
      return state.token;
    },
    member: (state) => {
      return state.member;
    },
  },
  actions: {
    addToken(context, token) {
      context.commit('ADD_TOKEN', token); 
    },
    removeToken(context) {
      context.commit('REMOVE_TOKEN');
    },
    getMember(context, member) {
      context.commit('GET_MEMBER', member);
    },
  },
  plugins: [createPersistedState()],
});

export default store;
