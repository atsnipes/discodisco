<template>
<div id="ramen">
  <div class="center">
    <pixel-spinner
      v-if="loading"
      :animation-duration="3000"
      :size="200"
      :color="'#ff1d5e'"
    />

    <div v-if="!loading">
      <div v-if="hasSadText" class='p-5'>
        <img src="../assets/sadTurtle.jpg">
        <div class='px-5'>
          <p class="my-5"><strong>DASHI IS STILL CLOSED</strong></p>
          <p class="">Text off the site :</p>
          <span>{{this.sadText}}</span>
        </div>
        <img class="pt-5" src="../assets/sadPup.jpg">
      </div>
      <div v-if="!hasSadText">
        HOLY SHIT IT'S OPEN
      </div>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import { PixelSpinner } from 'epic-spinners'

export default {
  name: 'RamenScraper',
  components: {
    PixelSpinner
  },
  data () {
    return {
      records: null
    }
  },
  computed: {
    hasSadText () {
      return this.$store.state.ramenStore.hasSadText.data
    },
    sadText () {
      return this.$store.state.ramenStore.sadText.data
    },
    loading () {
      return this.$store.state.ramenStore.hasSadText.loading
    }
  },
  created: function () {
    this.$store.dispatch('ramenStore/updateOpenedStatus')
  },
  methods: {
  }
}
</script>

<style scoped>
#ramen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height:fit-content;
    align-items: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    height: 100vh;
}
.center {
    text-align: center;     /* will center text in <p>, which is not a flex item */
}
</style>
