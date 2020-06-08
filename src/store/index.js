import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
let url = "http://localhost:3000/api/"
export default new Vuex.Store({
   
  state: {
    user: null,
  },
  mutations: {
    LOGIN(state, user) {
      state.user = user;
    },
    REGISTER(state, user){
      state.user = user
    }
  },
  actions: {
    async login({ commit }, user) {
      const { data } = await axios.post(
        `${url}user/login`,
        user,
        { withCredentials: true }
      );
      if (data.status === "OK") {
        const { user } = data;
        commit("LOGIN", user);
      } else {
        throw data;
      }
    },
    async register({commit}, user){
      const { data } = await axios.post(
        `${url}user/register`,
        user,
        { withCredentials: true }
      );
      if (data.status === "OK") {
        const { user } = data;
        commit("REGISTER", user);
      } else {
        throw data;
      }
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.user != null;
    },
  },
  modules: {},
});
