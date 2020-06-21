import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
let url = "http://localhost:3000/api/";
export default new Vuex.Store({
  state: {
    user: null,
    items: {},
  },
  mutations: {
    LOGIN(state, user) {
      state.user = user;
    },
    REGISTER(state, user) {
      state.user = user;
    },
    ITEMS(state, items) {
      state.items = items;
    },
    LOGOUT(state){
      state.user = null;
    }
  },
  actions: {
    async getItems({ commit }) {
      const { data } = await axios.get(`${url}item/`);
      commit("ITEMS", data);
    },
    async login({ commit }, user) {
      const { data } = await axios.post(`${url}user/login`, user, {
        withCredentials: true,
      });
      if (data.status === "OK") {
        const { user } = data;
        commit("LOGIN", user);
      } else {
        throw data;
      }
    },
    async register({ commit }, user) {
      const { data } = await axios.post(`${url}user/register`, user, {
        withCredentials: true,
      });
      if (data.status === "OK") {
        const { user } = data;
        commit("REGISTER", user);
      } else {
        throw data;
      }
    },
    async loggingout({commit}){
      commit("LOGOUT")
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.user != null;
    },
    giveItems(state) {
      return state.items;
    },
  },
  modules: {},
});
