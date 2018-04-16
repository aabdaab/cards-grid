<template>
  <div class="root">
    <CardsContainer />
  </div>
</template>

<script>
import CardsContainer from "./containers/CardsContainer"
import { mapActions } from "vuex"

export default {
  name: "App",
  components: {
    CardsContainer
  }
}
</script>

<style lang="scss">
body {
  font-family: Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}
</style>
