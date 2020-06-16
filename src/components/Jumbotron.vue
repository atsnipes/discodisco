<template>
  <div class="jumbotron">
  <h1 class="display-4">Are you ready for some weiner dogs?!</h1>
  <p class="lead">Click this button then</p>
  <hr class="my-4">
  <div class="flex flex-row">
    <div class="flex flex-col">
      <button
        v-on:click="goToAbout()"
        class="btn btn-primary btn-lg mt-4 text-white">
        Puppies Goddamnit
      </button>
    </div>
    <div class="flex flex-col">
      <button
        v-on:click="goToVinyl()"
        class="btn btn-primary btn-lg mt-4 text-white">
        Vinyl Collection
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Jumbotron',
  props: {
    msg: String
  },
  methods: {
    goToAbout: function () {
      this.$router.push('/about')
    },
    goToVinyl: function () {
      this.$router.push('/vinyl')
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
