<template>
  <div class="animation-wrapper">
    <HeartPic class="medium h1" />
    <HeartPic class="medium h2" />
    <HeartPic class="medium h3" />
    <HeartPic spark class="big h4" />
    <HeartPic class="small h5" />
    <HeartPic class="small h6" />
    <HeartPic class="medium h7" />
    <HeartPic class="small h8" />
    <!-- second -->
    <HeartPic class="small h9" />
    <HeartPic class="small h10" />
    <HeartPic class="small h11" />
    <HeartPic class="small h12" />

    <HeartPic class="medium h13" />
    <HeartPic class="small h14" />
    <HeartPic spark class="big h15" />
    <HeartPic class="medium h16" />
    <HeartPic class="medium h17" />
  </div>
</template>

<script>
import HeartPic from "../assets/HeartPic";

export default {
  name: "Hearts",
  components: {
    HeartPic,
  },
};
</script>

<style scoped>
.h1 {
  top: 13vh;
  right: 10vw;
}

.h2 {
  top: 24vh;
  left: 5vw;
  animation-delay: 0.2s;
}
.h3 {
  top: 42vh;
  right: 12vw;
  animation-delay: 0.6s;
}
.h4 {
  bottom: 12vh;
  left: 20vw;
  animation-delay: 0.4s;
}
.h5 {
  top: 31vh;
  left: 42vw;
  animation-delay: 0.8s;
}
.h6 {
  bottom: -4vh;
  right: 34vw;
  animation-delay: 1s;
}
.h7 {
  bottom: -11vh;
  left: 11vw;
  animation-delay: 1.2s;
}
.h8 {
  bottom: -6vh;
  right: 9vw;
  animation-delay: 1.6s;
}

.h9 {
  top: 28vh;
  right: 14vw;
  animation-delay: 2s;
}
.h10 {
  top: 56vh;
  left: -2vw;
  animation-delay: 2.2s;
}
.h11 {
  bottom: -17vh;
  left: 18vw;
  animation-delay: 2.4s;
}
.h12 {
  bottom: -5vh;
  right: 27vw;
  animation-delay: 2.6s;
}
.h13 {
  top: 5vh;
  right: 20vw;
  animation-delay: 2.8s;
}
.h14 {
  top: 16vh;
  left: 4vw;
  animation-delay: 3s;
}
.h15 {
  top: 40vh;
  left: 29vw;
  animation-delay: 3.2s;
}
.h16 {
  bottom: 19vh;
  right: -5vw;
  animation-delay: 4s;
}
.h17 {
  bottom: 10vh;
  left: 7vw;
  animation-delay: 3.8s;
}
</style>
