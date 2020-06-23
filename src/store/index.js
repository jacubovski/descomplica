import Vue from 'vue'
import Vuex from 'vuex'
import PersonService from '../services/person/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    persons: []
  },
  mutations: {
    'SET_PERSONS' (state, persons) {
      state.persons = persons
    },
    'REMOVE_PERSON' (state, newPersons) {
      state.persons = newPersons
    }
  },
  actions: {
    async setPersons ({ commit }, params) {
      const persons = await PersonService.getPersons(params)
      commit('SET_PERSONS', persons)
    },
    removePersons ({ commit, state }, id) {
      const persons = [...state.persons]
      const idx = persons.findIndex(i => i.id === id)
      persons.splice(idx, 1)
      idx !== -1 && commit('REMOVE_PERSON', persons)
    }
  },
  modules: {
  }
})
