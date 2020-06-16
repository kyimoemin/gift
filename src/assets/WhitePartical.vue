<template>
  <div ref="partical" :style="style" />
</template>

<script>
import { getRandom } from "../util";

// x,y dx,dy size blur, size,

export default {
  name: "WhitePartical",
  computed: {
    x() {
      return getRandom(-30, 100);
    },
    y() {
      return getRandom(40, 60);
    },
    dy() {
      return getRandom(-20, 20);
    },
    size() {
      return getRandom(5, 70);
    },
    blur() {
      return getRandom(this.size / 50, this.size / 5);
    },
    delay() {
      return getRandom(0, 2);
    },
    opacity() {
      return getRandom(0.4, 0.7);
    },
    style() {
      return `
        filter: blur(${this.blur}px);
        left: ${this.x}%;
        top: ${this.y}%;
        opacity:${this.opacity};
        height: ${this.size}px;
        width: ${this.size}px;
        box-shadow: 0px 0px ${this.size / 10}px ${this.size / 10}px #fce978;
      `;
    }
  },
  mounted() {
    // this.$refs.partical.style.transitionDelay = `${this.delay}s`;
    setTimeout(this.move, 0);
  },
  methods: {
    move() {
      let el = this.$refs.partical;
      el.style.transform = `translate(130%,${this.dy}%)`;
    }
  }
};
</script>

<style scoped>
div {
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  background-color: #fff;
  transition: all 6s linear;
}
</style>
