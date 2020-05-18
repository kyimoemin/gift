<template>
  <div @click="showAnimmation" id="app">
    <Hearts v-if="show" />
    <!-- <Candy v-if="show" /> -->
  </div>
</template>

<script>
// import Candy from "./components/Candy";
import Hearts from "./components/Hearts";

export default {
  name: "App",
  components: {
    // Candy,
    Hearts,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showAnimmation() {
      if (this.show) return;
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 6800);
    },
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
.absolute {
  position: absolute;
}
svg {
  position: absolute;
}

.b-1-w {
  border: 1px solid white;
}
.animation-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
