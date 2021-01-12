import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_url: 'http://localhost:3001',
    user: {},
    seekedAffiliation: []
  },
  getters: {
    getApiUrl: state => state.api_url,
    getUser: state => state.user,
    getProfil: state => state.user.profil,
    getAffiliation: state => state.user.affiliation,
    getCountry: state => state.user.country,
    getSeekedAffiliation: state => state.seekedAffiliation,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setCountry(state, payload) {
      state.profil.country = payload;
    },
    setAffiliation(state, payload) {
      state.seekedAffiliation = payload;
    }
  },
  actions: {
    setUser(state, payload) {
      state.commit('setUser', payload);
    },
    setCountry(state, payload){
      state.commit('setCountry', payload);
    },
    setAffiliation(state, payload) {
      state.commit('setAffiliation', payload);
    }

  },
  modules: {
  }
})
