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
    </div>

    <div class="star-group sg2">
      <div class="relative">
        <Star fill="white" color="#f7078c" shadow />
      </div>
    </div>

    <div class="star-group sg3">
      <div class="relative">
        <Star fill="#d047ad" color="white" />
      </div>
    </div>

    <div class="star-group sg4">
      <div class="relative">
        <Star fill="white" color="white" />
      </div>
    </div>

    <div class="star-group sg5">
      <div class="relative">
        <Star fill="#d047ad" color="white" />
      </div>
    </div>

    <div class="star-group sg6">
      <div class="relative">
        <Star fill="#d047ad" color="white" />
      </div>
    </div>

    <div class="star-group sg7">
      <div class="relative">
        <Star fill="#d047ad" color="white" />
      </div>
    </div>

    <div class="star-group sg8">
      <div class="relative">
        <Star fill="#d047ad" color="white" />
      </div>
    </div>

    <div class="star-group sg9">
      <div class="relative">
        <Star fill="white" color="white" />
      </div>
    </div>

    <div class="star-group sg10">
      <div class="relative">
        <Star fill="white" color="white" />
      </div>
    </div>

    <div class="star-group sg11">
      <div class="relative">
        <Star fill="#d047ad" color="white" />
      </div>
    </div>

    <div class="star-group sg12">
      <div class="relative">
        <Star fill="#d047ad" color="white" />
      </div>
    </div>

    <div class="star-group sg13">
      <div class="relative">
        <Star fill="#d047ad" color="white" />
      </div>
    </div>

    <div class="star-group sg14">
      <div class="relative">
        <Star fill="white" color="white" />
      </div>
    </div>
  </div>
</template>

<script>
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
</style>
