<template>
    <div id="results" class="page">
        <template v-if="isWinner">
          <h2>You Won!</h2>
          <p class="sub-copy">Fill out the following info and we'll mail you the prize!</p>

          <div id="user-form">

            <span>
              <label for="first">First: </label>
              <input 
                type="text" 
                id="first" 
                v-model="userData.firstname"
              >
            </span>
            

            <span>
              <label for="last">Last: </label>
              <input 
                type="text" 
                id="last" 
                v-model="userData.lastname"
              >
            </span>
            

            <span>
              <label for="email">Email: </label>
              <input 
                type="text" 
                id="email" 
                v-model="userData.email"
              >
            </span>


          </div>
          
          <Button 
            label="Submit"
            :callback="submitData"
          />

        </template>

        <template v-else>
          <h2>Sorry!</h2>
          <p class="sub-copy">you are not a winner today</p>
          <div></div>
          <p class="sub-copy">try again next time</p>

        </template>

    </div>
</template>

<script>
import Button from '../components/shared/Button'
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Results',
  components: {
    Button
  },

  data(){
    return {
      isWinner: this.$store.state.session.winner,
      userData: {
        firstname: "",
        lastname: "",
        email: "",
        // selectedPrizeId: this.prizeId -> Not working???
        selectedPrizeId: this.$store.state.session.prizeID
      }
    }
  },

  computed: {
    ...mapGetters([
      'prizeID',
      // 'isWinner',
    ]) 
  
  },

  methods: {
    ...mapActions(['createUser']),
    
    submitData(){
      console.log('userdata: ', this)
      this.createUser(this.userData)
      
        .then((data) => {
          if(data.error){
            console.log('made user: ', this, data);
            this.$router.push('confirmation')
          }

        })
        .catch(() => {

        });
    },

  }

}
</script>

<style>

</style>