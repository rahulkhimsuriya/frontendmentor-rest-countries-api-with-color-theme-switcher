import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: '',
    country: ''
  },

  mutations: {
    SET_countries(state, countries) {
      state.countries = countries
    }
  },

  actions: {
    async fetchAllcountries({ commit }) {
      const response = await axios.get('https://restcountries.eu/rest/v2/all')
      commit('SET_countries', response.data)
    }
  }
})
