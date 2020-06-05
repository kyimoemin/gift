<template>
  <div class="gift-animation">
    <Hearts v-if="name === 'heart' && show" />
    <Candy v-if="name === 'candy' && show" />
    <Diamond v-if="name === 'diamond' && show" />
    <Beach v-if="name === 'beach' && show" />
    <Kiss v-if="name === 'kiss' && show" />
    <Flower v-if="name === 'flower' && show" />
    <Car v-if="name === 'car' && show" />
    <Stars v-if="name === 'star' && show" />
    <MagicWand v-if="name === 'magicwand' && show" />
    <Ballons v-if="name === 'ballon' && show" />
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
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.validateName();
    this.$root.$on("show-animation", this.showAnimmation);
  },
  methods: {
    showAnimmation() {
      if (this.show) return;
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, DURATIONS[this.name]);
    },
    validateName() {
      for (const giftName in DURATIONS) if (giftName === this.name) return;
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
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: absolute;
  /* background: url(./assets/bg.png); */
  /* background-size: contain; */
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
