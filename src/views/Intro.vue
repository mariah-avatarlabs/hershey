<template>
    <div id="intro" class="page">
        <h1>Intro</h1>
        <Button 
          label="Try Your Luck"
        />
    </div>
</template>

<script>
import Button from '../components/shared/Button'

import axios from 'axios';
import { mapMutations } from 'vuex';

var instance = axios.create({
  baseURL: '/api/',
  crossdomain: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    'Content-Type': 'application/json',
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  }
});


export default {
  name: 'Intro',
  components: {
    Button
  },
  mounted(){
    this.isWinner();
    console.log('this: ', this)
},
  methods: {
    ...mapMutations(['assignWinResults']),
    isWinner(){
      console.log('called');
      // see if available prizes

      var userData = new FormData();
      userData.append('action', 'won');
      // var _this = this;

      instance({
        method: 'post',
        url: 'hershey_api/',
        data: userData
      }).then( (res) => {
          console.log('res: ', res)
          this.assignWinResults(res.data);

        })
        .catch( (er) => {
            // alert('fail: ', er);
            console.log('er: ', er)
            //handle error
        });


    }
  }

}
</script>

<style>

</style>