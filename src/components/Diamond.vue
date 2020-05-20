<template>
  <div class="animation-wrapper flex justify-center align-center">
    <div>
      <LightGrid :lightSize="20" :gap="2" />
      <LightGrid :lightSize="10" :gap="1" />
    </div>
    <LightGrid style="position:absolute;" :lightSize="35" :gap="4" />
    <DiamondPic />
  </div>
</template>

<script>
// duration is 4s
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
<style scoped>
.animation-wrapper {
  animation-name: fade-in;
  animation-duration: 4s;
  animation-fill-mode: forwards;
  background: linear-gradient(transparent, #f5da4122, transparent);
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
