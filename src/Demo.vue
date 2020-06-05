<template>
  <div id="app" @click="showAnimation">
    <Gift name="ballon" />
  </div>
</template>

<script>
import Gift from "./index.vue";
export default {
  components: {
    Gift,
  },
  methods: {
    showAnimation() {
      this.$root.$emit("show-animation");
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
