<template>
  <div class="animation-wrapper flex-center">
    <div class="three-star">
      <div class="big-star s1">
        <img
          src="https://res-global.1315cdn.com:11443/statics/live/common/gift/3_star_3.png"
        />
        <div class="sparkle sp1">
          <Sparkle />
        </div>
        <div class="sparkle sp2">
          <Sparkle />
        </div>
        <div class="sparkle sp3">
          <Sparkle />
        </div>
      </div>
      <div class="big-star s2">
        <img
          src="https://res-global.1315cdn.com:11443/statics/live/common/gift/3_star_3.png"
        />
        <div class="sparkle sp1">
          <Sparkle />
        </div>
        <div class="sparkle sp2">
          <Sparkle />
        </div>
      </div>
      <div class="big-star s3">
        <img
          src="https://res-global.1315cdn.com:11443/statics/live/common/gift/3_star_3.png"
        />
        <div class="sparkle sp1">
          <Sparkle />
        </div>
        <div class="sparkle sp2">
          <Sparkle />
        </div>
        <div class="sparkle sp3">
          <Sparkle />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sparkle from "../assets/Sparkle";

export default {
  components: {
    Sparkle,
  },
};
</script>

<style scoped>
.three-star {
  position: absolute;
  bottom: 25vh;
}
.big-star {
  display: inline-block;
  position: relative;
}
.big-star img {
  width: 100%;
}
.s1,
.s3 {
  width: 20vmin;
}
.s2 {
  width: 35vmin;
}

.s1 .sp1 {
  left: 13%;
  top: 38%;
}
.s1 .sp2 {
  top: 1%;
  right: 13%;
}
.s1 .sp3 {
  right: -13%;
  top: 21%;
}

.s2 .sp1 {
  left: 16%;
  top: 38%;
}

.s2 .sp2 {
  right: 10%;
  top: 36%;
}

.s3 .sp1 {
  right: 25%;
  bottom: 17%;
}

.s3 .sp2 {
  top: 18%;
  left: 10%;
}
.s3 .sp3 {
  right: 5%;
  top: 4%;
}
.sparkle {
  position: absolute;
  width: 0;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: rotate;
  animation-direction: normal;
  animation-timing-function: linear;
}
.sparkle::after {
  display: inline-block;
  content: "";
  position: absolute;
  box-shadow: 0 0 60px 40px #ff9bc1aa, 0 0 8px 7px #ffccdf;
  animation-name: shadow;
  opacity: 0;
  animation-direction: alternate;
}
.sparkle svg {
  transform: scale(0) !important;
  animation-name: scale;
  animation-direction: alternate;
}
.sparkle,
.sparkle::after,
.sparkle svg {
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-delay: inherit;
}
.s2 .sp1 {
  animation-delay: 0.2s;
}
.s3 .sp1 {
  animation-delay: 0.3s;
}

@keyframes scale {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(0.2);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
@keyframes shadow {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}
</style>
