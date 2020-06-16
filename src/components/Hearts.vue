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
// time out is 6800

import HeartPic from "../assets/HeartPic";

export default {
  name: "Hearts",
  components: {
    HeartPic
  }
};
</script>

<style scoped>
.animation-wrapper {
  animation-name: none !important;
}
.h1 {
  top: 13%;
  right: 10%;
}

.h2 {
  top: 24%;
  left: 5%;
  animation-delay: 0.2s;
}
.h3 {
  top: 42%;
  right: 12%;
  animation-delay: 0.6s;
}
.h4 {
  bottom: 12%;
  left: 20%;
  animation-delay: 0.4s;
}
.h5 {
  top: 31%;
  left: 42%;
  animation-delay: 0.8s;
}
.h6 {
  bottom: -4%;
  right: 34%;
  animation-delay: 1s;
}
.h7 {
  bottom: -11%;
  left: 11%;
  animation-delay: 1.2s;
}
.h8 {
  bottom: -6%;
  right: 9%;
  animation-delay: 1.6s;
}

.h9 {
  top: 28%;
  right: 14%;
  animation-delay: 2s;
}
.h10 {
  top: 56%;
  left: -2%;
  animation-delay: 2.2s;
}
.h11 {
  bottom: -17%;
  left: 18%;
  animation-delay: 2.4s;
}
.h12 {
  bottom: -5%;
  right: 27%;
  animation-delay: 2.6s;
}
.h13 {
  top: 5%;
  right: 20%;
  animation-delay: 2.8s;
}
.h14 {
  top: 16%;
  left: 4%;
  animation-delay: 3s;
}
.h15 {
  top: 40%;
  left: 29%;
  animation-delay: 3.2s;
}
.h16 {
  bottom: 19%;
  right: -5%;
  animation-delay: 4s;
}
.h17 {
  bottom: 10%;
  left: 7%;
  animation-delay: 3.8s;
}
</style>
