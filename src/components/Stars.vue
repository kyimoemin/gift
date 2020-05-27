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
        <div class="sparkle sp3">
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

    <div class="star-group sg1">
      <div class="relative">
        <Star fill="#d047ad" color="white" shadow />
      </div>
      <div class="dot s d1" />
      <div class="dot s d2" />
    </div>

    <div class="star-group sg2">
      <div class="relative">
        <Star fill="white" color="#f7078c" shadow />
        <div class="dot m d1" />
        <div class="dot l d2" />
        <div class="dot s d3" />
        <div class="dot s d4" />
        <div class="dot s d5" />
        <div class="dot s d6" />
        <div class="dot s d7" />
      </div>
    </div>

    <div class="star-group sg3">
      <div class="relative">
        <Star fill="#d047ad" color="white" />
        <div class="dot m d1" />
        <div class="dot m d2" />
        <div class="dot s d3" />
        <div class="dot s d4" />
        <div class="dot s d5" />
        <div class="dot s d6" />
        <div class="dot s d7" />
        <div class="dot s d8" />
      </div>
    </div>

    <div class="star-group sg4">
      <div class="relative">
        <Star fill="white" color="white" />
        <div class="dot m d1" />
        <div class="dot m d2" />
        <div class="dot m d3" />
        <div class="dot s d4" />
      </div>
    </div>

    <div class="star-group sg5">
      <div class="relative">
        <Star fill="#d047ad" color="white" />
        <div class="dot m d1" />
        <div class="dot m d2" />
        <div class="dot s d3" />
      </div>
    </div>

    <div class="star-group sg6">
      <div class="relative">
        <Star fill="#d047ad" color="white" />
        <div class="dot m d1" />
        <div class="dot s d2" />
        <div class="dot m d3" />
      </div>
    </div>

    <div class="star-group sg7">
      <div class="relative">
        <Star fill="#d047ad" color="white" />
        <div class="dot m d1" />
        <div class="dot l d2" />
        <div class="dot l d3" />
        <div class="dot s d4" />
        <div class="dot s d5" />
        <div class="dot s d6" />
        <div class="dot s d7" />
        <div class="dot s d8" />
      </div>
    </div>

    <div class="star-group sg8">
      <div class="relative">
        <Star fill="#d047ad" color="white" />
        <div class="dot m d1" />
        <div class="dot m d2" />
        <div class="dot m d3" />
        <div class="dot s d4" />
        <div class="dot s d5" />
        <div class="dot s d6" />
        <div class="dot s d7" />
      </div>
    </div>

    <div class="star-group sg9">
      <div class="relative">
        <Star fill="white" color="white" />
        <div class="dot s d1" />
        <div class="dot s d2" />
        <div class="dot  d3" />
      </div>
    </div>

    <div class="star-group sg10">
      <div class="relative">
        <Star fill="white" color="white" />
        <div class="dot s d1" />
        <div class="dot s d2" />
        <div class="dot s d3" />
        <div class="dot s d4" />
        <div class="dot s d5" />
        <div class="dot s d6" />
        <div class="dot s d7" />
      </div>
    </div>

    <div class="star-group sg11">
      <div class="relative">
        <Star fill="#d047ad" color="white" />
        <div class="dot s d1" />
        <div class="dot l d2" />
        <div class="dot s d3" />
        <div class="dot s d4" />
      </div>
    </div>

    <div class="star-group sg12">
      <div class="relative">
        <Star fill="#d047ad" color="white" />
        <div class="dot s d1" />
      </div>
    </div>

    <div class="star-group sg13">
      <div class="relative">
        <Star fill="#d047ad" color="white" />
        <div class="dot s d1" />
        <div class="dot s d2" />
        <div class="dot s d3" />
        <div class="dot s d4" />
        <div class="dot s d5" />
      </div>
    </div>

    <div class="star-group sg14">
      <div class="relative">
        <Star fill="white" color="white" />
        <div class="dot s d1" />
        <div class="dot l d2" />
        <div class="dot s d3" />
        <div class="dot s d4" />
      </div>
    </div>
  </div>
</template>

<script>
//dration is 4.4s
import Sparkle from "../assets/Sparkle";
import Star from "../assets/Star";

