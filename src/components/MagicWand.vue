<template>
  <div class="animation-wrapper flex-center ">
    <img
      class="magic-wand"
      src="https://res-global.1315cdn.com:11443/statics/live/common/gift/2_magic_0.png"
    />
    <div class="absolute">
      <div class="relative">
        <!-- <div class="circle" /> -->
        <div ref="s1" class="star s1">
          <Star :fill="color" :color="color" />
        </div>
        <div ref="s2" class="star s2">
          <Star :fill="color" :color="color" />
        </div>
        <div ref="s3" class="star s3">
          <Star :fill="color" :color="color" />
        </div>
        <div ref="s4" class="star s4">
          <Star :fill="color" :color="color" />
        </div>
        <div ref="s5" class="star s5">
          <Star :fill="color" :color="color" />
        </div>
        <div ref="s6" class="star s6">
          <Star :fill="color" :color="color" />
        </div>
        <div ref="s7" class="star s7">
          <SquareStar :fill="color" :color="color" class=" square" />
        </div>
        <div ref="s8" class="star s8">
          <SquareStar :fill="color" :color="color" class=" square" />
        </div>
        <div ref="s9" class="star s9">
          <SquareStar :fill="color" :color="color" class=" square" />
        </div>
        <div ref="s10" class="star s10">
          <SquareStar :fill="color" :color="color" class=" square" />
        </div>
        <div ref="s11" class="star s11">
          <SquareStar :fill="color" :color="color" class=" square" />
        </div>
        <div ref="s12" class="star s12">
          <SquareStar :fill="color" :color="color" class=" square" />
        </div>
        <div ref="s13" class="star s13">
          <SquareStar :fill="color" :color="color" class=" square" />
        </div>
        <div ref="s14" class="star s14">
          <SquareStar :fill="color" :color="color" class=" square" />
        </div>
        <div ref="s15" class="star s15">
          <SquareStar :fill="color" :color="color" class=" square" />
        </div>
        <div ref="s16" class="star s16">
          <SquareStar :fill="color" :color="color" class=" square" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Star from "../assets/Star";
import SquareStar from "../assets/SquareStar";
import { moveAway } from "../util";

export default {
  name: "MagicWand",
  components: {
    Star,
    SquareStar,
  },
  data() {
    return {
      color: "#fefded",
    };
  },
  mounted() {
    this.move();
  },
  methods: {
    move() {
      const {
        s1,
        s2,
        s3,
        s4,
        s5,
        s6,
        s7,
        s8,
        s9,
        s10,
        s11,
        s12,
        s13,
        s14,
        s15,
        s16,
      } = this.$refs;
      setTimeout(() => moveAway(s1, 1, 50, true, true), 800);
      setTimeout(() => moveAway(s2, 1, 1.15, true, true), 1000);
      setTimeout(() => moveAway(s3, 1, 6.2), 800);
      setTimeout(() => moveAway(s4, 1, 115, true, true), 800);
      setTimeout(() => moveAway(s5, 1, 23), 800);
      setTimeout(() => moveAway(s6, 1, 43, true, true), 800);
      setTimeout(() => moveAway(s7, 1, 120, true, true), 1000);
      setTimeout(() => moveAway(s8, 1, 110, true, true), 1100);
      setTimeout(() => moveAway(s9, 1, 13.5, true, true), 1100);
      setTimeout(() => moveAway(s10, 1, 3.3), 1100);
      setTimeout(() => moveAway(s11, 1, 120, true, true), 1100);
      setTimeout(() => moveAway(s12, 1, 50, true, true), 1200);
      setTimeout(() => moveAway(s13, 1, 54, true, true), 1100);
      setTimeout(() => moveAway(s14, 1, 1.15, true, true), 1200);
      setTimeout(() => moveAway(s15, 1, 28), 1200);
      setTimeout(() => moveAway(s16, 1, 28.5), 1200);
    },
  },
};
</script>

<style scoped>
.circle {
  position: absolute;
  height: 250px;
  width: 250px;
  border-radius: 50%;
  border: 1px solid red;
}
.magic-wand {
  position: absolute;
  transform: translateX(100vw) rotate(-45deg);
  width: 200px;
  animation-name: cast;
  animation-duration: 1s;
  animation-iteration-count: 2;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.animation-wrapper {
  animation-name: none;
}
.relative {
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
}
.star {
  position: absolute;
  box-shadow: 0 0 8px 7px #f1efa1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 1s, opacity 0.5s 0.5s;
  transform: scale(0);
}
.square {
  transform: scale(0.5);
}
.s1 {
  right: 3px;
  bottom: 2px;
}
.s2 {
  bottom: 10px;
  right: 1px;
}
.s3 {
  bottom: 9px;
  left: 5px;
}
.s4 {
  left: 10px;
  top: 1px;
}
.s5 {
  top: 2.6px;
  right: 2.1px;
}
.s6 {
  left: 2.1px;
  top: 2.2px;
}
.s7 {
  right: 6px;
  bottom: 1px;
}
.s8 {
  right: 2px;
  bottom: 1px;
}
.s9 {
  bottom: 4px;
  right: 2px;
}
.s10 {
  bottom: 6px;
  left: 1px;
}
.s11 {
  left: 4.5px;
  top: 1px;
}
.s12 {
  left: 3px;
  top: 2px;
}
.s13 {
  left: 4px;
  top: 2px;
}
.s14 {
  top: 10px;
  left: 1px;
}
.s15 {
  top: 2px;
  right: 1px;
}
.s16 {
  bottom: 3px;
  left: 3px;
}

@keyframes cast {
  0% {
    transform: translateX(100vw) rotate(-45deg);
  }
  100% {
    transform: translateX(20vw) rotate(-100deg);
  }
}
@media only screen and (min-width: 400px) {
  @keyframes cast {
    0% {
      transform: translateX(100vw) rotate(-45deg);
    }
    100% {
      transform: translateX(10vw) rotate(-100deg);
    }
  }
}
</style>
