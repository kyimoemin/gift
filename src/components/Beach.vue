<template>
  <div class="animation-wrapper flex-center">
    <img
      class="cloud"
      src="https://res-global.1315cdn.com:11443/statics/live/common/gift/7_bikini_33.png"
    />
    <img
      class="sand"
      src="https://res-global.1315cdn.com:11443/statics/live/common/gift/7_bikini_23.png"
    />
    <img
      class="wave"
      src="https://res-global.1315cdn.com:11443/statics/live/common/gift/7_bikini_30.png"
    />
    <img
      class="umbrella"
      src="https://res-global.1315cdn.com:11443/statics/live/common/gift/7_bikini_24.png"
    />
    <img
      class="livetube"
      src="https://res-global.1315cdn.com:11443/statics/live/common/gift/7_bikini_25.png"
    />
    <img
      class="sun"
      src="https://res-global.1315cdn.com:11443/statics/live/common/gift/7_bikini_27.png"
    />
    <img
      class="summer"
      src="https://res-global.1315cdn.com:11443/statics/live/common/gift/7_bikini_28.png"
    />
    <img
      class="watermelon"
      src="https://res-global.1315cdn.com:11443/statics/live/common/gift/7_bikini_29.png"
    />
    <img
      class="ball"
      src="https://res-global.1315cdn.com:11443/statics/live/common/gift/7_bikini_31.png"
    />
    <img
      class="ballon"
      src="https://res-global.1315cdn.com:11443/statics/live/common/gift/7_bikini_32.png"
    />
    <img
      class="drink"
      src="https://res-global.1315cdn.com:11443/statics/live/common/gift/7_bikini_34.png"
    />
    <img
      class="rock"
      src="https://res-global.1315cdn.com:11443/statics/live/common/gift/7_bikini_39.png"
    />
    <img
      class="starfish"
      src="https://res-global.1315cdn.com:11443/statics/live/common/gift/7_bikini_40.png"
    />
    <img
      class="shell"
      src="https://res-global.1315cdn.com:11443/statics/live/common/gift/7_bikini_41.png"
    />
  </div>
</template>

<style scoped>
.animation-wrapper {
  background-image: radial-gradient(
    circle,
    #fff 5%,
    #dff1fb 15%,
    #4fb8f3 50%,
    transparent
  );
}
.animation-wrapper > img {
  position: absolute;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}
.cloud {
  width: 100vw;
  top: 16vh;
  animation-name: cloud;
}
.sand {
  width: 100vw;
  bottom: 34vh;
}
.wave {
  width: 100vw;
  bottom: 32vh;
}
.sand,
.wave {
  animation-name: sand;
  animation-duration: 1.5s !important;
  animation-timing-function: cubic-bezier(0.76, 1.63, 0.68, 0.79);
}
.umbrella {
  width: 24vw;
  right: 15vw;
  animation-name: umbrella;
}
.livetube {
  width: 14vw;
  right: 13vw;
  bottom: 41vh;
  animation-name: lifetube;
  animation-duration: 0.5s !important;
}
.sun {
  width: 30vw;
  animation-name: sun;
  animation-duration: 1s !important;
  animation-timing-function: cubic-bezier(0.42, 1.7, 0.64, 0.75);
}
.summer {
  width: 69vw;
  bottom: 38.6vh;
  animation-name: summer;
  animation-duration: 1s !important;
  animation-timing-function: cubic-bezier(0.18, 1.87, 0.6, 0.66);
}
.ball {
  width: 10vw;
  bottom: 35vh;
  right: 27vw;
  animation-name: ball;
}
.watermelon {
  width: 11vw;
  right: 11vw;
  bottom: 36vh;
  animation-name: watermelon;
}
.drink {
  width: 7vw;
  right: 6vw;
  bottom: 37vh;
}
.ballon {
  width: 15vw;
  left: 10vw;
  top: 37vh;
}
.rock {
  left: 14vw;
  width: 7vw;
  bottom: 36vh;
}
.starfish {
  left: 8vw;
  width: 13vw;
  bottom: 36vh;
}
.shell {
  left: 9vw;
  width: 5vw;
  bottom: 36vh;
}

@keyframes cloud {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-10px, -10px);
  }
}
@keyframes sand {
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes umbrella {
  0% {
    transform: translate(-10px, 14px) scale(0.5);
  }
  16% {
    transform: translate(0, 0) scale(1.075);
    animation-timing-function: ease-in-out;
  }
  32% {
    transform: translate(-5px, 7px) scale(1);
    animation-timing-function: ease-in-out;
  }
  48% {
    transform: scale(1.05);
    animation-timing-function: ease-in-out;
  }
  64% {
    transform: translate(-2.5px, 3.5px) scale(1);
    animation-timing-function: ease-in-out;
  }
  80% {
    transform: scale(1.025);
    animation-timing-function: ease-in-out;
  }
  96% {
    transform: translate(0, 0) scale(1);
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: translate(0, 0) scale(1);
    animation-timing-function: ease-in-out;
  }
}
@keyframes lifetube {
  0% {
    transform: translate(17px, 13px);
  }
  100% {
    transform: translateY(0, 0);
  }
}
@keyframes sun {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes summer {
  0% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes ball {
  0% {
    transform: translateY(-7px);
  }
  25% {
    transform: translateY(-10px);
    animation-timing-function: ease-in-out;
  }
  50% {
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes watermelon {
  0% {
  }
}
</style>
