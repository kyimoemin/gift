<template>
  <div class="animation-wrapper">
    <div class="car">
      <img
        src="https://res-global.1315cdn.com:11443/statics/live/common/gift/10_Porsche_0.png"
      />
    </div>
  </div>
</template>

<style scoped>
/* duration is 2s */
.car {
  transform: scaleX(-1);
  width: 160px;
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  right: -160px;
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
  background: radial-gradient(white, #8686fd, #ff4700, #ff4700);
  box-shadow: -44px 0px 9px 0 red;
  filter: blur(2px);
  opacity: 0.9;
  z-index: -1;
  animation-name: fire;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}

@keyframes drive {
  0% {
    transform: scale(0.2) translate(0, 0) scaleX(-1);
  }
  50% {
    transform: scale(1) translate(-120vw, 40vh) scaleX(-1);
  }
  51% {
    transform: scale(1) translate(-120vw, 39vh);
  }
  100% {
    transform: scale(1.4) translate(-45vw, 40vh);
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
