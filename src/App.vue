<template>
  <div v-if="show" class="gift-animation">
    <Hearts v-if="name === 'heart' && show" />
    <Candy v-if="name === 'candy' && show" />
    <Diamond v-if="name === 'diamonds' && show" />
    <Beach v-if="name === 'bikini' && show" />
    <Kiss v-if="name === 'lips' && show" />
    <Flower v-if="name === 'flower' && show" />
    <Car v-if="name === 'porsche' && show" />
    <Stars v-if="name === 'star' && show" />
    <MagicWand v-if="name === 'magic' && show" />
    <Ballons v-if="name === 'balloon' && show" />
    <Ramadan v-if="name === 'ramadan' && show" />
  </div>
</template>

<script>
import Ballons from "./components/Ballons";
import Beach from "./components/Beach";
import Candy from "./components/Candy";
import Car from "./components/Car";
import Diamond from "./components/Diamond";
import Flower from "./components/Flower";
import Hearts from "./components/Hearts";
import Kiss from "./components/Kiss";
import MagicWand from "./components/MagicWand";
import Stars from "./components/Stars";
import Ramadan from "./components/Ramadan";
import { DURATIONS } from "./constants";

export default {
  name: "GiftAnimation",
  components: {
    Candy,
    Hearts,
    Diamond,
    Beach,
    Kiss,
    Flower,
    Car,
    Stars,
    MagicWand,
    Ballons,
    Ramadan,
  },
  data() {
    return {
      show: false,
      name: "",
    };
  },
  mounted() {
    this.$root.$on("show-animation", this.showAnimmation);
  },
  destroyed() {
    this.$root.$off("show-animation", this.showAnimmation);
  },
  methods: {
    showAnimmation(name) {
      if (this.show) return;
      this.name = name;
      this.validateName();
      this.show = true;
      setTimeout(() => {
        this.show = false;
        this.$root.$emit("animation-stopped");
      }, DURATIONS[this.name]);
    },
    validateName() {
      for (const giftName in DURATIONS) if (giftName === this.name) return;
      this.$root.$emit("animation-stopped");
      throw new Error(
        `Props 'name' of GiftComponent must be one of '${Object.keys(
          DURATIONS
        ).join("','")}'. But you are using '${this.name}'.`
      );
    },
  },
};
</script>

<style scope>
.gift-animation {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
  /* background: url(./assets/bg.png); */
  /* background-size: contain; */
}
body {
  margin: 0 !important;
}
.gift-animation .relative {
  position: relative;
}
.gift-animation .absolute {
  position: absolute;
}
.gift-animation svg {
  position: absolute;
}

.gift-animation .animation-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;

  animation-name: fade-in;
  /* animation-duration: 2.2s; */
  animation-fill-mode: forwards;
  animation-iteration-count: 2;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0, 1.01, 0.11, 1.01);
}

.gift-animation .flex {
  display: flex;
}
.gift-animation .justify-center {
  justify-content: center;
}
.gift-animation .align-center {
  align-items: center;
}

.gift-animation .flex-center {
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
