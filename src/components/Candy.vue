<template>
  <div class="main-view">
    <div ref="wrapper" class="relative  ">
      <!-- first transform -->
      <SquareStar
        ref="firstSqStar1"
        color="#83b640"
        class="elem square-star-1"
      />
      <Square ref="firstSquare1" color="#83b640" class="elem square-1" />
      <Star ref="firstStar1" color="#ff004e" class="elem star-1" />
      <Triangle ref="firstTriangle1" color="#f79e20" class="elem triangle-1" />
      <SquareStar
        ref="firstSqStar2"
        color="#8d2fd5"
        class="elem square-star-2"
      />
      <CircleComponent
        ref="firstCircle1"
        color="#ff004e"
        class="elem circle-1"
      />

      <!-- second transform -->
      <Star ref="secondStar" color="#ff004e" shadow class="elem second-star" />
      <Heart
        ref="secondHeart"
        color="#61c7ca"
        shadow
        class="elem second-heart"
      />
      <CircleComponent
        color="#ff004e"
        ref="secondCircle"
        shadow
        class="elem second-circle"
      />
      <!-- third transform -->
      <SquareStar
        ref="thirdSqStar1"
        color="#83b640"
        shadow
        class="elem third-sq-star-1"
      />
      <Heart ref="thirdHeart" color="#ff004e" shadow class="elem third-heart" />
      <SquareStar
        ref="thirdSqStar2"
        color="#8d2fd5"
        shadow
        class="elem third-sq-star-2"
      />
      <!-- fourth tranform -->
      <Square
        ref="fourthSquare"
        color="#83b640"
        shadow
        class="elem fourth-square"
      />
      <Triangle
        ref="fourthTriangle"
        color="#f79e20"
        shadow
        class="elem fourth-triangle"
      />

      <!-- <div class="center" /> -->
      <img
        class="candy"
        src="https://res-global.1315cdn.com:11443/statics/live/common/gift/0_candy_4.png"
      />
      <Sparkle style="left:7%;top:-8%;" class="sparkle-1" />
      <Sparkle style="left:40%;top:7%;" class="sparkle-2" />
      <Sparkle style="left:16%;top:43%;" class="sparkle-3" />

      <!-- ripples -->
      <CircleComponent shadow color="#f79e20" class="ripple r-1" />
      <CircleComponent shadow color="#f79e20" class="ripple r-2" />
      <CircleComponent shadow color="#f79e20" class="ripple r-3" />
      <CircleComponent shadow color="#83b640" class="ripple r-4" />
      <CircleComponent shadow color="#83b640" class="ripple r-5" />
      <CircleComponent shadow color="#888" class="ripple r-6" />
      <CircleComponent shadow color="#ff004e" class="ripple r-7" />
      <CircleComponent shadow color="#83b640" class="ripple r-8" />
      <CircleComponent shadow color="#f79e20" class="ripple r-9" />
      <CircleComponent shadow color="#f79e20" class="ripple r-10" />
      <CircleComponent shadow color="#83b640" class="ripple r-11" />
      <CircleComponent shadow color="#f79e20" class="ripple r-12" />
      <CircleComponent shadow color="#83b640" class="ripple r-13" />
    </div>
  </div>
</template>
<script>
import Sparkle from "../assets/Sparkle";
import Square from "../assets/Square";
import SquareStar from "../assets/SquareStar";
import Star from "../assets/Star";
import Heart from "../assets/Heart";
import Triangle from "../assets/Triangle";
import CircleComponent from "../assets/CircleComponent";
import { moveAway } from "../util";

export default {
  name: "Candy",
  components: {
    Sparkle,
    Square,
    Star,
    SquareStar,
    Triangle,
    Heart,
    CircleComponent,
  },
  mounted() {
    setTimeout(this.firstTransform, 0);
    setTimeout(this.secondTransform, 150);
    setTimeout(this.thirdTransform, 500);
    setTimeout(this.fourthTransform, 750);
  },
  methods: {
    firstTransform() {
      const {
        firstSqStar1,
        firstSquare1,
        firstStar1,
        firstTriangle1,
        firstSqStar2,
        firstCircle1,
      } = this.$refs;
      moveAway(firstSqStar1.$el, 0.7, 4);
      moveAway(firstSquare1.$el, 0.7, 6);
      moveAway(firstStar1.$el, 1.2, 6);
      moveAway(firstTriangle1.$el, 0.7, 7);
      moveAway(firstSqStar2.$el, 0.7, 12, true, true);
      moveAway(firstCircle1.$el, 0.7, 4, true, true);
    },
    secondTransform() {
      const { secondStar, secondHeart, secondCircle } = this.$refs;
      moveAway(secondStar.$el, 1.2, 2);
      moveAway(secondHeart.$el, 1.2, 0.6, true, true, -1);
      moveAway(secondCircle.$el, 1.2, 3, true, true);
    },
    thirdTransform() {
      const { thirdSqStar1, thirdHeart, thirdSqStar2 } = this.$refs;
      moveAway(thirdSqStar1.$el, 1.2, 4);
      moveAway(thirdHeart.$el, 1.2, 1);
      moveAway(thirdSqStar2.$el, 1.2, 0.6, true, true);
    },
    fourthTransform() {
      const { fourthSquare, fourthTriangle } = this.$refs;
      moveAway(fourthSquare.$el, 1.2, 2.5);
      moveAway(fourthTriangle.$el, 1.2, 2.5);
    },
  },
};
</script>

