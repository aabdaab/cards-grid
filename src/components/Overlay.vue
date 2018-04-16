<template>
  <div class="overlay__background"></div>
</template>

<script>
export default {
  name: "Overlay",
}
</script>

<style lang="scss" scoped>
.overlay__background {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.6);
}
</style>
