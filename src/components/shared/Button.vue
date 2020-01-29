<template>
  <button
    class="button">
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