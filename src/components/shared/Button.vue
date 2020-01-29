<template>
  <button
    class="button"
    @click="callback"
  >
      <p>{{label}}</p>
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

<style lang="sass" scoped>

</style>