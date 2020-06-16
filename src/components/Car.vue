<template>
  <div class="animation-wrapper flex-center">
    <div class="car">
      <img
        src="https://res-global.pfkml36.cn:11443/statics/live/common/gift/10_Porsche_0.png"
      />
    </div>
  </div>
</template>

<style scoped>
/* duration is 2s */
.car {
  transform: translate(60%, -50%) scale(0.2) scaleX(-1);
  width: 160px;
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  animation-name: drive;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  perspective: 330px;
}
.car img {
  width: 100%;
}

.car::before {
  content: "";
  display: inline-block;
  position: absolute;
  width: 50%;
  height: 17px;
  transform: rotate(27deg) translate(-79px, 18px) rotateY(-12deg);
  border-radius: 50% 0 0 50%;
  background: radial-gradient(white, #8686fd, #ffd900, #ff9900);
  box-shadow: -44px 0px 9px 0 #ff6600;
  filter: blur(2px);
  opacity: 0.9;
  z-index: -1;
  animation-name: fire;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}

@keyframes drive {
  0% {
    transform: translate(60%, -50%) scale(0.2) scaleX(-1);
  }
  50% {
    transform: translate(-60%, 0%) scale(1) scaleX(-1);
  }
  51% {
    transform: translate(-60%, 0%) scale(1);
  }
  100% {
    transform: translate(30%, 30%) scale(1.4);
  }
}
@media only screen and (min-width: 400px) {
  .car {
    transform: translate(200px, -50%) scale(0.2) scaleX(-1);
  }
  @keyframes drive {
    0% {
      transform: translate(200px, -50%) scale(0.2) scaleX(-1);
    }
    50% {
      transform: translate(-200px, 0%) scale(1) scaleX(-1);
    }
    51% {
      transform: translate(-200px, 0%) scale(1);
    }
    100% {
      transform: translate(100px, 30%) scale(1.4);
    }
  }
}

@keyframes fire {
  0% {
    transform: rotate(27deg) translate(-79px, 18px) rotateY(-12deg) scaleX(2);
  }
  100% {
    transform: rotate(27deg) translate(0, 18px) rotateY(-12deg) scaleX(0);
  }
}

.animation-wrapper {
  animation-name: none;
  animation-name: fade-in;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: 2;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0, 1.01, 0.11, 1.01);
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
