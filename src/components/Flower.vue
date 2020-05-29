<template>
  <div class="animation-wrapper flex-center">
    <div class="flower-wrapper flex-center">
      <div class="relative flex-center">
        <div class="f f12">
          <img
            src="https://res-global.1315cdn.com:11443/statics/live/common/gift/1_flower_8.png"
          />
        </div>
        <div class="f f11">
          <img
            src="https://res-global.1315cdn.com:11443/statics/live/common/gift/1_flower_8.png"
          />
        </div>
        <div class="f f10">
          <img
            src="https://res-global.1315cdn.com:11443/statics/live/common/gift/1_flower_8.png"
          />
        </div>
        <div class="f f9">
          <img
            src="https://res-global.1315cdn.com:11443/statics/live/common/gift/1_flower_8.png"
          />
        </div>
        <div class="f f7">
          <img
            src="https://res-global.1315cdn.com:11443/statics/live/common/gift/1_flower_13.png"
          />
        </div>
        <img
          class="f8"
          src="https://res-global.1315cdn.com:11443/statics/live/common/gift/1_flower_8.png"
        />
        <img
          class="flower"
          src="https://res-global.1315cdn.com:11443/statics/live/common/gift/1_flower_14.png"
        />
        <div class="f f6">
          <img
            src="https://res-global.1315cdn.com:11443/statics/live/common/gift/1_flower_13.png"
          />
        </div>
        <img
          class="f1"
          src="https://res-global.1315cdn.com:11443/statics/live/common/gift/1_flower_2.png"
        />
        <img
          class="f2 hue"
          src="https://res-global.1315cdn.com:11443/statics/live/common/gift/1_flower_7.png"
        />
        <img
          class="f5 hue"
          src="https://res-global.1315cdn.com:11443/statics/live/common/gift/1_flower_7.png"
        />
        <img
          class="f3"
          src="https://res-global.1315cdn.com:11443/statics/live/common/gift/1_flower_5.png"
        />
        <img
          class="f4"
          src="https://res-global.1315cdn.com:11443/statics/live/common/gift/1_flower_9.png"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.animation-wrapper {
  animation-name: none;
}
img {
  position: absolute;
}
.flower-wrapper {
  position: absolute;
  width: 80vmin;
  height: 80vmin;
  margin-top: 10vh;
}
.flower-wrapper div.relative.flex-center {
  position: relative;
  width: 100%;
  height: 100%;
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
}
.f3 {
  width: 22%;
  top: -2%;
}
.f4 {
  width: 22%;
  top: 7%;
}
.f5 {
  width: 22%;
  left: 23%;
  top: 6%;
}
.f6 {
  width: 25%;
  top: 14%;
  right: 31%;
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
}
.f9 {
  width: 24%;
  left: 6%;
  top: 24%;
}
.f9 img {
  transform: rotate(63deg);
}
.f10 {
  width: 24%;
  top: 31%;
  right: 19%;
}
.f10 img {
  transform: rotate(202deg);
}
.f11 {
  width: 24%;
  top: 1%;
  right: 21%;
}
.f11 img {
  transform: rotate(181deg);
  filter: hue-rotate(29deg) saturate(1.5);
}
.f12 {
  width: 24%;
  right: 8%;
  top: 23%;
}

.f12 img {
  transform: rotate(-133deg);
}

.f {
  position: absolute;
}
.f img {
  width: 100%;
}
</style>
