import Vue from 'vue'
import Vuex from 'vuex'
import app from '../api/api.js'

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
    getResults ({ commit }) {
      return new Promise((resolve, reject) => {

        var userAction = new FormData();
        userAction.append('action', 'won');
  
        app()({
          method: 'post',
          url: 'hershey_api/',
          data: userAction
        }).then( (res) => {
            console.log('res: ', res)
            commit('assignWinResults', res.data);
            resolve(res.data.won);

          })
          .catch( (er) => {
              //handle error
              console.log('er: ', er)
              reject();

          });

      })
    }    

  },
  modules: {
  }
})
