import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tokens: false,
    name: '',
    id: '',
    contacts: [],
  },
  mutations: {
    ADD_TOKEN: (state, token) => {
      state.tokens = token;
      console.log(state.tokens);
    },
    REMOVE_TOKEN: (state) => {
      state.tokens = false;
    },
    ADD_NAME: (state, name) => {
      state.name = name;
    },
    ADD_ID: (state, id) => {
      state.id = id;
    },
    ADD_CONTACT: (state, contact) => {
      state.contacts.push(contact);
    },
  },
  getters: {
    tokens: (state) => {
      return state.tokens;
    },
    name: (state) => {
      return state.name;
    },
    id: (state) => {
      return state.id;
    },
    contact: (state) => {
      return state.contacts;
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
    addName(context, name) {
      context.commit('ADD_NAME', name);
    },
    addContact(context, contact) {
      context.commit('ADD_CONTACT', contact);
    },
  },
  plugins: [createPersistedState()],
});

export default store;
