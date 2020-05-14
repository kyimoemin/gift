<template>
  <div class="main-view">
    <div ref="wrapper" class="relative b-1-w ">
      <img class="candy" src="../assets/candy.png" />
      <Sparkle style="left:7%;top:-8%;" class="sparkle-1" />
      <Sparkle style="left:40%;top:7%;" class="sparkle-2" />
      <Sparkle style="left:16%;top:43%;" class="sparkle-3" />

      <SquareStar ref="sqStar1" color="#83b640" class="elem square-star-1" />
      <Square ref="square1" color="#83b640" class="elem square-1" />
      <Star ref="star1" color="#ff004e" class="elem star-1" />
      <Triangle ref="triangle1" color="#f79e20" class="elem triangle-1" />
      <SquareStar ref="sqStar2" color="#8d2fd5" class="elem square-star-2" />
      <CircleComponent ref="circle1" color="#ff004e" class="elem circle-1" />
      <div class="center" />
    </div>
  </div>
</template>
<script>
import Sparkle from "../assets/Sparkle";
import Square from "../assets/Square";
import SquareStar from "../assets/SquareStar";
import Star from "../assets/Star";
// import Heart from "../assets/Heart";
import Triangle from "../assets/Triangle";
import CircleComponent from "../assets/CircleComponent";
import { runAsync, moveAway } from "../util";

export default {
  name: "Candy",
  components: {
    Sparkle,
    Square,
    Star,
    SquareStar,
    Triangle,
    CircleComponent,
  },
  mounted() {
    runAsync(this.doTransform);
  },
  methods: {
    doTransform() {
      const {
        sqStar1,
        square1,
        star1,
        triangle1,
        sqStar2,
        circle1,
      } = this.$refs;
      moveAway(sqStar1.$el, 0.7, 4);
      moveAway(square1.$el, 0.7, 6);
      moveAway(star1.$el, 1.2, 6);
      moveAway(triangle1.$el, 0.7, 7);
      moveAway(sqStar2.$el, 0.7, 12, true, true);
      moveAway(circle1.$el, 0.7, 4, true, true);
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
  animation-duration: 2s;
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
  /* transform: scale(0.1); */
  z-index: 3;
  transition: transform 3s, opacity 1s 0.5s;
}

.square-1 {
  left: 68%;
  top: 37%;
  transform: scale(0.7);
}

.star-1 {
  left: 78%;
  top: 44%;
  transform: scale(1.2);
}

.triangle-1 {
  left: 73%;
  top: 44%;
  transform: scale(0.7);
}

.square-star-1 {
  left: 65%;
  top: 40%;
  transform: scale(0.7);
}

.square-star-2 {
  left: 76%;
  top: 55%;
  transform: scale(0.7);
}

.circle-1 {
  left: 68%;
  top: 60%;
  transform: scale(0.7);
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
  animation-name: sparkle;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  /* animation-iteration-count: infinite; */
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
</style>
