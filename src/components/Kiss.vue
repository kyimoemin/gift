<template>
  <div class="animation-wrapper flex-center">
    <img
      class="fly-kiss"
      src="https://res-global.1315cdn.com:11443/statics/live/common/gift/5_lips_8.png"
    />
    <div class="center-kiss">
      <img
        src="https://res-global.1315cdn.com:11443/statics/live/common/gift/5_lips_7.png"
      />
    </div>
    <div class="kiss k1">
      <img
        src="https://res-global.1315cdn.com:11443/statics/live/common/gift/5_lips_7.png"
      />
    </div>
    <div class="kiss k2">
      <img
        src="https://res-global.1315cdn.com:11443/statics/live/common/gift/5_lips_7.png"
      />
    </div>
    <div class="kiss k3">
      <img
        src="https://res-global.1315cdn.com:11443/statics/live/common/gift/5_lips_7.png"
      />
    </div>
    <div class="kiss k4">
      <img
        src="https://res-global.1315cdn.com:11443/statics/live/common/gift/5_lips_7.png"
      />
    </div>
    <div class="kiss k5">
      <img
        src="https://res-global.1315cdn.com:11443/statics/live/common/gift/5_lips_7.png"
      />
    </div>
    <div class="kiss k6">
      <img
        src="https://res-global.1315cdn.com:11443/statics/live/common/gift/5_lips_7.png"
      />
    </div>
    <div class="kiss k7">
      <img
        src="https://res-global.1315cdn.com:11443/statics/live/common/gift/5_lips_7.png"
      />
    </div>
    <div class="kiss k8">
      <img
        src="https://res-global.1315cdn.com:11443/statics/live/common/gift/5_lips_7.png"
      />
    </div>
    <div class="kiss k9">
      <img
        src="https://res-global.1315cdn.com:11443/statics/live/common/gift/5_lips_7.png"
      />
    </div>
    <div class="kiss k10">
      <img
        src="https://res-global.1315cdn.com:11443/statics/live/common/gift/5_lips_7.png"
      />
    </div>
  </div>
</template>

<style scoped>
/* durations is 3s */
/* 7,6,
     3,2,4,5,1,
             10,9,8 */
.k1 {
  top: 1vh;
  left: 1vw;
  width: 45px;
  animation-delay: 1.5s;
}
.k1 img {
  transform: rotate(45deg);
}
.k2 {
  top: 4vh;
  right: 10vw;
  width: 70px;
  animation-delay: 1.2s;
}
.k2 img {
  transform: rotate(23deg);
}
.k3 {
  top: 16vh;
  left: 18vw;
  width: 70px;
  animation-delay: 1.15s;
}
.k3 img {
  transform: rotate(-28deg);
}
.k4 {
  top: 19vh;
  right: -6vw;
  width: 80px;
  animation-delay: 1.3s;
}
.k4 img {
  transform: rotate(-37deg);
}
.k5 {
  left: -3vw;
  top: 30vh;
  width: 70px;
  animation-delay: 1.4s;
}
.k5 img {
  transform: rotate(26deg);
}
.k6 {
  right: 11vw;
  top: 51vh;
  width: 50px;
  animation-delay: 1.1s;
}
.k6 img {
  transform: rotate(45deg);
}
.k7 {
  left: 32vw;
  bottom: 23vh;
  width: 65px;
  animation-delay: 1s;
}
.k7 img {
  transform: rotate(-27deg);
}
.k8 {
  right: -4vw;
  bottom: 17vh;
  width: 65px;
  animation-delay: 1.7s;
}
.k8 img {
  transform: rotate(37deg);
}
.k9 {
  left: 10vw;
  bottom: 6vh;
  width: 70px;
  animation-delay: 1.6s;
}
.k9 img {
  transform: rotate(-108deg);
}
.k10 {
  bottom: 0vh;
  right: 32vw;
  width: 50px;
  animation-delay: 1.5s;
}
.k10 img {
  transform: rotate(31deg);
}
.kiss img {
  width: 100%;
}
.kiss {
  transform: scale(0);
  position: absolute;
  display: inline-block;
  animation-name: bounce;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  /* animation-iteration-count: infinite; */
}
.center-kiss {
  opacity: 0;
  animation-name: fade-in;
  position: absolute;
  animation-delay: 0.8s;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.fly-kiss {
  animation-name: fly-kiss;
  position: absolute;
  width: 154px;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}
.animation-wrapper {
  animation-name: fade-in;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: 2;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0, 1.01, 0.11, 1.01);
}
@keyframes bounce {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  25% {
    transform: scale(1.3);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }
  40% {
    transform: scale(1.1);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }
  55% {
    transform: scale(1.2);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }
  70% {
    transform: scale(1);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }
  85% {
    transform: scale(1.1);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    animation-timing-function: ease-in-out;
    opacity: 0;
  }
}
@keyframes fly-kiss {
  0% {
    transform: scale(0);
  }
  30% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95, 1.3);
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: scale(0.8) translate(60px, -40px) rotate(-10deg);
    opacity: 0;
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
