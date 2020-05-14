<template>
  <div @click="showTheCandy" id="app">
    <Candy v-if="showCandy" />
  </div>
</template>

<script>
import Candy from "./components/Candy";

export default {
  name: "App",
  components: {
    Candy,
  },
  data() {
    return {
      showCandy: false,
    };
  },
  methods: {
    showTheCandy() {
      if (this.showCandy) return;
      this.showCandy = true;
      setTimeout(() => {
        this.showCandy = false;
      }, 3000);
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
svg {
  position: absolute;
}

.b-1-w {
  border: 1px solid white;
}
</style>
