import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    contractTypes: []
  },
  mutations: {
    initProducts(state, payload) {
      state.products = payload
    },
    initContractTypes(state, payload) {
      state.contractTypes = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
