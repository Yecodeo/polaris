import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

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
    getUser: state => state.user,
    getProfil: state => state.user.profil,
    getAffiliation: state => state.affiliation,
    getCountry: state => state.user.country
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setCountry(state, payload) {
      state.profil.country = payload;
    },
    setAffiliation(state, payload) {
      state.affiliation = payload;
    }
  },
  actions: {
    setUser(state, payload) {
      state.commit('setUser', payload);
    },
    setCountry(state, payload){
      state.commit('setCountry', payload);
    },
    async setAffiliation(state) {
      const id = state.state.user.id;
      const url = state.state.api_url;

      await axios.get(`${url}/affiliation/${id}`).then(function(res) {
        state.commit('setAffiliation', res.data.data);
      }).catch(error => console.error(error));
    }

  },
  modules: {
  }
})
