import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_url: 'http://localhost:3001',
    imagePlaceHolder: '',
    user: {},
    affiliation: {},
    country: ''
  },
  getters: {
    getApiUrl: state => state.api_url,
    getUser: state => state.user,
    getImagePlaceHolder: state => state.imagePlaceHolder
  },
  mutations: {
    setImagePlaceHolder(state, payload) {
      state.imagePlaceHolder = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    setUser(state, payload) {
      // load the placeholder if no avatar
      payload.profil.avatar = payload.profil.avatar ? `${this.state.api_url}/${payload.profil.avatar}` : payload.profil.avatar;
      state.commit('setUser', payload);
    },
    setImagePlaceHolder(state) {
      state.commit('setImagePlaceHolder', `${this.state.api_url}/placeholder/placeholder.jpg`);
    }
  },
  modules: {}
})