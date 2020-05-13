<template>
  <div id="app">
    <Candy />
  </div>
</template>

<script>
import Candy from "./components/Candy";

export default {
  name: "App",
  components: {
    Candy,
  },
};
</script>

<style>
#app {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  background: url(./assets/bg.png);
  background-size: contain;
}
body {
  margin: 0 !important;
}
.relative {
  position: relative;
}
svg {
  position: absolute;
}
</style>
