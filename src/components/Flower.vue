<template>
  <div class="animation-wrapper flex-center">
    <div class="flower-wrapper flex-center">
      <div class="relative flex-center">
        <div class="f f12">
          <img
            src="https://res-global.pfkml36.cn:11443/statics/live/common/gift/1_flower_8.png"
          />
        </div>
        <div class="f f11">
          <img
            src="https://res-global.pfkml36.cn:11443/statics/live/common/gift/1_flower_8.png"
          />
        </div>
        <div class="f f9">
          <img
            src="https://res-global.pfkml36.cn:11443/statics/live/common/gift/1_flower_8.png"
          />
        </div>
        <div class="f f7">
          <img
            src="https://res-global.pfkml36.cn:11443/statics/live/common/gift/1_flower_13.png"
          />
        </div>
        <img
          class="f f8"
          src="https://res-global.pfkml36.cn:11443/statics/live/common/gift/1_flower_8.png"
        />
        <div class="f f6">
          <img
            src="https://res-global.pfkml36.cn:11443/statics/live/common/gift/1_flower_13.png"
          />
        </div>
        <img
          class="f f1"
          src="https://res-global.pfkml36.cn:11443/statics/live/common/gift/1_flower_2.png"
        />
        <img
          class="f f2 hue"
          src="https://res-global.pfkml36.cn:11443/statics/live/common/gift/1_flower_7.png"
        />
        <img
          class="f f5 hue"
          src="https://res-global.pfkml36.cn:11443/statics/live/common/gift/1_flower_7.png"
        />
        <div class="f f10">
          <img
            src="https://res-global.pfkml36.cn:11443/statics/live/common/gift/1_flower_8.png"
          />
        </div>
        <img
          class="f flower"
          src="https://res-global.pfkml36.cn:11443/statics/live/common/gift/1_flower_14.png"
        />
        <img
          class="f f3"
          src="https://res-global.pfkml36.cn:11443/statics/live/common/gift/1_flower_5.png"
        />
        <img
          class="f f4"
          src="https://res-global.pfkml36.cn:11443/statics/live/common/gift/1_flower_9.png"
        />
      </div>
    </div>
    <!-- <div class="white-flowers">
      <img src="../assets/flower.svg" />
    </div>-->
  </div>
</template>
<style scoped>
.animation-wrapper {
  /* animation-name: none; */
  animation-duration: 1.7s;
}
img {
  position: absolute;
}
.flower-wrapper {
  position: absolute;
  width: 400px;
  height: 400px;
  margin-top: 10vh;
}
.flower-wrapper div.relative.flex-center {
  position: relative;
  width: 100%;
  height: 100%;
  animation-name: slide-up;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}
.flower {
  width: 100%;
}
.f1 {
  width: 20%;
  bottom: 35%;
  left: 33%;
}
.hue {
  filter: hue-rotate(297deg) saturate(0.9) brightness(1.1);
}
.f2 {
  width: 22%;
  right: 22%;
  top: 17%;
  animation-name: rotate;
  transform-origin: left bottom;
}
.f3 {
  width: 22%;
  top: -2%;
  transform-origin: center bottom;
  animation-name: f3;
}
.f4 {
  width: 22%;
  top: 7%;
}
.f5 {
  width: 22%;
  left: 23%;
  top: 6%;
  transform: rotate(3deg);
  animation-name: rotate;
  transform-origin: center bottom;
  animation-delay: 0.3s;
}
.f6 {
  width: 25%;
  top: 14%;
  right: 31%;
  animation-name: rotate;
}
.f6 img {
  transform: rotate(-15deg);
}
.f7 {
  width: 25%;
  left: 13%;
  top: 26%;
}
.f7 img {
  transform: rotate(-102deg);
}
.f8 {
  width: 24%;
  left: 14%;
  top: 36%;
  transform: rotate(3deg);
  animation-name: rotate;
  transform-origin: right top;
  animation-delay: 0.2s;
}
.f9 {
  width: 24%;
  height: 24%;
  left: 6%;
  top: 24%;
  animation-name: scale;
  transform-origin: right center;
}
.f9 img {
  transform: rotate(63deg);
}
.f10 {
  width: 24%;
  height: 24%;
  top: 31%;
  right: 19%;
  animation-name: rotate;
  transform: rotate(3deg);
  transform-origin: left bottom;
  animation-delay: 0.5s;
}
.f10 img {
  transform: rotate(202deg);
}
.f11 {
  width: 24%;
  height: 24%;
  top: 1%;
  right: 21%;
  transform: scale(0.3);
  transform-origin: left bottom;
  animation-name: scale;
  animation-delay: 0.2s;
}
.f11 img {
  transform: rotate(181deg);
  filter: hue-rotate(29deg) saturate(1.5);
}
.f12 {
  width: 22%;
  height: 22%;
  right: 11%;
  top: 23%;
  transform: scale(0.3);
  transform-origin: left center;
  animation-name: scale;
  animation-delay: 0.3s;
}

.f12 img {
  transform: rotate(-133deg);
}

.f {
  position: absolute;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}
.f img {
  width: 100%;
}
@keyframes f3 {
  0% {
    transform: translateY(30px) rotate(0);
  }
  30% {
    transform: translateY(0px) rotate(0);
    animation-timing-function: ease-in-out;
  }
  60% {
    transform: translateY(0px) rotate(4deg);
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: translateY(0px) rotate(-3deg);
  }
}
@keyframes scale {
  0% {
    transform: scale(0.3);
  }
  25% {
    transform: scale(1.2);
    animation-timing-function: ease-in-out;
  }
  50% {
    transform: scale(0.95);
    animation-timing-function: ease-in-out;
  }
  75% {
    transform: scale(1.1);
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: scale(1);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(3deg);
  }
  20% {
    transform: rotate(-2deg);
    animation-timing-function: ease-in-out;
  }
  40% {
    transform: rotate(2deg);
    animation-timing-function: ease-in-out;
  }
  60% {
    transform: rotate(-1deg);
    animation-timing-function: ease-in-out;
  }
  80% {
    transform: rotate(1deg);
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: rotate(0);
  }
}
@keyframes slide-up {
  0% {
    transform: translateY(30px);
  }
  25% {
    transform: translateY(-5px);
    animation-timing-function: ease-in-out;
  }
  50% {
    transform: translateY(3px);
    animation-timing-function: ease-in-out;
  }
  75% {
    transform: translateY(-3px);
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: translateY(0);
  }
}

.white-flowers {
  height: 100%;
  width: 100%;
  position: absolute;
}
.white-flowers img {
  height: 100px;
}

@media only screen and (max-width: 400px) {
  .flower-wrapper {
    height: 250px;
    width: 250px;
  }
}
</style>
