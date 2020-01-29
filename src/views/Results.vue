<template>
    <div id="results" class="page">
        <h1>Results</h1>

        <template v-if="isWinner">
          <h2>Winner</h2>

        </template>

        <template v-else>
          <h2>Loser</h2>

        </template>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Results',

  computed: {
    ...mapGetters([
      'isWinner',
    ]) 
  }

}
</script>

<style>

</style>