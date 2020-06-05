<template>
  <div class="absolute">
    <div class="heart">
      <img
        src="https://res-global.pfkml36.cn:11443/statics/live/common/gift/4_heart_0.png"
      />
      <Sparkle v-if="spark" class="left" />
      <Sparkle v-if="spark" class="right" />
    </div>
  </div>
</template>

<script>
import Sparkle from "./Sparkle";

export default {
  name: "HeartPic",
  components: {
    Sparkle,
  },
  props: {
    spark: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
svg.left {
  right: 24%;
  top: 15%;
}
svg.right {
  left: 28%;
  bottom: 31%;
}
.small {
  height: 40px;
  width: 45px;
}

.medium {
  width: 64px;
  height: 58px;
}

.big {
  width: 120px;
  height: 109px;
}
img {
  width: 100%;
  height: 100%;
}
.heart {
  position: relative;
  display: inline-block;
  opacity: 0;
  animation-name: heart-beat;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-delay: inherit;
  /* animation-iteration-count: infinite; */
  animation-timing-function: linear;
}
svg {
  animation-name: spark;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

svg.right {
  animation-delay: 0.5s;
}

@keyframes spark {
  0% {
    transform: scale(0) rotate(0deg);
  }
  50% {
    transform: scale(0.3) rotate(90deg);
  }
  100% {
    transform: scale(0) rotate(180deg);
  }
}

@keyframes heart-beat {
  0% {
    opacity: 0;
    transform: translateY(0px);
  }
  20% {
    opacity: 1;
  }
  30% {
    transform: scaleX(1.15) translateY(-60px);
  }
  50% {
    opacity: 1;
    transform: scale(0.98) translateY(-100px);
  }
  55% {
    opacity: 1;
    transform: scaleX(1) translateY(-110px);
  }
  100% {
    transform: scaleX(1) translateY(-200px);
    opacity: 0;
  }
}
</style>
