<template>
  <div class="animation-wrapper flex-column">
    <img
      class="moon"
      src="https://res-global.pfkml36.cn:11443/statics/live/common/gift/9_Ramadan_3.png"
    />
    <img
      class="ramadan"
      src="https://res-global.pfkml36.cn:11443/statics/live/common/gift/9_Ramadan_2.png"
    />
  </div>
</template>

<style scoped>
.animation-wrapper {
  animation-duration: 1.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.moon {
  width: 50vmin;
  animation-name: slide-up;
}
.ramadan {
  width: 60vmin;
  align-self: center;
  animation-name: slide-down;
}

.moon,
.ramadan {
  margin: 15px;

  animation-duration: 3s;
  animation-fill-mode: forwards;
}

@keyframes slide-up {
  0% {
    transform: translateY(100px);
  }
  20% {
    transform: translateY(-5px);
    animation-timing-function: ease-in-out;
  }
  40% {
    transform: translateY(3px);
    animation-timing-function: ease-in-out;
  }
  60% {
    transform: translateY(-3px);
    animation-timing-function: ease-in-out;
  }
  80% {
    transform: translateY(2px);
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes slide-down {
  0% {
    transform: translateY(-100px);
  }
  20% {
    transform: translateY(5px);
    animation-timing-function: ease-in-out;
  }
  40% {
    transform: translateY(-3px);
    animation-timing-function: ease-in-out;
  }
  60% {
    transform: translateY(3px);
    animation-timing-function: ease-in-out;
  }
  80% {
    transform: translateY(-2px);
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
