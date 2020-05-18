<template>
  <div class="absolute wrapper">
    <div class="relative">
      <img
        src="https://res-global.1315cdn.com:11443/statics/live/common/gift/6_diamonds_0.png"
      />
      <Sparkle class="sparkle s1" />
      <Sparkle class="sparkle s2" />
      <Sparkle class="sparkle s3" />
    </div>
  </div>
</template>

<script>
import Sparkle from "./Sparkle";

export default {
  name: "DiamondPic",
  components: {
    Sparkle,
  },
};
</script>

<style scoped>
img {
  height: 180px;
}
.sparkle {
  transform: scale(0) !important;
  animation-name: spark;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.s1 {
  left: -13%;
  top: -6%;
  animation-delay: 0.5s;
}
.s2 {
  bottom: -8%;
  left: 9%;
  animation-delay: 1s;
}
.s3 {
  right: -1%;
  top: -19%;
  animation-delay: 1.5s;
}

.wrapper {
  /* transform: scale(0); */
  animation-name: zoom-in;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-direction: alternate;
  animation-iteration-count: 2;
  -webkit-box-reflect: below 0 linear-gradient(#0000 50%, #0004, #0008);
}

@keyframes spark {
  0% {
    transform: scale(0) rotate(0deg);
  }
  50% {
    transform: scale(0.6) rotate(90deg);
  }
  100% {
    transform: scale(0) rotate(180deg);
  }
}

@keyframes zoom-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
    animation-timing-function: ease-in-out;
  }
  75% {
    transform: scale(0.9);
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: scale(1);
    animation-timing-function: ease-in-out;
  }
}
</style>
