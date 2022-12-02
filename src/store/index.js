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
    SET_COUNTRIES(state, countries) {
      state.countries = countries
    },

    SET_COUNTRY(state, country) {
      state.country = country
    }
  },

  actions: {
    async fetchAllCountries({ commit, state }) {
      if (state.countries) return state.countries

      const response = await axios.get('https://restcountries.com/v2/all')
      commit('SET_COUNTRIES', response.data)
      return response.data
    },

    async fetchCountry({ commit, getters, state }, code) {
      if (state.countries) {
        const country = getters.getCountryByCode(code)
        commit('SET_COUNTRY', country)
        return country
      }

      const response = await axios.get(
        `https://restcountries.com/v2/alpha/${code}`
      )
      commit('SET_COUNTRY', response.data)
      return response.data
    }
  },

  getters: {
    getCountryByCode: state => code => {
      return state.countries.find(country => {
        return country.alpha3Code.toLowerCase() === code
      })
    }
  }
})