<style scope>
.main-view {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
}
.candy {
  height: 200px;
  animation-name: zoom-in;
  animation-duration: 2.5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  /* animation-iteration-count: infinite; */
}

.center {
  position: absolute;
  width: 2px;
  height: 2px;
  background: red;
  left: 50%;
  top: 50%;
}

.elem {
  position: absolute;
  transform: scale(0.1);
  /* z-index: 3; */
  transition: transform 2.5s, opacity 0.3s 1.5s;
}

.fourth-square {
  left: 55%;
  top: 35%;
  border-width: 2.5px;
}

.fourth-triangle {
  left: 70%;
  top: 38%;
}
.fourth-triangle path {
  stroke-width: 2.3px;
}

.third-sq-star-1 {
  left: 35%;
  top: 55%;
}

.third-heart {
  left: 40%;
  top: 65%;
}

.third-sq-star-2 {
  left: 53%;
  top: 65%;
}

.second-star {
  left: 55%;
  top: 39%;
  /* transform: scale(1.2); */
}

.second-heart {
  left: 48%;
  top: 36%;
  /* transform: scale(1.2); */
}

.second-circle {
  left: 35%;
  top: 35%;
  /* transform: scale(1.2); */
}

.square-1 {
  left: 68%;
  top: 37%;
  /* transform: scale(0.7); */
}

.star-1 {
  left: 78%;
  top: 44%;
  /* transform: scale(1.2); */
}

.triangle-1 {
  left: 73%;
  top: 44%;
  /* transform: scale(0.7); */
}

.square-star-1 {
  left: 65%;
  top: 40%;
  /* transform: scale(0.7); */
}

.square-star-2 {
  left: 76%;
  top: 55%;
  /* transform: scale(0.7); */
}

.circle-1 {
  left: 68%;
  top: 60%;
  /* transform: scale(0.7); */
}

.sparkle-1 {
  animation-delay: 0.2s;
}

.sparkle-2 {
  animation-delay: 0.4s;
}

.sparkle-3 {
  animation-delay: 0.8s;
}

.sparkle-1,
.sparkle-2,
.sparkle-3 {
  transform: scale(0);
  opacity: 0;
  animation-name: sparkle;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  /* animation-iteration-count: infinite; */
}

.ripple {
  box-sizing: border-box;
  position: absolute;
  transform: scale(0);
  border-width: 8px !important;
  animation-name: ripple;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.r-1 {
  left: 0;
  top: 27%;
}
.r-2 {
  left: 43%;
  top: 84%;
  animation-delay: 0.15s;
}
.r-3 {
  left: 84%;
  top: 33%;
  animation-delay: 0.3s;
}
.r-4 {
  left: 78%;
  bottom: 27%;
  animation-delay: 0.45s;
}

.r-5 {
  left: 13%;
  bottom: 20%;
  animation-delay: 0.6s;
}

.r-6 {
  left: 3%;
  bottom: 33%;
  animation-delay: 0.75s;
}
.r-7 {
  right: 36%;
  bottom: 19%;
  animation-delay: 0.9s;
}
.r-8 {
  left: 0;
  top: 16%;
  animation-delay: 1.5s;
}
.r-9 {
  left: 22%;
  top: 29%;
  animation-delay: 1.2s;
}
.r-10 {
  right: 20%;
  top: 17%;
  animation-delay: 1.35s;
}
.r-11 {
  left: 17%;
  bottom: 14%;
  animation-delay: 1.5s;
}
.r-12 {
  right: 3%;
  bottom: 41%;
  animation-delay: 1.65s;
}
.r-13 {
  right: 4%;
  bottom: 22%;
  animation-delay: 1.8s;
}

@keyframes sparkle {
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: scale(0.5) rotate(45deg);
    opacity: 0;
  }
}

@keyframes zoom-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  25% {
    transform: scale(1.1);
    opacity: 1;
  }
  45% {
    transform: scale(1);
    opacity: 1;
  }
  65% {
    transform: scale(1.1);
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes ripple {
  0% {
    transform: scale(0);
    border-width: 4px;
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: scale(2.5);
    border-width: 0px;
    opacity: 0;
  }
}
</style>
