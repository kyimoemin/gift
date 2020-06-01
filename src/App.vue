<template>
  <div @click="showAnimmation" id="app">
    <!-- <Hearts v-if="show" /> -->
    <!-- <Candy v-if="show" /> -->
    <!-- <Diamond v-if="show" /> -->
    <!-- <Beach v-if="show" /> -->
    <!-- <Kiss v-if="show" /> -->
    <Flower v-if="show" />
    <!-- <Car v-if="show" /> -->
    <!-- <Stars v-if="show" /> -->
    <!-- <MagicWand v-if="show" /> -->
  </div>
</template>

<script>
// import Candy from "./components/Candy";
// import Hearts from "./components/Hearts";
// import Diamond from "./components/Diamond";
// import Beach from "./components/Beach";
// import Kiss from "./components/Kiss";
import Flower from "./components/Flower";
// import Car from "./components/Car";
// import Stars from "./components/Stars";
// import MagicWand from "./components/MagicWand";

export default {
  name: "App",
  components: {
    // Candy,
    // Hearts,
    // Diamond,
    // Beach,
    // Kiss,
    Flower,
    // Car,
    // Stars,
    // MagicWand,
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
      }, 3500);
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

  animation-name: fade-in;
  /* animation-duration: 2.2s; */
  animation-fill-mode: forwards;
  animation-iteration-count: 2;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0, 1.01, 0.11, 1.01);
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

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
