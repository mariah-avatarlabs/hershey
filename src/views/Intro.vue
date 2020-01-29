<template>
    <div id="intro" class="page">
        <h1>Intro</h1>
        <Button 
          label="Try Your Luck"
          :callback="isWinner"
        />
    </div>
</template>

<script>
import Button from '../components/shared/Button'
import { mapActions } from 'vuex';


export default {
  name: 'Intro',
  components: {
    Button
  },

  mounted(){
    console.log('this: ', this)
  },

  methods: {
    // ...mapMutations(['assignWinResults']),
    ...mapActions(['getResults']),

    isWinner(){
      var userData = new FormData();
      userData.append('action', 'won');
       
      this.getResults()
        .then((hasWon) => {
          // question - vue check is this correct?
          // check session
          console.log('hasWon: ', this.$router, hasWon);
          this.$router.push('results')

        })
        .catch( () => {

        })

    


    }
  }

}
</script>

<style>

</style>