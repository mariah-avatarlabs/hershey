<template>
  <button
    class="button"
    @click="callback"
  >
      <p class="btn-label">{{label}}</p>
  </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        label: String,
        callback: Function
    }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

  button {
    padding: 0;
    margin: 0;
  }

  .btn-label {
    color: $orange-dark;
    font-size: 1.5rem;
    padding: 0.75em 1.5em;
    margin: 0;

  }

  .button {
    background-color: $yellow;
    border: none;
    border-radius: 2em;
  }
</style>