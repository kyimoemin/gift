<template>
  <div
    class="grid"
    :style="
      `grid-template-rows: repeat(2, ${lightSize}px);
      grid-auto-columns:${lightSize}px;
      grid-gap:${lightSize / 10 + gap}px;
  `
    "
  >
    <Light
      v-for="(item, index) in lights"
      :on="item"
      :size="lightSize"
      :key="index"
    />
  </div>
</template>

<script>
import Light from "./Light";
import { getRandom } from "../util";

const MAX_TIMEOUT = 2000;

export default {
  name: "LightGrid",
  components: {
    Light,
  },
  props: {
    lightSize: {
      type: Number,
      default: 10,
    },
    gap: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      lights: new Array(this.getCount()),
      intervalId: 0,
    };
  },
  mounted() {
    this.intervalId = setInterval(this.randomLightOn, MAX_TIMEOUT);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    getCount() {
      return Math.ceil(screen.width / (this.lightSize + this.gap)) * 2;
    },
    randomLightOn() {
      const amount = getRandom(this.lights.length / 4, this.lights.length / 2);
      for (let i = 0; i < amount; i++) {
        this.turnOn(getRandom(0, this.lights.length));
      }
    },
    turnOn(index) {
      setTimeout(() => {
        this.$set(this.lights, index, true);
        this.turnOff(index);
      }, getRandom(0, MAX_TIMEOUT));
    },
    turnOff(index) {
      setTimeout(() => this.$set(this.lights, index, false), MAX_TIMEOUT * 2);
    },
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-auto-flow: column;
  /* grid-template-rows: repeat(2, 10px);
  grid-auto-columns: 10px;
  grid-gap: 2px; */
}
</style>