export default {
  components: {
    Sparkle,
    Star,
  },
};
</script>

<style scoped>
.animation-wrapper {
  background: linear-gradient(#f7078c44, transparent, transparent);

  animation-name: fade-in;
  animation-duration: 2.2s;
  animation-fill-mode: forwards;
  animation-iteration-count: 2;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0, 1.01, 0.11, 1.01);
}
.three-star {
  position: absolute;
  bottom: 25vh;
  animation-name: three-star;
  animation-duration: 4s;
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
  animation-iteration-count: 2;
  animation-delay: 3.2s;
}
.s1 .sp2 {
  top: 1%;
  right: 13%;
  animation-delay: 3.4s;
  animation-iteration-count: 2;
}
.s1 .sp3 {
  right: -13%;
  top: 21%;
  animation-delay: 3.3s;
  animation-iteration-count: 2;
}

.s2 .sp1 {
  left: 16%;
  top: 38%;
  animation-delay: 1s;
  animation-iteration-count: 2;
}

.s2 .sp2 {
  right: 10%;
  top: 36%;
  animation-delay: 2s;
  animation-iteration-count: 2;
}
.s2 .sp3 {
  bottom: 15%;
  left: 25%;
  animation-delay: 2.8s;
  animation-iteration-count: 2;
}

.s3 .sp1 {
  right: 25%;
  bottom: 17%;
  animation-delay: 1.3s;
  animation-iteration-count: 4;
}

.s3 .sp2 {
  top: 18%;
  left: 10%;
  animation-delay: 3s;
  animation-iteration-count: 2;
}
.s3 .sp3 {
  right: 5%;
  top: 4%;
  animation-delay: 3.1s;
  animation-iteration-count: 2;
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
  box-shadow: 0 0 80px 50px #ff9bc1aa, 0 0 8px 7px #ffccdf;
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
  animation-duration: 0.5s;
  animation-iteration-count: inherit;
  animation-delay: inherit;
}

/* finish three start styles here */

