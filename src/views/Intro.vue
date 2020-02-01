<template>
    <div id="intro" class="page">
        <h1>Get your reese easter eggs</h1>
        <p class="sub-copy">Tap below to asee if you're a winner</p>
        <div>image</div>
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
          console.log('hasWon: ', this, hasWon);
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