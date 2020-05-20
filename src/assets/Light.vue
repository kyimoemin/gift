<template>
  <div :style="style" :class="{ on }" />
</template>

<script>
export default {
  name: "Light",
  props: {
    on: {
      type: Boolean,
      default: false,
    },
    size: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    style() {
      return `
        border-radius:50%;
        background-color:#fce978;
        box-shadow: 0px 0px ${this.size / 10}px ${this.size / 10}px #fce978;
        filter:blur(${this.size / 10}px);
      `;
    },
  },
};
</script>

<style scoped>
div {
  opacity: 0;
}
div.on {
  animation-name: light-on;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-direction: alternate;
}

@keyframes light-on {
  0% {
    background-color: #f5da41;
    opacity: 0;
    transform: scale(1);
  }
  20% {
    background-color: #fff;
    opacity: 1;
    transform: scale(1.1);
    filter: blur(0.5px);
  }
  60% {
    opacity: 0.8;
  }
  80% {
    background-color: #f5da41;
    opacity: 0.5;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0, 0.65, 1, 0.37);
  }
  100% {
    background-color: #f5da41;
    opacity: 0.1;
    transform: scale(1);
  }
}
</style>
