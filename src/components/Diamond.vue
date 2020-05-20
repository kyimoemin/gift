<template>
  <div class="animation-wrapper flex justify-center align-center">
    <div>
      <LightGrid :lightSize="20" :gap="2" />
      <LightGrid :lightSize="10" :gap="1" />
    </div>
    <LightGrid style="position:absolute;" :lightSize="35" :gap="4" />
    <WhitePartical />
    <WhitePartical />
    <WhitePartical />
    <WhitePartical />
    <WhitePartical />
    <WhitePartical />
    <WhitePartical />
    <WhitePartical />
    <WhitePartical />
    <WhitePartical />
    <DiamondPic />
  </div>
</template>

<script>
// duration is 4s
import DiamondPic from "../assets/DiamondPic";
import LightGrid from "../assets/LightGrid";
import WhitePartical from "../assets/WhitePartical";

export default {
  name: "Diamond",
  components: {
    DiamondPic,
    LightGrid,
    WhitePartical,
  },
};
</script>
<style scoped>
.animation-wrapper {
  animation-name: fade-in;
  animation-duration: 5s;
  animation-fill-mode: forwards;
  background: linear-gradient(transparent, #f5da4144, transparent);
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  70% {
    opacity: 1;
    animation-timing-function: cubic-bezier(0.06, 0.64, 0.08, 0.97);
  }
  100% {
    opacity: 0;
  }
}
</style>
