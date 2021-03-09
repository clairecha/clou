import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: false,
    members: '',
  },
  mutations: {
    ADD_TOKEN: (state, token) => {
      state.token = token;
      console.log(state.token);
    },
    REMOVE_TOKEN: (state) => {
      state.token = false;
    },
    ADD_MEMBERS: (state, members) => {
      state.members = members;
    },
  },
  getters: {
    token: (state) => {
      return state.token;
    },
    members: (state) => {
      return state.members;
    },
  },
  actions: {
    addToken(context, token) {
      context.commit('ADD_TOKEN', token); //pour l'envoyer à la mutation
    },
    removeToken(context) {
      context.commit('REMOVE_TOKEN');
    },
    addMembers(context, members) {
      context.commit('ADD_MEMBERS', members);
    },
  },
  plugins: [createPersistedState()],
});

export default store;
