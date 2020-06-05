<template>
  <div>
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
