<template>
  <img
    ref="ballon"
    :src="
      `https://res-global.1315cdn.com:11443/statics/ballon/${this.photoNumber}.png`
    "
    class="ballon"
    :style="
      `height:${this.height}px;
     z-index:${this.height};
     left:${this.leftPosition}vw;
     `
    "
  />
</template>

<script>
import { getRandom } from "../../util";

export default {
  name: "Ballon",

  computed: {
    photoNumber() {
      return getRandom(1, 11);
    },
    height() {
      return getRandom(30, 120);
    },
    opacity() {
      return this.height / 60;
    },
    leftPosition() {
      return getRandom(0, 80);
    },
    x() {
      return getRandom(0, 80) * (this.leftPosition < 40 ? 1 : -1);
    },
    y() {
      return getRandom(60, 90);
    },
    delay() {
      return getRandom(0, 4000);
    },
  },
  mounted() {
    setTimeout(this.fly, this.delay);
  },
  methods: {
    fly() {
      const { ballon } = this.$refs;
      console.log(this.delay);
      // ballon.style.opacity = 0;
      ballon.style.transform = `translate(${this.x}vw,-${
        this.y
      }vh) rotate(${this.x / 3}deg)`;
    },
  },
};
</script>

<style scoped>
.ballon {
  position: absolute;
  top: 100%;
  transition: transform 8s linear, opacity 3s linear 5s;
}
</style>