.star-group {
  position: absolute;
}
.star-group .relative {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 9px 7px #ff4969;
  transform: translateY(-25vh);
  animation-name: star-group;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-delay: inherit;
}
.star-group .relative::before {
  content: "";
  display: inline-block;
  position: absolute;
  height: 50vh;
  width: 1px;
  background: linear-gradient(to bottom, #ff4969, #ff496944);
  bottom: 0;
}
/* 3,6,8,11,14
    1,4,7,9,12,13,
    2,5 */
.sg1 {
  left: 13px;
  transform: scale(1.5);
  top: 5vh;
  animation-delay: 0.3s;
}

.sg2 {
  top: 13vh;
  left: 8vw;
  transform: scale(1.4);
  animation-delay: 0.6s;
}

.sg3 {
  left: 17vw;
  top: 19vh;
  transform: scale(1.8);
}

.sg4 {
  left: 28vw;
  top: 11vh;
  animation-delay: 0.35s;
}

.sg5 {
  top: 4vh;
  left: 32vw;
  animation-delay: 0.65s;
}

.sg6 {
  top: 25vh;
  left: 36vw;
  animation-delay: 0.05s;
}
.sg7 {
  top: 8vh;
  left: 44vw;
  transform: scale(2);
  animation-delay: 0.4s;
}

.sg8 {
  top: 20vh;
  right: 48vw;
  transform: scale(1.8);
  animation-delay: 0.1s;
}

.sg9 {
  top: 11vh;
  right: 39vw;
  animation-delay: 0.45s;
}

.sg10 {
  top: 21vh;
  right: 33vw;
  animation-delay: 0.15s;
}

.sg11 {
  top: 5vh;
  right: 30vw;
  transform: scale(1.3);
  animation-delay: 0.2s;
}
.sg12 {
  top: 6vh;
  right: 20vw;
  transform: scale(2);
  animation-delay: 0.5s;
}
.sg13 {
  top: 15vh;
  right: 13vw;
  transform: scale(1.5);
  animation-delay: 0.55s;
}
.sg14 {
  right: 2vw;
  top: 9vh;
  animation-delay: 0.25s;
}

.dot {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 9px 6px #ff1b98;
  filter: blur(0.5px);
  opacity: 0;
  animation-name: twinkle;
  animation-duration: 0.5s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-delay: inherit;
  animation-fill-mode: forwards;
}

.dot.s {
  transform: scale(0.4);
}
.dot.m {
  transform: scale(0.6);
}
.dot.l {
  transform: scale(0.8);
}

.sg1 .d1 {
  bottom: 11px;
  left: 2px;
  animation-delay: 0.1s;
}
.sg1 .d2 {
  top: 18px;
  right: 1px;
  animation-delay: 0.3s;
}

.sg2 .d1 {
  bottom: 15px;
  right: 1px;
  animation-delay: 0.2s;
}

.sg2 .d2 {
  top: 24px;
  right: 8px;
  animation-delay: 0.1s;
}

.sg2 .d3 {
  right: 1px;
  bottom: 5px;
  animation-delay: 0.3s;
}

.sg2 .d4 {
  left: 2px;
  bottom: 7px;
  animation-delay: 0.2s;
}

.sg2 .d5 {
  top: 10px;
  right: 1px;
  animation-delay: 0.4s;
}

.sg2 .d6 {
  left: 5px;
  top: 16px;
  animation-delay: 0.6s;
}
.sg2 .d7 {
  bottom: 23px;
  left: 5px;
  animation-delay: 0.8s;
}

.sg3 .d1 {
  bottom: 58px;
  right: 3px;
  animation-delay: 0.6s;
}
.sg3 .d2 {
  bottom: 44px;
  right: 1px;
  animation-delay: 0.4s;
}
.sg3 .d3 {
  bottom: 5px;
  left: 3px;
  animation-delay: 0.2s;
}
.sg3 .d4 {
  top: 12px;
  right: 9px;
  animation-delay: 0.4s;
}
.sg3 .d5 {
  top: 8px;
  animation-delay: 0.8s;
}
.sg3 .d6 {
  top: 12px;
  left: 12px;
  animation-delay: 0.2s;
}
.sg3 .d7 {
  top: 17px;
  left: 1px;
  animation-delay: 0.5s;
}
.sg3 .d8 {
  bottom: 20px;
  left: 1px;
  animation-delay: 0.7s;
}

.sg4 .d1 {
  bottom: 27px;
  right: 1px;
  animation-delay: 0.1s;
}
.sg4 .d2 {
  right: 3px;
  top: 9px;
  animation-delay: 0.6s;
}
.sg4 .d3 {
  top: 32px;
  left: 6px;
  animation-delay: 0.2s;
}
.sg4 .d4 {
  bottom: 14px;
  left: 6px;
  animation-delay: 0.5s;
}

.sg5 .d1 {
  bottom: 16px;
  right: 9px;
  animation-delay: 0.1s;
}
.sg5 .d2 {
  top: 15px;
  animation-delay: 0.3s;
}
.sg5 .d3 {
  left: 15px;
  bottom: 4px;
}

.sg6 .d1 {
  right: 13px;
  bottom: 10px;
  animation-delay: 0.3s;
}
.sg6 .d2 {
  right: 17px;
}
.sg6 .d3 {
  right: 11px;
  top: 17px;
  animation-delay: 0.1s;
}

.sg7 .d1 {
  bottom: 17px;
  left: 4px;
  animation-delay: 0.3s;
}
.sg7 .d2 {
  bottom: 11px;
  left: 14px;
  animation-delay: 0.1s;
}
.sg7 .d3 {
  top: 8px;
  left: 9px;
}
.sg7 .d4 {
  top: 11px;
  animation-delay: 0.2s;
}
.sg7 .d5 {
  top: 17px;
  right: 4px;
  animation-delay: 0.4s;
}
.sg7 .d6 {
  top: 17px;
  left: 4px;
  animation-delay: 0.3s;
}
.sg7 .d7 {
  bottom: 10px;
  right: 4px;
  animation-delay: 0.2s;
}
.sg7 .d8 {
  right: 9px;
}

.sg8 .d1 {
  right: 13px;
  animation-delay: 0.2s;
}
.sg8 .d2 {
  top: 15px;
  left: 4px;
  animation-delay: 0.3s;
}
.sg8 .d3 {
  top: 24px;
  right: 6px;
  animation-delay: 0.1s;
}
.sg8 .d4 {
  bottom: 7px;
  right: 3px;
  animation-delay: 0.3s;
}
.sg8 .d5 {
  left: 4px;
  bottom: 4px;
  animation-delay: 0.1s;
}
.sg8 .d6 {
  left: 13px;
  top: 6px;
  animation-delay: 0.4s;
}
.sg8 .d7 {
  top: 10px;
  right: 6px;
  animation-delay: 0.2s;
}

.sg9 .d1 {
  bottom: 28px;
  right: 1px;
}
.sg9 .d2 {
  bottom: 52px;
  left: 1px;
  animation-delay: 0.2s;
}
.sg9 .d3 {
  left: 9px;
  top: 15px;
  animation-delay: 0.3s;
}

.sg10 .d1 {
  right: 15px;
  top: 1px;
  animation-delay: 0.3s;
}
.sg10 .d2 {
  right: 20px;
  bottom: 10px;
  animation-delay: 0.1s;
}
.sg10 .d3 {
  top: 13px;
  right: 1px;
  animation-delay: 0.2s;
}
.sg10 .d4 {
  top: 32px;
  right: 5px;
  animation-delay: 0.4s;
}
.sg10 .d5 {
  top: 22px;
  left: 13px;
  animation-delay: 0.1s;
}
.sg10 .d6 {
  bottom: 28px;
  left: 3px;
  animation-delay: 0.2s;
}
.sg10 .d7 {
  bottom: 16px;
  left: 6px;
}

.sg11 .d1 {
  bottom: 9px;
  left: 5px;
  animation-delay: 0.2s;
}
.sg11 .d2 {
  top: 16px;
  right: 2px;
}
.sg11 .d3 {
  left: 14px;
  top: 8px;
  animation-delay: 0.3s;
}
.sg11 .d4 {
  top: 19px;
  left: 9px;
  animation-delay: 0.1s;
}

.sg12 .d1 {
  bottom: 9px;
  left: 1px;
}

.sg13 .d1 {
  right: 14px;
  bottom: 17px;
  animation-delay: 0.1s;
}
.sg13 .d2 {
  right: 19px;
  top: 4px;
  animation-delay: 0.4s;
}
.sg13 .d3 {
  left: 5px;
  top: 11px;
  animation-delay: 0.2s;
}
.sg13 .d4 {
  bottom: 55px;
  animation-delay: 0.3s;
}
.sg13 .d5 {
  bottom: 45px;
  left: 3px;
  animation-delay: 0.1s;
}

.sg14 .d1 {
  bottom: 30px;
  left: 2px;
  animation-delay: 0.3s;
}
.sg14 .d2 {
  top: 26px;
  right: 4px;
}
.sg14 .d3 {
  top: 46px;
  right: 1px;
  animation-delay: 0.2s;
}
.sg14 .d4 {
  top: 66px;
  animation-delay: 0.1s;
}

@keyframes scale {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(0.3);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
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
@keyframes three-star {
  0% {
    transform: translateY(25vh);
  }
  25% {
    transform: translateY(-15px);
    animation-timing-function: ease-in-out;
  }
  40% {
    transform: translateY(0);
    animation-timing-function: ease-in-out;
  }
  55% {
    transform: translateY(-10px);
    animation-timing-function: ease-in-out;
  }
  70% {
    transform: translateY(0);
    animation-timing-function: ease-in-out;
  }
  85% {
    transform: translateY(-5px);
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes star-group {
  0% {
    transform: translateY(-25vh);
  }
  25% {
    transform: translateY(5px);
    animation-timing-function: ease-in-out;
  }
  40% {
    transform: translateY(-3px);
    animation-timing-function: ease-in-out;
  }
  55% {
    transform: translateY(3px);
    animation-timing-function: ease-in-out;
  }
  70% {
    transform: translateY(-2px);
    animation-timing-function: ease-in-out;
  }
  85% {
    transform: translateY(2px);
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-in-out;
  }
}
@keyframes twinkle {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
