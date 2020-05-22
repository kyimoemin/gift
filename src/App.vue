<template>
  <div @click="showAnimmation" id="app">
    <!-- <Hearts v-if="show" /> -->
    <!-- <Candy v-if="show" /> -->
    <!-- <Diamond v-if="show" /> -->
    <!-- <Beach v-if="show" /> -->
    <Kiss v-if="show" />
  </div>
</template>

<script>
// import Candy from "./components/Candy";
// import Hearts from "./components/Hearts";
// import Diamond from "./components/Diamond";/
// import Beach from "./components/Beach";
import Kiss from "./components/Kiss";

export default {
  name: "App",
  components: {
    // Candy,
    // Hearts,
    // Diamond,
    // Beach,
    Kiss,
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

.flex {
  display: flex;
}
.justify-center {
  justify-content: center;
}
.align-center {
  align-items: center;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
