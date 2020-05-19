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
        filter:blur(${this.size / 20}px);
      `;
    },
  },
};
</script>

<style scoped>
div {
  opacity: 0.2;
}
div.on {
  animation-name: light-on;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-direction: alternate;
  animation-iteration-count: 2;
}

@keyframes light-on {
  0% {
    background-color: #fce978;
    opacity: 0.2;
  }
  100% {
    background-color: white;
    opacity: 1;
    animation-timing-function: cubic-bezier(0, 1.39, 0.17, 0.92);
  }
}
</style>
