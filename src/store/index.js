import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    LOGIN(state, user){
      state.user = user
    }
  },
  actions: {
    async login({commit}, user){
      const {data} = axios.post('/api/user/login', user, {withCredentials: true})
      if(data.status === "OK"){
        const {user} = data
        commit('LOGIN', user)
      }else{
        throw data
      }
    }
  },
  getters: {
    isLoggedIn(state){
      return state.user != null
    }
  },
  modules: {
  }
})
