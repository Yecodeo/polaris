import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_url: 'http://localhost:3001',
    user: {},
    affiliation: {},
    country: ''
  },
  getters: {
    getApiUrl: state => state.api_url,
    getUser: state => state.user
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    setUser(state, payload) {
      payload.profil.avatar = `${this.state.api_url}/${payload.profil.avatar}`;
      state.commit('setUser', payload);
    }
  },
  modules: {
  }
})
