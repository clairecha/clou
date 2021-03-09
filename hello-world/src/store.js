import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: false,
    pseudo: '',
    id: '',
  },
  mutations: {
    ADD_TOKEN: (state, token) => {
      state.token = token;
      console.log(state.token);
    },
    REMOVE_TOKEN: (state) => {
      state.token = false;
    },
    ADD_PSEUDO: (state, pseudo) => {
      state.pseudo = pseudo;
    },
    ADD_ID: (state, id) => {
      state.id = id;
    },
  },
  getters: {
    token: (state) => {
      return state.token;
    },
    pseudo: (state) => {
      return state.pseudo;
    },
    id: (state) => {
      return state.id;
    },
  },
  actions: {
    addToken(context, token) {
      context.commit('ADD_TOKEN', token); //pour l'envoyer à la mutation
    },
    removeToken(context) {
      context.commit('REMOVE_TOKEN');
    },
    addId(context, id) {
      context.commit('ADD_ID', id);
    },
    addPseudo(context, pseudo) {
      context.commit('ADD_PSEUDO', pseudo);
    },
  },
  plugins: [createPersistedState()],
});

export default store;
