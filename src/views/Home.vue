<template>
  <div class="home">
    <Jumbotron />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Jumbotron from '@/components/Jumbotron.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Jumbotron
  }
}
</script>
