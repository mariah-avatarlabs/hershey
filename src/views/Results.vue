<template>
    <div id="results" class="page">
        <h1>Results</h1>

        <template v-if="isWinner">
          <h2>Winner</h2>

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
          <h2>Loser</h2>

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
      isWinner: true,
      userData: {
        firstname: "",
        lastname: "",
        email: "",
        selectedPrizeId: this.prizeId
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
      console.log('userdata: ', this.userData)
      this.createUser(this.userData)
        .then((data) => {
          if(data.user){
            console.log('made user: ', this);
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