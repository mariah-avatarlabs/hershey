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

  getters: {
    isWinner: state => {
      return state.session.winner;
    },

    prizeID: state => {
      return state.session.prizeID;
    }    

  },

  mutations: {
    assignWinResults(state, payload){
      state.session.winner = payload.won;
      state.session.prizeID = payload.prizeID;
    },

    assignUser(state, payload){
      state.user = payload.user;
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
    },
    
    createUser({commit}, userData ){

      var userAction = new FormData();
      userAction.append('action', 'createUser');
      userAction.append('firstname', userData.firstname);
      userAction.append('lastname', userData.lastname);
      userAction.append('email', userData.email);
      userAction.append('prizeID', userData.selectedPrizeId);

      console.log('prizeID: ', userData)

      return new Promise((resolve, reject) => {

        app()({
          method: 'post',
          url: 'hershey_api/',
          data: userAction
        }).then( (res) => {
            commit('assignUser', res.data);
            
            // QUESTION - BEST PRACTICE RETURN BOOL?
            resolve(res.data);

          })
          .catch( (er) => {
              //handle error
              console.log('er: ', er)
              reject();

          });

        console.log(userData, commit);


      })

    },

  },

  modules: {
  }

})
