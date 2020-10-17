import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countrys: '',
    country: ''
  },

  mutations: {
    SET_COUNTRYS(state, countrys) {
      state.countrys = countrys
    }
  },

  actions: {
    async fetchAllCountrys({ commit }) {
      const response = await axios.get('https://restcountries.eu/rest/v2/all')
      commit('SET_COUNTRYS', response.data)
    }
  }
})
