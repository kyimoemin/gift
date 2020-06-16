<template>
  <img
    ref="ballon"
    :src="
      `https://res-global.pfkml36.cn:11443/statics/ballon/${this.photoNumber}.png`
    "
    class="ballon"
    :style="
      `height:${this.height}px;
     z-index:${this.height};
     left:${this.leftPosition}%;
     top:${this.topPosition}%;
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
    topPosition() {
      return getRandom(90, 140, 5);
    },
    x() {
      return getRandom(0, 80) * (this.leftPosition < 40 ? 1 : -1);
    },
    y() {
      return getRandom(60, 90);
    }
  },
  mounted() {
    setTimeout(this.fly, (this.topPosition - 90) * 10);
  },
  methods: {
    fly() {
      const { ballon } = this.$refs;
      ballon.style.opacity = 0;
      ballon.style.transform = `translate(${this.x}%,-${this.y}%) rotate(${this
        .x / 3}deg)`;
    }
  }
};
</script>

<style scoped>
.ballon {
  position: absolute;
  /* top: 100%; */
  transition: transform 8s linear, opacity 3s linear 5s;
}
</style>
