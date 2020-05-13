<template>
  <div class="main-view">
    <div class="relative">
      <img class="candy" src="../assets/candy.png" />
      <Sparkle style="left:7%;top:-8%;" class="sparkle-1" />
      <Sparkle style="left:40%;top:7%;" class="sparkle-2" />
      <Sparkle style="left:16%;top:43%;" class="sparkle-3" />

      <Square class="elem" />
      <Star class="elem" />
      <SquareStar class="elem" />
    </div>
  </div>
</template>
<script>
import Sparkle from "../assets/Sparkle";
import Square from "../assets/Square";
import SquareStar from "../assets/SquareStar";
import Star from "../assets/Star";

export default {
  name: "Candy",
  components: {
    Sparkle,
    Square,
    Star,
    SquareStar,
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

.elem {
  left: 0;
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
