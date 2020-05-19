<template>
  <div class="animation-wrapper flex justify-center align-center">
    <LightGrid :lightSize="20" :gap="2" />
    <DiamondPic />
  </div>
</template>

<script>
import DiamondPic from "../assets/DiamondPic";
import LightGrid from "../assets/LightGrid";

export default {
  name: "Diamond",
  components: {
    DiamondPic,
    LightGrid,
  },
};
</script>
