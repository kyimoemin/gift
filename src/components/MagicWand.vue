<template>
  <div class="animation-wrapper flex-center ">
    <img
      class="magic-wand"
      src="https://res-global.1315cdn.com:11443/statics/live/common/gift/2_magic_0.png"
    />
    <div class="absolute">
      <div class="relative">
        <div class="star s1">
          <Star :fill="color" :color="color" />
        </div>
        <div class="star s2">
          <Star :fill="color" :color="color" />
        </div>
        <div class="star s3">
          <Star :fill="color" :color="color" />
        </div>
        <div class="star s4">
          <Star :fill="color" :color="color" />
        </div>
        <div class="star s5">
          <Star :fill="color" :color="color" />
        </div>
        <div class="star s6">
          <Star :fill="color" :color="color" />
        </div>
        <div class="star s7">
          <SquareStar :fill="color" :color="color" class=" square" />
        </div>
        <div class="star s8">
          <SquareStar :fill="color" :color="color" class=" square" />
        </div>
        <div class="star s9">
          <SquareStar :fill="color" :color="color" class=" square" />
        </div>
        <div class="star s10">
          <SquareStar :fill="color" :color="color" class=" square" />
        </div>
        <div class="star s11">
          <SquareStar :fill="color" :color="color" class=" square" />
        </div>
        <div class="star s12">
          <SquareStar :fill="color" :color="color" class=" square" />
        </div>
        <div class="star s13">
          <SquareStar :fill="color" :color="color" class=" square" />
        </div>
        <div class="star s14">
          <SquareStar :fill="color" :color="color" class=" square" />
        </div>
        <div class="star s15">
          <SquareStar :fill="color" :color="color" class=" square" />
        </div>
        <div class="star s16">
          <SquareStar :fill="color" :color="color" class=" square" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Star from "../assets/Star";
import SquareStar from "../assets/SquareStar";

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
};
</script>

<style scoped>
.magic-wand {
  position: absolute;
  transform: translateX(100vw) rotate(-45deg);
  width: 200px;
  animation-name: spell;
  animation-duration: 1s;
  animation-iteration-count: 2;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.animation-wrapper {
  animation-name: a;
}
.relative {
  border: 1px solid red;
}
.star {
  position: absolute;
  box-shadow: 0 0 8px 7px #f1efa1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.square {
  transform: scale(0.5);
}
.s1 {
  right: 30px;
  bottom: 20px;
}
.s2 {
  bottom: 38px;
}
.s3 {
  bottom: 9px;
  left: 5px;
}
.s4 {
  left: 20px;
  top: 1px;
}
.s5 {
  top: 26px;
  right: 21px;
}
.s6 {
  left: 21px;
  top: 22px;
}
.s7 {
  right: 29px;
  bottom: 1px;
}
.s8 {
  right: 19px;
  bottom: 4px;
}
.s9 {
  bottom: 24px;
  right: 6px;
}
.s10 {
  bottom: 14px;
}
.s11 {
  left: 27px;
  top: 6px;
}
.s12 {
  left: 15px;
  top: 11px;
}
.s13 {
  left: 15px;
  top: 9px;
}
.s14 {
  top: 18px;
  left: 2px;
}
.s15 {
  top: 19px;
  right: 9px;
}
.s16 {
  bottom: 3px;
  left: 3px;
}

@keyframes spell {
  0% {
    transform: translateX(100vw) rotate(-45deg);
  }
  100% {
    transform: translateX(20vw) rotate(-100deg);
  }
}
@media screen and (min-width: 400px) {
  @keyframes spell {
    0% {
      transform: translateX(100vw) rotate(-45deg);
    }
    100% {
      transform: translateX(10vw) rotate(-100deg);
    }
  }
}
</style>
