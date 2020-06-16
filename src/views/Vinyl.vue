<template>
  <div class="vinyl">
    <h1>Vinyl</h1>
    <h2>..my vinyl page</h2>
    <div class=".img-wrapper">
      <img src="../assets/luda.png">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Vinyl',
  data () {
    return {
      records: null
    }
  },
  created: function () {
    this.$store.dispatch('discoStore/updateRecord')
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
img-wrapper {
  justify-items: center;
}
</style>
