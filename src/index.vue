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

// values are duration in millisecond
const names = {
  ballon: 8000,
  beach: 4000,
  candy: 2500,
  car: 2000,
  diamond: 4000,
  flower: 3400,
  heart: 6800,
  kiss: 3000,
  magicwand: 2700,
  star: 4400,
};

export default {
  name: "App",
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
      }, names[this.name]);
    },
    validateName() {
      for (const giftName in names) if (giftName === this.name) return;
      throw new Error(
        `Props 'name' of GiftComponent must be one of '${names.join(
          "','"
        )}'. But you are using '${this.name}'.`
      );
    },
  },
};
</script>
