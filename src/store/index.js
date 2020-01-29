import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {

    },
    session: {
      winner: null,
      prizeID: null
    }
  },

  mutations: {
    assignWinResults(state, payload){
      state.session.winner = payload.won;
      state.session.prizeID = payload.prizeID;
    }
  },
  actions: {
  },
  modules: {
  }
})
